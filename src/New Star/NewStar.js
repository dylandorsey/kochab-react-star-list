import React, { Component } from 'react';

class NewStar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>
            The new star is named {JSON.stringify(this.props.currentStar.name)}
            and it has a radius of {JSON.stringify(this.props.currentStar.radius)}
            </p>
        );
    }
}

export default NewStar;
