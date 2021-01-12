import React, { Component } from "react";

class FormEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //original names
      firstName: props.firstName,
      lastName: props.lastName,
      //states for names that update with changes
      fNup: props.firstName,
      lNup: props.lastName,
      edit: false,
    };

    this.editForm = this.editForm.bind(this);
    this.editFirstName = this.editFirstName.bind(this);
    this.editLastName = this.editLastName.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  editForm = () => {
    this.setState({ edit: true });
  };

  //if save button is clicked update the original names
  saveChanges() {
    this.setState({
      firstName: this.state.fNup,
      lastName: this.state.lNup,

      edit: false,
    });
  }

  //if canceled, reset the updated names to the previous value
  cancel() {
    this.setState({
      edit: false,
      fNup: this.state.firstName,
      lNup: this.state.lastName,
    });
  }

  editFirstName(event) {
    this.setState({ fNup: event.target.value });
  }

  editLastName(event) {
    this.setState({ lNup: event.target.value });
  }

  render() {
    if (this.state.edit === false) {
      return (
        <div className="display">
          <div>
            <p>{this.state.firstName}</p>
          </div>

          <div>
            <p>{this.state.lastName}</p>
          </div>
          <button onClick={this.editForm}>Edit</button>
        </div>
      );
    }

    return (
      <div className="form">
        <input
          type="text"
          value={this.state.fNup}
          onChange={this.editFirstName}
        ></input>
        <br />
        <input
          type="text"
          value={this.state.lNup}
          onChange={this.editLastName}
        ></input>
        <br />
        <button onClick={this.saveChanges}>Save</button>
        <button onClick={this.cancel}>Cancel</button>
      </div>
    );
  }
}
export default FormEdit;
