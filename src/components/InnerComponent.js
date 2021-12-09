// create react component

import React from 'react';


const InnerComponent = (props) => {
    return (
//        <div className="inner-component">
//        <h1>{props.title}</h1>
//        <p>{props.description}</p>
//        </div>
        <div className="inner">
        <ul>
	        <li className="s">Welcome to my page!</li>
            <li className="s">A system error has occurred. Please reboot your Mac.</li>
        </ul>
    </div>
    );
}


export default InnerComponent;