'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";




export default function Home() {

const [userInfo, setUserInfo] = useState<string | null>(null);
const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter()
  
  
  useEffect(()=>{
    const info=localStorage.getItem('register')
    setUserInfo(info)
    setLoading(true)
  },[])

if(!loading) return



  return (
    <div className={''}>
      <main className={''}>
        {userInfo ? (
          <div>
            <button onClick={()=>router.push("/login")}>ورود</button>
          </div>
        ) : (<div>
          <button onClick={()=>router.push("/register")}> ثبت نام</button>
        </div>)}
      </main>
    </div>
  );
}
