'use client'

import { useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function LoginedLayout({children}){
    const router = useRouter()
  const {isAuth} = useSelector(state => state.auth)
  useEffect(() => {
    if(!isAuth){
      router.push('/login', undefined, { shallow: true })
    }
  }, [isAuth])
    return<>
    {children}
    </>
}