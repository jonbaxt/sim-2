import React from 'react';
import logo from './houser_logo.png'

export default function Header(){
    return (
        <div className='head colMedG  fl flR headerPos'>
            <img className='imgRes' src={logo} alt='' />
            <p>Houser</p>
        </div>
    )
}