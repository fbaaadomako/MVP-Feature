import React, { useState, useEffect } from 'react';
import AdminList from "./AdminList";
import AdminGrid from "./AdminGrid";
import EmployeeDetail from "./EmployeeDetail";

function AdminView() {
  const [view, setView] = useState([]);
  const [query, setQuery] = useState("");
  const [employees, setEmployees] = useState([]);
  const [department, setDepartment] = useState("");
  const [detail, setDetail] = useState([])
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
  const employeeDetail = () => {
    employees.filter((employee) => setOpenDetail(employee.employeeId) )
   
  };
   

  return (
    <div>
      <div>
        <h1>Departments</h1>
        <button onClick={() => setDepartment("Marketing")}>Marketing</button>
        <button onClick={() => setDepartment("Automation")}>Automation</button>
        <button onClick={() => setDepartment("IT")}>IT</button>
        <button onClick={() => setDepartment("Finance")}>Finance</button>
        <button onClick={() => setDepartment("Investment")}>Investment</button>
        <button onClick={() => setDepartment("Design")}>Design</button>
        <button onClick={() => setDepartment("")} >All Departments</button>
        </div>
        <input type="text" value={query}
          onChange={(e) => setQuery(e.target.value)} />
      
        <button onClick={toggleView} >Toggle!</button>
        {view ?
        <AdminList employees={employees
          .filter((employee) => employee.fullName.toLowerCase().includes(query))
          .filter((employee) => employee.department.includes(department))}
          deleteEmployee={deleteEmployee}
          employeeDetail={employeeDetail}
          openDetail={openDetail}
        />
        :
        <AdminGrid employees={employees
          .filter((employee) => employee.fullName.toLowerCase().includes(query))
          .filter((employee) => employee.department.includes(department))}
          deleteEmployee={deleteEmployee}
          employeeDetail={employeeDetail}
          // openDetail={openDetail}
        />}

      </div>
    );
  }

export default AdminView;