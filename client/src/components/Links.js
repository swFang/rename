import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import octocat from '../GitHub-Mark-32px.png';

class Links extends Component {
    render() {
        return (
            <Container fluid textAlign='center' className='linkIcons'>
                <Grid columns={2}>
                    <Grid.Column>
                        <img src={octocat} className='linkIcon' width="32px" height="32px"/>
                    </Grid.Column>
                    <Grid.Column>
                        <img src={octocat} className='linkIcon' width="32px" height="32px"/>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default Links;