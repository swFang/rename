
import React, { Component } from 'react';
import TerminalView from './components/TerminalView';
import SemanticSidebar from './components/SemanticSideBar';
import './stylesheets/Style.css';
import * as Scroll from 'react-scroll';
import FunFacts from './components/FunFacts';
import FunkyProjects from './components/FunkyProjects';
import Introduction from './components/Introduction';
import Timeline from './components/Timeline';
import About from './components/About';

let scroll = Scroll.animateScroll;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = ({
			data: null,
			Topic : "Default landing Page",
			Introduction: {},
			About: {},
			Timeline: {},
			FunkyProjects: {},
			FunFacts: {},
		});
		this.setRef = this.setRef.bind(this);
		this.scrollToElement = this.scrollToElement.bind(this);
	}

	updateSelectedTab(input) {
		this.setState({Topic: input});	
	}

	componentDidMount() {
		// Call our fetch function below once the component mounts
		this.callBackendAPI()
		.then(res => this.setState({ data: res.express }))
		.catch(err => console.log(err));
	}
		// Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
	callBackendAPI = async () => {
		const response = await fetch('/express_backend');
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message) 
		}
		return body;
	};

	setRef(name, ref) {
		this.setState({[name]: ref});
		console.log(this.state);
	}  
	
	scrollToElement(name) {
		scroll.scrollToTop();
	}

	render() {	
		return (
		<div className="SiteContainer">
			<SemanticSidebar scrollToElement={this.scrollToElement} updateSelectedTab={this.updateSelectedTab.bind(this)} />
			<div className="terminal">
				<TerminalView Topic={this.state.Topic} setRef={this.setRef}/> 
				<Introduction setRef={this.setRef}></Introduction>
				<About setRef={this.setRef}></About>
				<Timeline setRef={this.setRef}></Timeline>
				<FunkyProjects setRef={this.setRef}></FunkyProjects>
				<FunFacts setRef={this.setRef}></FunFacts>
			</div>
		</div>
		);
	}
}

export default App;
