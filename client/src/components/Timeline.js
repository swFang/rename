import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import ubcPic from '../ubc.jpg';
import sapPic from '../sap.jpg';
import 'react-vertical-timeline-component/style.min.css';
import book from '../book.svg';
import phone from '../phone.svg';

class Timeline extends Component {
    render() {
        return (
            <div className='Section-Timeline'> 
            <h1> So How'd I get here? </h1>
                <VerticalTimeline className='VerticalTimeline'>
                    <VerticalTimelineElement 
                        date='2019/09/01 - 2020/04/01'
                        icon={<img src={phone} class="svg" width="30px" height="30px"/>}
                        iconStyle={{ height:"40px", width:"40px", paddingLeft:"5px", paddingTop:"6px"}} >
                            <h3 className="vertical-timeline-element-title"> SAP Agile Developer Mobile Team Intern </h3>
                            <h4 className="vertical-timeline-element-subtitle">Vancouver, BC</h4>
                            <img src={sapPic} className="timelinePic" />
                            <p>
                            FIRST INTERNSHIP! WOOPEE! <br/>
                            All that said, worked on the Mobile team for Software Analytics Cloud. Mostly front-end development ( got some production code 
                            in there!!! ) with a dash of testing, some Performance and Reliability testing and lots and LOTS of learning general workplace
                            things ( ie. jira, scrum, sprint meetings... etc ). 
                            </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement 
                        date='2016/09/01 - 2022/06/01'
                        icon={<img src={book} class="svg" width="30px" height="30px"/>}
                        iconStyle={{ height:"40px", width:"40px", paddingLeft:"6px", paddingTop:"6px"}} >
                            <h3 className="vertical-timeline-element-title"> University of British Columbia Bachelors of Science in Computer Science</h3>
                            <h4 className="vertical-timeline-element-subtitle">Vancouver, BC</h4>
                            <img src={ubcPic} className="timelinePic" />
                            <p>
                            Started off in general Arts before finding passion for Computer Science in the 2nd year. Never looked back since transferring to CS in 2018. Currently
                            in 3rd year and doing co-op ( its the equivalent of internships for my American friends ). Finished intermediate algorithms, OS, Machine Learning classes.
                            </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        );
    }
}

export default Timeline;