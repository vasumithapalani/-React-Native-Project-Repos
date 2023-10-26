import React, { createContext, useContext, useState,Text } from 'react';
import FontSizeContext from '../screens/FontSizeContext';


const SecondPage=()=>{

    const size=useContext(FontSizeContext)
    
    return (
       
        <Text style={{fontSize: size}}>
        
        First Page - Usecontext in React Native!

        </Text>

    );
}


export default SecondPage;