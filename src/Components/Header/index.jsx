import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="bs-example">
                    <nav className="navbar navbar-expand-md cs_x12 navbar-light bg-light">
                        <button
                            type="button"
                            className="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navbarCollapse"
                            onClick={() => this.props.toggleHandler()}
                        >
                            <img alt={"loading"} src={require("../../Assets/images/menu.svg")}></img>
                        </button>
                        <a href="#" className="navbar-brand cen_st_12q">
                            <div className="p-2">DASHBOARD</div>
                        </a>
                        <div></div>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav m-1">
                                <a href="#" className="nav-item nav-link active p-1 mr-3 ml-3">
                                    <span>PROJECT</span>
                                    <div className="div_fs_1qw">Acme Corp.</div>
                                </a>
                                <a href="#" className="nav-item nav-link active p-1 mr-3 ml-3">
                                    <span>DEVICE</span>
                                    <div className="div_fs_1qw">Machine 313</div>
                                </a>
                                <a href="#" className="nav-item nav-link active p-1 mr-3 ml-3">
                                    <span>LOCATION</span>
                                    <div className="div_fs_1qw">Ferrara,ItalIy</div>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
