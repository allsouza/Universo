import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../main_page/header/header';
import About from './about/about';
import Home from './home/Home';

export default function Main() {
    return(
        <div className="main">
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
            </Switch>
        </div>
    )
}