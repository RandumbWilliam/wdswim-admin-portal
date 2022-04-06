import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "135.0.208.42",
    user: "node_js_connection",
    password: "98GZ5e$^tr%b&_X7",
    database: "WDSwimTest",
});

export default pool;
