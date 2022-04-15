import React from 'react'
import { useState } from 'react'
import { icons } from 'react-icons'
import {FaBars, FaTimes} from 'react-icons/fa' 
import './Nav.css'
import { ethers } from 'ethers'


const Nav = () => {
const[errorMsg, setErrorMsg] = useState(null);
const[defaultAcc, setDefaultAcc] = useState(null);
const [connectText, setConnectText] = useState('Connect')
const [buttonClick, setButtonClick] = useState(false);
const clicker = () => setButtonClick(!buttonClick)

const walletConnect = () =>{
    if(window.ethereum){
        window.ethereum.request({method: "eth_requestAccounts"})
        .then(result =>{
            accountChangeHandler(result[0]);
            setConnectText('Connected') 
        })
    } else {
        setErrorMsg('need to install metamask');
    }
}

const accountChangeHandler =(newAccount) =>{
    setDefaultAcc(newAccount)

}
 

  return (
    <div className='head'>
        <div className='container'>
            <h1 className='header-coin'>COINEX</h1>
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
                <li></li>
            </ul>
            
            <div className='btn-nav'>
                <button className ='btn' onClick={walletConnect}>{connectText}</button>
            </div>
            <div className='burger' onClick={clicker}>
            {buttonClick ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
            </div>
        </div>
    </div>
  )

  
}

export default Nav