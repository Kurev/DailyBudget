import React from 'react'
import './ChangeLog.css'
import { IoReturnUpBack } from "react-icons/io5";
import { Link } from 'react-router-dom';


const ChangeLog = () => {
  return (
    <div className='Cont-ChangeLog'>
        <div className="title">
            <h1>LOGS</h1>
        </div>

        <div className="back-btn">
            <Link to='/'><span><h1 className='btn-back'><IoReturnUpBack /></h1></span></Link>
        </div>

        <div className="details">
            <p className='update'>Update</p>
            <p className='info-changeLog'><li>I am planning to upgrade this web application by adding features like dark mode and robust date management, ensuring all data is stored accurately by specific dates. Although my current skill level in implementing these features isn't very advanced, but I am dedicated to improving my abilities in this field to successfully integrate all the desired functionalities into my application</li></p>

            
          <p className='fixed'>Fixed</p>

          <div className="date">
              <p>June 18 2024</p>
            </div>
          <ul>
            <li>Fix Add Button Animation</li>
            <li>Addind Delay Animation</li>
          </ul>

          <div className="date">
              <p>May 25 2024</p>
            </div>
          <ul>
            <li>Fixed Input Bugs</li>
            <li>Arrange All Emojis Inside The Container</li>
            <li>Change Fonts</li>
          </ul>
          
          <div className="date">
              <p>May 3 2024</p>
            </div>
          <ul>
            <li>Add Animation</li>
            <li>Enhance UI</li>
            <li>Change Theme Color</li>
          </ul>

          <div className="date">
              <p>April 20 2024</p>
            </div>
          <ul>
            <li>Making the UI</li>
            <li>Add Buttons</li>
            <li>Add Functionality</li>
          </ul>
        </div>
        
    </div>
  )
}

export default ChangeLog