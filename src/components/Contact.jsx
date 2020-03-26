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
                    <i class="fas fa-mobile icon icons"></i>
                    <a href='https://github.com/harleydi'><i class="fab fa-github icon icons"></i></a>
                    <a href='https://www.linkedin.com/in/disney-harley-a430a4137/'><i class="fab fa-linkedin icon icons"></i></a>
                </div>
            </div>
        )
    }
}

export default Contact