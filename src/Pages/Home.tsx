import React from 'react';
import LogOut from '../Components/LogOut';
import Accept from '../Components/Yes';


function home() {
    return(
        <>
            <div className='firstpage'>
                <h1>Welcome to Missing Management <br/> 
                Wanna check the list?</h1>
            </div>
            <div className='clic'>
                <Accept/>
                <LogOut/>
            </div>
        </>
    )
}