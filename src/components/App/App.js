import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starList: [
        {
          name: 'Menkar',
          diameter: 89,
        },
        {
          name: 'Kochab',
          diameter: 42,
        },
        {
          name: 'Hadar',
          diameter: 'who knows??',
        },
      ],
    }
  };

  render() {
    // let starListItemArray = [];
    // for loop here
    // for (let i = 0; i < this.state.starList.length; i++) {
    //   let starName = this.state.starList[i]
    //   starListItemArray.push(<li key={starName}>{starName}</li>);
    // }

    // const starListItemArray = this.state.starList.map(starName => {
    //   const newStar = <li key={starName}>{starName}</li>;
    //   return newStar;
    // });

    // const starListItemArray = this.state.starList.map(starName => {
    //   return <li key={starName}>{starName}</li>;
    // });

    // const starListItemArray = this.state.starList.map(starName => <li key={starName}>{starName}</li>);

    const starListItemArray = this.state.starList.map(star => <li key={star.name}>The star {star.name} is {star.diameter} suns in radius.</li>);

    return (
      <div className="App">
        {/* <p>Here's the list of stars</p>
        <p>The first item in the array is: {this.state.starList[0]}</p> */}
        <ul>
          {starListItemArray}
        </ul>
      </div>
    );
  }
}

export default App;
