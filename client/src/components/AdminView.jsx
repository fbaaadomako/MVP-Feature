import React, { useState, useEffect } from 'react';
import AdminList from "./AdminList";
import AdminGrid from "./AdminGrid";

function AdminView() {
  const [view, setView] = useState([]);
  const [query, setQuery] = useState("");

  const toggleView = React.useCallback(() => {
    setView(!view);
  }, [view, setView]);

  const search = (employees, query) => {
    if (!query) {
      return employees;
    }
    return employees.filter((employee) => employee.fullName.toLowerCase().includes(query));
  }
  
  // const employeeFilter = search(employees, query);

  return (
    <div>
      <input type="text"
      onChange={(e) => setQuery(e.target.value)} />
      <button onClick={toggleView} >Toggle!</button>
      {view ? <AdminList search={search} query={query} /> : <AdminGrid search={search} query={query} />}
    </div>
  );
}

export default AdminView;