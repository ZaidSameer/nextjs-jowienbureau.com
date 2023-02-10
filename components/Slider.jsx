import Image from "next/image"
import { useState } from "react"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"
import Container from './Container'
import {SliderData} from "../data/SliderData"

export const config = { amp: true }

const Slider = () => {

      const [current, setCurrent] = useState(0);
      const length = SliderData.length;

      const nextSlide = () => {
            setCurrent(current === length - 1 ? 0 : current)
      }

      const prevSlide = () => {
            setCurrent(current === 0 ? length - 1 : current - 1)
      }

      if (!Array.isArray(SliderData) || SliderData.length <= 0) {
            return null;
      }

      return (
            <section id="gallery" className="py-[100px] bg-gray-100">
                  <Container>

                        <h2 className="section-title mb-10"> Gallery </h2>
                        {SliderData.map((slide, index) => {
                              return (
                                    <div key={index} className={`relative ${index === current
                                                ? 'opacity-[1] ease-in duration-1000'
                                                : 'opacity-0'
                                          }`
                                    }>
                                          <FaArrowCircleLeft size={28} onClick={nextSlide} className="absolute top-[50%] left-[40px] text-white/70 cursor-pointer select-none z-[2] bg-gray-400 shadow-md rounded-full" />
                                          {index === current && (
                                                <Image src={slide.image} alt={index} width={1040} height={350} style={{width: "100%"}}/>
                                          )}
                                          <FaArrowCircleRight size={28} onClick={prevSlide} className="absolute top-[50%] right-[40px] text-white/70 cursor-pointer select-none z-[2] bg-gray-400 shadow-md rounded-full" />
                                    </div>

                              )
                        })}
                  </Container>
            </section>
      )
}

export default Slider