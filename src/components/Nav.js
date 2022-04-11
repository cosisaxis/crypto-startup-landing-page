import React from 'react'
import { useState } from 'react'
import { icons } from 'react-icons'
import {FaBars, FaTimes} from 'react-icons/fa' 
import './Nav.css'

const Nav = () => {
const [buttonClick, setButtonClick] = useState(false);

const clicker = () => setButtonClick(!buttonClick)
    


  return (
    <div className='head'>
        <div className='container'>
            <h1>COINEX</h1>
            <ul className={buttonClick? 'menu active': 'menu'}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>Feature</a>
                </li>
                <li>
                    <a href='/'>Earn</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
            </ul>
            <div className='btn-nav'>
                <button className ='btn'>Connect Wallet</button>
            </div>
            <div className='burger' onClick={clicker}>
            {buttonClick ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                

            </div>
        </div>
    </div>
  )
}

export default Nav