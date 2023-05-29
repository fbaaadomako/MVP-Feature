import React, { useState, useEffect } from 'react';
import AdminList from "./AdminList";
import AdminGrid from "./AdminGrid";

function AdminView() {
  const [view, setView] = useState([]);
  const [query, setQuery] = useState("");
  // const [department, setDepartment] = useState('All', ...employees.filter(employee => employee.department))
  // const departmentFilter = employees.filter(employee => employee.department === e.target.value)



  //TO SEARCH BY DEPARTMENT
  //state variable for department

  {/* employees.filter(employee => employee.department === variable for each department link) FILTER WILL NEED A CONDITION */ }
  {/* SEARCH FEATURE - can use filter to search by name === to search input that's already stored in a variable */ }
  {/* {employees.filter(employee => employee.department === "Marketing") */ }

  const toggleView = React.useCallback(() => {
    setView(!view);
  }, [view, setView]);

  //Search employees by name
  const search = (employees, query) => {
    if (!query) {
      return employees;
    }
    return employees.filter((employee) => employee.fullName.toLowerCase().includes(query));
  };

  //Filter employes by department
  const filterByDept = (e) => {
    console.log(e.target.value)
      if (e.target.value === 'All') {
        return employees;
        }
    //     return employees.filter(employee => employee.department === e.target.value)
    };


    return (
      <div>
        <h1>Departments</h1>
        <div>
          <button value="IT" onClick={filterByDept}>IT</button>
          <button value="All" onClick={filterByDept} >All</button>
        </div>
        <input type="text"
          onChange={(e) => setQuery(e.target.value)} />
      
        <button onClick={toggleView} >Toggle!</button>
        {view ?
          <AdminList search={search} query={query}
            filterByDept={filterByDept}  />
          : <AdminGrid search={search} query={query} />}
      </div>
    );
  }


export default AdminView;