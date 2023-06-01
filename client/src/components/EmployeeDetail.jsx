import React, { useState, useEffect, Component} from 'react';

function EmployeeDetail({ employee, closeDetail, openDetail, openEmployee }) {
  
  const formattedStartDate = new Date(employee.startDate).toLocaleDateString('en-US');
  const formattedBirthDate = new Date(employee.birthDate).toLocaleDateString('en-US'); 

  return (

    <div>
      <div className="popup">
        <div className="popup-inner">
          <p>Employee detail page was opened for {employee.employeeId}</p>
          
        
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
          <button className="close-btn" onClick={() => closeDetail(event) }>Close</button>
      </div>
      </div>
      </div>

  );
   

}

export default EmployeeDetail;