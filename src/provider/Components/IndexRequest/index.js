import React, { Component, Fragment } from "react";
import "../../../assets/css/admin.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchDataOrderByIdProvider,
  confirmOrder
} from "../../../store/actions/orders";

class IndexRequest extends Component {
  componentDidMount() {
    const { loginid } = this.props.match.params;
    this.props.fetchDataOrderByIdProvider(loginid);
  }
  handleButton = (id_order, status) => {
    this.props.confirmOrder(id_order, status);
  };

  render() {
    const { dataOrder, confirmStatus } = this.props;
    console.log(dataOrder);

    return (
      <div className="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Bookmarks</li>
          </ol>
          <div className="box_general">
            <div className="header_box">
              <h2 className="d-inline-block">Bookmarks List</h2>
            </div>
            {dataOrder &&
              dataOrder.map(data => (
                <div className="list_general">
                  <ul>
                    <li>
                      <figure>
                        <img src={data.user.image} alt=" " />
                      </figure>
                      <small>{data.user.username}</small>
                      <h4>{data.user.first_name + " " + data.user.lastname}</h4>
                      <p>
                        {data.user.city + " " + data.user.province}
                        <br />
                      </p>
                      <p>
                        <a href="#0" className="btn_1 gray">
                          <i className="fa fa-fw fa-user" /> View profile
                        </a>
                      </p>
                      {data.status === "PENDING" ? (
                        <ul className="buttons">
                          <li>
                            <Link
                              to=""
                              class="btn_1 gray approve"
                              onClick={e => {
                                e.preventDefault();
                                this.handleButton(data.id, "ACCEPTED");
                              }}
                            >
                              <i class="fa fa-fw fa-check-circle-o" /> Approve
                            </Link>
                          </li>
                          <li>
                            <Link
                              to=""
                              className="btn_1 gray delete wishlist_close"
                              onClick={e => {
                                e.preventDefault();
                                this.handleButton(data.id, "FINISHED");
                              }}
                            >
                              <i className="fa fa-fw fa-times-circle-o" />{" "}
                              Cancel
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        <ul className="buttons">
                          <li>
                            <label className="btn_1 gray success wishlist_close">
                              {data.status}
                            </label>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
              ))}
          </div>

          <nav>
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
const mapStateToProps = store => ({
  dataOrder: store.orders.dataOrder,
  confirmStatus: store.orders.confirmationStatus
});
export default connect(
  mapStateToProps,
  {
    fetchDataOrderByIdProvider,
    confirmOrder
  }
)(IndexRequest);
