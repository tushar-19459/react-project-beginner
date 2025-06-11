import React from 'react'
import { ConsumeContext } from '../context'

const Loading = () => {

    const {loading} = ConsumeContext()

  return (
    <>
        {loading ? <h1 className=" w-dvw text-[60px] font-bold text-center">Loading...</h1> : null}
    </>
  )
}

export default Loading
