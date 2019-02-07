import React, { Component, Fragment } from "react";
import "../../../assets/css/admin.css";

class IndexRequest extends Component {
  render() {
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
            <div className="list_general">
              <ul>
                <li>
                  <figure>
                    <img src="" alt=" " />
                  </figure>
                  <small>Psychologist</small>
                  <h4>
                    Prof. Dr. KH. Iwin Pradana Rahardjo, PhD., M.Psi., Psikolog{" "}
                  </h4>
                  <p>
                    Tangerang, Indonesia
                    <br />
                  </p>
                  <p>
                    <a href="#0" className="btn_1 gray">
                      <i className="fa fa-fw fa-user" /> View profile
                    </a>
                  </p>
                  <ul className="buttons">
                    <li>
                      <a href="#0" class="btn_1 gray approve">
                        <i class="fa fa-fw fa-check-circle-o" /> Approve
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="btn_1 gray delete wishlist_close">
                        <i className="fa fa-fw fa-times-circle-o" /> Cancel
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
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

export default IndexRequest;
