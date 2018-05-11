import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';


class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            name: 'afd',
            address: 'f',
            city: 'f',
            state: 'ee',
            zip: 0
        }
        this.nameChange = this.nameChange.bind(this);
        this.addressChange = this.addressChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
        this.stateChange = this.stateChange.bind(this);
        this.zipChange = this.zipChange.bind(this);
        this.postNewHouseToDatabase = this.postNewHouseToDatabase.bind( this );
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



    handleInputChange() {
        
    }

    postNewHouseToDatabase() {
        const newHouse = {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }
        axios.post('/api/house/submitnew', newHouse)
        .then( (element) => {
            console.log( element );
            // this.setState({

            // })
        }).catch( err => console.log( err ));
    }

    render() {
        return (
            <div className='wizMain colLight'>
                <div className='wizTop'>
                    <h1>Add New Listing</h1>
                    <Link to='/'><button className='cancelButt colPink'>Cancel</button></Link>
                </div>
                <div className='wizForm'>
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
                    <Link to='/'>
                    <button className='cancelButt colGreen' onClick={ this.postNewHouseToDatabase}>Complete</button>
                    </Link>
                </div>
            </div>
        )
    }

}



export default Wizard;