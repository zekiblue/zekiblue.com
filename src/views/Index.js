import React from "react"
import Header from "../components/Header";
import FooterButtons from "../components/Footer";
import DetailsAboutMe from "../pages/DetailsAboutMe";
import MyApps from "../pages/MyApps";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";


export default function Index() {

    return (
        <Router>

        <div id="content" className="content">
            < Header />
            <Routes>
                <Route exact path="/" element={<DetailsAboutMe/>} />
                <Route path="/apps" element={<MyApps/>} />
            </Routes>
            < FooterButtons />
        </div>
        </Router>

    );
}