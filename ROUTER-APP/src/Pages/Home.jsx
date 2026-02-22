import React from 'react'

function Home() {
 
  function myFunc(name){
    console.log(name)
  }

  const  myFunc2 = ()=>{
    let a = document.getElementById('div')

    a.style.backgroundColor = 'yellow'
  }
  return (
    <div>Home page
    <br/>
    <div id='div' onMouseOver={myFunc2} className='bg-red-800 f-50 w-50'></div>
    <button onClick={()=>{myFunc('Arun')}} className='border border-black cursor-pointer'>click me</button>
    </div>
  )
}

export default Home