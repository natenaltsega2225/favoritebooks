import React  , {useState} from 'react'
import Card from "./Card"
import axios from "axios"

const Main=() => {
  const [search,setSearch] = useState("")
  const [bookData, setData] = useState([])
  
  // evt : is simply means events and events are things that happen to html elements when js is used 
  // so below when we try to search this should happen
  const searchBook=(evt)=>{
    if(evt.key==="Enter")
    {
        // res is an obj containing information about the http request that raised the event
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
    }
  }
    return (
    <>
       <div className="header">
          <div className="row1">
             <h1>A room without book is like <br/>a body without a soul.</h1>
          </div>

          <div className="row2">
            <h2>Find your Book</h2>
            <div className="search">
              {/* e.targe.value will retrive the value searched from the API */}
              <input type= "text" placeholder="Enter Your Book Name" value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}/>
              <button><i className='fas fa-search'></i></button>
            </div>
            <img src="./images/bg2.png" alt="" />

          </div>

       </div>
       
       <div className="container"> 
       {
         <Card book={bookData}/>
       }

       </div>
    </>
  )
}

export default Main