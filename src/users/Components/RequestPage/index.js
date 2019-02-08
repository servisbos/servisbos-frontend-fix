import React, { Component } from "react";

class RequestPage extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="container-fluid">
          {/* Breadcrumbs*/}

          <div className="box_general">
            <div className="header_box">
              <h2 className="d-inline-block">Bookings List</h2>
              <div className="filter">
                <select name="orderby" className="selectbox">
                  <option value="Any status">Any status</option>
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>
            <div className="list_general">
              <ul>
                <li>
                  <figure>
                    <img src="img/avatar1.jpg" alt />
                  </figure>
                  <h4>
                    Enzo Ferrari <i className="pending">Pending</i>
                  </h4>
                  <ul className="booking_details">
                    <li>
                      <strong>Booking date</strong> 11 November 2017
                    </li>
                    <li>
                      <strong>Booking time</strong> 10.20AM
                    </li>
                    <li>
                      <strong>Visits</strong> Cardiology test, Diabetic diagnose
                    </li>
                    <li>
                      <strong>Telephone</strong> 0043 432324
                    </li>
                    <li>
                      <strong>Email</strong> user@email.com
                    </li>
                  </ul>
                  <ul className="buttons">
                    <li>
                      <a href="#0" className="btn_1 gray approve">
                        <i className="fa fa-fw fa-check-circle-o" /> Approve
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="btn_1 gray delete">
                        <i className="fa fa-fw fa-times-circle-o" /> Cancel
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <figure>
                    <img src="img/avatar2.jpg" alt />
                  </figure>
                  <h4>
                    Andrea Lomarco <i className="cancel">Cancel</i>
                  </h4>
                  <ul className="booking_details">
                    <li>
                      <strong>Booking date</strong> 11 November 2017
                    </li>
                    <li>
                      <strong>Booking time</strong> 10.20AM
                    </li>
                    <li>
                      <strong>Visits</strong> Cardiology test, Diabetic diagnose
                    </li>
                    <li>
                      <strong>Telephone</strong> 0043 432324
                    </li>
                    <li>
                      <strong>Email</strong> user@email.com
                    </li>
                  </ul>
                  <ul className="buttons">
                    <li>
                      <a href="#0" className="btn_1 gray approve">
                        <i className="fa fa-fw fa-check-circle-o" /> Approve
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="btn_1 gray delete">
                        <i className="fa fa-fw fa-times-circle-o" /> Cancel
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <figure>
                    <img src="img/avatar3.jpg" alt />
                  </figure>
                  <h4>
                    Marc Twain <i className="approved">Approved</i>
                  </h4>
                  <ul className="booking_details">
                    <li>
                      <strong>Booking date</strong> 11 November 2017
                    </li>
                    <li>
                      <strong>Booking time</strong> 10.20AM
                    </li>
                    <li>
                      <strong>Visits</strong> Cardiology test, Diabetic diagnose
                    </li>
                    <li>
                      <strong>Telephone</strong> 0043 432324
                    </li>
                    <li>
                      <strong>Email</strong> user@email.com
                    </li>
                  </ul>
                  <ul className="buttons">
                    <li>
                      <a href="#0" className="btn_1 gray approve">
                        <i className="fa fa-fw fa-check-circle-o" /> Approve
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="btn_1 gray delete">
                        <i className="fa fa-fw fa-times-circle-o" /> Cancel
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* /box_general*/}
          <nav aria-label="...">
            <ul className="pagination pagination-sm add_bottom_30">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex={-1}>
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default RequestPage;
