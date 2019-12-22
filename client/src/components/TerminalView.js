import React, { Component } from 'react';

class TerminalView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
       return ( 
            <div className = 'terminalView'> {this.props.selectedTab} </div>
        );
    }
}

export default TerminalView;