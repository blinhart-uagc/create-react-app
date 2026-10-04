import { Link } from "react-router-dom";

function EmployeeList({ employees }) {
  return (
    <div className="employee-list">
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.EmployeeId}>
            <Link to={`/employees/${employee.EmployeeId}`}>
              {employee.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;