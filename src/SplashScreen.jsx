import React, { useEffect, useState } from 'react'
import { BarLoader, FadeLoader, ScaleLoader } from 'react-spinners'
import './App.css'
import Home from './pages/home/Home'
import App from './App'

function SplashScreen() {
    const [loading, setLoading] = useState(false)
    useEffect(() =>{
        setLoading(true)
        setInterval(() => {
            setLoading(false)
        }, 5000);
    }, [])
  return loading ? <div className="App">
    <ScaleLoader
        color="#ff9900"
        size={150}
        width={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  </div>:(
    <App/>
  )
}

export default SplashScreen