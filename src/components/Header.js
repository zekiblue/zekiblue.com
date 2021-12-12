import React from "react";

//component
export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="control-box close-box">
                    <div className="control-box-inner"></div>
                </div>
                <div className="control-box zoom-box">
                    <div className="control-box-inner">
                        <div className="zoom-box-inner">
                        </div>
                    </div>
                </div>
                <div className="control-box windowshade-box">
                    <div className="control-box-inner">
                        <div className="windowshade-box-inner">
                        </div>
                    </div>
                </div>
                <h1 className="title app-name">
                    zekiblue homepage
                </h1>
            </div>
        )
    }
}