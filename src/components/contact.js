import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render(){
        return(
            <div className ="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h1>
                            Andrew Ormond
                        </h1>
                        <img
                        src="https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/7-512.png"
                        alt="avatar"
                        style = {{ height: '250px' }}
                        />
                        <p style ={{width:'75%', margin: 'auto', paddingTop: '1em'}}>   Feel free to contact me!</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className='contact-list'>
                        <List>
                            <ListItem>
                                <ListItemContent style ={{fontSize: '25px', fontFamily: 'Anton' }}>
                                <i className="fa fa-phone-square" aria-hidden='true'/>
                                # Phone number
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style ={{fontSize: '25px', fontFamily: 'Anton' }}>
                                <i className="fa fa-envelope-square" aria-hidden='true'/>
                                # Phone number
                                </ListItemContent>
                            </ListItem>
                            
                        </List>
                        </div>
                            
                    </Cell>
                </Grid>
               
            </div>
        )
    }
    

}

export default Contact;