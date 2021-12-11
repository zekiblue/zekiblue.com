import React from "react";
import SocialPopup from "./SocialPopup";

// create function to render footer buttons
export default () => {
  return (
        <div>
          <a href="./"><button className="command_button">Reboot</button></a>
          < SocialPopup />
        </div>
    );
};