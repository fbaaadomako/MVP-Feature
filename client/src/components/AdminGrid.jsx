import gridimg from "../assets/apps.png"
import listimg from "../assets/table-list.png"

function AdminGrid({ employees, toggleView, deleteEmployee }) {

  return (
    <div>  
 
        <div className="toggle-link">
      <img className="toggle-icon" title="Change view" src={listimg} onClick={toggleView} />
      <img className="toggle-icon" title="Change view"  src={gridimg} />
        </div>
        
        <div className="row">
          {employees 
            .map((employee) => {
            const formattedStartDate = new Date(employee.startDate).toLocaleDateString('en-US');
            const formattedBirthDate = new Date(employee.birthDate).toLocaleDateString('en-US');
          
            return (
              <div className="col-md-6" key={employee.id}>
                <div className="card-g row" key={employee.employeeId}>
                  
                  <div className="col-sm-5">
                    <img
                      src={employee.url ? employee.url : 
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGzFXWLmEJOIJINzoqCxDsQ5UvK2CSq7KRsT0K3fX6qlSxfFPy2Yf1OI48nFWtECrJbM&usqp=CAU"}
                      alt="No Passport Photo"
                      className="card-image-g"
                    />
                    <div className="info">
                      <h6>{employee.fullName}</h6>
                      <p>ID#: {employee.employeeId}</p>
                      <p><h7>Department:</h7> {employee.department}</p>
                      <p><h7>Country:</h7> {employee.country}</p>
                    </div>
                  </div>
                  
                  <div className="card-body col-sm-7">
                
                      <p><h7>DOB:</h7> {formattedBirthDate}</p>
                      <p><h7>Phone:</h7> {employee.phoneNumber}</p>
                      <p><h7>Email:</h7> {employee.emailAddress}</p>
                      <p><h7>Address:</h7> {employee.address}</p>
                      <p><h7>Passport Number:</h7> {employee.passport}</p>
                      <p><h7>EPF Number:</h7>{employee.epfNumber}</p>
                      <p><h7>SOSCO:</h7>{employee.SOCSO}</p>
                      <p><h7>Start Date:</h7> {formattedStartDate}</p>
                  
                    <button type="submit" title="Delete Record"
                      className="btn btn-sm btn-dark position-absolute bottom-0 end-0 m-2"
                      onClick={() => deleteEmployee(employee.employeeId)}>Delete</button>
                  </div>  
                </div>
              </div>
            );
          })}
      </div>
    
    </div>
    
  );
}

export default AdminGrid;