import React from 'react'
import './style.css'
import data from '../data.js'

function Crew() {
    const [crews] = React.useState(data.crew)
    const [value,setValue] = React.useState(0)

    const { name , images , role , bio } = crews[value]
    const { png } = images

    

    return (
        <section className='crew'>
        <h1 className='header-text'><span>02</span> MEET YOUR CREW</h1>
        {
            crews
            &&
            <img className='crew-image' src={png} alt=''/>
        }
        <hr className='hr'/>
        <ul className='crew-navigation'>
            {
                crews.map((item,index)=>{
                    return(
                        <span key={index} className='crew-navigators'
                        onClick={
                            ()=>{
                                console.log(index)
                                setValue(index)
                                const navigators = document.querySelectorAll('.crew-navigators')
                                
                                navigators.forEach(navigator => {
                                    navigator.classList.remove('active')
                                })
                        
                                navigators[index].classList.add('active')
                            }
                        }></span>
                    )
                })
            }
        </ul>
        {
            crews
            &&
            <div className='crew-content'>
                <h1 className='role'>{role}</h1>
                <h1 className='name'>{name}</h1>
                <p className='paragraph'>{bio}</p>
            </div>
        }
    </section>
  )
}

export default Crew