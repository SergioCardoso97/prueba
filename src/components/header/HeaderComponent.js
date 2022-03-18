import React from 'react';
import './Header.css';
import {  Link } from "react-router-dom";
import Button from '@mui/material/Button';
import logoHeaderUrl from '../images/logoHeader.png';
import {FaHome} from 'react-icons/fa'
import { RiAliensFill } from 'react-icons/ri';
import {IoTvSharp} from 'react-icons/io5';
import {IoIosContact} from 'react-icons/io';
function HeaderComponent(){
    return(
        <div className="padreHeader">
            <div className="hijoHeader">
                <img className='logoHeader' src={logoHeaderUrl} alt=""></img>
            </div>
            <div className="hijoHeader">
                <Button variant="text"><Link className='butonNav' to="/"><FaHome />  Home</Link></Button>
                <Button variant="text"><Link className='butonNav' to="/characters"><RiAliensFill />  Characters</Link></Button>
                <Button variant="text"><Link className='butonNav' to="/episodes"><IoTvSharp/>  Episodes</Link></Button>
                <Button variant="text"><Link className='butonNav' to="/madeby"><IoIosContact/>  Made by</Link></Button>
            </div>
        </div>
    );
}

export default HeaderComponent;