import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { IncomingForm } from "formidable";
import pool from "@/lib/db"; // Use the shared pool instead of direct connection

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

// Helper function to process file uploads
async function parseFormData(req) {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm({
      uploadDir,
      keepExtensions: true,
      multiples: false,
    });

    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

// Handle POST request for adding notices
export async function POST(req) {
  try {
    const formData = await req.formData();
    const title = formData.get("title");
    const date = formData.get("date");
    const file = formData.get("file");

    if (!title || !date || !file) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Save file to /public/uploads/
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
    const filePath = path.join(uploadDir, fileName);
    fs.writeFileSync(filePath, fileBuffer);

    // Get connection from pool instead of creating a new connection
    const connection = await pool.getConnection();

    // Insert into `downloads` table
    await connection.execute(
      "INSERT INTO downloads (title, date, file_path) VALUES (?, ?, ?)",
      [title, date, `/uploads/${fileName}`]
    );

    // Release the connection back to the pool
    connection.release();

    return NextResponse.json(
      { message: "Document added successfully!", filePath: `/uploads/${fileName}` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error processing request", error: error.message },
      { status: 500 }
    );
  }
}
