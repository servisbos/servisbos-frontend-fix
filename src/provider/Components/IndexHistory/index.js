import React, { Component, Fragment } from "react";
import "../../../assets/css/admin.css";

class IndexHistory extends Component {
  render() {
    return (
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
    );
  }
}

export default IndexHistory;
