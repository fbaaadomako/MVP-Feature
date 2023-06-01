import gridimg from "../assets/apps.png";
import listimg from "../assets/table-list.png";
import deleteimg from "../assets/delete.png";
import open from "../assets/contract.png";
import EmployeeDetail from "./EmployeeDetail";

function AdminList({
  employees,
  toggleView,
  deleteEmployee,
  employeeDetail,
  openDetail,
  closeDetail,
}) {
  return (
    <div>
      <div className="toggle-link">
        <img className="toggle-icon" title="Change view" src={listimg} />
        <img
          className="toggle-icon"
          title="Change view"
          src={gridimg}
          onClick={toggleView}
        />
      </div>
      {employees.map((employee) => {
        const formattedStartDate = new Date(
          employee.startDate
        ).toLocaleDateString("en-US");
        const formattedBirthDate = new Date(
          employee.birthDate
        ).toLocaleDateString("en-US");

        return (
          <div className="row">
            <div className="card-l pt-0" key={employee.employeeId}>
              <div className="col-sm-1 ">
                <img
                  src={
                    employee.url ? employee.url : "https://shorturl.at/uFIZ1"
                  }
                  alt="No Passport Photo"
                  className="card-image-l"
                />
              </div>
              <div
                className="col-sm-10 info-list pt-0"
                title="View/Edit Record"
                onClick={() => employeeDetail(event, employee.employeeId)}
              >
                <h6>{employee.fullName}</h6>{" "}
                <p className="d-inline">ID#: {employee.employeeId}</p>
                <p>
                  <h7>Country:</h7> {employee.country}
                </p>
              </div>
              <div className="col-sm-1 pt-0">
                <img
                  src={deleteimg}
                  title="Delete Record"
                  className="icon position-absolute bottom-0 end-0 m-2"
                  onClick={() => deleteEmployee(employee.employeeId)}
                />
              </div>
            </div>
          </div>
        );
      })}
      {employees.map(
        (employee) =>
          openDetail === employee.employeeId && (
            <EmployeeDetail employee={employee} closeDetail={closeDetail} />
          )
      )}
    </div>
  );
}

export default AdminList;
