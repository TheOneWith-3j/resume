import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <nav className='w-full flex backdrop-blur-3xl top-0 start-0 border-b-4 border-gray-200 dark:border-yellow-200 overflow-y-hidden'>
            
            <div className='flex font-Poppins'>

                {/* Links */}
                <div className='flex items-center text-white' >
                     <Link to={'/'}>
                        <div className=' cursor-pointer p-2 mx-4 hover:scale-105 transition-all duration-300'>
                            <p>
                                <b>Home</b>
                            </p>
                        </div>
                    </Link>

                    <Link to={'/guidelines'}>
                        <div className=' cursor-pointer p-2 mx-4 hover:scale-105 transition-all duration-300'>
                            <p>
                                <b>Guidelines</b>
                            </p>
                        </div>
                    </Link>

                    <Link to={'/groups'}>
                        <div className='p-2 mx-4 cursor-pointer hover:scale-105 transition-all duration-300'>
                            <p>
                                <b>Groups</b>
                            </p>
                        </div>
                    </Link>

                    <Link to='/results'>
                        <div className='p-2 mx-4 cursor-pointer hover:scale-105 transition-all duration-300'>
                            <p>
                                <b>Results</b>
                            </p>
                        </div>
                    </Link>

                    <Link to='/about'>
                        <div className='p-2 mx-4 cursor-pointer hover:scale-105 transition-all duration-300'>
                            <p>
                                <b>About</b>
                            </p>
                        </div>
                    </Link>
                </div>

               
                
                
            </div>
           
        </nav>
    )
}

export default Navbar
