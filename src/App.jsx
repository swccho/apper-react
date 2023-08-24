import './App.css'
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from "./components/layout/Layout.jsx";

function App() {
    useEffect(()=>{
        AOS.init({
            delay: 50,
            duration: 1000,
            offset: 120,
            disable: 'mobile',
        });
    },[])
  return (
    <>
        <Layout />
    </>
  )
}

export default App
