import React from 'react'

export const Card = (props) => {
    return (
        <>
            <div className='box btn_shadow'>
                <img src={props.image} alt=''></img>
                <h2>{props.title}</h2>
                <p> {props.desc}</p>

                <a href={props.link}>
                    <i class="fa-solid fa-arrow-right" />
                </a>
            </div>
        </>
    )
}

export default Card
