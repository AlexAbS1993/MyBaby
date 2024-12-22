"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
  useEffect(() => {
    router.push('/main', undefined, { shallow: true })
  }, [])
  return (
    <>
    </>
  )
}