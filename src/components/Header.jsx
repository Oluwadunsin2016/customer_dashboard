/* eslint-disable react/prop-types */
// import { Button } from '@heroui/react'

const Header = ({openDrawer}) => {
  return (
    <div className='flex items-center justify-between my-6'>
      <h1 className='text-xl font-semibold'>Dashboard</h1>
      <button onClick={openDrawer} className='bg-blue-500 text-white rounded-md py-2 px-4 active:bg-blue-300 transition-all duration-100'>Transfer</button>
      {/* <button className='rounded-md !z-0' >Transfer</button> */}
    </div>
  )
}

export default Header
