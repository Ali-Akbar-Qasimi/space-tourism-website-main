import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <section>
        <div className='home-content'>
            <div className='content-title'>SO, YOU WANT TO TRAVEL TO</div>
            <div className='content-subtitle'>SPACE</div>
            <div className='content-paragraph'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</div>
        </div>
        <Link style={{textDecoration:'none'}} to='/destination'>
          <div className='explore'>EXPLORE</div>
        </Link>
    </section>
  )
}

export default Home