const sql = require("mssql");

// set query to create database on script run
const dbName = "bdaydb2";
const createDB = "CREATE DATABASE " + dbName;

// db credentials, to be managed by env vars later
const dbconfig = {
  server: "localhost",
  database: dbName,
  user: "sa",
  password: "Camilita8004!",
  port: 1433
};

async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(dbconfig);
        const result = await sql.query(createDB, (err, result) => {
          console.log(result);
        });
        console.dir(result)
    } catch (err) {
        console.log("there was a problem");
    }
}