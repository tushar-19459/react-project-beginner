import React from 'react'
import { ConsumeContext } from '../context'

const Error = () => {

    const {error} = ConsumeContext()

  return (
    <>
        {error ? <h1 className=" w-dvw text-[60px] font-bold text-center">Error:{error}</h1> : null}
    </>
  )
}

export default Error
