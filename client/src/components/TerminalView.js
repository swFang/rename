import React, { Component } from 'react';
import FunFacts from './FunFacts';
import FunkyProjects from './FunkyProjects';
import Introduction from './Introduction';
import Timeline from './Timeline';
import About from './About';

class TerminalView extends Component {

    constructor(props) {
        super(props);
    } 



    render() {
        return ( 
            <div className = 'terminalView'> 
                {/* <Introduction setRef={this.props.setRef}></Introduction>
                <About setRef={this.props.setRef}></About>
                <Timeline setRef={this.props.setRef}></Timeline>
                <FunkyProjects setRef={this.props.setRef}></FunkyProjects>
                <FunFacts setRef={this.props.setRef}></FunFacts> */}
            </div>
        );
    }
}

export default TerminalView;