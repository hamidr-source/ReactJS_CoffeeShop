import React from 'react'

const Footer = () => {
  return (
    <footer className='fixed bottom-0 right-0 left-0 bg-accent h-1/6 flex'>
        <p className='flex items-end mb-1 ml-1'>&copy; {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  )
}

export default Footer