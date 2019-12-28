import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Timeline extends Component {
    render() {
        return (
            <VerticalTimeline className='VerticalTimeline' layout='1-column'>
                <VerticalTimelineElement 
                    date='2019/12/17'>
                        test
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    date='2019/12/16'>
                        test2
                </VerticalTimelineElement>
            </VerticalTimeline>
        );
    }
}

export default Timeline;