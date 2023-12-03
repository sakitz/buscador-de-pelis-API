import React, { useState }  from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const link = [ 
        {
            id:1,
            link:'Perfil'
        },
        {
            id:2,
            link: 'Sobre mi' 
        },
        {
            id:3,
            link:'Portafolio'
        },
        {
            id:4,
            link:'Expreciencias'
        },
        {
            id:5,
            link:'Contacto'
        },
    ]
  return (
    <div className='flex justify-between items-center 
                  bg-black w-full h-20 text-white 
                  fixed px-4 '>
        <div className='text-5xl ml-2'>Logo</div>

        <ul className='hidden md:flex'>

        {link.map(({link}) => (
            <li key={link.id} className='px-4 cursor-pointer capitalize 
            font-medium text-gray-500 hover:scale-105 duration-200'
            > 
                {link}
            </li>
        ))}
        </ul>

        <div onClick={() => setNav(!nav)} 
             className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'
        >
            {nav ? <FaTimes size={30}/> :  <FaBars size={30}/>}
        </div>

        {nav && (
            <ul className='flex flex-col absolute justify-center 
                    items-center top-0 left-0 w-full h-screen bg-gradient-to-b 
                  from-black to-gray-800 text-gray-500'>

            {link.map(({link}) => (
                    <li key={link.id} className='px-4 cursor-pointer capitalize py-6 text-4xl'> 
                {link}
            </li>
            ))}
        </ul>
        )}  
    </div>
  )
}

export default NavBar