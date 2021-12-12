import React from "react";
import SocialPopup from "./footer/SocialPopup";
import { Link } from "react-router-dom";

// create function to render footer buttons

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer2">
      <div className="sub-footer">
      <Link to="/"><button className="command_button">Reboot</button></Link>
      <Link to="/apps"><button className="command_button">Apps</button></Link>
  
      < SocialPopup />
      </div>
      
      <div className="sub-footer">
      <p style={{textAlign : 'right', paddingRight : 10, marginTop : 0, paddingTop: 3, marginBottom : 0, paddingBottom   : 0}}>
        &copy; zekiblue {new Date().getFullYear()}
      </p>
      </div>
      </div>
    );
}
}