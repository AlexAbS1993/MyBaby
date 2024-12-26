"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Menu } from "@/components/Menu/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from "@/redux/redux";
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../redux/authReducer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "My babies app",
//   description: "Обновлённый сайт о детях",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
      <Root children={children}/>
      </Provider> 
    </html>
  );
}
function Root({ children }){
  const router = useRouter()
  const dispatch = useDispatch()
  const {isAuth, initialized} = useSelector(state => state.auth)
  useEffect(() => {
    dispatch(setLogin())
  }, [])
  useEffect(() => {
    if(!isAuth && initialized){
      router.push('/login', undefined, { shallow: true })
    }
  }, [isAuth, initialized])
  return <body className={`${geistSans.variable} ${geistMono.variable}`}>
  {
    initialized ? 
    <Inner children={children}/>
     : 
    <div>
      Загружаемся
    </div>
  }
  </body>
}

function Inner({ children }){
  return <>
  <header style={{"marginBottom": "40px" }}>
    <Menu />
  </header>
    {children}
  </>
}