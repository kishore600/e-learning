import React from 'react'

const Button = (props) => {
  return (
    <>
    <button className='font-bold bg-purple text-white py-2 px-6 rounded-3xl md:ml-8 hover:bg-purpleshade duration-500'>
        {props.children}
    </button>
    </>
  )
}

export default Button