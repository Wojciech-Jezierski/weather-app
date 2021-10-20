import React from "react";
import "./form.style.css";

const Form = props => {
  return (
    <div className="container">
      <form onSubmit={props.loadweather}>
        <div>{props.error ? error() : ""}</div>
        <div className="row">
          <div className="col-1">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="off"
            />
          </div>
          <div className="col-2">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              name="country"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <button className="btn">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const error = props => {
  return (
    <div className="error" role="alert">
      Please Enter City and Country...!
    </div>
  );
};

export default Form;