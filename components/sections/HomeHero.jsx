import {PrimaryButton, Container} from "../../components"
// import Container from '../Container'
import { BsMouse } from "react-icons/bs"
import {Content} from '../../lib/constants'


const HomeHero = () => {
      return (
            <section className="relative py-20 flex items-center justify-center h-screen -mt-[100px] bg-fixed bg-center bg-cover custom-image">
                  <div className='absolute top-0 left-0 right-0 bottom-0 bg-white/70 z-[2]' />
                  <Container className="relative z-[3] ">

                        <div className="md:w-[60%]">
                              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
                                    {Content.brandName}
                              </h2>
                              <p className="text-lg mb-4 md:text-xl text-gray-500">
                                    {Content.aboutShort}
                              </p>
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap mt-4">
                              <PrimaryButton link="/products" className="w-full md:w-auto mb-2 md:mb-1 text-center text-md mx-0 md:mr-1">
                                    View Products
                              </PrimaryButton>

                              <PrimaryButton link="/contact" outline={true} className="w-full md:w-auto text-center text-md mx-0 md:mx-1">
                                    Contact us
                              </PrimaryButton>
                        </div>
                  </Container>
                  <div className='absolute bottom-6 transform animate-bounce z-[3]'>
                        <BsMouse size={38} className="text-blue-700" />
                  </div>
            </section>
      )
}

export default HomeHero