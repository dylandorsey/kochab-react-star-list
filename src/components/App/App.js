// vendor components
import React, { Component } from 'react';
import axios from 'axios';

// user-created components
import Introduction from '../Introduction/introduction';
import NewStar from '../../New Star/NewStar';
import StarList from '../StarList/StarList'
import NewStarForm from '../NewStarForm/NewStarForm';

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
      planetList: [],
    };
  }

  handleChangeFor = propertyName => event => {
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

  componentDidMount(page) {
    // when the component loads, make a request to the StarWarsAPI
    axios({
      method: 'GET',
      url: `https://swapi.co/api/planets/?${page}format=json`
    })
      .then((response) => {
        console.log(response);
        this.setState({
          planetList: [...this.state.planetList, ...response.data.results],
        })
      })
      .catch((error) => {
        console.log(error);
      })

  }
  

//   while resultsArray<response.data.count
// //
//   resultsArray.map(...resultsArray, response.data.results)
// //
//   resulsts array = 


//   limit = response.data.count



  render() {
    return (
      <div className="App">
        <Introduction />
        <NewStarForm currentStar={this.state.newStar} handleChangeForChild={this.handleChangeFor} handleSubmitChild={this.handleSubmit} />
        {/* here we are adding a prop, newStar */}
        <NewStar currentStar={this.state.newStar} />
        <br></br>
        <StarList starList={this.state.starList} />
        {/* <PlanetList planetList={this.state.planetList} /> */}
        <h2>Here's a list of planets:</h2>
        <ul>
            {this.state.planetList.map(planet =>
              <li key={planet.name}>
                {planet.name}
                </li>)}
          </ul>


      </div>
    );
  }
}

export default App;
