import Container from "../Container"
import PrimaryButton from '../PrimaryButton'
import macbookIphone from '../../public/images/products/fractional-co2.jpeg';


const Featured = () => {
      const css = "group relative w-1/2 md:w-1/4 overflow-hidden bg-slate-300 p-4 flex items-center justify-center bg-cover bg-center h-[200px] md:h-[300px] z-[1] bg-no-repeat"

      const css2 = "absolute left-0 top-0 bg-blue-300/80 z-[2] w-full h-full opacity-0 group-hover:opacity-100 ease-linear duration-300 transition"

      const css3 = "duration-300 translate-y-[3rem] opacity-0 ease-linear group-hover:translate-y-0 group-hover:opacity-100 text-xl font-black relative z-[3] text-slate-900"
      // const assets = "../../public/images/products/";

      return (
            <section className="bg-white py-[100px]">
                  <Container className="mb-20">
                        <h2 className="section-title">Featured Products</h2>
                        <p className="text-slate-500">The most selled products collection, We have picked especially for you.</p>
                        <a href="../../public/images/products/fractional-co2.jpeg">fractional-co2.jpeg</a>
                  </Container>
                  <div className="flex flex-wrap">
                        <div className={`${css} bg-[url(/images/products/fractional-co2.jpeg)]`}>
                              <div className={css2} />
                              <h3 className={css3}>Fractional CO2</h3>
                        </div>

                        <div className={`${css} bg-[url(/images/products/infant-incubator.png)]`}>
                              <div className={css2} />
                              <h3 className={css3}>Infant Incubator</h3>
                        </div>

                        <div className={` ${css} bg-[url(/images/products/delivery-bed.jpeg)]`}>
                              <div className={css2} />
                              <h3 className={css3}>Delivery Bed</h3>
                        </div>

                        <div className={` ${css} bg-[url(/images/products/alex-plus.jpeg)]`}>
                              <div className={css2} />
                              <h3 className={css3}>Alex Plus</h3>
                        </div>
                  </div>
                  {/* 2 */}
                  <div className="flex flex-wrap mb-20">
                        <div className={`${css} bg-[url(/images/products/cherylase.jpeg)]`}>
                              <div className={css2} />
                              <h3 className={css3}>Cherylase</h3>
                        </div>

                        <div className={`${css} bg-[url(/images/products/polylas-mx.jpeg)]`}>
                              <div className={css2} />
                              <h3 className={css3}>Polylas mx</h3>
                        </div>

                        <div className={` ${css} bg-[url(/images/products/ctg.jpeg)]`}>
                              <div className={css2} />
                              <h3 className={css3}>CTG</h3>
                        </div>

                        <div className={` ${css} bg-[url(/images/products/patient-monitor.jpeg)]`}>
                              <div className={css2} />
                              <h3 className={css3}>Patient Monitor</h3>
                        </div>
                  </div>
                  <Container className="flex flex-wrap md:flex-nowrap">
                        <PrimaryButton link="/products" className="text-md w-auto" outline={true}>View More Products</PrimaryButton>
                  </Container>

            </section>
      )
}

export default Featured