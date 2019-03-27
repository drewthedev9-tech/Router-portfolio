import React, {Component} from 'react';
// imoprt the grid sysetm from react-mdl to use cells and grids.
import {Grid, Cell} from 'react-mdl';


class Landing extends Component {
    render(){
        return(
            <div style = {{ width: '100%', margin:'auto'}}>
               <Grid className='landing-grid'>
               {/* does the cell size 1..12 being biggest */}
                    <Cell col={12}>
                        <img
                        src="https://avatarfiles.alphacoders.com/335/33557.jpg"
                        alt="Avatar"
                        className ="avatar-img"
                        />
                        <div className='banner-text'>  
                            <h1>
                            Full Stack Developer whats up.
                            </h1>
                            <hr/>
                            <p> 
                            HTML/CSS | Javascript | React | NodeJS | Express | MongoDB
                            </p>
                            <div className = 'social-links'> 
                                {/* github  */}
                                <a href='http//google.com' rel="noopener noreferer" target="_blank">
                                <i className="fab fa-github icon-5x" aria-hidden="true"></i>
                                </a>

                                {/* LinkedIn */}
                                   {/* github  */}
                                   <a href='http//google.com' rel="noopener noreferer" target="_blank">
                                <i className="fab fa-linkedin" aria-hidden="true"></i>
                                </a>
                            </div>

                        </div>
                       
                    
                        
                    </Cell>
               </Grid>
            </div>
        )
    }
    

}

export default Landing;