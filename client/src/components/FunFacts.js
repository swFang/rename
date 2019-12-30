import React, { Component } from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';

class FunFacts extends Component {
    render() {
        return (
            <div>
                <h1> Something about myself you say? </h1>
                <Container fluid textAlign='center'>
                    <Grid columns={3} padded='vertically'>
                        <Grid.Column>
                            <h2> In the Pursuit of Greatness </h2>
                            <p>
                                Ever since we were young, we're taught to look up to the greats of the world. Einstein, Steve Jobs,
                                Bill Gates... the list could go on and on. But as I've grown up, I'm finding myself defining greatness 
                                slightly differently. Maybe greatness isn't found in the limelight we're all so accustomed of associating 
                                with it, but rather behind the scenes in the darkest hours of the night. Whatever my conclusion will be 
                                in the future is, <br/> <br/> I guess you could say I'm in pursuit of my own little patch of Greatness.
                                <Image></Image>
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <h2> I'm an Adventurer </h2>
                            <p>
                                From last minute international trips, to backcountry camping count me in!
                                Funny story, the day after I got the offer letter from SAP, I booked my flight
                                to Taiwan, Shanghai and Tibet. A couple weeks later, I found myself immersed in the heart of 
                                Tibet, the Potola 
                                Palace and later yet at the base of Everest. It was an Adventure of a lifetime. 
                                <Image></Image>
                                There's a certain beauty about discovering and experiencing different cultures, but still finding
                                the same human condition present in every and all of them.
                                <br/>
                                <br/>
                                Heres to the next Adventure life holds.
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <h2> I'm a Sporty Dude (kind of) </h2>
                            <p>
                                Volleyball, Ultimate, Skiing, Hiking... I could go on about all the sports I enjoy. But 
                                most of all, I enjoy the thrill and bonding you gain from any team sports. With the exception
                                of Skiing ( which is just pure adredaline to me ), Most of my memorable moments in sports are 
                                related to overcoming giants with crazy teamwork and communication.
                                <Image></Image>
                                <br/>
                                <br/>
                                Can I get a Hurrah for teamwork?!
                            </p>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default FunFacts;