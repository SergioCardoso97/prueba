import React from 'react';
import './Header.css';
import {  Link } from "react-router-dom";
import Button from '@mui/material/Button';
import logoHeaderUrl from '../images/logoHeader.png';

function HeaderComponent(){
    return(
        <div className="padreHeader">
            <div className="hijoHeader">
                <img className='logoHeader' src={logoHeaderUrl} alt=""></img>
            </div>
            <div className="hijoHeader">
                <Button variant="text"><Link className='butonNav' to="/">Home</Link></Button>
                <Button variant="text"><Link className='butonNav' to="/characters">Characters</Link></Button>
                <Button variant="text"><Link className='butonNav' to="/episodes">Episodes</Link></Button>
                <Button variant="text"><Link className='butonNav' to="/madeby">Made by</Link></Button>
            </div>
        </div>
    );
}

export default HeaderComponent;