import React from 'react';
import './intro.css';

export default function Intro() {
    return (
        <div>
            <div id='home'>
                <div className={'intro-background intro-backgrounds'}/>
                <div className={'intro-text text'}>Reikia pagalbos mokantis? Čia lengvai ir greitai rasi norimo dalyko koorepetitorių ir užsisakysi pamoką</div>
                <div className={'border-line'}/>
            </div>
            <div id='student'>
                <div className={'for-student intro-backgrounds'}/>
                <div className={'for-student-text text'}>Naudotis labai paprasta, prisijunk ir gauk pagalbą</div>
                <div className={'border-line'}/>
            </div>
            <div id='teacher'>
                <div className={'for-teacher intro-backgrounds'}/>
                <div className={'for-teacher-text text'}>Naudotis labai paprasta, prisijunk ir užsidirbk</div>
                <div className={'border-line'}/>
            </div>
            <div id='contact' className={'contact'}>
                <h2>Something here: contacts, policies, duk...</h2>
            </div>
        </div>
    )
}