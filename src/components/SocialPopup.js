// import react
import React from 'react';
// import Popup
import Popup from 'reactjs-popup';

export default () => (
    <Popup
        trigger={<button className="command_button">Socials</button>}
        position="bottom center">
        <div className='popup'>
        <h1 className='title' style = {{ paddingLeft : 20, paddingRight : 20 }} >Social Links</h1>
            <div className='inner'>
                <a href="https://twitter.com/zekiblue" target="_blank" rel="noopener noreferrer">
                    <img className="logo" src="https://www.svgrepo.com/show/3967/twitter.svg" alt="twitter"/>
                </a>
                <a href="https://github.com/zekiblue" target="_blank" rel="noopener noreferrer">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github"/>
                </a>
                <a href="https://t.me/zekiblue" target="_blank" rel="noopener noreferrer">
                    <img className="logo" src="https://iconape.com/wp-content/png_logo_vector/cib-telegram.png" alt="telegram"/>
                </a>
            </div>
        </div>
    </Popup>
);