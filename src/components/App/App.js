import React, { Component } from 'react';
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

  render() {
    return (
      <div className="App">
        <Introduction/>
        <NewStarForm currentStar={this.state.newStar} handleChangeForChild={this.handleChangeFor} handleSubmitChild={this.handleSubmit}/>
        {/* here we are adding a prop, newStar */}
        <NewStar currentStar={this.state.newStar}/>
        <br></br>
        <StarList starList={this.state.starList}/>

      </div>
    );
  }
}

export default App;
