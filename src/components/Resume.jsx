import React, { Component } from 'react'

class Resume extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className='resume'>
                <h1>Take a look at my resume.</h1>
                <button className='resumeBtn'><a href='https://www.docdroid.net/XWmYtn8/disneyharley2020.pdf'>Disney Harley</a></button>
            </div>
        )
    }
}

export default Resume