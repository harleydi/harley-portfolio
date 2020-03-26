import React, { Component } from 'react'

class Portfolio extends Component {
    constructor() {
        super()
    }
    render(){
        return(
            <div className='portfolio'>
                <h1 className='portfolioHead'>My Work</h1>
                <div className='boxes'>
                    <div className='box p2'>
                        <img src='https://imgur.com/a/gQh7qc7' />
                        <a classname='workTitle' href='http://mymcts.surge.sh'>
                            <h3 className='workTitle'>MCTS</h3>
                        </a>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio