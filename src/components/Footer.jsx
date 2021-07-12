import React from 'react'

// import './Footer.css'
// function Footer(){
//     return <h3 className="myFooter">My footer</h3>
// }

class Footer extends React.Component {
    render(){

        console.log('Class props ', this.props )

        const {name = 'Default'} = this.props

        return <footer>Made by {name}</footer>
    }
}

export default Footer;