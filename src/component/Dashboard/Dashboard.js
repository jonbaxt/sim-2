import React, { Component } from 'react';
import './Dashboard.css'
import { Link } from 'react-router-dom';

import House from '../House/House';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: []
        }
        this.giveToHouse = this.giveToHouse.bind( this )
        this.handleDelete = this.handleDelete.bind( this )
    }
    componentDidMount() {
        // console.log(`Connecting to database from dash`)
        axios.get('/api/houses').then((element) => {
            this.setState({ houses: element.data })
            // console.log(`From Component did mount `, element.data);
        }).catch(err => console.log(`Something went wrong mounting. ${err} `))
        // return this.state.houses;
    }
    
    handleDelete(id) {
        // console.log('delete called ', id)
        const convert = Number(id)
        axios.delete(`/api/house/${convert}`)
        .then((element) => {
            const newData = element.data
            console.log(newData);
            this.setState({ houses: element.data })
        }).catch(err => console.log(err));
    }
    
    giveToHouse(){
        // console.log(this.state.houses)
       return this.state.houses
    }
    
    render() {
        return (
            <div className='dashCont colLight'>
                <div className='dashTop'>
                    <h1>Dashboard</h1>
                    <Link to='/wizard' ><button className='cancelButt colGreen'>Add New Property</button></Link>
                </div>
                <div className='houseBox'>
                    <p>   ___________________________________________________________</p>
                    <h2>Home Listings</h2>
                    {House(this.giveToHouse, this.handleDelete)}
                    {/* <House give={giveToHouse} /> */}
                </div>
            </div>
        )
    }

}



export default Dashboard;