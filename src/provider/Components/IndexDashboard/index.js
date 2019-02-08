import React, { Component, Fragment } from "react";
import "../../../assets/css/admin.css";

class IndexDashboard extends Component {
  render() {
    return (
      <div>
        <footer className="sticky-footer">
          <div className="container">
            <div className="text-center">
              <small>copyright © Servisbos 2019</small>
            </div>
          </div>
        </footer>
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fa fa-angle-up" />
        </a>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        />
      </div>
    );
  }
}

export default IndexDashboard;
