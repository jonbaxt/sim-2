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
        axios.get('/api/houses').then((element) => {
            this.setState({ houses: element.data })
        }).catch(err => console.log(`Something went wrong mounting. ${err} `))
    }
    
    handleDelete(id) {
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
        console.log(this.props.match)
        return (
            <div className='dashCont colLight'>
                <div className='dashIn' >
                    <div className='dashTop'>
                    <h1>Dashboard</h1>
                    <Link className='buttPad' to='/wizard/step1' ><button className='bold addButt colGreen'>Add New Property</button></Link>
                    </div>
                    <div className='dashTop'>
                    <p>   ___________________________________________________________</p>
                    </div>
                    <div>
                    <h2>Home Listings</h2>
                    </div>
                </div>
              
              <div className='houseBox '>
              {House(this.giveToHouse, this.handleDelete)}
              {/* <House give={giveToHouse} /> */}
          </div>
            </div>

        )
    }

}



export default Dashboard;