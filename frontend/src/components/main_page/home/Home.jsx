import React from 'react';
import { connect } from 'react-redux';
import Photos from './photos';

function Home({language}) {
    return(
        <div className='home'>
            <h1>{texts.title[language]}</h1>
            <Photos/>
        </div>
    )
}

const texts = {
    title: ['Welcome to Club Universo!', 'Bem-vindo ao portal do Clube Universo!']
}

const mSTP = state =>({
    language: state.ui.language
})

export default connect(mSTP)(Home);