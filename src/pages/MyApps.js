// create react component

import React from 'react';

class MyApps extends React.Component {
  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
        items: [],
        ethprices: {'rates': {'USD': 0}},
        DataisLoaded: false
    };
}

// ComponentDidMount is used to
// execute the code 
/* componentDidMount() {
    fetch(
  "https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
} */

componentDidMount() {
  Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users'), 
    fetch('https://api.coinbase.com/v2/exchange-rates\?currency\=ETH')
  ]).then(([res1, res2]) => { 
       return Promise.all([res1.json(), res2.json()]) 
    })
    .then(([res1, res2]) => {
      this.setState({
        items: res1,
        ethprices: res2.data,
        DataisLoaded: true
      });
    })
}

/* componentDidMount2() {
    fetch(
      "https://api.coinbase.com/v2/exchange-rates\?currency\=ETH")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                currencies: json,
                DataisLoaded: true
            });
        })
} */

  render() {
    const { DataisLoaded, items, ethprices } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;

    return (
        <div className="inner">
        <br></br>
        <div>
        <ul>
	        <li className="title">Ethereum Details</li>
            <br></br>
            <ul>
            <li> price: {ethprices.rates.USD}
            </li>
            </ul>
        </ul>
        <ul>
	        <li className="title">Random User Details</li>
            <br></br>
            <ul>
            {
                items.slice(0,2).map((item) => ( 
                <li key = { item.id } >
                    <li>User_Name: { item.username }</li> 
                    <li>Full_Name: { item.name }</li> 
                    <li>User_Email: { item.email }</li> 
                    <br></br>
                </li>
                ))
            }
            </ul>
        </ul>
          
        </div>   
    </div>
    )
    }
}
      

export default MyApps;