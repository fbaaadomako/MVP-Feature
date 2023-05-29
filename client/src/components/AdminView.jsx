import React, { useState, useEffect } from 'react';
import AdminList from "./AdminList";
import AdminGrid from "./AdminGrid";

function AdminView() {
  const [view, setView] = useState([]);
  const [query, setQuery] = useState("");
  const [employees, setEmployees] = useState([]);
  const [filteredDept, setFilteredDept] = useState([]);
  const [searchParam] = useState(employees, query)
  const [department, setDepartment] = useState("");
  // const departmentFilter = employees.filter(employee => employee.department === e.target.value)

useEffect(() => { //getting employees every time page is loaded
    getEmployees();
  }, []);

  const getEmployees = async () => {
    let options = {
      method: "GET",
    };
  
    try {
      const response = await fetch("/api/employees", options);
      const newEmployees = await response.json();
      setEmployees(newEmployees);
      setFilteredDept(newEmployees);
    } catch (error) {
      console.log(error);
    }
  };
  

  //Delete employee fromm listview
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


  const toggleView = React.useCallback(() => {
    setView(!view);
  }, [view, setView]);


  //Filter employees by department
  const filterByDepartment = (department) => {
         const filtered = employees.filter((employee) => {
          return employee.department === department
        });
        setFilteredDept(filtered);
      }
 
  //Search employees
      const search = (employeeNames) => {
        return employeeNames.filter((employee) => employee.fullName.toLowerCase().includes(query));
      }


    return (
      <div>
        <h1>Departments</h1>
        <div>
          <button onClick={() => filterByDepartment("IT")}>IT</button>
          <button onClick={() => getEmployees()} >All</button>
          <button onClick={() => filterByDepartment("Marketing")}>Marketing</button>
        </div>
        <input type="text" value={query}
          onChange={(e) => setQuery(e.target.value)} />
      
        <button onClick={toggleView} >Toggle!</button>
        {view ?
          <AdminList employees={employees}
            // data={sf()}
            employeeNames={search(employees)}
            // search={search} query={query}
            filteredDept={filteredDept}
          // filterByDepartment={filterByDepartment}
            
            // filterByDept={filterByDept}
          
            // department={department}
          />
          : <AdminGrid search={search} query={query} />}
      </div>
    );
  }


export default AdminView;