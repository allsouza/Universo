import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { setLanguage } from '../../../actions/ui_actions';
import logo from '../../../images/logo_dark_bkgrd.png'

function PageHeader({language, setLanguage}) {
    const history = useHistory();

    useEffect(()=> {
        Array.from(document.querySelectorAll('.flag')).forEach(ele =>{
            if(ele.id === language){
                ele.classList.add('selected')
            }
            else{
                ele.classList.remove('selected')
            }
        })
    }, [language])

    return(
        <section className="header">
            <div className="left">
                <img
                    onClick={() => history.push('/')} 
                    src={logo} 
                    alt="Clube Universo"/>
            </div>
            <div className='center'>
                <nav>
                    <Link to='/'>{languages.home[language]}</Link>
                    <Link to='/about'>{languages.about[language]}</Link>
                    <Link to='/history'>{languages.history[language]}</Link>
                    <Link to='/ideals'>{languages.ideals[language]}</Link>
                    <Link to='/contact'>{languages.contact[language]}</Link>
                </nav>
            </div>
            <div className='right'>
                <div className='flags'>
                    <img id="0" className={"flag"} onClick={() => setLanguage("0")} src="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-round-250.png" alt=""/>
                    <img id="1" className={"flag"} onClick={() => setLanguage("1")} src="https://cdn.countryflags.com/thumbs/brazil/flag-round-250.png" alt="" />
                </div>
            </div>
        </section>
    )
}

const languages = {
    home: ['Home', 'Pricipal'],
    about: ['Who are we?', 'Quem somos?'],
    history: ['Pathfinder History', 'História dos Desbravadores'],
    ideals: ['Ideals', 'Ideais'],
    contact: ['Contact Us', 'Entre em Contato']
}

const mSTP = state => ({
    language: state.ui.language
})

const mDTP = dispatch => ({
    setLanguage: language => dispatch(setLanguage(language))
})

export default connect(mSTP, mDTP)(PageHeader)
