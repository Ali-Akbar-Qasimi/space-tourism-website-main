import React from 'react'
import './destination.css'
import data from '../data.js'

function Destination() {

    const [planets] = React.useState(data.destinations)
    const [value, setValue] = React.useState(0)
    const { name, description, images, travel , distance } = planets[value]
    const { png } = images


    function navigate(index){
        setValue(index)
        const navigators = document.querySelectorAll('.navigators')

        navigators.forEach(navigator => {
            navigator.classList.remove('active')
        })
        navigators[index].classList.add('active')
    }



    return (
        <section className='destination'>
            <h1 className='header-text'><span>01</span> Pick your destination</h1>
            {
                planets
                &&
                <img className='image' src={png} alt='moon'/>
            }
            <ul className='navigation'>
                {
                planets.map((item,index)=>(
                    <button
                        className='navigators'
                        onClick={
                            ()=> navigate(index)
                        } 
                        key={index}> {item.name} </button>
                ))
                }
            </ul>
            {
                planets
                &&
                <div className='destination-content'>
                    <h1 className='content-header'>{name}</h1>
                    <p className='content-body'>{description}</p>
                </div>
            }
            <hr/>
            {
                planets
                &&
                <div className='travel'>
                    <div className='distance'>
                        <p>AVG. DISTANCE</p>
                        <h1>{distance}</h1>
                    </div>
                    <div className='travel-time'>
                        <p>EST. TRAVEL TIME</p>
                        <h1>{travel}</h1>
                    </div>
                </div>
            }
        </section>
    )
}

export default Destination