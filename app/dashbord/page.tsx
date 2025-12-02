'use client'

import Button from '@/components/Button';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
     const router = useRouter()


     useEffect(()=>{
        const user = localStorage.getItem('register');
        if(!user){
            router.push('/login')
        }
     },[])

     
    return (
        <div className='dashbord'>
            <h1> صفحه داشبرد </h1>

            <Button 
            type='button'
             text='خروج از حساب کاربری'
             onClick={()=>router.push("/login")}
             />

            <Button 
            type='button'
             text='حذف حساب کاربری'
             onClick={()=>{localStorage.removeItem("register")
                 router.push("/")}}
             />

        </div>
    );
}

export default Page;
