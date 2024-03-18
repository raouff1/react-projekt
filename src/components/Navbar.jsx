import React from 'react';
import {logo} from '../assets';
import {Link} from 'react-router-dom';



const Navbar = () => {
    return (
        <div className='w-full h-[80px] z-10 bg-white fixed drop-shadow-lg relative'>
         <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>

            <div className='flex items-center'>
                <img src= {logo} alt="logo" className='sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]'/>
            </div>
           
            <div className='flex items-center'>
            <ul className='hidden md:flex'>
                <li>
                <Link to= "/blog/1">Om mig</Link>
                </li>
                
                    <li>
                        
                        <Link to= "/contact">Kontakta mig</Link>
                    </li>
                  
                </ul>

            </div>
            
            
            <div className='hidden md:flex sm:mr-10 md:mr-10'>
        
            <Link to="/contact">
            <button className="px-8 py-3">Kontakta</button>
            </Link>

            </div>

         </div>

        </div>
    )
}

export default Navbar