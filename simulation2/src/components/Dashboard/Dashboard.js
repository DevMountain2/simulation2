import React,  { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import reducer from '../../reducer/reducer'
import './dashboard.css'

class Dashboard extends Component {
    render(){
        
        return(
            <div className="body">        
                <div className="container">
                    <div className="add-prop">
                        Add new property
                    </div>
                    <div className="list-properties">
                        <div>
                        List properties with desired rent greather than: $
                        </div>
                        <div>
                            <input type="text"  className="price" placeholder="0"/>
                        </div> 
                        <div className="filter-button">
                            Filter
                        </div>
                        <div className="reset">
                            Reset
                        </div>           
                    </div>
                    <div className="line-cont">
                        
                        <div className="line">
                        </div> 
                        
                    </div>      
                    <div className="home-listing">
                        Home Listings
                    </div>
                </div>
            </div>    
        )
    }
}

function mapStateToProps( state ) {
    return state;
  }
  

const actionCreators ={
    
}

export default connect(mapStateToProps, actionCreators)(Dashboard); 