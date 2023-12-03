import React from 'react'
import heroImg from '../assets/portfolio/capy.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md' 

const Home = () => {
 return(
    <div name="home" className='h-screen w-full bg-gradient-to-b  text-white from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center z
                        justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-6xl font-bold text-white'>
                    Hola Soy Benjamin, FrontEnd developer.
                </h2>
                <p className=' text-gray-500 py-4 max-w-md'>
                    pasion por la programacion y esforzarme por aprender mucho mas y ser el mejor.
                </p>

                <div>
                    <button className='group rounded-md w-fit px-6 py-3 my-2 flex
                                       bg-gradient-to-r from-blue-400 to-blue-700 cursor-pointer'>
                        Portafolio  
                        <span className='group-hover:rotate-90 duration-300'>
                             <MdOutlineKeyboardArrowRight  size={25} className='ml-1'/> 
                        </span>
                    </button>
                </div>
            </div>

            <div>
                <img src={heroImg} alt='mi perfil' className=' rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>

        </div>
    </div>
  );
}

export default Home