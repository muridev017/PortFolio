import React from 'react'
import "./Home.css"

import skill1 from "../Pic/skill1.png"
import skill2 from "../Pic/skill2.png"
import skill3 from "../Pic/skill3.png"
import skill4 from "../Pic/skill4.png"
import skill5 from "../Pic/skill5.png"
import skill6 from "../Pic/skill6.png"
import { Typewriter } from 'react-simple-typewriter'



export const Home = () => {
    return (
        <>
            <section className='hero' id='inicio'>
                <div className='container.f_flex top'>
                    <div className='left top'>
                        <h3>SEJA BEM-VINDO</h3>
                        <h1>
                            Oi, me chamo <span>Murilo Rodrigues</span>
                        </h1>
                        <h2>
                            sou <span>
                                <Typewriter
                                    words={[' Desenvolvedor Web', ' Dev Front-end']}
                                    loop
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000} />
                            </span>
                        </h2>
                        <p>Estou em transição de carreira, formado em Biomedicina e já trabalhei profissionalmente como músico, hoje me encontro no mundo tech. </p>
                        <div className='hero_btn d_flex'>
                            <div className='col1'>
                                <h4>ME SIGA</h4>
                                <button className='btn_shadow'>
                                    <a href='https://www.linkedin.com/in/murilorodrigueswebdev/'>
                                    <i class="fa-brands fa-linkedin" />
                                    </a>
                                </button>
                                <button className='btn_shadow'>
                                    <a href='https://github.com/muridev017'>
                                    <i class="fa-brands fa-github" />
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className='col_1'>
                            <h4>HARD SKILLS</h4>
                            <button className='btn_shadow'>
                            <img src={skill1} alt='' />
                            </button>
                            <button className='btn_shadow'>
                                <img src={skill2} alt='' />
                            </button>
                            <button className='btn_shadow'>
                                <img src={skill3} alt='' />
                            </button>
                            <button className='btn_shadow'>
                                <img src={skill4} alt='' />
                            </button>
                            <button className='btn_shadow'>
                                <img src={skill5} alt='' />
                            </button>
                            <button className='btn_shadow'>
                                <img src={skill6} alt='' />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
