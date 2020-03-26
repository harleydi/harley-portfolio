import React, { Component } from 'react'

class Navbar extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <React.Fragment>
                <nav className='navbar'>
                    <div className='topPart'>
                        <a className='navText' href='/'>PORTFOLIO</a>
                        <a className='navText' href='/'>RESUME</a>
                        <a className='navText' href='/'>CONTACT</a>
                    </div>
                    {/* <div className='bottomPart'><br/></div> */}
                </nav>
            </React.Fragment>
        )
    }
}

export default Navbar