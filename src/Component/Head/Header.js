import React, { useState } from "react"
import "./header.css"
import logo from "../Pic/logo.png"

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img src={logo} alt=''/>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              <li>
                <a href='#inicio'>início</a>
              </li>
              <li>
                <a href='#projetos'>projetos</a>
              </li>
              <li>
                <a href='#curriculo'>currículo</a>
              </li>
              <li>
                <a href='#contato'>contato</a>
              </li>
              <li>
                <button className='home-btn'>CONTRATE AGORA.</button>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i class="fa-solid fa-xmark"/> :<i class="fa-solid fa-bars"/>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header