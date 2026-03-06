import React from 'react'

function State1() {
      const[count , setCount] = useState(0)
    //   const[show , setShow] = useState(false)

      function handleclick2(){
        setCount(count + 1)
        console.log(count)
      }
    
  return (
    <div>
        <button onClick={handleclick2} className='m-5 cursor-pointer px-5 border border-black' >Click me</button>
    </div>
  )
}

export default State1