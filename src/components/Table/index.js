import "./style.css";
 import EmployeesCard from "../EmployessCard";


function Table({employees, filterEmployee, search,}) {
 
const dateFormat = employees?.admission_date
const dataAdmissionFormat = new Intl.DateTimeFormat("pt-BR",{dateStyle:'short'}).format(dateFormat);



  return (
    <div>
      <div className="table">
        <header>
          <li>
            <h2>FOTO</h2>
            <h2> NOME</h2>
            <h2> CARGO</h2>
            <h2> DATA DE ADMISSÃO</h2>
            <h2> TELEFONE</h2>
          </li>
        </header>
        {
        search.length > 0 ?(
        filterEmployee?.map((employee) => (
          <EmployeesCard
          
            key={employee.id}
            image={employee.image}
            name={employee.name}
            job={employee.job}
            admission_date={dataAdmissionFormat}
            phone={employee.phone}
        
          />
        ))):
        employees?.map((employee) => (
          <EmployeesCard
          
            key={employee.id}
            image={employee.image}
            name={employee.name}
            job={employee.job}
            admission_date={dataAdmissionFormat}
            phone={employee.phone}
        
          />
        ))
        }
      </div>
    </div>
  );
}
export default Table;
