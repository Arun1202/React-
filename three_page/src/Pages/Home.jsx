import React from 'react'

function Home() {
 
  function myFunc(){
    console.log()
  }

  const  myFunc2 = ()=>{
    let a = document.getElementById('div')

    a.style.backgroundColor = 'yellow'
  }
  return (
    <div>Home page
    <br/>
    <div id='div' onMouseOver={myFunc2} className='bg-red-800 f-screen w-full'>nice</div>
    <button onClick={myFunc} className=' border border-black cursor-pointer'>click me</button>
    </div>
  )
}

export default Home