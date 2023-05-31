import gridimg from "../assets/apps.png";
import listimg from "../assets/table-list.png";
import deleteimg from "../assets/delete.png";
import EmployeeDetail from "./EmployeeDetail";

function AdminList({ employees, toggleView, deleteEmployee, employeeDetail, openDetail}) {
  // const [openDetail, setOpenDetail] = useState("")
  

  return (
    <div>  
 
        <div className="toggle-link">
      <img className="toggle-icon" title="Change view" src={listimg}  />
     <img className="toggle-icon" title="Change view"  src={gridimg}   onClick={toggleView} />
       </div>
        
          {employees 
            .map((employee) => {
            const formattedStartDate = new Date(employee.startDate).toLocaleDateString('en-US');
            const formattedBirthDate = new Date(employee.birthDate).toLocaleDateString('en-US');
          
            return (
    <div className="row">
                <div className="card-l pt-0" key={employee.employeeId}>
        <div className="col-sm-1 ">
        <img src={employee.url ? employee.url : 
                        "https://shorturl.at/uFIZ1"}
                      alt="No Passport Photo"
                      className="card-image-l"
                    />
                </div>
                    <div className="col-sm-11 info-list pt-0">
                    <h6>{employee.fullName}</h6> <p className="d-inline">ID#: {employee.employeeId}</p>
                    <p><h7>Country:</h7> {employee.country}</p>
                    
                    
                <button className="position-absolute bottom-0 end-0 mb-2 mr-5" onClick={() => employeeDetail()}>Open {employee.employeeId}</button>
                {openDetail ? (<EmployeeDetail employee={employee} />) : null}
                    <img src={deleteimg} className="icon position-absolute bottom-0 end-0 m-2" onClick={() => deleteEmployee(employee.employeeId)} />
                    
                   {/* </button> */}
                         </div>
                </div>
                </div>
            );
          })}

    
    </div>
    
  );

  // return (
  //   <div>   
      
  //     <div className="toggle-link">
  //     <img className="toggle-icon" title="Change view" src={listimg}  />
  //     <img className="toggle-icon" title="Change view"  src={gridimg}   onClick={toggleView} />
  //       </div>
        
  //       <h3 className="text-dark mt-4 mb-4" style={{ fontFamily: 'sans-serif' }}>List of Ezform employees as a LIST</h3>
  //       <div className="row">
  //         {employees 
  //           .map((employee) => {
  //           const formattedStartDate = new Date(employee.startDate).toLocaleDateString('en-US');
  //           const formattedBirthDate = new Date(employee.birthDate).toLocaleDateString('en-US');
          
  //           return (
  //             <div className="col-lg-2 col-md-4 col-sm-6 mb-4" key={employee.id}>
  //               <div className="card" key={employee.employeeId}>
  //                 <div className="card-image">
  //                   <img
  //                     src={employee.url ? employee.url :
  //                       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGzFXWLmEJOIJINzoqCxDsQ5UvK2CSq7KRsT0K3fX6qlSxfFPy2Yf1OI48nFWtECrJbM&usqp=CAU"}
  //                     alt="No Passport Photo"
  //                     className="card-image__img"
  //                   />
  //                 </div>
  //                 <div className="card-body">
  //                   <h5 className="card-title text-center">{employee.fullName}</h5>
  //                   <div className="text-left">
  //                     <p className="card-text">Employee ID: {employee.employeeId}</p>
  //                     <p className="card-text">Email Address: {employee.emailAddress}</p>
  //                     <p className="card-text">Birth Date: {formattedBirthDate}</p>
  //                     <p className="card-text">Phone Number: {employee.phoneNumber}</p>
  //                     <p className="card-text">Address: {employee.address}</p>
  //                     <p className="card-text">Country: {employee.country}</p>
  //                     <p className="card-text">Passport Number: {employee.passport}</p>
  //                     <p className="card-text">Marital Status: {employee.maritalStatus}</p>
  //                     <p className="card-text">Department: {employee.department}</p>
  //                     <p className="card-text">Epf Number: {employee.epfNumber}</p>
  //                     <p className="card-text">SOCSO number: {employee.SOCSO}</p>
  //                     <p className="card-text">Employee Start Date: {formattedStartDate}</p>
  //                   </div>
  //                 </div>
          
                 
  //                 <button type="submit" className="peach-button" onClick={() => deleteEmployee(employee.employeeId)}>Delete</button>
  //               </div>
  //             </div>
  //           );
  //         })}
  //     </div>
  //     </div>
  // );
          
};

export default AdminList;
