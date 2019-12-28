import React, { Component } from 'react';
import WorkInProgress from './WorkInProgress';
import FunFacts from './FunFacts';
import FunkyProjects from './FunkyProjects';
import Introduction from './Introduction';
import Links from './Links';
import Timeline from './Timeline';
import About from './About';
class TerminalView extends Component {

    constructor(props) {
        super(props);
        this.state = ({SelectedComponent: 'Default'})
    }

    selectComponentToRender() {
        switch (this.props.Topic) {
            case 'Introduction' :
                return <WorkInProgress />;
            case 'About' :
                return <About />;
            case 'Timeline' :
                return <WorkInProgress />;
            case 'Funky Projects' :
                return <WorkInProgress />;
            case 'Fun Facts' :
                return <WorkInProgress />;
            case 'Github, Linkedin... etc' :
                return <WorkInProgress />;
            default :
                return 'Landing Page';
        }
    }

    render() {
        return ( 
            <div className = 'terminalView'> 
                <Introduction></Introduction>
                <About></About>
                <Timeline></Timeline>
                <FunkyProjects></FunkyProjects>
                <FunFacts></FunFacts>
                <Links></Links>
            </div>
        );
    }
}

export default TerminalView;