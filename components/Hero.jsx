import Link from 'next/link'
import React from 'react'
import { BsMouse } from "react-icons/bs"

const Hero = ({ heading = "", message = "", primatyButtonText = "", secondaryButtonText = "" }) => {
      return (
            <div className='relative flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-image'>
                  <div className='absolute top-0 left-0 right-0 bottom-0 bg-white/50 z-[2]' />

                  <div className='container flex max-w-[1040px] flex-col p-3 z-[2]'>
                        {heading ? <h1 className='text-5xl md:text-4xl font-bold mb-0 text-blue-700'>{heading}</h1> : ""}

                        {message ? <p className='py-5 text-xl text-gray-500'>{message}</p> : ""}
                        {primatyButtonText && secondaryButtonText ?
                              <div className="flex justify-start sm:justify-center sm:flex-col">
                                    {primatyButtonText ? <Link href="/products" className="btn-primary">
                                          {primatyButtonText}
                                    </Link> : ""}
                                    {secondaryButtonText ? <Link href="/contact" className="btn-secondary">
                                          {secondaryButtonText}
                                    </Link> : ""}

                              </div>
                              : ""}
                  </div>
                  <div className='absolute bottom-10 shadow animate-bounce bg-white rounded-full p-3'>
                        <BsMouse size={32} className="text-blue-700" />
                  </div>
            </div>
      )
}

export default Hero