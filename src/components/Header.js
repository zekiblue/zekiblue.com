import React from "react";


function Header () {
    return (
        <div>
            <div className="control-box close-box">
                <a className="control-box-inner"></a>
            </div>
            <div className="control-box zoom-box">
                <div className="control-box-inner">
                    <div classNamme="zoom-box-inner">
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

export default Header;