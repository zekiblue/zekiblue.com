// create react component

import React from 'react';


const InnerComponent = (props) => {
    return (
//        <div className="inner-component">
//        <h1>{props.title}</h1>
//        <p>{props.description}</p>
//        </div>
        <div className="inner">
        <br></br>
        <ul>
	        <li className="title">Welcome!</li>
            <br></br>
            <li className="subtitle">Here are some facts about me:</li>
            <br></br>
            <ul>
                <li className="s">- machine learning engineer</li>
                <li className="s">- big fan of web3</li>
                <li className="s">- i am a big fan of the Seattle Seahawks.</li>
                <li className="s">- Continious learner and builder</li>
            </ul>
        </ul>
    </div>
    );
}


export default InnerComponent;