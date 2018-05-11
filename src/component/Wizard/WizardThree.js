import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addMortgage, addRent, getState, cancelWizard } from '../../ducks/reducer';

class WizardThree extends Component {
    constructor() {
        super()
        this.state = {
            mortgage: 0,
            rent: 0,
        }
        this.mortgageChange = this.mortgageChange.bind(this)
        this.rentChange = this.rentChange.bind(this);
        this.sendToRedux = this.sendToRedux.bind(this);
        this.postNewHouseToDatabase = this.postNewHouseToDatabase.bind(this);
    }
    mortgageChange(e) {
        this.setState({ mortgage: e })
    }
    rentChange(e) {
        this.setState({ rent: e })
    }

    sendToRedux() {
        console.log(` send was fired`)
        this.props.addMortgage(this.state.mortgage);
        this.props.addRent(this.state.rent);
    }

    postNewHouseToDatabase() {
        this.sendToRedux();
        // console.log(this.props.name,
        //     this.props.address,
        //     this.props.city,
        //     this.props.state,
        //     this.props.zip,
        //     this.props.img,
        //     this.state.mortgage,
        //     this.state.rent,
        //     this.props.mortgage,
        //     this.props.rent
        // );

        const newHouse = {
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip,
            img: this.props.img,
            mortgage: this.state.mortgage,
            rent: this.state.rent
        }
        axios.post('/api/house/submitnew', newHouse)
        .then( (element) => {
            // console.log( element );
            //This updates as the form goes back to dashboard.
        }).catch( err => console.log( err ));
        this.props.cancelWizard();
    }

    render() {
        return (
            <div className='wizMain colLight'>
                <div className='wizTop'>
                    <h1>Add New Listing</h1>
                    <Link className='buttPad' to='/'><button className='cancelButt colPink bold' onClick={this.props.cancelWizard}>Cancel</button></Link>
                </div>
                <div className='wizForm'>
                    <h2>Monthly Mortgage Amount</h2>
                    <input type='text' onChange={(e) => this.mortgageChange(e.target.value)} value={this.state.mortgage} />
                    <h2>Desired Monthly Rent</h2>
                    <input type='text' onChange={(e) => this.rentChange(e.target.value)} value={this.state.rent} />
                </div>
                <div className='pad'>
                    <Link to='/wizard/step2'>
                        <button className='cancelButt colDarG texWh'>Previous Step</button>
                    </Link>
                    <Link to='/'>
                    <button className='cancelButt colGreen' onClick={this.postNewHouseToDatabase}>Complete</button>
                    </Link>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        img: state.img,
        mortgage: state.mortgage,
        rent: state.rent
    }
}

export default connect(mapStateToProps, { addMortgage, addRent, getState, cancelWizard })(WizardThree);