// console.log('Hey, Italy won the Euros. :(')

import something from './data.js'
// import { myAge, country } from './data.js'
 
// console.log('Default import ', something)
// console.log('Named export ', myAge)
// console.log('Named import again ', country)

import ReactDOM from 'react-dom'
import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    return (<div>
        <h5>Hello</h5>
        <Header />
        <Footer />
    </div>)
}

ReactDOM.render(<App />, document.querySelector('#root'))