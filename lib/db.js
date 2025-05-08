import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "rayat",
  waitForConnections: true,
  connectionLimit: 10, // Adjust based on load
  queueLimit: 0,
});

export default pool;
