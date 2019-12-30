import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import book from '../book.svg';
import phone from '../phone.svg';

class FunkyProjects extends Component {
    render() {
        return (
            <div className='Section-Timeline'> 
            <h1> You want to hear about some funky projects? </h1>
                <VerticalTimeline className='VerticalTimeline' layout='2-columns'>
                    <VerticalTimelineElement 
                        date='2018-01-01 - 2019-10-06'
                        icon={<img src={phone} class="svg" width="30px" height="30px"/>}
                        iconStyle={{ height:"40px", width:"40px", paddingLeft:"5px", paddingTop:"6px"}} >
                            <h3 className="vertical-timeline-element-title"> Emaily </h3>
                            <p>
                            My first somewhat impressive web-app! SAS built on a MERN stack that bulk sends yes/no surveys to a list of emails. 
                            Authenticates users via auth2 flow, and charges credits for each email. 
                            </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement 
                        date='2019-01-19 - 2019-03-23'
                        icon={<img src={book} class="svg" width="30px" height="30px"/>}
                        iconStyle={{ height:"40px", width:"40px", paddingLeft:"6px", paddingTop:"6px"}} >
                            <h3 className="vertical-timeline-element-title"> BrawlStars 2 </h3>
                            <p>
                            A first person shooter with a twist built on Unity with my friend Maya! Wrote C# scripts that auto spawned zombies that follow the 
                            player. Shooting did no damage zombies, but rather pushed them back. If you pushed zombies into fires, it would slowly lose hp. 
                            </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement 
                        date='Totally forgot the time since this wasnt on Github'
                        icon={<img src={book} class="svg" width="30px" height="30px"/>}
                        iconStyle={{ height:"40px", width:"40px", paddingLeft:"6px", paddingTop:"6px"}} >
                            <h3 className="vertical-timeline-element-title"> Raspberry Pi Smart Mirror </h3>
                            <p>
                            Set up a Pi to become a smart mirror! Learned A LOT about Linux and Raspbian in particular. Used MagicMirror repo as a base and set 
                            up dependencies for a plethora of other add-on packages others built. Created multiple CRON jobs and scripts to automatically turn 
                            on/off the pi and run the MagicMirror repo on startup. 
                            </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        );
    }
}

export default FunkyProjects;