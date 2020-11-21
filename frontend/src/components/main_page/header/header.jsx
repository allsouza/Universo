import React from 'react';
import logo from '../../../images/logo_dark_bkgrd.png'

export default function PageHeader() {
    return(
        <section className="header">
            <div className="right">
                <img src={logo} alt="Clube Universo"/>
            </div>
            <nav className='left'>
                <ul>
                    <li>Pathfinder Online</li>
                </ul>
            </nav>
        </section>
    )
}