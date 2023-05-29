import React, { useState, useEffect } from 'react';
import AdminView from "./AdminView";
import EmployeeDetail from "./EmployeeDetail";

function AdminList({ search, query, employees, employeeNames, filteredDept, filterByDepartment, department, data}) {
  // const employeeFilter = search(employees, query);
  // const filteredDept = search(employees, query);
  const [openDetail, setOpenDetail] = useState(false)
  // const departmentFilter = filterByDept();
  // employeeFilter = departmentFilter;


  // const [department, setDepartment] = useState('All', ...employees.filter(employee => employee.department))
  
  //MOVE employee states and fetch code to Adminview and pass down as props

  // useEffect(() => { //getting employees every time page is loaded
  //   getEmployees();
  // }, []);

  // const getEmployees = async () => {
  //   let options = {
  //     method: "GET",
  //   };
  
  //   try {
  //     const response = await fetch("/api/employees", options);
  //     const newEmployees = await response.json();
  //     setEmployees(newEmployees);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  

  // //Delete employee fromm listview
  // const deleteEmployee = (id) => {
  //   fetch(`http://localhost:4000/api/employees/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then(response => response.json())
  //     .then(employees => setEmployees(employees))
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  

  // const editEmployee = (id) => {
  //   console.log(editEmployee, id)
  //   fetch(`http://localhost:4000/api/employees/${id}`, {
  //     method: "PUT",
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({employees})
  //   })
  //     .then(response => response.json())
  //     .then(data => this.setState({ postId: data.id }))
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
  
  
//for FIlTER

  // const employeeDetail = (openDetail) => {
  //   setOpenDetail(openDetail);
   
  //   };  

  // if (employeeDetail === true) {
  //   return
  //   <Navigate to="/employees/{d"
  // }
  
  // const employeeDetail = (id) => {
  //   setOpenDetail(!openDetail);
  //   setEmployee(id)
  //   };  
   
  
  return (
    <div>
        
      <div className="container-fluid">
        <h3 className="text-dark mt-4 mb-4" style={{ fontFamily: 'sans-serif' }}>List of Ezform employees as a LIST</h3>
        <div className="row">
          {filteredDept // or employeeNames can be mapped here. Can't figure out how to join the two
            .map((employee) => {
            const formattedStartDate = new Date(employee.startDate).toLocaleDateString('en-US');
            const formattedBirthDate = new Date(employee.birthDate).toLocaleDateString('en-US');
          
            return (
              <div className="col-lg-2 col-md-4 col-sm-6 mb-4" key={employee.id}>
                <div className="card" key={employee.employeeId}>
                  <div className="card-image">
                    <img
                      src={employee.url ? employee.url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGzFXWLmEJOIJINzoqCxDsQ5UvK2CSq7KRsT0K3fX6qlSxfFPy2Yf1OI48nFWtECrJbM&usqp=CAU"}
                      alt="No Passport Photo"
                      className="card-image__img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">{employee.fullName}</h5>
                    <div className="text-left">
                      <p className="card-text">Employee ID: {employee.employeeId}</p>
                      <p className="card-text">Email Address: {employee.emailAddress}</p>
                      <p className="card-text">Birth Date: {formattedBirthDate}</p>
                      <p className="card-text">Phone Number: {employee.phoneNumber}</p>
                      <p className="card-text">Address: {employee.address}</p>
                      <p className="card-text">Country: {employee.country}</p>
                      <p className="card-text">Passport Number: {employee.passport}</p>
                      <p className="card-text">Marital Status: {employee.maritalStatus}</p>
                      <p className="card-text">Department: {employee.department}</p>
                      <p className="card-text">Epf Number: {employee.epfNumber}</p>
                      <p className="card-text">SOCSO number: {employee.SOCSO}</p>
                      <p className="card-text">Employee Start Date: {formattedStartDate}</p>
                    </div>
                  </div>
                  <button role="link" onClick={() => employeeDetail(true)}>Open</button>
                  {openDetail ? (<EmployeeDetail employee={employee} />) : null}
                  <button type="submit" className="peach-button" onClick={() => deleteEmployee(employee.employeeId)}>Delete</button>
                </div>
              </div>
            );
          })}
      </div>
      </div>
      </div>
  );
          
};

export default AdminList;