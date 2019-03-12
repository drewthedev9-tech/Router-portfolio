import React, {Component} from 'react';
// Imoprt from react-mdl to make the gid and cards used below.
import {Tabs, Tab, Grid, CardText,Cell,Card,CardTitle, CardActions,CardMenu, IconButton} from 'react-mdl';


class Projects extends Component {
    constructor (props){
        super(props);
        this.state = {activeTab:0};
    }
// Method for toggling between bars.
    toggleCategories(){
        // react projects
        if(this.state.activeTab === 0){
        return(
            <div className="projects-grid"> 
                {/* // all properties are from react-mdl to look up on cards. */}
                {/*  Project 1 /Robofriends */}
                <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style ={{color:'purple', height: '176px',background:'url(https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png) center / cover'}} >
                    Robo friends
                    </CardTitle>
                    <CardText>
                        A project that runs some basic state and filters names.
                    </CardText>
                    <CardActions border>
                        <button colored>Github</button>
                        <button colored>codePen</button>
                        <button colored>LiveDemo</button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
                {/* Project2 */}
                <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style ={{color:'purple', height: '176px',background:'url(https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png) center / cover'}} >
                    Project2
                    </CardTitle>
                    <CardText>
                        A project that runs some basic state and filters names.
                    </CardText>
                    <CardActions border>
                        <button colored>Github</button>
                        <button colored>codePen</button>
                        <button colored>LiveDemo</button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
                {/* project3 */}
                <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style ={{color:'purple', height: '176px',background:'url(https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png) center / cover'}} >
                    project3
                    </CardTitle>
                    <CardText>
                        A project that runs some basic state and filters names.
                    </CardText>
                    <CardActions border>
                        <button colored>Github</button>
                        <button colored>codePen</button>
                        <button colored>LiveDemo</button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
            </div>
            
            ) 
        } 
        // HTML/CSS
        else if (this.state.activeTab === 1) {
            return(
            <div><h1>This HTML/CSS</h1></div>
            )
        }  
        // Javascript
        else if (this.state.activeTab === 2) {
            return(
            <div><h1>This is Javascript</h1></div>
            )
        } 
        // MopngoDB
        else if (this.state.activeTab === 3) {
            return(
            <div><h1>This is MongoDB</h1></div>
            )
        }

    }

  render(){
        return(
            <div className ='category-tabs'>
            {/* got ths from react-dml tabs */}
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                 {/*THese tabs are indexed starting at 0 ... so on for togglecategories method above */}
                    <Tab>React</Tab>
                    <Tab>HTML/CSS</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>MOngoDB</Tab>
                </Tabs>
                {/* section under nav bar. */}
              
                     <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
               
                   
                
            </div>      
                
            
        )
    }
    

}

export default Projects ;