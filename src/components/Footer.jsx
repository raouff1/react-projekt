import React from 'react'
import {FaFacebook, FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full bg-[#02044A] text-gray-300 py-8 px-2'>
         <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
           
            
           

            <div className='col-span-2 pt-2 md:pt-2'>
                <p className='font-bold uppercase'>Välkommen att läsa på</p>
                <p className='py-4'>För mer info om mig kontakta mig!</p>
                <form className='flex flex-col sm:flex-row'>
                  
                </form>

            </div>

            

         </div>
         <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center'>
           <p>2024 CWTS, LLC, ALL rights reserved. </p>

           <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook />
            <FaGithub />
            <FaInstagram />
            <FaTwitter />




            </div> 


         </div>
        </div>
    )
}

export default Footer