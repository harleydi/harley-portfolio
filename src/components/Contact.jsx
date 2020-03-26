import React, { Component } from 'react'

class Contact extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className='contact'>
                <h1 className='cHead'>Contact Me</h1>
                <div className='icons'>
                    <i class="fas fa-mobile icon"></i>
                    <i class="fab fa-github icon"></i>
                    <i class="fab fa-linkedin icon"></i>
                </div>
            </div>
        )
    }
}

export default Contact