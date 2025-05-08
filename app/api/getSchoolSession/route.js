import { ironSession } from "iron-session";
import pool from "@/lib/db"; // ✅ Use shared pool

const sessionOptions = {
  cookieName: "session",
  password: process.env.SESSION_SECRET || "complex_password_123",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export async function GET(req) {
  // This usage assumes you have a custom session handler. Normally you'd use a wrapper.
  const session = await ironSession({ req }, sessionOptions);
  const school_id = session.school_id;

  if (!school_id) {
    return Response.json({ success: false, message: "Not logged in" });
  }

  try {
    const [rows] = await pool.query("SELECT name FROM schools WHERE id = ?", [school_id]);

    if (rows.length === 0) {
      return Response.json({ success: false, message: "School not found" });
    }

    return Response.json({ success: true, school_name: rows[0].name });
  } catch (error) {
    console.error("Database Error:", error);
    return Response.json({ success: false, message: "Database query failed" }, { status: 500 });
  }
}
