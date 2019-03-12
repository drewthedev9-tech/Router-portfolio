import React, { Component } from 'react';
import './App.css';
// Gotta imoprt these with React-mdl.
import {Layout, Header, Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main.js'; 
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout style={{background: 'url(https://images.unsplash.com/photo-1549605659-32d82da3a059?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80) center / cover'}}>
        {/* link back to landing page */}
    <Header transparent className='header-color' title={<Link to="/" style={{ textDecoration : 'none', color:'white'}}>Myportfolio</Link>} scroll>
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title={<Link to="/" style={{ textDecoration : 'none', color:'white'}}>Myportfolio</Link>}>
                <Navigation>
                <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
              <Main/>
            </Content>
        </Layout>
      </div>
   
    );
  }
}

export default App;
