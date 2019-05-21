import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import '../css/Dashboard.css';
import Home from './Home';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Profile from './Profile';
class Dashboard extends React.Component {
    
    render() {
        return (
            <BrowserRouter>
            <div className="Dashboard">
                {/* Jangan DIotak atik */}
                <div className="background"><div className="kiri"></div><div className="kanan"></div></div>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
            </BrowserRouter>
        )
    }
}

export default Dashboard;