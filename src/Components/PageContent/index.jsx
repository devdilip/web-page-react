import React, { Component } from "react";

export default class PageContent extends Component {
    render() {
        const card = (width, cardDetails) => (
            <div className="card m-1 card-style" style={{ width: `${width}rem` }}>
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-between align-items-center">
                        <div>  <span className="span_sty_123wq">{cardDetails.header}</span>{cardDetails.isPercentage ? '%' : null}</div>
                        {cardDetails.isIcon ? <div><img alt={"loading"} className="mr-1" src={require(`../../../src/Assets/images/twotone-settings-24px.svg`)} /></div> : null}
                    </h5>
                    <p className="card-text">
                        <div>{cardDetails.type}</div>
                        <div>{cardDetails.subType}</div>
                    </p>
                    <div className="progress p_bar123">
                        <div
                            className={`progress-bar w-${cardDetails.progressvalue}`}
                            role="progressbar"
                            aria-valuenow={cardDetails.progressvalue}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </div>
            </div>
        );
        return (
            <div
                className={`content-container ${
                    this.props.buttonStatus ? "" : "content-container1"
                    }`}
            >
                <div className="container-fluid">
                    <div className="d-flex card-body-style">
                        {card(10, { header: "52", type: "MACHINE", subType: "WORK", progressvalue: 50, isIcon: false, isPercentage: true })}
                        {card(10, { header: "16", type: "ACTIVE", subType: "OPERATORS", progressvalue: 25, isIcon: false, isPercentage: true })}
                        {card(10, { header: "4", type: "PRODUCT", subType: "DISCHARGE", progressvalue: 25, isIcon: true, isPercentage: false })}
                        <div className="card m-1  card-style" style={{ width: `${27}rem` }}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h5 className="card-title">
                                            <span style={{ fontSize: "30px" }}>{`07:30:00`}</span>
                                        </h5>
                                        <div className="mt-2 mb-3">27/09/2019</div>
                                        <p className="card-text">
                                            <div>{`STARTING`}</div>
                                            <div>{`TIME`}</div>
                                        </p>
                                    </div>
                                    <div className="border_style1"></div>
                                    <div className="m-3">
                                        <h5 className="card-title">
                                            <span style={{ fontSize: "40px" }}>{`06:50:27`}</span>
                                        </h5>
                                        <div className="text-center">DURATION</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {card(10, { header: "100", type: "HARDWARE", subType: "PROTYPING", progressvalue: 100, isIcon: false, isPercentage: true })}
                    </div>
                    <div className="card m-1">
                        <div className="card-body card_body1234">
                            <h5 className="card-title">
                                <span className="">Machine Template</span>
                            </h5>
                            <img alt={""} src=""></img>
                        </div>
                    </div>
                    <div className="card m-1" style={{ width: `${30}rem` }}>
                        <div className="card-body">
                            <h5 className="card-title">
                                <span className="">Events</span>%
              </h5>
                            <p className="card-text">
                                <div>Alert Events</div>
                                <div>23</div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}