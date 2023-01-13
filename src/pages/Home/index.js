import AppBar from "../../components/AppBar";
import "./style.css";
import Table from "../../components/Table";
import React, { useState, useEffect } from "react";


function Home() {
  const [employees, setEmployess] = useState();
  const [search, setSearch]= useState("");

  useEffect(() => {
    fetch("http://localhost:3000/employees ")
      .then((response) => response.json())
      .then((data) => {
     setEmployess(data)
      });
  }, []);
  




  const lowerEmployes = search.toLowerCase()
 
 var filterEmployee = search.length > 0 ? employees?.filter(employee=>employee.name.toLowerCase().includes(lowerEmployes)):[];




  return (
    <div className="container">
      <AppBar />
      <div className="Section">
        <p> Funcionários</p>
        <input  
       placeholder="Pesquisar" 
       type="text" 
       className="research-field"
       value={search}
       onChange= {e=> setSearch(e.target.value)}
   
       /> 
      </div>
      <Table employees={employees} filterEmployee={filterEmployee} search={search} />
     
    </div>
  );
}

export default Home;
