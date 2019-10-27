import React, { Component } from "react";

export default class sidebar extends Component {
    render() {
        const sideBarLIElement = (imageUrl, sideBarName) => (
            <li>
                <a className="st_font_size12q">
                    <img alt={"loading"} className="mr-1" src={require(`../../../src/Assets/images/${imageUrl}`)} />
                    {sideBarName}
                </a>
            </li>
        );
        console.log(this.props);
        return (
            <div className={`sidebar-container ${
                this.props.buttonStatus ? "" : "width_con12w3"
                }`}
            >
                <ul className="sidebar-navigation">
                    <li className="header">PLATFORM</li>
                    {sideBarLIElement("twotone-home-24px.svg", "Home")}
                    {sideBarLIElement("twotone-dvr-24px.svg", "Machine")}
                    {sideBarLIElement("twotone-work-24px.svg", "Clint")}
                    {sideBarLIElement("twotone-access_alarms-24px.svg", "Planing")}
                    <li className="header">SETTINGS</li>
                    {sideBarLIElement("twotone-group-24px.svg", "USERS")}
                    {sideBarLIElement("twotone-get_app-24px (1).svg", "EXPORT DATA")}
                    {sideBarLIElement("twotone-settings-24px.svg", "SETTINGS")}
                    <li className="header">ADVANCED</li>
                    {sideBarLIElement("twotone-memory-24px.svg", "FANCYBOX CONFIGS")}
                    {sideBarLIElement("twotone-cloud_done-24px.svg", "SPACEBUNNY STATUS")}
                    {sideBarLIElement("twotone-folder_shared-24px.svg", "SHARED FOLDERS")}
                </ul>
            </div>
        );
    }
}
