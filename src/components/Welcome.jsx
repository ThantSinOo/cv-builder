import React from 'react'
import '../style/WelcomeStyle.css'
function Welcome() {

    let getStarted = () =>{
        console.log("Get Started Work!!")
    }

  return (
    <div className='welcomeContainer'>
      <div className='welcomeHeader'>
        <h1 className='header'>Welcome</h1>
        <h2 className='subHeader'>from CV-Builder</h2>
        <p className='welcomeText'>Welcome to our CV creation platform! Design your CV templates and get instant shareable links for job applications.<span className='motto'>Simplify recruitment with us.</span></p>
      </div>
      <div>
        <button 
            className='getStartBtn'
            onClick={getStarted}
            >
                Get Started!
        </button>
      </div>
    </div>
  )
}

export default Welcome