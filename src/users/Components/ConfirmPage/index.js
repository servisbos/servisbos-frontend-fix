import React, { Component } from "react";

class ConfirmPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
        <div className="container margin_120">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div id="confirm">
                <div className="icon icon--order-success svg add_bottom_15">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={72}
                    height={72}
                  >
                    <g fill="none" stroke="#8EC343" strokeWidth={2}>
                      <circle
                        cx={36}
                        cy={36}
                        r={35}
                        style={{
                          strokeDasharray: "240px, 240px",
                          strokeDashoffset: "480px"
                        }}
                      />
                      <path
                        d="M17.417,37.778l9.93,9.909l25.444-25.393"
                        style={{
                          strokeDasharray: "50px, 50px",
                          strokeDashoffset: "0px"
                        }}
                      />
                    </g>
                  </svg>
                </div>
                <h2>Thanks for your booking!</h2>
                <p>You'll receive a confirmation email at mail@example.com</p>
              </div>
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </main>
    );
  }
}

export default ConfirmPage;
