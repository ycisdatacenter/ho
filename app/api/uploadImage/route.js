import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import pool from "@/lib/db"; // ✅ Use the shared connection pool

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
    }

    // Read the file data
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${Date.now()}-${file.name}`;
    const uploadPath = path.join(process.cwd(), "public/uploads", fileName);

    // Save file to /public/uploads directory
    await writeFile(uploadPath, buffer);

    // Save file path to database
    const filePath = `/uploads/${fileName}`;

    await pool.execute("INSERT INTO slider (file_path) VALUES (?)", [filePath]);

    return NextResponse.json({ message: "Image uploaded successfully", filePath });
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json({ message: "Error uploading image" }, { status: 500 });
  }
}
