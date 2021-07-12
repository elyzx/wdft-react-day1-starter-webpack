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
import 'bulma/css/bulma.css'
import CoolThing from './components/CoolThing'
import MyMessage from './components/Message'

function App() {

    let myName = 'Ellen'

    return (<div>
        <h5>Hello</h5>
        <Header />
        <Header 
            // simple props
            name={myName}
            age={'5 beers'} 
            // boolean props
            bootcamp
        />
        <Header>Hello Buddy</Header>
        <CoolThing />
        <Footer 
            name={myName}
        />
        <Footer />
        <MyMessage msgType={'is-info'}/>
        <MyMessage msgType={'is-warning'}/>
    </div>)
}

ReactDOM.render(<App />, document.querySelector('#root'))