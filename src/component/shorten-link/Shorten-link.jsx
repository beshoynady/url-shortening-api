import React,{useState, useEffect} from 'react'
import './Shorten-link.css';


const Shorten_link = () => {
  const API_Base ='https://api.shrtco.de/v2/shorten?url=';
  const [url, seturl] = useState('')
  const [shorturl, setshorturl] = useState('')
  const [copy, setcopy] = useState('copy')

  const geturl =(e)=>{
    seturl(e.target.value)
    console.log(e.target.value)
  }
  const getshorturl = async (e)=>{
    await e.preventDefault();
    const res = await fetch(`${API_Base}${url}`);
    const deta = await res.json()
    const shorturl= await deta.result.short_link3
    setshorturl(shorturl)
  }
  const handlecopy =()=>{
    navigator.clipboard.writeText(shorturl);
    setcopy('copied!')
  }

  
  return (
    
    <section className='shorten_link'>
      <div className='container'>
        <div className='putlink-box'>
          <form onSubmit={getshorturl}>
            <input type='url' placeholder='Shorten a link here...' onChange={geturl} />
            <input type='submit' value="Shorten It!" />
          </form>
        </div>
        <div className="short-link">
          <div>
            <p>{url}</p>
            <div>
              <p>{shorturl}</p>
              <button onClick={handlecopy}>{copy}</button>
            </div>
          </div>
          {/* <div>
            <p>{[0]}</p>
            <div>
              <p>{getlinks[1]}</p>
              <button>copy</button>
            </div>
          </div> */}
          <div>
            <p>https://www.facebook.com/</p>
            <div>
              <p>https://www.facebook.com/</p>
              <button>copy</button>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Shorten_link