import React from 'react';
import Header from '../main_page/header/header';
import Photos from './photos';

export default function Main() {
    return(
        <div className="main">
            <Header />
            <Photos />
        </div>
    )
}