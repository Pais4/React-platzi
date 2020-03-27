import React from "react";

class BadgeForm extends React.Component {

  // Inicializamos el State para que no este NULL
  // state = {};

  // // Evento para manejar el onChange del Input
  // handleChange = e => {
  //   // Guardamos la informacion del input en estado
  //   this.setState({
  //       // Le pasamos un objeto con la informacion que queremos guardar
  //       [e.target.name]: e.target.value, // Le pasamos la variable name
  //   })
  // };

  // Evento para manejar el onClick del boton
  handleClick = e => {
    console.log('Button was Clicked');
  };

  // Evento para manejar el onSubmit del formulario
  handleSubmit = e => {
      // Para evitar que el formulario se envie y refresque la pagina
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1> New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            ></input>
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            ></input>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            ></input>
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            ></input>
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            ></input>
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
