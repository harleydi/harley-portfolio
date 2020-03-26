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
                        <img className='boxPic' src='https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
                        <div className='boxText'>
                            <h3 className='textHead'>MCTS</h3>
                            <p className='textBody'>This is a website based of a place where children and teens can come to get help without having to be thrown into ACS or as we know "The System" because of a lack of guardianship ect., and get opportunities and have better outcomes as every child deserves to have.</p>
                        </div>
                        
                    </div>
                    <div className='box'>
                        <img className='boxPic' src='https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
                        <div className='boxText'>
                            <h3 className='textHead'>Expedia - Flying Four</h3>
                            <p>We are building out a new feature for Expedia, which allows users to search for a bundled Flight, Hotel and Car vacation package with the option to search for an eco-friendly hotel. The search form will include a checkbox option to include only eco-friendly options. The hotel search results list will include a tree icon that indicates it is eco-friendly.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio