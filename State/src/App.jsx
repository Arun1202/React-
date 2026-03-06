import React from 'react'
import { Route, Router } from 'react-router-dom'
import State1 from './State1'

function App() {
  return (
    <>
    <Router>
      <Route path='/' element={<State1 />} />
    </Router>
    </>
  )
}

export default App