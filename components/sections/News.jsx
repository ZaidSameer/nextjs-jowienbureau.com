
import Container from "../Container"
import PrimaryButton from '../PrimaryButton'
import Image from "next/image"
import { SlCalender, SlArrowRight } from "react-icons/sl"
import Link from "next/link";


const News = () => {
  return (
    <section className="bg-white py-[100px]">
      <Container>
        <div className="mb-20">
          <h2 className="section-title mb-2">News & Events</h2>
          <p className="text-slate-500 mb-6 text-lg">Get the latest updates from the Jowien Bureau on our health sector news page. Follow us for coverage of our events, initiatives, and more.</p>
        </div>

        <div className="flex mb-20 gap-10 flex-col md:flex-row">
          <div className="md:w-[calc(33.333333%-1.3rem)] group">
            <figure className="group-hover:shadow-2xl transition-all ease-lineir duration-300">
              <Image src="/images/news/6.jpeg" width={860} height={430} alt="Kids’ Health Questions"></Image>
            </figure>
            <p className="text-gray-500 mt-2 flex items-center"><SlCalender className="mr-2" /> Janueary 10, 2023</p>
            <h4 className="text-xl font-bold my-3 group-hover:text-blue-800 text-blue-600 transition-all ease-lineir duration-300">Kids’ Health Questions</h4>
            <p className="text-gray-500 mb-3">Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique</p>
            <Link href="/news" className="hover:text-blue-600 text-lg transition-all ease-lineir duration-300">Read more</Link>
          </div>

          <div className="md:w-[calc(33.333333%-1.3rem)] group">
            <figure className="group-hover:shadow-2xl transition-all ease-lineir duration-300">
              <Image src="/images/news/5.jpeg" width={860} height={430} alt="Kids’ Health Questions"></Image>
            </figure>
            <p className="text-gray-500 mt-2 flex items-center"><SlCalender className="mr-2" /> Febreuary 3, 2023</p>
            <h4 className="text-xl font-bold my-3 group-hover:text-blue-800 text-blue-600 transition-all ease-lineir duration-300">Do You Know the ABCs of Health Care?</h4>
            <p className="text-gray-500 mb-3">Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique</p>
            <Link href="/news" className="hover:text-blue-600 text-lg transition-all ease-lineir duration-300">Read more</Link>
          </div>

          <div className="md:w-[calc(33.333333%-1.3rem)] group">
            <figure className="group-hover:shadow-2xl transition-all ease-lineir duration-300">
              <Image src="/images/news/3.jpeg" width={860} height={430} alt="Kids’ Health Questions"></Image>
            </figure>

            <p className="text-gray-500 mt-2 flex items-center"><SlCalender className="mr-2" /> Janueary 16, 2023</p>

            <h4 className="text-xl font-bold my-3 group-hover:text-blue-800 text-blue-600 transition-all ease-lineir duration-300">Our Definitive Guide to Cold and Flu</h4>

            <p className="text-gray-500 mb-3">Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique</p>

            <Link href="/news" className="hover:text-blue-600 text-lg transition-all ease-lineir duration-300">Read more</Link>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap">
        <PrimaryButton link="/news" className="text-lg w-full md:w-auto">
          Go to News & Events Page <SlArrowRight className="ml-1" />
        </PrimaryButton>
        </div>

      </Container>
    </section>
  )
}

export default News