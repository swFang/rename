
import React, { Component } from 'react';
import TerminalView from './components/TerminalView';
import SemanticSidebar from './components/SemanticSideBar';
import './stylesheets/Style.css';

class App extends Component {
	state = {
		data: null,
		Topic : "Default landing Page"
	};

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

	render() {	
		return (
		<div className="SiteContainer">
			<SemanticSidebar updateSelectedTab={this.updateSelectedTab.bind(this)} />
			<div className="terminal">
				<TerminalView Topic={this.state.Topic}> </TerminalView>
			</div>
		</div>
		);
	}
}

export default App;
