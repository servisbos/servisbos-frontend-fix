import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDataServiceToBookingPage } from "../../../store/actions/orders";
import { fetchDataProviderToBookingPage } from "../../../store/actions/orders";

class DetailPage extends Component {
  componentDidMount() {
    const { userid, jobid } = this.props.match.params;
    this.props.fetchDataProviderToBookingPage(userid);
    this.props.fetchDataServiceToBookingPage(jobid);
  }
  render() {
    const { jobs, providers } = this.props;

    console.log(providers);

    return (
      <main>
        <div className="container margin_60">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <nav id="secondary_nav">
                <div className="container">
                  <ul className="clearfix">
                    <li>
                      <a href="#section_1" className="active">
                        General info
                      </a>
                    </li>
                    <li>
                      <a href="#section_2">Reviews</a>
                    </li>
                    <li>
                      <a href="#sidebar">Booking</a>
                    </li>
                  </ul>
                </div>
              </nav>
              {providers &&
                providers.map(data => (
                  <div id="section_1">
                    <div className="box_general_3">
                      <div className="profile">
                        <div className="row">
                          <div className="col-lg-5 col-md-4">
                            <figure>
                              <img
                                src={data.image}
                                alt={data.username}
                                className="img-fluid"
                              />
                            </figure>
                          </div>
                          <div className="col-lg-7 col-md-8">
                            <small>{jobs.service_type}</small>
                            <h1>{data.first_name + " " + data.lastname}</h1>
                            <ul className="contacts">
                              <li>
                                <h6>Address</h6>
                                {data.address}
                              </li>
                              <li>
                                <h6>Phone</h6>{" "}
                                <a href="#">{data.phone_number}</a> -{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="indent_title_in">
                        <i className="pe-7s-cash" />
                        <h3>Prices &amp; Payments</h3>
                        <p>Price for the service</p>
                      </div>
                      <div className="wrapper_indent">
                        <p>
                          Zril causae ancillae sit ea. Dicam veritus
                          mediocritatem sea ex, nec id agam eius. Te pri facete
                          latine salutandi, scripta mediocrem et sed, cum ne
                          mundi vulputate. Ne his sint graeco detraxit, posse
                          exerci volutpat has in.
                        </p>
                        <table className="table table-responsive table-striped">
                          <thead>
                            <tr>
                              <th>Service</th>
                              <th>Price</th>
                              <th>Method</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{jobs.service_type}</td>
                              <td>{data.users_service_types[0].price}</td>
                              <td>Cash</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            {providers &&
              providers.map(data => (
                <aside className="col-xl-4 col-lg-4" id="sidebar">
                  <div className="box_general_3 booking">
                    <form>
                      <div className="title">
                        <h3>Book a Visit</h3>
                        <small>Monday to Friday 09.00am-06.00pm</small>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="text"
                              id="booking_date"
                              data-lang="en"
                              data-min-year={2017}
                              data-max-year={2020}
                              data-disabled-days="10/17/2017,11/18/2017"
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="text"
                              id="booking_time"
                              defaultValue="9:00 am"
                            />
                          </div>
                        </div>
                      </div>
                      <ul className="treatments clearfix">
                        <li>
                          <div className="checkbox">
                            <input
                              type="checkbox"
                              className="css-checkbox"
                              id="visit1"
                              name="visit1"
                            />
                            <label htmlFor="visit1" className="css-label">
                              {jobs.service_type}{" "}
                              <strong>
                                Rp.{data.users_service_types[0].price}
                              </strong>
                            </label>
                          </div>
                        </li>
                      </ul>
                      <hr />
                      <a href="booking-page.html" className="btn_1 full-width">
                        Book Now
                      </a>
                    </form>
                  </div>
                  {/* /box_general */}
                </aside>
              ))}

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
  providers: store.orders.dataProvider
});
export default connect(
  mapStateToProps,
  {
    fetchDataProviderToBookingPage,
    fetchDataServiceToBookingPage
  }
)(DetailPage);
