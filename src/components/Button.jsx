import React from 'react'

function Button({styles}) {
  return (
    <button type='button' className={`bg-blue-gradient px-6 text-[18px] text-primary outline-none font-medium py-4 ${styles}`}>

Get Started
    </button>
  )
}

export default Button