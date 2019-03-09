import React, {Component} from 'react';
import {Tabs, Tab} from 'react-mdl';


class Projects extends Component {
    constructor (props){
        super(props);
        this.state = {activeTab:0};
    }
    render(){
        return(
            <div className ='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChannge={(tabID) => this.setState({activeTab: tabID})} ripple >
                 {/*THese tabs are indexed starting at 0 ... so on  */}
                    <Tab>React</Tab>
                    <Tab>HTML/CSS</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>MOngoDB</Tab>
                </Tabs>

                <section className ='projects-grid'>
                    {this.toggleCategories()}
                </section>
            </div>
        )
    }
    

}

export default Projects ;