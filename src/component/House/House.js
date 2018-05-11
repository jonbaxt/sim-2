import React from 'react';
import del from '../delete_button.png';

export default function House(props, delReq){
    let arr = props();
    console.log( arr );
    // function theHouses(arr){

    // function handleClick(click){
    //     console.log(click)

    // }

    let theHouses = arr.map( (house, index ) =>{
        return (
            <div key={house.id} className='houseBox colGray'>
             <div>
             <p>{`Property Name: ${house.name}`}</p>
             <p>{`Address: ${house.address}`}</p>
             <p>{`City: ${house.city}`}</p>
             <p>{`State: ${house.state}`}</p>
             <p>{`Zip: ${house.zip}`}</p>
             </div>
             <div >
                 <button onClick={() => delReq(house.id)}><img className='del' src={del} alt=''  /></button>
             </div>
            </div>
        )
    })

// }

    return (
        <div>
            {theHouses}
        </div>
    )

}