import React from 'react'
import './Shorten-link.css';

const Shorten_link = () => {
  return (
    <section className='shorten_link container'>
      <div className='putlink-box'>
        <form action="">
          <input type="text" placeholder='Shorten a link here...' />
          <input type="button" value="Shorten It!" />
        </form>
      </div>
    </section>
  )
}

export default Shorten_link