import React, { Component } from "react";
import './PageContent.css';


export default class PageContent extends Component {


    render() {

        const card = (width, cardDetails) => (
            <div className={`card m-1 card-style ${cardDetails.isActive ? "active-card" : null}`} style={{ width: `${width}rem` }}>
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-between align-items-center">
                        <div>  <span className={`span_sty_123wq ${cardDetails.header === "100" ? " card-header-color" : "card-headers-title"}`}>{cardDetails.header}</span>{cardDetails.isPercentage ? '%' : null}</div>
                        {cardDetails.isIcon ? <div><img alt={"loading"} className="mr-1" style={{ height: "40px" }} src={require(`../../../src/Assets/images/twotone-group-24px.svg`)} /></div> : null}
                    </h5>
                    <div className="card-text">
                        <div>{cardDetails.type}</div>
                        <div>{cardDetails.subType}</div>
                    </div>
                    <div className="progress  p_bar123">
                        <div
                            className={`progress-bar ${cardDetails.isActive ? "bg-white" : cardDetails.progressvalue == "100" ? "bg-success" : null} w-${cardDetails.progressvalue}`}
                            role="progressbar"
                            aria-valuenow={cardDetails.progressvalue}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </div>
            </div>
        );

        const timeCard = () => (
            <div className="card m-1  card-style time-card-width">
                <div className="card-body">
                    <div className="time-cart-title">
                        <div className="time-card-details">
                            <h5 className="card-title">
                                <span style={{ fontSize: "30px", fontWeight: 400 }}>{`07:30:00`}</span>
                            </h5>
                            <div className="mt-1 mb-1 time-small-header">27/09/2019</div>
                            <div className="card-text">
                                <div>{`STARTING`}</div>
                                <div>{`TIME`}</div>
                            </div>
                        </div>
                        <div className="border_style1 time-card-details"></div>
                        <div className="m-3">

                            <h5 className="card-title time-card-time">
                                <div className='small-time-card'>
                                    <div className='d-flex justify-content-between time-card-small'>
                                        <div className='time-small-header'>{`TEMPO INIZIALE`}</div>
                                        <div className='time-small-header'>{`07:30:00 27/09/2019`}</div>
                                    </div>
                                </div>
                                <span className='time-count' style={{ fontSize: "40px" }}>{`06:57:24`}</span>
                            </h5>
                            <div className="text-center">DURATION</div>
                        </div>
                    </div>
                </div>
            </div>);

        return (
            <div
                className={`content-container ${
                    this.props.buttonStatus ? "" : "content-container1"
                    }`}
            >
                <div className="container-fluid">
                    <div className="d-flex card-body-style">
                        {card(10, { header: "52", type: "MACHINE", subType: "WORK", progressvalue: 50, isIcon: false, isPercentage: true, isActive: true })}
                        {card(10, { header: "16", type: "ACTIVE", subType: "OPERATORS", progressvalue: 25, isIcon: false, isPercentage: true, isActive: false })}
                        {card(10, { header: "4", type: "PRODUCT", subType: "DISCHARGE", progressvalue: 25, isIcon: true, isPercentage: false, isActive: false })}
                        {timeCard()}
                        {card(10, { header: "100", type: "HARDWARE", subType: "PROTYPING", progressvalue: 100, isIcon: false, isPercentage: true, isActive: false })}
                    </div>

                    <div className="card m-1 temp-card">
                        <img className='img-fluid'
                            style={{ height: "250px", idth: "fit-content" }}
                            alt={"Loading img"}
                            src={require(`../../../src/Assets/images/temp-diagram-images.png`)}>
                        </img>
                    </div>
                    
                    <div className="card m-1 event-cart " style={{ width: `${33}rem` }}>
                        <div className="card-body">
                            <div className="d-flex ">
                                <div>
                                    <h5 className="card-title">
                                        <span className="">Events</span>
                                    </h5>
                                    <div className="card-text">
                                        <div className='small'>Alert Events</div>
                                        <div> <span className="span_sty_123wq">23</span></div>
                                        <div className='small' style={{ whiteSpace: "nowrap" }}>in the past 30 days</div>
                                    </div>
                                </div>
                                <div className="m-3">
                                    <div className="event-button">
                                        <button className="btn btn-secondary custom-button">Alert Event</button>
                                        <button className="btn btn-secondary custom-button">Machines</button>
                                        <button className="btn btn-secondary custom-button">Discharge</button>
                                        <span>Past 30 days > </span>
                                    </div>
                                    <div>
                                        <img className='img-responsive fit-image'
                                            style={{ width: "100%" }}
                                            alt={"Loading img"}
                                            src={require(`../../../src/Assets/images/small-graph-img.png`)}>
                                        </img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='small-time-card'>
                        {timeCard()}
                    </div>
                </div>
            </div>
        );
    }
}
