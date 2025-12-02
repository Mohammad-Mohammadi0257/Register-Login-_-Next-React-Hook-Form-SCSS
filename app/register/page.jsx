'use client'

import Button from '@/components/Button';
import Input from '@/components/Input';
import React from 'react';
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

  confirmPassword : z.string()
})
.refine((data) => data.password === data.confirmPassword , {
    message :'رمز عبور یکی نیست' ,
    path :['confirmPassword']
});

const Page = () => {

  const router = useRouter()

    const {
    register,
    handleSubmit,
    formState: { errors , isSubmitting}
  } = useForm({
     resolver: zodResolver(schema),
  })

  const onSubmit = (data) => {
    const info = {name:data.name , password:data.password}
    localStorage.setItem('register' ,JSON.stringify(info))
    console.log(info);
    router.push("/login");
  };

    return (
        <div className="register-container">
            <form className="my-form" onSubmit={handleSubmit(onSubmit)}>
              <h1 className='title'>فرم ثبت نام</h1>

                <Input 
                 type='text' 
                 label='نام'
                 {...register("name")}
                  error={errors.name?.message}
                />

                 {/* <Input 
                 type='text' 
                 label='نام'
                 {...register("name")}
                 error={errors}
                /> */}

                <Input
                 type='password'
                 label='رمز عبور'
                 {...register("password")}
                 error={errors.password?.message}
                />
                <Input
                 type='password'
                 label='رمز عبور'
                 {...register("confirmPassword")}
                 error={errors.confirmPassword?.message}
                />

                <Button type='submit' text='ثبت نام'/>
            </form>
        </div>

    );
}

export default Page;
