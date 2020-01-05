import React, { Component } from "react";
import { AddCircle, Close } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import "./style.css";

class AddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        id: "",
        input: "",
        status: "todo"
      },
      changeForm: false
    };
  }

  showInput = () => {
    this.setState({
      changeForm: true
    });
  };

  hiddenInput = () => {
    let defaultform = {
      id: "",
      input: "",
      status: "todo"
    };
    this.setState({
      changeForm: false,
      form: defaultform
    });
  };

  handleChange = event => {
    let newInput = { ...this.state.form };
    let timestamp = new Date().getTime();
    newInput["id"] = timestamp;
    newInput[event.target.name] = event.target.value;
    this.setState({
      form: newInput
    });
  };

  handleChangeKanbans = value => {
    this.props.handleChangeKanbans(value);
    this.hiddenInput();
  };

  handleSubmit = event => {
    event.preventDefault();
    this.handleChangeKanbans(this.state.form);
  };

  render() {
    if (this.state.changeForm === false) {
      return (
        <div
          className="Add"
          style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          onClick={this.showInput}
        >
          <AddCircle style={{ fontSize: "35px" }} />
          <span style={{ marginLeft: "10px" }}>
            <h2>Create New Task</h2>
          </span>
        </div>
      );
    } else {
      return (
        <div
          className="Close"
          style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
        >
          <Close
            style={{ color: "red", fontSize: "35px" }}
            className="btn-close"
            onClick={this.hiddenInput}
          />
          <span>
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
              <TextField
                name="input"
                required
                id="filled-required"
                label="Required"
                type="text"
                defaultValue=""
                placeholder="Input Here"
                variant="outlined"
                onChange={this.handleChange}
              />
            </form>
          </span>
        </div>
      );
    }
  }
}

export default AddComponent;
