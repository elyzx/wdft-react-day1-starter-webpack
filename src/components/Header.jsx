import React from 'react'
import './Header.css'

function Header(props){
    console.log('See my props ', props)
    // Props looks like this
    /*
        { 
            name: 'Ellen',
            age: 19,
            bootcamp: true
            children: 'Hello Buddy'
        }
    */
    return <h3 className="myHeader">My name is {props.name} and I'm {props.age} years old. {props.bootcamp}</h3>
}

export default Header;