import React, { useState, useEffect } from 'react';
import AdminList from "./AdminList";
import AdminGrid from "./AdminGrid";

import EmployeeDetail from "./EmployeeDetail";

function AdminView() {
  const [view, setView] = useState([]);
  const [query, setQuery] = useState("");
  const [employees, setEmployees] = useState([]);
  const [department, setDepartment] = useState("");
  // const [detail, setDetail] = useState([])
  const [openDetail, setOpenDetail] = useState("");


  useEffect(() => { //getting employees every time page is loaded
    getEmployees();
  }, []);

  //Fetch all employees
  const getEmployees = async () => {
    let options = {
      method: "GET",
    };
    try {
      const response = await fetch("/api/employees", options);
      const newEmployees = await response.json();
      setEmployees(newEmployees);
    } catch (error) {
      console.log(error);
    }
  };
  
  //Delete employee from listview
  const deleteEmployee = (id) => {
    fetch(`http://localhost:4000/api/employees/${id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(employees => setEmployees(employees))
      .catch(error => {
        console.log(error);
      });
  };

  //Toggle between Grid and List Views
  const toggleView = React.useCallback(() => {
    setView(!view);
  }, [view, setView]);

//Open detailed view
  // const employeeDetail = () => {
  //   employees.filter((employee) => setOpenDetail(employee.employeeId) )
  
  // };

  const employeeDetail = (event, id) => {
    console.log(id)
    // event.target
    console.log(event.target)
    // employees.filter((employee) =>
    //   (employee.employeeId === id) ? 
    //   setOpenDetail(true) : "cannot open")
    setOpenDetail(id)
  };
   

  return (
    <div>
      <div className="admin-view-container">
        <div className="dept-container">
       
        <h3>Departments</h3>
       <ul>
        <li onClick={() => setDepartment("Marketing")}>Marketing</li>
        <hr />
        <li onClick={() => setDepartment("Automation")}>Automation</li>
        <hr />
       <li onClick={() => setDepartment("IT")}>IT</li>
       <hr />
        <li onClick={() => setDepartment("Finance")}>Finance</li>
        <hr />
        <li  onClick={() => setDepartment("Investment")}>Investment</li>
        <hr />
        <li  onClick={() => setDepartment("Design")}>Design</li>
          <hr />
        <li  onClick={() => setDepartment("")} >All Departments</li >
        </ul>
         
          </div>
   
        <div className="cards-container">
          <h2>Company Employees</h2>
          <p>Search by employee's name: </p>
          <input className="search-input" placeholder="search here"  type="text" value={query}
            onChange={(e) => setQuery(e.target.value)} />
          
          {view ?
            
        <AdminList employees={employees
          .filter((employee) => employee.fullName.toLowerCase().includes(query))
          .filter((employee) => employee.department.includes(department))}
          deleteEmployee={deleteEmployee}
          employeeDetail={employeeDetail}
              openDetail={openDetail}
              toggleView={toggleView}
        />
        :
        <AdminGrid employees={employees
          .filter((employee) => employee.fullName.toLowerCase().includes(query))
          .filter((employee) => employee.department.includes(department))}
          deleteEmployee={deleteEmployee}
            employeeDetail={employeeDetail}
            toggleView={toggleView}
          // openDetail={openDetail}
              />}
          </div></div></div>

      // </div>
    );
  }

export default AdminView;