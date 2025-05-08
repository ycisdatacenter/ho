import pool from "@/lib/db"; // Importing the pool from lib/db.js
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Ensure upload directory exists
const uploadDir = path.join(process.cwd(), "public/uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Disable default body parsing for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

// Handle POST request for adding notices
export async function POST(req) {
  try {
    const formData = await req.formData();
    const title = formData.get("title");
    const date = formData.get("date");
    const file = formData.get("file");

    if (!title || !date || !file) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // Save file to /public/uploads/
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadDir, fileName);
    fs.writeFileSync(filePath, fileBuffer);

    // Get connection from pool
    const connection = await pool.getConnection(); // Using the connection pool

    // Insert into 'notices' table
    await connection.execute(
      "INSERT INTO notices (title, date, file_path) VALUES (?, ?, ?)",
      [title, date, `/uploads/${fileName}`]
    );

    connection.release(); // Release the connection back to the pool

    return NextResponse.json({ message: "Notice added successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ message: "Error processing request", error: error.message }, { status: 500 });
  }
}
