import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-sky-600 flex flex-row justify-between items-center  p-5 text-white text-lg font-semibold'>
            <h1>ReadYourTopic</h1>
            <ul className='flex flex-row gap-5 text-lg font-semibold'>
                <li>Home</li>
                <li>Topics</li>
                <li>Write</li>
                <li>Sign In</li>
                <li>Sign Up</li>
            </ul>
        </div>
    )
}

export default Navbar