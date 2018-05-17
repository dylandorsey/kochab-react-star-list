import React from 'react';

// function components do not have access to 'this' in the same way that class components have it
// so we pass in props

// function components are also called "pure" or "dumb" components


const NewStarForm = props => (
    <form onSubmit={props.handleSubmitChild}>
        New star name: <input value={props.currentStar.name} onChange={props.handleChangeForChild('name')} placeholder="star name" />
        <br></br>
        New star radius (in Suns): <input value={props.currentStar.radius} onChange={props.handleChangeForChild('radius')} placeholder="star radius" />
        <input type="submit" value="submit new star" />
    </form>
);
export default NewStarForm;
