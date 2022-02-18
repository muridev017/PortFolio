import React from 'react'
import './Header.css'
import logo from './Header.css'

const Header = () => {
    return (
        <>
            <header className='header' >
                <div className='container d_flex'>
                    <div className='logo'>
                        <img src={logo} alt='' />
                    </div>

                    <div className='navLink'>
                        <ul className='link f_flex uppercase'>
                            <li>
                                <a href='#home'>início</a>
                            </li>
                            <li>
                                <a href='#features'>recursos</a>
                            </li>
                            <li>
                                <a href='#portfolio'>portfolio</a>
                            </li>
                            <li>
                                <a href='#resume'>currículo</a>
                            </li>
                            <li>
                                <a href='#clients'>clientes</a>
                            </li>
                            <li>
                                <a href='#gitHub'>gitHub</a>
                            </li>
                            <li>
                                <a href='#contact'>Contato</a>
                            </li>
                            <li>
                                <button className='home-btn'>Contrate agora.</button>
                            </li>
                        </ul>
                        <button className='toggle'>
                            <i className='fas fa-times'></i>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header