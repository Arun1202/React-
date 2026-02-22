import React from 'react'
import './App.css'
// import '../assets/xyz'
import Header from './Header'
import HeroSection from './HeroSection'
function App() {
  
  return (
    <>
    <Header/>
    <HeroSection/>
    <div style={{'position':'absolute',
    'top': '14vh',
    'right': '35vw',}}><h1 style={{
      'color': 'red', 
      'display':'flex',
      'margin': '25px',
      'height':'100%',
      'width':'100%',
      // 'backgroundColor':'green',
      'color':'white',
      'border':'2px solid black',
      'borderRadius':'20px',
      'padding':'10px'}}>hello bhai 
      </h1></div>
</>
  )
}

export default App
