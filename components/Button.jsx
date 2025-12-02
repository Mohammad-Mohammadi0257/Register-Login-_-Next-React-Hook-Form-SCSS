import React from 'react';


const Button = ({text , type , ...res}) => {
      
    return (
        <div className='btnSubmit'>
            <button  {...res} type={type}>{text}</button>
        </div>
    );
}

export default Button;
