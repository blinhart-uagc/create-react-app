import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  function saveData(updatedEmployees) {
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  }

  function addEmployee(employee) {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    saveData(updatedEmployees);
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/employee-form">Employee Form</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/employee-form"
          element={<EmployeeForm addEmployee={addEmployee} employees={employees} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;