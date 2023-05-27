import React, { useState, useEffect } from 'react';
import AdminList from "./AdminList";
import AdminGrid from "./AdminGrid";

function AdminView() {
  const [view, setView] = useState([]);

  const toggleView = React.useCallback(() => {
    setView(!view);
  }, [view, setView]);
   

  return (
    <div>
      <button onClick={toggleView} >Toggle!</button>
      {view ? <AdminList /> : <AdminGrid />}
    </div>
  );
}

export default AdminView;