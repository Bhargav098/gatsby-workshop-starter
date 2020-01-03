import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/BB260F44-C3FF-47CC-A0B4-873C3FAABFDFL0001.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Hi I am Bhargav </strong><br />and this is my portfolio<br />
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
