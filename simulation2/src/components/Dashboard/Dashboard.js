import React,  { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import reducer from '../../reducer/reducer'

class Dashboard extends Component {
    render(){
        
        return(
            <div className="parent-div">
                <div>
                    Add New Property
                </div>
                <div className="list-properties">
                    <div>
                    List properties with desired rent greather than: $
                    </div>
                    <div>
                        <input type="text" />
                    </div> 
                    <div className="filter-button">
                        Filter
                    </div>
                    <div className="reset">
                        Reset
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