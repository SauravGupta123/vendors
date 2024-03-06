import { useState } from 'react'
import Homepage from './screens/Homepage/Homepage'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './components/contextReducer.jsx';

function App() {


  return (
    <>
      <div className="bg-gray-200">

     
          <Homepage />
          


      </div>
    </>
  )
}

export default App
