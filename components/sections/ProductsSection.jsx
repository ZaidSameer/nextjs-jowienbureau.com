import Container from '../Container'
import { productList } from "../../data/productList";
import Link from "next/link";


const ProductsSection = () => {
      return (
            <section className="relative py-[100px] bg-blue-700">
                  <Container>
                        <h2 className="section-title text-white mb-10">Products</h2>
                        <div className="flex flex-wrap gap-4 md:gap-8">
                              {productList.map((item, index) => {
                                    return (
                                          <Link key={index} href={`/products/${item.slug}`} className="border-4 hover:bg-white/10 cursor-pointer p-3 md:p-4 w-full md:w-[calc(33.333333%-1.34rem)]">
                                                <h3 className="font-medium capitalize text-xl md:text-2xl text-white">{item.name}</h3>
                                          </Link>
                                    )
                              })}
                        </div>
                  </Container>
            </section>
      )
}

export default ProductsSection