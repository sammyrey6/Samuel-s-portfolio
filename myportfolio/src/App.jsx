import { useState } from 'react'
import Landing from './pages/Landing'
import Layout from './Layout'
import './App.css'

function App() {


  return (
    <>
      <div className="App">

        <Layout>  
          <Landing />
        </Layout>
        </div>
    </>
  )
}

export default App
