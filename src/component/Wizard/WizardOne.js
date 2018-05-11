import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addName, addAddress, addCity, addState, addZip, cancelWizard } from '../../ducks/reducer';


class WizardOne extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Bobby',
            address: '123 Fake Street',
            city: 'Denver',
            state: 'UT',
            zip: 45614 
        }
        this.nameChange = this.nameChange.bind(this);
        this.addressChange = this.addressChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
        this.stateChange = this.stateChange.bind(this);
        this.zipChange = this.zipChange.bind(this);
        this.sendToRedux = this.sendToRedux.bind( this );
    }
    nameChange(e) {
        this.setState({ name: e })
    }
    addressChange(e) {
        this.setState({ address: e })
    }
    cityChange(e) {
        this.setState({ city: e })
    }
    stateChange(e) {
        this.setState({ state: e })
    }
    zipChange(e) {
        this.setState({ zip: e })
    }

    sendToRedux(){
        this.props.addName( this.state.name);
        this.props.addAddress( this.state.address);
        this.props.addCity( this.state.city);
        this.props.addState( this.state.state);
        this.props.addZip( this.state.zip);
    }
    render() {
        return (
            <div className='wizMain colLight'>
                <div className='wizTop'>
                    <h1>Add New Listing</h1>
                    <Link to='/'><button className='cancelButt colPink' onClick={this.props.cancelWizard}>Cancel</button></Link>
                </div>
                <div className='wizForm cent'>
                    <h2>Property Name</h2>
                    <input type='text' onChange={(e) => this.nameChange(e.target.value)} value={this.state.name} />
                    <h2>Address</h2>
                    <input type='text' onChange={(e) => this.addressChange(e.target.value)} value={this.state.address} />
                    <h2>City</h2>
                    <input type='text' onChange={(e) => this.cityChange(e.target.value)} value={this.state.city} />
                    <div className='wizTop'>
                        <div className='wizForm'>
                            <h2>State</h2>
                            <input type='text' onChange={ (e) => this.stateChange(e.target.value)} value={this.state.state} />
                        </div>
                        <div className='wizForm'>
                            <h2>Zip</h2>
                            <input type='text' onChange={ (e) => this.zipChange(e.target.value )} value={this.state.zip} />
                        </div>
                    </div>
                </div>
                <div className='pad'>
                    <Link to='/wizard/step2'>
                    <button className='cancelButt colDarG texWh' onClick={ this.sendToRedux } >Next Step</button>
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

export default connect(mapStateToProps, { addName, addAddress, addCity, addState, addZip, cancelWizard })(WizardOne);