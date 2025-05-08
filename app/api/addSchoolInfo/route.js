import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      school_id,
      principalName,
      vicePrincipalName,
      contact,
      email,
      address,
      motto,
      established,
      affiliation,
      studentCount, // <-- updated here
      facilities,
      achievements,
    } = body;

    if (!school_id || school_id === 'undefined' || school_id === 'null') {
      return NextResponse.json({ error: 'Invalid school ID. Please log in again.' }, { status: 400 });
    }

    const values = [
      school_id,
      principalName || null,
      vicePrincipalName || null,
      contact || null,
      email || null,
      address || null,
      motto || null,
      established || null,
      affiliation || null,
      studentCount || null, // <-- use camelCase from body
      facilities || null,
      achievements || null,
    ];

    const query = `
      INSERT INTO school_info (
        school_id, principal_name, vice_principal_name, contact, email,
        address, motto, established, affiliation, student_count, facilities, achievements
      ) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await pool.execute(query, values);

    if (result.affectedRows > 0) {
      return NextResponse.json({ message: 'School information added successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Failed to add school information' }, { status: 500 });
    }
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
