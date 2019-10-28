import React, { Component } from "react";
import '../PageContent/PageContent.css';

export default class Card extends Component {

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

        return (
            <div>
                {card(this.props.width, this.props.cardDetails)}
            </div>
        );
    }
}
