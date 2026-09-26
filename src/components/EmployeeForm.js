import React from 'react';
import '../EmployeeForm.css';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', title: '', department: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addEmployee(this.state);
    this.setState({ name: '', email: '', title: '', department: '' });
  }

  render() {
    return (
      <div>
        <h2>Add New Employee</h2>
        <form className="employee-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <label htmlFor="title">Job Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />

          <label htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            name="department"
            value={this.state.department}
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>
        </form>

        <h3>Employees</h3>
        <ul>
          {this.props.employees.map((emp, index) => (
            <li key={index}>{emp.name} — {emp.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EmployeeForm;