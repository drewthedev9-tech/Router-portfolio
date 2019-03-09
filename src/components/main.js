
//  router board Main 
import React from 'react';
import { Switch, Route, } from 'react-router-dom';

import landingpage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume.js';



const Main = () => (
    <Switch>
            <Route exact path ="/" component={landingpage} />
            <Route path ="/aboutme" component={AboutMe} />
            <Route path ="/contact" component={Contact} />
            <Route path ="/projects" component={Projects}/>
            <Route path ="/Resume" component={Resume} />

    </Switch>
)

export default Main;