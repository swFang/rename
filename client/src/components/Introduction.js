import React, { Component } from 'react';
import candidPhoto from '../candidPhoto.jpg';
import { Image } from 'semantic-ui-react';

class Introduction extends Component {
    render() {
        return (
            <div>
                <Image className='Introduction' src={candidPhoto} />
            </div>
        );
    }
}

export default Introduction;