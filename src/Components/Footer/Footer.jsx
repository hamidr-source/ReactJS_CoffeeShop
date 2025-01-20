import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-accent h-1/6 flex mb-0 mt-3'>
        <p className='flex items-end mb-1 ml-1'>&copy; {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  )
}

export default Footer