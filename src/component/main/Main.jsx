import React from 'react'
import Header from '../header/Header';
import './Main.css';
const Main = () => {
  return (
    <main>
      <div className='container'>
      <Header/>
        <div className='main'>
            <div className='left'>
                <h1>More than just shorter links</h1>
                <p>  Build your brand’s recognition and get detailed insights on how your links are performing.
                </p>
                <button>Get Started</button>
            </div>
            <div className="right">
                <div className="img"></div>
            </div>
        </div>

      </div>
        
    </main>
  )
}

export default Main