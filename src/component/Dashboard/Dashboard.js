import React, { Component } from 'react';
import './Dashboard.css'

import House from '../House/House';


class Dashboard extends Component{
constructor(){
    super()
    this.state = {
        houses: []
    }
}

getAllHousesFromDatabase(){

}
deleteAHouseFromDataBase(){

}

render(){
    return(
        <div className='dashCont '>
            
            <p>Dashboard</p>

            <House />
        </div>
    )
}

}



export default Dashboard;