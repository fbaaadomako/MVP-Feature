import React, { useState, useEffect } from 'react';

//declare UserView function that accepts a prop call "addFormArray"
function UserView({ addFormArray, changeView }) {
//intialize the formData state variable with an empty string for each field 
  const [formData, setFormData] = useState({
    fullName: "",
    employeeId: "",
    country: "",
    passport: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    emailAddress: "",
    maritalStatus: "",
    startDate: "",
    epfNumber: "",
    department: "",
    SOCSO: "",
    url: "",
  });
  //represents list of employees fetched from the server 
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
    //empty array to ensure the effect runs only once everytime it loads
  }, []);

  const getEmployees = async () => {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch("/api/employees", options);
      //if response is 200, extracts the employee data from the response and updates the employees state using setEmployees
      if (response.status === 200) {
        const employeesData = await response.json();
        setEmployees(employeesData);
      } else {
        console.log("Failed to fetch employees.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const { employeeId, fullName, address, country, passport, emailAddress, birthDate, phoneNumber, maritalStatus, department, epfNumber, SOCSO, startDate } = formData;
  
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
        url: formData.url,
      }),
    };
  
    fetch("/api/employees", options)
      .then((response) => {
        if (response.status === 200) {
          setEmployees([...employees, {
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
            url: formData.url,
          }]);
          addFormArray([...employees, {
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
            url: formData.url,
          }])
        
        }
      })
      .catch((error) => {
          console.log(error)
      });
    // if
    //   ({
    //     fullName: "",
    //     employeeId: "",
    //     country: "",
    //     phoneNumber: "",
    //     birthDate: "",
    //     emailAddress: "",
    //     startDate: "",
    //    department: "",
    //   }) {
    //   window.alert("Please enter all fields")
    // } else {
    changeView(true)
    // }

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
        <div className="form-container">
          <h2 className="mt-4">New Employee Details</h2>
            <hr className="mt-4" />
            <h5>Demographic Information:</h5>
            <hr className="mb-4" />

            <div className="mt-3">
              <div className="row">
              <div className="col-md-4">
            <label className="label font-weight-bold">Employee ID:*</label>
            <input
              className="input"
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleInputChange}
            />
          </div>
                <div className="col-md-4">
            <label>Full Name:*</label>
            <input
              className="input"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
                  />
                </div> 
                <div className="col-md-4">
                <label>Birth Date:*</label>
            <input
              className="input"
              type="date"
              placeholder="mm/dd/yyyy"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
            /></div>
              </div>
              
            <label>Address:</label>
            <input
              className="input"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          {/* </div> */}
              <div className="row">
                <div className="col-md-6">
            <label>Country:*</label>
            <input
              className="input"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            />
                </div>
                <div className="col-md-6">
            <label>Passport Number:</label>
            <input
              className="input"
              type="text"
              name="passport"
              value={formData.passport}
              onChange={handleInputChange}
            />
          </div>
        </div>
              <div className="row">
                <div className="col-md-6">
            <label>Phone Number:*</label>
            <input
              className="input"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            /> </div>
              <div className="col-md-6">
            <label>Email Address:*</label>
            <input
              className="input"
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
                  />
                </div>
                </div>
         
        <hr className="mt-4" />
            <h5>Work Information:</h5>
              <hr className="md-4" />
              
              <div className="row">
                <div className="col-md-4">
            <label>Start Date:*</label>
            <input
              className="input"
              type="date"
              placeholder="mm/dd/yyyy"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
            /></div>
                 <div className="col-md-4">
            <label>EPF Number:</label>
            <input
              className="input"
              type="text"
              name="epfNumber"
              value={formData.epfNumber}
              onChange={handleInputChange}
            />
         </div>
          <div className="col-md-4">
            <label>SOCSO:</label>
            <input
              className="input"
              type="text"
              name="SOCSO"
              value={formData.SOCSO}
              onChange={handleInputChange}
                  />
                   </div>
              </div>
              <div className="row">
                <div className="col-md-6">
               <label>Department:*</label>
            <input
              className="input"
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
                  />
                  </div>
          <div className="col-md-6">
            <label>Please share URL copy of your passport photo:</label>
            <input
              className="input"
              type="text"
              name="url"
              value={formData.url}
              onChange={handleInputChange}
                  />
                  </div>
          </div>
        </div>
        <hr className="mt-3" />
          <button type="submit" className="btn btn-dark">Save</button>
            </div>
          </div>
      </form>
    </div>
  );
};

export default UserView;