import React, { Component } from 'react';



class Wizard extends Component{
constructor(){
    super()
    this.state = {
        name: '',
        address: '',
        city: '',
        state: '',
        zip: 0
    }

}

handleInputChange(){

}

postNewHouseToDatabase(){
    
}

render(){
    return(
        <div>
            <p>Wizard</p>
        </div>
    )
}

}



export default Wizard;