import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Resume extends Component {
    render(){
        return(
            <div>
               <Grid>
                   <Cell col ={4}>
                        <div style = {{textAlign: 'center'}}>
                            <img
                                src ="https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/7-512.png"
                                alt="avatar"
                                style = {{height:"200px"}}

                            />
                        </div>
                        <h2 style = {{ paddingTop: '2em', }}>Andrew Ormond</h2>
                        <h4 style ={{Color:'Grey',}}>Programmer</h4>
                        <hr style ={{borderTop: '3px solid red', width:'50%' }}/>
                        <h5>Adress</h5>
                        <p>
                             New zealand
                        </p>
                        <h5>Phone</h5>
                        <p>123455</p>
                        <h5>E-mail</h5>
                        
                   </Cell>
                   <Cell className='resume-right-col' col={8}>
                    right side
                   </Cell>
               </Grid>
            </div>
        )
    }
    

}

export default Resume;