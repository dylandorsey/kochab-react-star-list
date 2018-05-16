import React, { Component } from 'react';

const emptyStar = {
  name: '',
  radius: '',
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starList: [
        {
          name: 'Menkar',
          radius: 89,
        },
        {
          name: 'Kochab',
          radius: 42,
        },
        {
          name: 'Hadar',
          radius: 'who knows??',
        },
      ],
      newStar: emptyStar,
    };
  }
  handleNewStar = propertyName => event => {
    console.log('input says: ', event.target.value);
    this.setState({
      newStar: {
        ...this.state.newStar,
        [propertyName]: event.target.value,
      }
    }
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      starList: [...this.state.starList, this.state.newStar],
      newStar: emptyStar,
    });
    console.log(this.state);
  }

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

    const starListItemArray = this.state.starList.map(star => <li key={star.name}>The star {star.name} is {star.radius} suns in radius.</li>);

    return (
      <div className="App">
        {/* <p>Here's the list of stars</p>
        <p>The first item in the array is: {this.state.starList[0]}</p> */}
        <form onSubmit={this.handleSubmit}>
          New star name: <input value={this.state.newStar.name} onChange={this.handleNewStar('name')} placeholder="star name" />
          <br></br>
          New star radius (in Suns): <input value={this.state.newStar.radius} onChange={this.handleNewStar('radius')} placeholder="star radius" />
          <input type="submit" value="submit new star" />
        </form>
        <br></br>
        <ul>
          {starListItemArray}
        </ul>
      </div>
    );
  }
}

export default App;
