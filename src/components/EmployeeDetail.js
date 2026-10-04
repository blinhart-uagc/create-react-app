import { useParams, Link } from "react-router-dom";

function EmployeeDetail({ employees }) {
  const { id } = useParams();
  const employee = employees.find((e) => String(e.EmployeeId) === id);

  if (!employee) {
    return (
      <div className="employee-detail">
        <p>Employee not found.</p>
        <Link to="/employees">Back to Employee List</Link>
      </div>
    );
  }

  return (
    <div className="employee-detail">
      <h1>{employee.name}</h1>
      <table>
        <tbody>
          <tr><th>Email</th><td>{employee.email}</td></tr>
          <tr><th>Title</th><td>{employee.title}</td></tr>
          <tr><th>Department</th><td>{employee.department}</td></tr>
        </tbody>
      </table>
      <Link to="/employees">Back to Employee List</Link>
    </div>
  );
}

export default EmployeeDetail;