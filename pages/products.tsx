
import Link from "next/link";
import { productList } from "../data/productList";
import {Container, Featured, PageHeading} from "../components";


export default function Products() {
  return (
    <>
    <PageHeading className="bg-top" overlyColor="" >
      <h1 className="section-title text-blue-600">Products</h1>
      <p className="text-gray-600 text-lg">
        Shop the best medical, medical furniture, physiotherapy,
        laboratory, aesthetic, X-ray, and sonar products at the Jowien
        Bureau. Find the perfect solutions for your practice or facility.
      </p>
    </PageHeading>

      <section className="py-20">
        <Container>
          <h3 className="section-title">Categories</h3>
          <div className="flex flex-wrap gap-4 md:gap-8 mt-10">
            {productList.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={`/products/${item.slug}`}
                  className="border-4 border-blue-600 hover:bg-white/10 cursor-pointer p-3 md:p-4 w-full md:w-[calc(33.333333%-1.34rem)]"
                >
                  <h3 className="font-medium capitalize text-xl md:text-xl text-blue-600">
                    {item.name}
                  </h3>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <Featured />
    </>
  );
}
