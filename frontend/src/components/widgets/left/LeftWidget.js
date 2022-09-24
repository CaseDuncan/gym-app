import React from 'react'
import './left.css'
import profile from './doe.jpg'
import { Visibility } from '@mui/icons-material'

function LeftWidget() {
  return (
    <div className='left'>
    <h5 className='title'>New Join Members</h5>
    <ul className='members'>
        <li className='items'>
            <img src={profile} alt="user" className='user-img'/>
            <div className='user'>
                <span className='name'>Case Duncan</span>
                <span classsName='role'>Instructor, Yoga</span>
            </div>
            <button className='btn'>
                <Visibility/>
                Display
            </button>
        </li>

        <li className='items'>
            <img src={profile} alt="user" className='user-img'/>
            <div className='user'>
                <span className='name'>Case Duncan</span>
                <span classsName='role'>Instructor, Yoga</span>
            </div>
            <button className='btn'>
                <Visibility/>
                Display
            </button>
        </li>

        <li className='items'>
            <img src={profile} alt="user" className='user-img'/>
            <div className='user'>
                <span className='name'>Case Duncan</span>
                <span classsName='role'>Instructor, Yoga</span>
            </div>
            <button className='btn'>
                <Visibility/>
                Display
            </button>
        </li>

        <li className='items'>
            <img src={profile} alt="user" className='user-img'/>
            <div className='user'>
                <span className='name'>Case Duncan</span>
                <span classsName='role'>Instructor, Yoga</span>
            </div>
            <button className='btn'>
                <Visibility/>
                Display
            </button>
        </li>

        <li className='items'>
            <img src={profile} alt="user" className='user-img'/>
            <div className='user'>
                <span className='name'>Case Duncan</span>
                <span classsName='role'>Instructor, Yoga</span>
            </div>
            <button className='btn'>
                <Visibility/>
                Display
            </button>
        </li>
    </ul>

</div>
  )
}

export default LeftWidget