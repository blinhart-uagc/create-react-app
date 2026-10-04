import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetail from "./components/EmployeeDetail";

function App() {
  const [employees, setEmployees] = useState(() => {
    const stored = localStorage.getItem("employees");
    return stored ? JSON.parse(stored) : [];
  });

  function saveData(updatedEmployees) {
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  }

  function addEmployee(employee) {
    const newEmployee = {
      ...employee,
      EmployeeId: employee.EmployeeId || Date.now(),
    };
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    saveData(updatedEmployees);
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/employee-form">Employee Form</Link> |{" "}
        <Link to="/employees">Employee List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/employee-form"
          element={<EmployeeForm addEmployee={addEmployee} employees={employees} />}
        />
        <Route path="/employees" element={<EmployeeList employees={employees} />} />
        <Route
          path="/employees/:id"
          element={<EmployeeDetail employees={employees} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;