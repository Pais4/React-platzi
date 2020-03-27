import React from "react";

// Importamos los componentes
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm.js";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";

class NewBadge extends React.Component {
  // Inicializamos el estado
  state = { form: {
      // Inicializamos los valores para que no arroje el warning
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',

  } };

  // Creamos un metodo
  handleChange = e => {
    this.setState({
      form: {
        // Dejamos caer todos los valores que habian en this.state.form
        ...this.state.form,
        // Y le añadimos uno nuevo
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <React.Fragment>

        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl="https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NewBadge;
