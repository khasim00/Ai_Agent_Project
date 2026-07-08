// eslint-disable-next-line no-unused-vars
import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const ContactUs = () => {
  return (
    <div id='contact-us' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-[30px] text-gray-700 dark:text-white'>
        <Title title='Reach Out To Us' desc='From strategy to execution, we craft digital solution that move your business forward.'/>    
        <form className='grid sm:grid-cols-3 gap-3 sm:gap-5 max-w-2xl w-full'>
            <div>
                <p className='mb-2 text-sm font-medium'>Your Name</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.person_icon} alt=''/>
                    <input type='text' placeholder='Enter Your Name' className='w-full p-3 text-sm outline-none' required/>
                </div>
            </div>

             <div>
                <p className='mb-2 text-sm font-medium'>Email id</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.email_icon} alt=''/>
                    <input type='email' placeholder='Enter Your Email' className='w-full p-3 text-sm outline-none' required/>
                </div>
            </div>

            <div className='sm:col-span-2'>
                <p className='mb-2 text-sm font-medium'>Message</p>
                <textarea rows={8} placeholder='Enter Your Message'className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600'/>

                 <button type="submit" className='w-full sm:w-auto bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold text-sm px-6 py-2 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 flex items-center justify-center'>
                        Submit <img src={assets.arrow_icon} alt='Arrow icon' className='w-4 ml-2' />
                </button>
                
           </div>

        </form>
    </div>
  )
}

export default ContactUs
