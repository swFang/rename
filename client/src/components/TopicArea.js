import React, { Component } from 'react';

class TopicArea extends Component {

    async getTopics() {
        const res = await fetch('/getTopics')
        const body = res.json()
            .then(data => {
                console.log(data);
            });

        if(res.status !== 200) {
            throw Error(body.message)
        }

        console.log(body);
    }

    componentDidMount() {
        this.getTopics();
    }

    render() {
        return (
            <div className = 'topicArea'> Topic Areas </div>
        );
    }
}

export default TopicArea;