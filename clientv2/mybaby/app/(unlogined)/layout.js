'use client'

import { useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function UnLoginedLayout({children}){
    const router = useRouter()
  const {isAuth, initialized} = useSelector(state => state.auth)
  useEffect(() => {
    if(isAuth){
      router.push('/main', undefined, { shallow: true })
    }
  }, [isAuth])
    return<>{
        initialized && !isAuth ? children : <></>
    }
    </>
}