import Container from "../Container"
import PrimaryButton from '../PrimaryButton'

const CallToAction = () => {
      return (
            <section className="bg-gray-800 py-[80px]">
                  <Container className="flex items-start flex-col md:flex-row justify-between">
                        <div className="mb-10 md:mb-0">
                              <h2 className="section-title text-white mb-2">Interseted?</h2>
                              <p className="text-white text-lg">Let's Get In Touch and Talk with our sales team</p>
                        </div>

                        <PrimaryButton link="/contact" className="text-lg mx-0 w-full md:w-auto">Contact us</PrimaryButton>

                  </Container>
            </section>
      )
}

export default CallToAction