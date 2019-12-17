import React, { Component } from 'react';

class TopicArea extends Component {

    consructor() {
        this.state = {
            topics: []
        };
    }

    async getTopics() {
        const res = await fetch('/getTopics')
        const body = res.json()
            .then(data => {
                return data;
            });

        if(res.status !== 200) {
            throw Error(body.message)
        }
    }

    componentDidMount() {
        this.getTopics().then (
            (data) => {
                this.setState({topics: data});
            }
        );
    }

    render() {
        return (
            <div className = 'topicArea'> Topic Areas </div>
        );
    }
}

export default TopicArea;