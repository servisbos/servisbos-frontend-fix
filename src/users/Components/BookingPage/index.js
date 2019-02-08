import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchDataUserToBookingPage,
  fetchDataServiceToBookingPage,
  fetchDataProviderToBookingPage,
  orderService
} from "../../../store/actions/orders";

import { signIn } from "../../../store/actions/auth";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class BookingPage extends Component {
  state = {
    id_user: "",
    id_provider: "",
    id_services_type: "",
    address: "",
    city: "",
    postal_code: "",
    province: "",
    status: "PENDING",
    payment_type: "CASH",
    order_date: Date.now()
  };

  componentDidMount() {
    const { loginid, provid, jobid } = this.props.match.params;
    {
      loginid && this.setState({ id_user: loginid });
    }
    {
      provid && this.setState({ id_provider: provid });
    }
    {
      jobid && this.setState({ id_services_type: jobid });
    }
    this.props.fetchDataUserToBookingPage(loginid);
    this.props.fetchDataProviderToBookingPage(provid);
    this.props.fetchDataServiceToBookingPage(jobid);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();

    this.props.orderService(this.state);
  };
  render() {
    const { jobs, providers, users, idUserLogin, statusOrder } = this.props;
    const {
      id_user,
      id_provider,
      id_services_type,
      address,
      city,
      postal_code,
      province,
      order_date
    } = this.state;
    console.log(providers);

    if (statusOrder) return <Redirect to="/user/dashboard/confirm" />;

    return (
      <main>
        <div id="breadcrumb">
          <div className="container">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Category</a>
              </li>
              <li>Page active</li>
            </ul>
          </div>
        </div>
        {/* /breadcrumb */}
        <div className="container margin_60">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="box_general_3 cart">
                <div className="form_title">
                  <h3>
                    <strong>1</strong>Your Details
                  </h3>
                  <p>Your Personal Info</p>
                </div>
                {users &&
                  users.map(user => (
                    <div className="step">
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <label>First name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="firstname_booking"
                              value={user.first_name}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <label>Last name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="lastname_booking"
                              value={user.lastname}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <label>Email</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="jhon@doe.com"
                              value={user.email}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <label>Confirm email</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="jhon@doe.com"
                              value={user.email}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <label>Telephone</label>
                            <input
                              type="text"
                              name="telephone_booking"
                              className="form-control"
                              value={user.phone_number}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                <hr />
                {/*End step */}
                <div className="form_title">
                  <h3>
                    <strong>2</strong>Order Address
                  </h3>
                  <p>Give information for you order</p>
                </div>
                <div className="step">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Address</label>
                        <input type="hidden" name="id_user" value={id_user} />
                        <input
                          type="hidden"
                          name="id_provider"
                          value={id_provider}
                        />
                        <input
                          type="hidden"
                          name="id_services_type"
                          value={id_services_type}
                        />
                        <input
                          type="textarea"
                          id="street_1"
                          name="address"
                          className="form-control"
                          placeholder="Address"
                          value={address}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>City</label>
                        <input
                          type="text"
                          id="city_booking"
                          name="city"
                          className="form-control"
                          placeholder="City"
                          value={city}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>Province</label>
                        <input
                          type="text"
                          id="state_booking"
                          name="province"
                          className="form-control"
                          placeholder="Florida"
                          value={province}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>Postal code</label>
                        <input
                          type="text"
                          id="postal_code"
                          name="postal_code"
                          className="form-control"
                          placeholder="0034"
                          value={postal_code}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  {/*End row */}
                </div>
                <hr />
                {/*End step */}
                <div id="policy">
                  <h4>Cancellation policy</h4>
                  <div className="form-group">
                    <label>
                      <input
                        type="checkbox"
                        name="policy_terms"
                        id="policy_terms"
                      />{" "}
                      I accept terms and conditions and general policy.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* /col */}
            <aside className="col-xl-4 col-lg-4" id="sidebar">
              {providers &&
                providers.map(provider => (
                  <div className="box_general_3 booking">
                    <form onSubmit={this.handleSubmit}>
                      <div className="title">
                        <h3>Your booking</h3>
                      </div>
                      <div className="summary">
                        <ul>
                          <li>
                            Date:{" "}
                            <strong className="float-right">11/12/2017</strong>
                          </li>
                          <li>
                            Time:{" "}
                            <strong className="float-right">10.30 am</strong>
                          </li>
                          <li>
                            Provider Name:{" "}
                            <strong className="float-right">
                              {provider.first_name + " " + provider.lastname}
                            </strong>
                          </li>
                        </ul>
                      </div>
                      <ul className="treatments checkout clearfix">
                        <li>
                          Service Type :
                          <strong className="float-right">
                            {jobs && jobs.service_type}{" "}
                          </strong>
                        </li>
                      </ul>
                      <ul className="treatments checkout clearfix">
                        <li>
                          Price
                          <strong className="float-right">
                            Rp.{provider.users_service_types[0].price}
                          </strong>
                        </li>
                      </ul>
                      <hr />
                      <input
                        type="submit"
                        className="btn_1 full-width"
                        value="Confirm and order"
                      />
                    </form>
                  </div>
                ))}

              {/* /box_general */}
            </aside>
            {/* /asdide */}
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </main>
    );
  }
}
const mapStateToProps = store => ({
  jobs: store.orders.dataJob,
  providers: store.orders.dataProvider,
  idUserLogin: store.auth.idUserLogin,
  users: store.orders.dataUser,
  statusOrder: store.orders.status_order
});
export default connect(
  mapStateToProps,
  {
    fetchDataUserToBookingPage,
    fetchDataServiceToBookingPage,
    fetchDataProviderToBookingPage,
    signIn,
    orderService
  }
)(BookingPage);
