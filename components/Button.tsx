import React from 'react';


type ButtonType = {
  text: string;
  type?: "button" | "submit" | "reset";
} & React.ButtonHTMLAttributes<HTMLButtonElement>; 

const Button : React.FC<ButtonType> = ({text , type , ...res}) => {
      
    return (
        <div className='btnSubmit'>
            <button  {...res} type={type}>{text}</button>
        </div>
    );
}

export default Button;
