import React from 'react'
import { VscBracketError } from "react-icons/vsc";

const Error = (message) => {
  return (
    <div className='flex justify-center text-red-500 text-2xl items-center h-screen w-screen'>
      <VscBracketError size={50} /> <p>some error ...</p>
    </div>
  )
}

export default Error
