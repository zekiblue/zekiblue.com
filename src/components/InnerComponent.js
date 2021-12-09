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
	        <li className="title">Welcome!</li>
            <br></br>
            <li className="s">I am machine learning engineer. I love building and learning along the way. </li>
        </ul>
    </div>
    );
}


export default InnerComponent;