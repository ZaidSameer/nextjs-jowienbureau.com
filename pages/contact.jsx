import Hero from "../components/Hero";
import { Container, PageHeading, PrimaryButton } from "../components"
import { Content } from "../lib/constants";
import Link from "next/link";
import SocialIcons from "../components/SocialIcons";


export default function Contact() {
  const headImage = "https://images.unsplash.com/photo-1559000357-f6b52ddfbe37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"

  const inputCss = 'border-2 p-2 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-blue-600 w-full';
  return (
    <>
      <PageHeading image={headImage}>
        <h1 className="section-title text-blue-600">Contact us</h1>
        <p className="text-gray-600 text-lg">
          Looking for more information about our products?<br />Submit your information and <strong>Jowien</strong> representative will follow up with you as soon as possible. Have a simple question? Check out our <Link href="#faq" className="text-blue-600">FAQ</Link> down below.
        </p>
      </PageHeading>

      <section className="py-10 bg-slate-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-10">
            <h3 className="text-2xl font-bold mb-10">We Are Here For You</h3>
              <p className="text-gray-600 ">
                You have Questions about our products, installing, you name it—just email us at
                <strong> info@jowienbureau.com</strong> or use the form below and our customer service team will get back to you within 24 hours.
              </p>

              <div className="py-20">
                <div className="p-4 mb-12 border-l-4 bg-white border-blue-600">
                  <p className="font-semibold">Fields marked with an asterisk (<span className="text-red-500">*</span>) are required.</p>
                </div>
                <div className="flex flex-col mb-8">
                  <label>Your name <span className="text-red-500">*</span></label>
                  <input className={inputCss} type="text" name="name" />
                </div>

                <div className="flex flex-col mb-8">
                  <label>Your email <span className="text-red-500">*</span></label>
                  <input className={inputCss} type="email" name="email" />
                </div>
                <div className="flex flex-col mb-8">
                  <label>Your message</label>
                  <textarea className={inputCss} name="message" />
                </div>

                <div className="mb-4">
                  <PrimaryButton type="submit" className="ml-0">Submit</PrimaryButton>
                </div>
              </div>

            </div>

            <div className="p-10">
              <h3 className="text-2xl font-bold mb-10">We can help. Our team of experts is on hand to answer your questions.</h3>
              <div className="flex p-10 bg-white shadow-2xl mb-10">
                <img src="/icons/chat.svg" className="mr-10" width="62px" height="auto"/>
                <div>
                <h4 className="font-semibold text-xl mb-1">Chat</h4>
                <p>
                  <Link className="text-blue-600" href="https://wa.me/+9647807070800">Click here</Link> to start a chat with an agent from 7:00am to 7:00pm CST on Monday through Friday.
                </p>
                </div>
              </div>

              <div className="flex p-10 bg-white shadow-2xl mb-10">
                <img src="/icons/call.svg" className="mr-10" width="62px" height="auto" />
                <div>
                  <h4 className="font-semibold text-xl mb-1">Call us</h4>
                  <p>
                  Give us a ring at <Link className="text-blue-600" href="https://wa.me/+9647807070800">+964 780 7070 800</Link> to speak with an agent immediately.
                </p>
                </div>
              </div>

              <div className="flex p-10 bg-white shadow-2xl">
                <img src="/icons/document.svg" className="mr-10" width="62px" height="auto" />
                <div>
                  <h4 className="font-semibold text-xl mb-1">Corporate Inquiries</h4>
                  <p>
                  <Link href="https://wa.me/+9647807070800">Click here</Link> to request information about our company. DO NOT use this form if you are a current or potential customer, as this channel is not monitored for customer service questions.
                </p>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>
      <section className="pb-10 bg-slate-100">
        <Container>
          <div className="flex items-center justify-center">
            <h3 className="text-xl pr-4">Follow us</h3>
            <SocialIcons />
          </div>
        </Container>
      </section>
      <section className="pt-10 pb-20 bg-slate-100">
        <Container>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3383.65982148772!2d44.352763!3d31.997236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDU5JzUwLjEiTiA0NMKwMjEnMTAuMCJF!5e0!3m2!1sen!2som!4v1676070900950!5m2!1sen!2som" width="100%" height="450" className="border-2 border-blue-600 rounded-xl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Container>
      </section>

    </>
  );
}
