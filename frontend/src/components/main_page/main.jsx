import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../main_page/header/header';
import About from './about/about';
import Contact from './contact/Contact';
import History from './history/history';
import Home from './home/Home';

export default function Main() {
    return(
        <div className="main">
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/history' component={History}/>
                <Route exact path='/contact' component={Contact}/>
            </Switch>
        </div>
    )
}