import { useState } from 'react'
import './App.css'
import './List-Grid.css'
import UserView from "./components/UserView";
import AdminView from "./components/AdminView";
import EmployeeDetail from "./components/EmployeeDetail";
import icon from "./assets/icon.png"
import menu from "./assets/menu-burger.png"


function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [forms, setForms] = useState([]);

  const handleAddForm = (newForms) => {
    setForms((state) => [...state, newForms]);
  };
  const handleChangeView = (isAdmin) => {
    setIsAdmin(isAdmin);
  };  


  return (
    <div>
      <div className="container position-relative">
      {/* Nav Bar */}
      <nav className="navbar navbar-dark fixed-top bg-dark">
        {/* Dropdown menu in navbar */}
      <div className="pl-2 dropdown">
        <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src={menu} className="icon" /></button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <button className={`dropdown-item ${isAdmin}`}
                  onClick={() => handleChangeView(true)}>Employees</button>
          <button className={`dropdown-item  ${!isAdmin}`}
                onClick={() => handleChangeView(false)}>Add Employee</button>
              
     </div>
        </div>
        {/* Logo */}
        <div className="ml-auto">
          <a className="navbar-brand px-4 text-light font-weight-bold">
            EZ<img src={icon} className="icon" />Form </a></div>
</nav>
      </div>
      <div className="admin-view-container">
    
        {isAdmin ? (<AdminView />) :
          (<UserView
            addFormArray={(newForms) => handleAddForm(newForms)}
            changeView={(isAdmin) => handleChangeView(isAdmin)} />
        )}
        </div> 
    </div>
  );
};

export default App;