import { NextResponse } from "next/server";
import pool from "@/lib/db"; // ✅ Import shared MySQL pool

// GET method to fetch notices
export async function GET() {
  try {
    const [rows] = await pool.execute(
      "SELECT id, title, date, file_path FROM notices ORDER BY date DESC"
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching notices:", error);
    return NextResponse.json({ message: "Database error" }, { status: 500 });
  }
}
