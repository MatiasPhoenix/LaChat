import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './Components/Routes';
import { RouterProvider } from "react-router-dom";
import LateralBar from './Components/Rooms/LateralBar';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='flex'>
        <LateralBar />
      <div className='flex flex-col bg-green-800 myElement'>
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>,
)
