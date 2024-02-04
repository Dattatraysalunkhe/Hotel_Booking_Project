import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signoutUserStart,signInSuccess } from '../redux/user/userSlice'




function Header() {

    const { currentUser } = useSelector(state => state.user) // geeting user from slice user const (disstructerd current user geting) =from useselector( state through state.user(name gien in that name))
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    


    const handleSubmit = () => {
        e.preventDefault()

        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('searchTerm', searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if (searchTermFromUrl) {
            setSearchTerm(searchTermFromUrl);
        }
    }, [location.search])

    const handleSignOut = async () => {

        dispatch(signoutUserStart())
           
        const res = await fetch('/api/auth/signout')

        const data = await res.json()

        dispatch(signInSuccess())
    }

    return (
        <header className='bg-blue-400 shadow-md p-2 '>
            <div className='flex justify-between max-w-6xl items-center mx-auto p-3'>
                <Link to='/' className=' '>
                    <h1 className='font-bold text-sm sm:text-xl flex-wrap '>
                        <span className='text-slate-200'>Sky</span>
                        <span className='text-slate-800'>.com</span>
                    </h1>
                </Link>

                <form onSubmit={handleSubmit} action="" className='bg-white rounded-lg flex items-center '>
                    <input type="text" placeholder='Search' className=' text-slate-200 focus:outline-none w-24 sm:w-64 rounded-lg p-1 bg-white ' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <button ><FaSearch className='p-1' /></button>

                </form>

                <ul className='flex gap-4'>
                    <Link to='/'>  <li className='text-white font-medium hover:text-gray-600 uppercase'>Home</li></Link>
                    <Link to={'/Hotels'}><li className='text-white font-medium hover:text-gray-600 uppercase'>Hotels</li></Link>
                    <Link to='/My/bookings'> <li className='text-white font-medium hover:text-gray-600 uppercase'>Bookings</li> </Link>
                    <Link to='/About'> <li className='text-white font-medium hover:text-gray-600 uppercase'>About</li> </Link>
                    <Link to='/Profile'>
                        {currentUser ? (<h1 className=' text-white uppercase font-medium hover:text-gray-600'>{currentUser.username}</h1>) : (<li className='text-white uppercase font-medium hover:text-gray-600'>SignIn</li>)}

                    </Link>
                    <Link to={'/Profile'}>
                        {currentUser ? (
                            <img className='rounded-full w-7 h-7 items-center' src={currentUser.avatar} alt="profile" />
                        ):('')
                    }
                    </Link>
                    {
                        currentUser ? (
                            <button className='text-white uppercase font-medium hover:text-gray-600' onClick={handleSignOut}>Sign Out</button>
                        ) : ''
                    }
                </ul>
            </div>
        </header >
    )
}
 
export default Header
