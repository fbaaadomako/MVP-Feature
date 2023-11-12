require("dotenv").config();
const mysql = require("mysql");
const fs = require("fs");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "employees",
  port: DB_PORT || "3306",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = fs.readFileSync(__dirname+"/init_db.sql").toString();
    // "DROP TABLE if exists personal_info; CREATE TABLE personal_info (employeeId INT NOT NULL, fullName VARCHAR(30) NOT NULL, address VARCHAR(200),country VARCHAR(15) NOT NULL, passport VARCHAR(20), emailAddress VARCHAR(25), birthDate date, phoneNumber bigint, maritalStatus VARCHAR(10), PRIMARY KEY (employeeId));"; +
    // "DROP TABLE if exists work_info; CREATE TABLE work_info (employeeId INT NOT NULL, department VARCHAR(30) NOT NULL, epfNumber VARCHAR(30), SOCSO VARCHAR(30), startDate date, url TEXT, PRIMARY KEY (employeeId));";  
  
    con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `employees` was successful!");

    console.log("Closing...");
  });

  con.end();
});
