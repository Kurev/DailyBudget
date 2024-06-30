import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ChangeLog from './ChangeLog/ChangeLog.jsx'
import Information from './Information/Information.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {path: 'Information', element: <Information />},
  { path: '/ChangeLog', element: <ChangeLog /> } // Matches file name
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
