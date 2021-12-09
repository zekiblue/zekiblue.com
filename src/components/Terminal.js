import React from "react";
import Header from "./Header";
import InnerComponent from "./InnerComponent";

function Terminal() {
    return (
        <div id="content" className="content">
            < Header />
            < InnerComponent />
            <button className="command_button">Reboot</button>
        </div>
    );
}

export default Terminal;