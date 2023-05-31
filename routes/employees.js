var express = require("express");
var router = express.Router();
const db = require("../model/helper");

//localhost:4000/api
//test if API is working
router.get("/", (req, res, next) => {
  res.send("Welcome to the API");
});

/*
GET employees list
1. create personal_info & work_info table respectively
2. join both tables
3. view data via postman GET: localhost:4000/api/employees
*/
router.get("/", async (req, res, next) => {
  try {
    let results = await db(
      "SELECT p.employeeId, p.fullName, p.address, p.country, p.passport, p.emailAddress, p.birthDate, p.phoneNumber, p.maritalStatus, w.department, w.epfNumber, w.SOCSO, w.startDate, w.url FROM personal_info p JOIN work_info w ON p.employeeID = w.employeeId;"
    );
    // console.log("RESULTS: ", results);
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

/*
GET one employee by department
1. create personal_info & work_info table respectively
2. join both tables
3. employees are searchable by department
4. wrap quote around '${department}' because it is a string 
5. view data via postman GET: localhost:4000/api/employees?department='${department}'
*/
router.get("/employees", async (req, res, next) => {
  try {
    if (req.query.department) {
      let results = await db(
        `SELECT p.employeeId, p.fullName, p.address, p.country, p.passport, p.emailAddress, p.birthDate, p.phoneNumber, p.maritalStatus, w.department, w.epfNumber, w.SOCSO, w.startDate, w.url FROM personal_info p JOIN work_info w ON p.employeeID = w.employeeId WHERE w.department='${req.query.department}'`
      );
      //get the updated list of employee
      res.send(results.data);
    } else {
      let results = await db(
        "SELECT p.employeeId, p.fullName, p.address, p.country, p.passport, p.emailAddress, p.birthDate, p.phoneNumber, p.maritalStatus, w.department, w.epfNumber, w.SOCSO, w.startDate, w.url FROM personal_info p JOIN work_info w ON p.employeeID = w.employeeId;"
      );
      res.send(results.data);
    }
    // console.log("RESULTS: ", results)
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// GET: localhost:4000/api/employees/:id
router.get("/employees/:id", async (req, res, next) => {
  let { id } = req.params;
  // console.log(req.params)
  try {
    let results = await db(
      `SELECT p.employeeId, p.fullName, p.address, p.country, p.passport, p.emailAddress, p.birthDate, p.phoneNumber, p.maritalStatus, w.department, w.epfNumber, w.SOCSO, w.startDate, w.url FROM personal_info p JOIN work_info w ON p.employeeID = w.employeeId WHERE w.employeeId='${id}'`
    );
    //get the updated list of employee based on department
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

/*
INSERT a new employee into personal_info and work_info
1. create personal_info & work_info table respectively
2. join both tables
3. insert new employee data via postman POST: localhost:4000/api/employees
*/
router.post("/employees", async (req, res, next) => {
  const {
    employeeId,
    fullName,
    address,
    country,
    passport,
    emailAddress,
    birthDate,
    phoneNumber,
    maritalStatus,
    department,
    epfNumber,
    SOCSO,
    startDate,
    url,
  } = req.body;
  // console.log(req.body)
  try {
    //insert new employee. Id will be auto incremented
    await db(
      `INSERT INTO personal_info (employeeId, fullName, address, country, passport, emailAddress, birthDate, phoneNumber, maritalStatus) VALUES ('${employeeId}', '${fullName}', '${address}', '${country}', '${passport}', '${emailAddress}', '${birthDate}', '${phoneNumber}', '${maritalStatus}');`
    );
    //insert new employee. Id will be auto incremented
    await db(
      `INSERT INTO work_info(employeeId, department, epfNumber, socso, startDate, url) VALUES ('${employeeId}', '${department}', '${epfNumber}', '${SOCSO}', '${startDate}', '${url}');`
    );
    //get the updated list of students
    let results = await db(
      "SELECT p.employeeId, p.fullName, p.address, p.country, p.passport, p.emailAddress, p.birthDate, p.phoneNumber, p.maritalStatus, w.department, w.epfNumber, w.SOCSO, w.startDate, w.url FROM personal_info p JOIN work_info w ON p.employeeID = w.employeeId;"
    );
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// EDIT/UPDATE an employee
router.put("employees/:id", function (req, res, next) {
  console.log("Hello there");
  res.send("Hello world again");
  // let { id } = req.params.id;
  // console.log("ID", req.params.id);
  // const {
  //   employeeId,
  //   fullName,
  //   address,
  //   country,
  //   passport,
  //   emailAddress,
  //   birthDate,
  //   phoneNumber,
  //   maritalStatus,
  //   department,
  //   epfNumber,
  //   SOCSO,
  //   startDate,
  //   url,
  // } = req.body;
  // console.log("REQBODY", req.body);
  // try {
  // await db(
  //   `UPDATE personal_info SET fullName='${fullName}', address='${address}', country='${country}', passport='${passport}', emailAddress='${emailAddress}', birthDate='${birthDate}', phoneNumber='${phoneNumber}', maritalStatus='${maritalStatus}' WHERE employeeId ='${id}';`
  // );
  // await db(
  //   `UPDATE work_info SET department='${department}', epfNumber='${epfNumber}', socso='${SOCSO}', startDate='${startDate}', url='${url}') WHERE employeeId='${id}';`
  // );
  // let results = await db(
  //   "SELECT p.employeeId, p.fullName, p.address, p.country, p.passport, p.emailAddress, p.birthDate, p.phoneNumber, p.maritalStatus, w.department, w.epfNumber, w.SOCSO, w.startDate, w.url FROM personal_info p JOIN work_info w ON p.employeeID = w.employeeId;"
  // );
  // res.send(results.data[0]);

  // }
  // catch (err) {
  //   res.status(500).send({ error: err.message });
  // }
});

// DELETE an employee
//1. write syntax for DELETE FROM personal via mySQL and copy paste here
//2. view data via postman DELETE: localhost:4000/api/employees/:id
router.delete("/employees/", async function (req, res, next) {
  //let id = req.params.id
  const { id } = req.params;
  // console.log(req.params.id);
  try {
    //delete students with specified id from database
    await db(`DELETE FROM personal_info WHERE employeeId = ${id};`);
    //delete students with specified id from database
    await db(`DELETE FROM work_info WHERE employeeId = ${id};`);
    //get the updated list of students
    let results = await db(
      "SELECT p.employeeId, p.fullName, p.address, p.country, p.passport, p.emailAddress, p.birthDate, p.phoneNumber, p.maritalStatus, w.department, w.epfNumber, w.SOCSO, w.startDate, w.url FROM personal_info p JOIN work_info w ON p.employeeID = w.employeeId;"
    );
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: "Deletion failed" });
  }
});

module.exports = router;
