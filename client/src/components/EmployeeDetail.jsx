import React, { useState, useEffect, Component } from "react";
import close from "../assets/close.png";

function EmployeeDetail({ employee, closeDetail, openDetail, openEmployee }) {
  // const [employee, setEmployee] = useState([])
  const [editForm, setEditForm] = useState({
    fullName: "",
    employeeId: "",
    country: "",
    // passport: "",
    // address: "",
    // phoneNumber: "",
    // birthDate: "",
    // emailAddress: "",
    // maritalStatus: "",
    // startDate: "",
    // epfNumber: "",
    // department: "",
    // SOCSO: "",
    // url: "",
  });

  // const handleEdit = (event) => {
  // event.preventDefault();
  //   const { employeeId, fullName, address, country,
  //     // passport, emailAddress, birthDate, phoneNumber, maritalStatus, department, epfNumber, SOCSO, startDate
  //   } = editForm;

  //   const options = {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       // employeeId,
  //       fullName,
  //       address,
  //       country,
  //       // passport,
  //       // emailAddress,
  //       // birthDate,
  //       // phoneNumber,
  //       // maritalStatus,
  //       // department,
  //       // epfNumber,
  //       // SOCSO,
  //       // startDate,
  //       // url: formData.url,
  //     }),
  //   };
  //   fetch("/api/employees", options)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         setEmployees([...employees, {
  //           employeeId,
  //           fullName,
  //           address,
  //           country,
  //           // passport,
  //           // emailAddress,
  //           // birthDate,
  //           // phoneNumber,
  //           // maritalStatus,
  //           // department,
  //           // epfNumber,
  //           // SOCSO,
  //           // startDate,
  //           // url: formData.url,
  //         }]);
  //         addFormArray([...employees, {
  //           employeeId,
  //           fullName,
  //           address,
  //           country,
  //           // passport,
  //           // emailAddress,
  //           // birthDate,
  //           // phoneNumber,
  //           // maritalStatus,
  //           // department,
  //           // epfNumber,
  //           // SOCSO,
  //           // startDate,
  //           // url: formData.url,
  //         }])

  //       }
  //     })
  //     .catch((error) => {
  //         console.log(error)
  //     });
  // };

  const formattedStartDate = new Date(employee.startDate).toLocaleDateString(
    "en-US"
  );
  const formattedBirthDate = new Date(employee.birthDate).toLocaleDateString(
    "en-US"
  );

  return (
    <div>
      <div className="detail-container">
        <div className="container-inner">
          <img
            src={close}
            title="Close Window"
            className="icon position-absolute top-0 end-0 m-2"
            onClick={() => closeDetail(event)}
          />
          <div className="row">
            <div className="col-5">
              <img
                src={
                  employee.url
                    ? employee.url
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGzFXWLmEJOIJINzoqCxDsQ5UvK2CSq7KRsT0K3fX6qlSxfFPy2Yf1OI48nFWtECrJbM&usqp=CAU"
                }
                alt="No Passport Photo"
                className="card-image"
              />
              <h2 className="ml-4 mt-2">{employee.fullName}</h2>
              <hr className="details" />
              <br />
              <h5 className="d-inline mb-2">Employee ID:</h5>{" "}
              <p className="d-inline mb-2">{employee.employeeId}</p>
              <br />
              <h5 className="d-inline mb-2">Department:</h5>
              <p className="d-inline mb-2"> {employee.department}</p>
              <br />
              <br />
              <h5 className="d-inline mb-2">Email Address:</h5>
              <p> {employee.emailAddress}</p>
            </div>
            <div class="col-7">
              <h5 className="d-inline mb-2">Birth Date:</h5>
              <p className="d-inline mb-2"> {formattedBirthDate}</p>
              <br />
              <br />
              <h5 className="d-inline mb-2">Address:</h5>
              <p className="d-inline mb-2"> {employee.address}</p>
              <br />
              <h5 className="d-inline mb-2">Country:</h5>{" "}
              <p className="d-inline mb-2">{employee.country}</p>
              <br />
              <h5 className="d-inline mb-2">Phone Number:</h5>
              <p className="d-inline mb-2"> {employee.phoneNumber}</p>
              <br />
              <br />
              <h5 className="d-inline mb-2">Passport Number:</h5>
              <p className="d-inline mb-2"> {employee.passport}</p>
              <br />
              <br />
              <h5 className="d-inline mb-2">Epf Number:</h5>
              <p className="d-inline mb-2"> {employee.epfNumber}</p>
              <br />
              <br />
              <h5 className="d-inline mb-2">SOCSO number: </h5>
              <p className="d-inline mb-2">{employee.SOCSO}</p>
              <br />
              <br />
              <h5 className="d-inline mb-2">Employee Start Date:</h5>
              <p className="d-inline mb-2"> {formattedStartDate}</p>
            </div>
          </div>
          <button
            className="btn btn-sm btn-dark position-absolute bottom-0 end-0 m-2"
            title="Edit Record"
          >
            Edit
          </button>
        </div>
      </div>

      {/* <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="form-container">
            <div className="mt-3">
              <div className="row">
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
                  />
                </div>
              </div>

              <label>Address:</label>
              <input
                className="input"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
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
                  />{" "}
                </div>
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
                  />
                </div>
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

            <button type="submit" className="btn btn-dark mt-3">
              Save
            </button>
          </div>
        </div>
      </form> */}
    </div>
  );
}

export default EmployeeDetail;
