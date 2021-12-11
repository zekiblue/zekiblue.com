import React from "react";
import Header from "./Header";
import InnerComponent from "./InnerComponent";
import SocialPopup from "./SocialPopup";


function Terminal() {
    return (
        <div id="content" className="content">
            < Header />
            < InnerComponent />
            <a href="./"><button className="command_button">Reboot</button></a>
            < SocialPopup />
        </div>
    );
}

export default Terminal;