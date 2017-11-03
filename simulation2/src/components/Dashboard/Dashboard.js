import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import reducer from '../../reducer/reducer';
import './dashboard.css';
import Header from '../Header/Header'

class Dashboard extends Component {
    render() {

        return (
            <div className="body">
                <Header />
                <div className="container">
                    <div className="add-prop">
                        Add new property
                    </div>
                    <div className="list-properties">
                        <div>
                            List properties with desired rent greather than: $
                        </div>
                        <div>
                            <input type="number" className="price" placeholder="0" />
                        </div>
                        <button className="filter-button">
                            Filter
                        </button>
                        <button className="reset">
                            Reset
                        </button>
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

function mapStateToProps(state) {
    return state;
}


const actionCreators = {

}

export default connect(mapStateToProps, actionCreators)(Dashboard); 