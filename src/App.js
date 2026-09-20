import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/employee-form">Employee Form</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;