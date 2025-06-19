import { NextResponse } from "next/server";
import pool from "@/lib/db"; // Adjust if your DB connection is in another path

export async function GET() {
  try {
    const [rows] = await pool.execute("SELECT * FROM tenders ORDER BY date DESC");
    console.log("Fetched tenders:", rows); // For debugging
    return NextResponse.json({ tenders: rows });
  } catch (error) {
    console.error("Database fetch error:", error); // Log errors for clarity
    return NextResponse.json(
      { message: "Failed to fetch tenders", error: error.message },
      { status: 500 }
    );
  }
}
