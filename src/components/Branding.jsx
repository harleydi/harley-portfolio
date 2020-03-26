import React, { Component } from 'react'
import Navbar from './Navbar'

class Branding extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className='branding'>
                <h1 className='brandHeadText'>About Me</h1>
                <p className='brandPara'>I am a motivated software engineer who is eager to expand my knowledge and connections to make a technical impact in the world. As a veteran of the Military I gained skills to maintain focus and attention to detail. I have a passion for adventure and experiencing different cultures and ways of life.</p>
                <div className='brandIcons'>
                    <i class="fab fa-html5"></i>
                    <i class="fab fa-css3"></i>
                    <i class="fab fa-js"></i>
                    <i class="far fa-gem"></i>
                    <i class="fab fa-react"></i>
                </div>
            </div>
        )
    }
}

export default Branding