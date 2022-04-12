import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './FooterSection.css'

const FooterSection = () => {
  return (
    <div className='foot'>
        <div className='container'>
            <div className='col col-1'>
                <h1>Coinex</h1>
            </div>
            <div className='col'>
                <h5>Support</h5>
                <span className='bar'></span>
                <a href="/">Contact</a>
                <a href="/">Chat</a>
                <a href="/">Guide</a>
                <a href="/">FAQ</a>
            </div>
            <div className='col'>
                <h5>Developers</h5>
                <span className='bar'></span>
                <a href="/">Cloud</a>
                <a href="/"></a>
                <a href="/">Pro</a>
                <a href="/">API</a>
            </div>
            <div className='col'>
                <h5>Company</h5>
                <span className='bar'></span>
                <a href="/">About</a>
                <a href="/">Info</a>
                <a href="/">Legal</a>
                <a href="/">Privacy</a>
            </div>
            <div className='col'>
                <h5>Support</h5>
                <span className='bar'></span>
                <a href="/"><FaFacebook className='icon'/></a>
                <a href="/"><FaTwitter className='icon'/></a>
                <a href="/"><FaLinkedin className='icon'/></a>
                <a href="/"><FaGithub className='icon'/></a>
            </div>
        </div>
    </div>
  )
}

export default FooterSection