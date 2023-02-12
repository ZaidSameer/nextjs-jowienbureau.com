import Hero from "../components/Hero";
import {Container, PageHeading, PrimaryButton} from "../components"
import Image from "next/image";
import officeImage from '../public/images/office.jpg'

export default function About() {

  const headImage = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  return (
    <>
      <PageHeading image={headImage} className="bg-center">
        <h1 className="section-title text-blue-600 mb-0">About us</h1>
      </PageHeading>

      <section className="py-20">
        <Container>
          <div className="flex items-start">
          <div className="w-1/2 pr-10">
            <h2 className="text-3xl font-bold mb-3">Jowien</h2>
            <p className="mb-6 text-gray-600">
              We are a <strong>registered scientific bureau</strong>, providing <strong>trusted</strong> and <strong>favored</strong> medical equipment to both the private and public sectors of Iraq.
            </p>
            <p className="mb-6 text-gray-600">
              <strong>Our team</strong>, comprised of experienced sales, engineers, finance, and delivery personnel, is committed to providing the best healthcare products to our customers and the most satisfactory results for our shareholders and company team.
            </p>
            <p className="mb-6 text-gray-600">
              <strong>Our mission</strong> is to become the leading supplier of healthcare products in Iraq, offering innovative and smart solutions. We are proud to serve all of Iraq, with branches in Kurdistan, Baghdad, and Basrah, as well as representatives in all major Iraqi cities.
            </p>
          </div>
          <div className="w-1/2 relative block overflow-hidden h-96 bg-gray-200">
            <Image src={officeImage} alt="Our Office" className="object-cover" fill={true} />
          </div>

          </div>
        </Container>
      </section>
    </>
  );
}

// width={1920} height={1280}