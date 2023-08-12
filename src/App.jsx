import { useState } from 'react'
import axios from 'axios'
import Title from './components/Title'
import Form from './components/Form'
import Result from './components/Result'
import './App.css'

function App() {
  const [word,setWord]=useState('')
const [photo,setphoto]=useState([])

  const getData=(e) =>{
    e.preventDefault();
    axios
    .get(`https://api.unsplash.com/search/photos?query=${word}&client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`)
    .then(res=>{
      setphoto(res.data.results)
    });
  }

 

  return (
    <>
      <div className="App">
        <Title />
        <Form setWord={setWord} getData={getData}/>
        <Result photo={photo}/>
      </div>
    </>
  )
}

export default App
