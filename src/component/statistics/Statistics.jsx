import React from 'react'
import './Statistics.css'
import brand from '../../images/icon-brand-recognition.svg'; 
import detailed from '../../images/icon-detailed-records.svg'; 
import customizable from '../../images/icon-fully-customizable.svg'; 
const Statistics = () => {
  const details=[
    {icon: brand,
      title:'Brand Recognition',
      content:'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
    },
  {icon:detailed,
    title:'Detailed Records',
    content:'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
  },
  {icon:customizable,
    title:'Fully Customizable',
    content:'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
  }
  ]
  return (
    <section className='Statistics-box'>
        <div className="content-box">
            <h1>  Advanced Statistics</h1>
            <p>Track how your links are performing across the web with our 
                advanced statistics dashboard.
            </p>
        </div>
        <div className="container">
          <div className='boxs'>
          {details.map((d,i)=>{
            return(
              <div className={`box-${i} all-box`} key={i}>
                <div className='icon'>
                  <img src={d.icon} alt=""/>
                </div>
                <h2>{d.title}</h2>
                <p>{d.content}</p>
              </div>
            )
          })}
          </div>
        </div>
    </section>
  )
}

export default Statistics