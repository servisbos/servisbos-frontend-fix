import React, { Component, Fragment } from "react";
// import "../../../assets/css/admin.css";
class IndexDashboard extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <div className="content-wrapper">
            <div className="container-fluid">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">My Dashboard</li>
              </ol>
              <div className="row">
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="card dashboard text-white bg-primary o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fa fa-fw fa-envelope-open" />
                      </div>
                      <div className="mr-5">
                        <h5>26 New Messages!</h5>
                      </div>
                    </div>
                    <a
                      className="card-footer text-white clearfix small z-1"
                      href="messages.html"
                    >
                      <span className="float-left">View Details</span>
                      <span className="float-right">
                        <i className="fa fa-angle-right" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="card dashboard text-white bg-warning o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fa fa-fw fa-star" />
                      </div>
                      <div className="mr-5">
                        <h5>11 New Reviews!</h5>
                      </div>
                    </div>
                    <a
                      className="card-footer text-white clearfix small z-1"
                      href="reviews.html"
                    >
                      <span className="float-left">View Details</span>
                      <span className="float-right">
                        <i className="fa fa-angle-right" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="card dashboard text-white bg-success o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fa fa-fw fa-calendar-check-o" />
                      </div>
                      <div className="mr-5">
                        <h5>10 New Bookings!</h5>
                      </div>
                    </div>
                    <a
                      className="card-footer text-white clearfix small z-1"
                      href="bookings.html"
                    >
                      <span className="float-left">View Details</span>
                      <span className="float-right">
                        <i className="fa fa-angle-right" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="card dashboard text-white bg-danger o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fa fa-fw fa-heart" />
                      </div>
                      <div className="mr-5">
                        <h5>10 New Bookmarks!</h5>
                      </div>
                    </div>
                    <a
                      className="card-footer text-white clearfix small z-1"
                      href="bookmarks.html"
                    >
                      <span className="float-left">View Details</span>
                      <span className="float-right">
                        <i className="fa fa-angle-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <h2 />
            </div>
          </div>
          <footer className="sticky-footer">
            <div className="container">
              <div className="text-center">
                <small>Copyright © FinDoctor 2017</small>
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
      </Fragment>
    );
  }
}

export default IndexDashboard;
