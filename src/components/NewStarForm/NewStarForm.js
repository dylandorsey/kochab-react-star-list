import React, { Component } from 'react';

class NewStarForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmitChild}>
                New star name: <input value={this.props.currentStar.name} onChange={this.props.handleChangeForChild('name')} placeholder="star name" />
                <br></br>
                New star radius (in Suns): <input value={this.props.currentStar.radius} onChange={this.props.handleChangeForChild('radius')} placeholder="star radius" />
                <input type="submit" value="submit new star" />
            </form>
        );
    }
}

export default NewStarForm;
