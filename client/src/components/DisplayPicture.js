import React, { Component } from 'react';
import Anime from '../animeVert.jpg'

class DisplayPicture extends Component {
    render() {
        return (
            <div className='displayPicture'>
                <img src={Anime} />
            </div>
        );
    }
}

export default DisplayPicture;