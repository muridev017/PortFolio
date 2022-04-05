import React from 'react'
import Card from "./Card"
import data from "./FeatureApi"
import "./Features.css"

const Features = () => {
  return (
    <>
        <section className='features top' id='features'>
            <div className='container'>
                <div className='heading'>
                    <h4>Projetos</h4>
                    <h1>O que fiz</h1>
                </div>

                <div className='content grid'>
                    {data.map((val,index) =>{
                        return <Card key={index} image={val.image} title={val.title} desc={val.desc} link={val.link}/>
                    })}
                         
                </div>
            </div>
        </section>
    </>
  )
}

export default Features