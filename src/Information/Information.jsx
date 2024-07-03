import React from 'react'
import './Information.css'
import { IoReturnUpBack } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Information = () => {
  return (
    <div>
      <div className='Cont-ChangeLog'>
        <div className="title">
            <h1>Information</h1>
        </div>

        <div className="back-btn">
            <Link to='/'><span><h1 className='btn-back'><IoReturnUpBack /></h1></span></Link>
        </div>

        <div className="details">
            <p className='update'>Details</p>
            <p className='info-changeLog'>
              <li>I am developing a simple daily budget web application inspired by dailyexpense.vercel.app. This application will track the user's spending and display expenses on a daily basis.</li>
            </p>

            
          <p className='fixed'>About</p>
          <div className="date">
              <p>Created on April 20, 2024</p>
            </div>
          <ul>
            <li>Original App: <a href='https://dailyexpense.vercel.app/'>https://dailyexpense.vercel.app/</a></li>
            <li>Persistent Storage: All data will be saved locally</li>
            <li>Expense Tracking: Log daily expenses with amount.</li>
          </ul>

          <p className='fixed'>Tools</p>
          <div className="date">
              <p>These tools make my dream works</p>
            </div>
          <ul>
            <li>VS Code</li>
            <li>Html</li>
            <li>Css</li>
            <li>Js</li>
            <li>React</li>
            <li>Animate.css</li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Information