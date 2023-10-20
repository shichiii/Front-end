import React from 'react'

const Search = () => {
  return (
    <div>
        <div className='w-full py-16  text-white px-4 bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue  to-pallate-Gunmetal'>
      <div className='max-w-[1240px] border-2 p-12 border-pallate-Dark_Sky_Blue rounded-2xl mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            You can search for the car model you want.
          </h1>
          <p>Sign up to our newsletter and stay up to dateCard model or Name.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Car Name'
            />
            <button className='bg-pallate-Dark_Sky_Blue text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
             Search
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-pallate-Dark_Sky_Blue'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Search
