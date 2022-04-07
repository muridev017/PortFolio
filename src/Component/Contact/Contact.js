import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `Meu nome é ${data.fullname}. 
	Meu telefone é ${data.phone}. 
	Meu email é ${data.email}. 
	O assunto é  ${data.subject}. 
	A mensagem que quero mandar é : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='Contact' id='contato'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTATO</h4>
            <h1>Entre em contato comigo</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shadow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Murilo Rodrigues</h1>
                  <p>Desenvolvedor Web-Full Stack</p>
                  <p>Estou disponível para freelance.</p> <br />
                  <p>Email: murilorodriguesdev@gmail.com</p> <br />
                  <span>ME PROCURE</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                      <i className='fab fa-facebook-f'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shadow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>SEU NOME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>TELEFONE </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>ASSUNTO </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>MENSAGEM </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  ENVIAR MENSAGEM <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact