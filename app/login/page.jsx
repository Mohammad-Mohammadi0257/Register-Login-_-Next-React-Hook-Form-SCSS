'use client'

import Button from '@/components/Button';
import Input from '@/components/Input';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';


const schema = z.object({
  name: z.string()
  .min(1, 'پر کردن فیلد نام الزامی است')
  .min(4 , 'حداقل باید 4 حرف وارد کنید'),

  password : z.string()
  .min(1, 'پر کردن فیلد نام الزامی است')
  .min(6 , 'حداقل باید 6 حرف وارد کنید'),
})

const Page = () => {

    const [userInfo , setUserInfo] = useState()
    const router = useRouter()
    
    
    const onSubmit = (data) =>{
            const info = localStorage.getItem('register')
            if(!info) return

             const user = JSON.parse(info);
            
        if (user?.name==data.name && 
            user?.password==data.password ) {
                router.push('/dashbord')
            }else{
                setError('root',{message:'نام کاربری یا رمز عبور اشتباه است'})
            }
        }
        
        const {
            register,
            handleSubmit,
            setError,
            formState: { errors , isSubmitting}
        } = useForm({
            resolver: zodResolver(schema),
        })
        
        
        useEffect(()=>{
             const info = localStorage.getItem('register')
            if(info){
              setUserInfo(JSON.parse(info))  
            }
        },[])
        
    return (
        <div className="register-container">
            <form className="my-form" onSubmit={handleSubmit(onSubmit)}>
                {/* <div > */}
                    <h1 className='title'>فرم ورود</h1>
                {/* </div> */}

                <Input 
                    type='text' 
                    label='نام'       
                    {...register("name")}
                    error={errors.name?.message}
                />

                <Input 
                    type='password' 
                    label='رمز عبور'
                    {...register("password")}
                    error={errors.password?.password}
                />

                 {errors?.root && <p className="error">{errors.root.message}</p>}

                <Button type='submit' text='ورود' />
            </form>
        </div>
    );
}

export default Page;
