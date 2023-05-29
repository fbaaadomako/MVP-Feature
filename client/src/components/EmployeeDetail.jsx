import React, { useState, useEffect } from 'react';

//receive formArray prop from UserView
function EmployeeDetail({ employee }) {

 //TO OPEN ON A NEW PAGE - Use routers or hide LISTVIEW when openDETAILS is true and show employeeDETAIL in its place
  return (
    <div> 
      <h3 className="text-dark mt-4 mb-4" style={{ fontFamily: 'sans-serif' }}>DETAIL PAGE WHEN EMP IS CLICKED {employee.name }</h3>
     
          
      

        {/* const formattedStartDate = new Date(employees.startDate).toLocaleDateString('en-US');
        const formattedBirthDate = new Date(employees.birthDate).toLocaleDateString('en-US'); */}

        <div className="card-body">
          <h5 className="card-title text-center">{employee.fullName}</h5>
          <div className="text-left">
            <p className="card-text">Employee ID: {employee.employeeId}</p>
            <p className="card-text">Email Address: {employee.emailAddress}</p>
            {/* <p className="card-text">Birth Date: {formattedBirthDate}</p> */}
            <p className="card-text">Phone Number: {employee.phoneNumber}</p>
            <p className="card-text">Address: {employee.address}</p>
            <p className="card-text">Country: {employee.country}</p>
            <p className="card-text">Passport Number: {employee.passport}</p>
            <p className="card-text">Marital Status: {employee.maritalStatus}</p>
            <p className="card-text">Department: {employee.department}</p>
            <p className="card-text">Epf Number: {employee.epfNumber}</p>
            <p className="card-text">SOCSO number: {employee.SOCSO}</p>
            {/* <p className="card-text">Employee Start Date: {formattedStartDate}</p> */}
          </div>
        </div>
     
    </div>
  );
}

export default EmployeeDetail;