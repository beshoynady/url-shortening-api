import React,{useState, useEffect} from 'react'
import './Shorten-link.css';

const getdata =()=>{
  let lacaldata = localStorage.getItem('links');
  
  if(lacaldata){
    return  JSON.parse(lacaldata)
  }else{
  return []
  }
}

const Shorten_link = () => {
  const API_Base ='https://api.shrtco.de/v2/shorten?url=';
  const [newurl, setnewurl] = useState('')
  const [result, setresult] = useState(getdata());
  const [copy, setcopy] = useState('copy')
  

  
  const geturl =(e)=>{
    setnewurl(e.target.value)
  }

  const handlecopy =()=>{
    navigator.clipboard.writeText(result[0].short_link);
    setcopy('copied!')
  }

  const submit=(e)=>{
    e.preventDefault();
    if (!newurl){
      alert('put your url')
    }else{
      const getshorturl = async (e)=>{
        const res = await fetch(`${API_Base}${newurl}`);
        const deta = await res.json()
        setresult([deta.result ,...result])
        // setnewurl('')
      }
      getshorturl()
    }
}
useEffect(() => {
  localStorage.setItem('links', JSON.stringify(result))
},[result])
  return (
    <section className='shorten_link'>
      <div className='container'>
        <div className='putlink-box'>
          <form onSubmit={submit}>
            <input type='url' placeholder='Shorten a link here...' onChange={geturl} />
            <input type='submit' value="Shorten It!" onClick={submit}/>
          </form>
        </div>
        <div className="short-link">
          {result.map((link,i)=>{
            return(
              <div>
              <p>{link.original_link}</p>
              <div>
                <p>{link.short_link}</p>
                <button onClick={handlecopy}>{copy}</button>
              </div>
            </div>
            )
            
          })}
          
          {/* <div>
            <p>{getlistfromlocal[1].}</p>
            <div>
              <p>{getlistfromlocal[1]}</p>
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