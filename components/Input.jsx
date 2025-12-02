'use client'
import React from 'react';

const Input = ({ type,label ,error, ...res}) => {
    
    return (
        <div>
            <span >{label} :</span>
            <input className='input' type={type} {...res}/>
            {error && (
                <p className='error'>{error}</p>
            )}

            {/* {error?.[res.name] && 
             <p className='error'>{error?.[res.name].message }</p>} */}
        </div>
    );
}

export default Input;
