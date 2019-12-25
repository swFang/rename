import React, { Component } from 'react';
import Placeholder from '../animeVert.jpg'

class WorkInProgress extends Component {
    render() {
        return (
            <div className='WIP'>
                <div> Work is In Progress... </div>
                <img src={Placeholder} />
            </div>
        );
    }
}

export default WorkInProgress;