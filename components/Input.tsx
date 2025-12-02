'use client'
import React from 'react';

type InputType = {
    label : string
    type : 'text' | 'password' | 'email'
    error ?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input : React.FC<InputType> = ({ type,label ,error, ...res}) => {
    
    return (
        <div>
            <label >{label} :</label>
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
