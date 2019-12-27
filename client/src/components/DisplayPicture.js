import React, { Component } from 'react';
import Anime from '../animeVert.jpg'
import { Image } from 'semantic-ui-react'

class DisplayPicture extends Component {
    render() {
        return (
            <div className='displayPicture'>
                <Image className='sidebarPic' src={Anime} size='small' circular/>
            </div>
        );
    }
}

export default DisplayPicture;