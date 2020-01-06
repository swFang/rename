import React, { Component } from 'react';
import candidPhoto from '../candidPhoto.jpg';
import { Image } from 'semantic-ui-react';

class Introduction extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    
    componentDidMount() {
        this.props.setRef('Introduction', this.myRef);
        console.log(this.myRef);
    }

    render() {
        return (
            <div ref={this.myRef}>
                <Image className='Introduction' src={candidPhoto} />
            </div>
        );
    }
}

export default Introduction;