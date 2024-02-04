import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-blue-400 shadow-md p-6 text-white font-medium mt-64 '>
      <div className='flex justify-between max-w-6xl items-center mx-auto p-3'>

        <div>
           <Link to={'/'} > <h1>Sky.com</h1> </Link>
        </div>

        <div>
          <ul>
            <Link> <li className='hover:text-gray-600'> Terms and Condition </li> </Link>
            <Link> <li  className='hover:text-gray-600'>Privacy & Cookie</li> </Link>
            <Link> <li  className='hover:text-gray-600'>Careers</li> </Link>
          </ul>
        </div>
        <div>
          <ul>
             <Link to={'/'}><li  className='hover:text-gray-600'>Home</li></Link>
             <Link to={'/sign-in'} ><li  className='hover:text-gray-600'>Sign-In</li></Link>
             <Link to={'sign-up'}><li  className='hover:text-gray-600'>SignUp</li></Link>
          </ul>
      </div>

    </div>
    </footer >
  )
}

export default Footer
