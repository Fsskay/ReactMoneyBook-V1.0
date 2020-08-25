import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import axios from 'axios'

axios.get('/items').then((response)=>{
    console.log(response)
})

ReactDOM.render(<App />, document.getElementById('root'));

