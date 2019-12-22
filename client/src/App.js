
import React, { Component } from 'react';
import DisplayPicture from './components/DisplayPicture';
import TopicArea from './components/TopicArea';
import TerminalView from './components/TerminalView';
import SemanticSidebar from './components/SemanticSideBar';
import SidebarExampleSidebar from './components/test.js';
import './stylesheets/Style.css';

class App extends Component {
	state = {
		data: null,
		selectedTab: "Default landing Page"
	};



	updateSelectedTab(input) {
		this.setState({selectedTab: input});	
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

	render() {	
		return (
		<div className="SiteContainer">
			<SemanticSidebar updateSelectedTab={this.updateSelectedTab.bind(this)} />
			{/* <div className = "SideBar">
				<DisplayPicture></DisplayPicture>
				<TopicArea></TopicArea>
			</div> */}
			<div className="terminal">
				<div className = "terminalBar"/>
				<TerminalView selectedTab={this.state.selectedTab}> </TerminalView>
			</div>
		</div>
		);
	}
}

export default App;
