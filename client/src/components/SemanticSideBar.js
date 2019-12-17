import React, { Component } from 'react'; 
import DisplayPicture from './DisplayPicture';
import { Sidebar, Menu, Header } from "semantic-ui-react";

export default class SemanticSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: []
        }
    }

    async getTopics() {
        const res = await fetch('/getTopics')
        const body = res.json()
            .then(data => {
                this.setState({
                    topics: data.Topics
                })
            });

        if(res.status !== 200) {
            throw Error(body.message)
        }
    }

    componentDidMount() {
        this.getTopics(); 
    }

    renderTopics() {
        return (
            this.state.topics.map((element) => {
                return <Menu.Item as='a'> {element} </Menu.Item>
            })
        );
    }

    render() {
        return (
            <Sidebar
                as={Menu}
                animation='push'
                vertical
                visible
            >
            <DisplayPicture/>
            {this.renderTopics()}
            </Sidebar>
        )
    }
}