// create react component

import React from 'react';

class DetailsAboutMe extends React.Component {
  render() {
    return (
        <div className="inner">
        <br></br>
        <ul>
	        <li className="title">Welcome!</li>
            <br></br>
            <li className="subtitle">I am machine learning engineer with webdev skills</li>
            <br></br>
            <li className="s">Here are some facts about me:</li>
            <ul>
                <li className="s">- machine learning engineer</li>
                <li className="s">- big fan of web3</li>
                <li className="s">- continious learner and builder</li>
                <li className="s">- always looking for new challenges</li>
            </ul>
            <li>
               Other things I like:  
               <ul>
                <li className="s">- music production with live instruments</li>
                <li className="s">- basketball</li>
                <li className="s">- diy projects with rasperry pi</li>
            </ul>
            </li>
        </ul>
    </div>
    )
    }
}

export default DetailsAboutMe;