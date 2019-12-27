import React, { Component } from 'react';
import Placeholder from '../animeVert.jpg'
import { Image } from 'semantic-ui-react'
// import about from '../Test-About.html';

class About extends Component {
    render() {
        return (
            <div className='WIP'>
                <h1> Welcome to my humble abode.</h1>
                <p className='firstPara'>
                    If you're on this site, that probably means {'      '}
                    you identify in one of the following categories: You're a recruiter that's hiring,
                    you're some company that I applied for, or you're a friend that got unknowingly
                    roped into checking out my website. Sorry! 
                    <br/>
                    <br/>
                    As to why I've made this site... well 
                    thats thanks to all the internship applications making me feel bad leaving "personal site"
                    blank on every damn application.
                    <br/>
                    <br/>
                    "IT SHALL BE BLANK NO LONGER!".
                </p>
                <br/>
                <Image src={Placeholder} size='tiny' centered />
                <br/>
                <h1> Givin' the people what they want...</h1>
                <p>
                    Regardless of why you've decided to visit my site and read about me, I guess you 
                    have to give people what the came for, so here goes. As of today (2019-12-26), I am
                    3rd year Computer Science Student (go figure) from UBC. 
                    <br/>
                    <br/>
                    <strong>Why did I go into CS you may ask?</strong>
                    <br/>
                    <br/>
                    Well, I'd really want to say some altruistic goal like using tech to solve world hunger, 
                    or creating world peace, but in reality I think I'm just good at it, and solving problems 
                    makes me happy. Making myself happy... well, isn't that the whold meaning of life? 
                    <br/>
                    <br/>
                    <strong>Tell me something that differentiates me you say?</strong>
                    <br/>
                    <br/>
                    Hmm... well, thats a significantly tougher question to answer. I think really, deep down
                    everyone is quite similar, but if you REALLLY need an answer, I guess it would be my 
                    attitude. 
                    <br/>
                    <br/>
                    'Fall 7 times, stand up 8'
                    <br/>
                    <br/>
                    Thats litterally my whole life in 1 quote. I love trying new things, especially 
                    when I get a challenge that I deem
                    close to impossible. It gives me the biggest opportunities to grow the fastest in the 
                    shortest amount of time.
                    <br/>
                    And I apply this mentality to every single part of my life. 
                    <br/>
                    <br/>
                    Oh, and I also like volleyball, ultimate, anime, kdramas, tv shows, gaming (it's what got
                    me into this whole cs thing)... and the list goes on. :)    
                </p>

            </div>
        );
    }
}

export default About;