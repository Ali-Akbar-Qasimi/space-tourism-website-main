import React from 'react'
import './style.css'
import data from '../data.js'
function Technology() {
    const [technology] = React.useState(data.technology)
    const [value,setValue] = React.useState(0)

    const { name , images , description } = technology[value]

        
    return (
        <div className='technology'>
            <h1 className='header-text'><span>03</span> SPACE LAUNCH 101</h1>
            {
                technology
                &&
                <img className='technology-image' src={images.portrait}/>
            }
            <ul className='technology-navigation'>
            {
                technology.map((item,index)=>{
                    return(
                        <div key={index} className='technology-navigators' onClick={
                            ()=>{
                                console.log(index)
                                setValue(index)
                                const navigators = document.querySelectorAll('.technology-navigators')
                                
                                navigators.forEach(navigator => {
                                    navigator.classList.remove('active')
                                })
                        
                                navigators[index].classList.add('active')
                            }
                        }>{index + 1}</div>
                    )
                })
            }
            </ul>
            {
                technology
                &&
                <div className='technology-content'>
                    <h1 className='title'>THE TERMINOLOGY...</h1>
                    <h1 className='subtitle'>{name}</h1>
                    <p className='technology-paragraph'>{description}</p>
                </div>
            }
        </div>
    )
}

export default Technology