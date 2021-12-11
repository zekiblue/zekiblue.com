import React from "react";
import Header from "./Header";
import InnerComponent from "./InnerComponent";
import FooterButtons from "./FooterButtons";


function Terminal() {
    return (
        <div id="content" className="content">
            < Header />
            < InnerComponent />
            < FooterButtons />
        </div>
    );
}

export default Terminal;