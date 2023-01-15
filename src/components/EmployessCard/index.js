import './style.css'

function EmployeesCard ({image, name,job,admission_date, phone,}){

function numberFormatting (phone){
let arrayFormatting = Array.from(phone)
arrayFormatting.unshift("+ ")
arrayFormatting.splice(1,0," ");
arrayFormatting.splice(4,0," ");
arrayFormatting.splice(5,0," (");
arrayFormatting.splice(8,0,") ");
arrayFormatting.splice(14,0,"-");
let result = arrayFormatting.join("")
return result
}
    return( 
        <li className="table-data">
      
        <img src={image} alt="Imagens dos funcionários "/>
        <p>{name}</p>
        <p>{job}</p>
        <p>{admission_date}</p>
        <p>{numberFormatting(phone)} </p>
        </li>
    );
} export default EmployeesCard