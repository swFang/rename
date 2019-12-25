import React, { Component } from 'react';
import WorkInProgress from './WorkInProgress';
class TerminalView extends Component {

    constructor(props) {
        super(props);
        this.state = ({SelectedComponent: 'Default'})
    }

    selectComponentToRender() {
        switch (this.props.Topic) {
            case 'About' :
                return <WorkInProgress />;
            case 'Projects' :
                return <WorkInProgress />;
            case 'Resume' :
                return <WorkInProgress />;
            case 'Artwork' :
                return <WorkInProgress />;
            case 'Travel Blog' :
                return <WorkInProgress />;
            default :
                return 'Landing Page';
        }
    }

    render() {
        return ( 
            <div className = 'terminalView'> {this.selectComponentToRender()} </div>
        );
    }
}

export default TerminalView;