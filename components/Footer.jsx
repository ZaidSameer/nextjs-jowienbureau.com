import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { SlSocialInstagram, SlSocialFacebook, SlSocialTwitter, SlSocialYoutube } from "react-icons/sl"
import { Content, WEBSITE_NAME } from "../lib/constants";
import { navLinks } from "../data/NavigationLinks";
import PrimaryButton from "./PrimaryButton";
import { MdOutlineCall } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import Image from 'next/image'

export default function Footer() {

      const date = new Date();
      const year = date.getFullYear();

      const footerLink = "text-gray-400 hover:text-blue-600 py-1"
      const socialMediaAttr = {
            target: "_blank",
            rel: "noopener noreferrer",
            className: "bg-blue-600 hover:bg-blue-100 group p-3 rounded-full"
      };

      const widgeCss = "md:w-[calc(33.333333%-1.67rem)] w-full text-white p-4";
      return (
            <>
                  <section className="bg-gradient-to-r from-blue-200 to-blue-100 py-16">
                        <Container className="flex flex-col md:flex-row md:items-center md:justify-between flex-wrap md:flex-nowrap">
                              <div className="pb-12 md:pb-0">
                                    <h3 className="text-3xl mb-2">Didn&apos;t find what you&apos;re looking for?</h3>
                                    <p className="text-gray-600">Our team is available between 9:00 AM - 6:00 PM, 7 days A week.</p>
                              </div>
                              <div className="flex flex-wrap md:flex-nowrap">
                                    <PrimaryButton link="tel:+9647807070800" outline={true} className="text-lg w-full md:w-auto"><MdOutlineCall className="mr-2" /> Call us</PrimaryButton>
                                    <PrimaryButton link="https://wa.me/+9647807070800" outline={true} className="text-lg w-full md:w-auto"><AiOutlineWhatsApp className="mr-2" />Start Live Chat</PrimaryButton>
                              </div>
                        </Container>
                  </section>
                  <footer>
                        <section className="pt-20 bg-gray-900">
                              <Container>
                                    <div className="flex gap-10 items-start flex-col flex-wrap md:flex-row">
                                          <div className={widgeCss}>

                                                <Logo className="text-white text-2xl" withSlogan="true" sloganClassName="mb-4 text-gray-400"></Logo>

                                                <p className="text-gray-400 font-normal">{Content.aboutLong}</p>

                                                <h3 className="mt-8 mb-2">Follow us</h3>
                                                <div className=" flex flex-nowrap gap-4">
                                                      <Link href="https://instagram.com" {...socialMediaAttr} >
                                                            <SlSocialInstagram size={22} className="text-gray-200 group-hover:text-blue-600" />
                                                      </Link>
                                                      <Link href="https://facebook.com" {...socialMediaAttr}>
                                                            <SlSocialFacebook size={22} className="text-gray-200 group-hover:text-blue-600" />
                                                      </Link>
                                                      <Link href="https://twitter.com" {...socialMediaAttr}>
                                                            <SlSocialTwitter size={22} className="text-gray-200 group-hover:text-blue-600" />
                                                      </Link>
                                                      <Link href="https://youtube.com" {...socialMediaAttr}>
                                                            <SlSocialYoutube size={22} className="text-gray-200 group-hover:text-blue-600" />
                                                      </Link>
                                                </div>
                                          </div>

                                          <div className={widgeCss}>
                                                <h4 className="text-2xl mb-4">Important Links</h4>
                                                <div className="flex flex-nowrap">

                                                      <ul className="w-1/2">
                                                            {navLinks.map((item, index) => {
                                                                  return(
                                                                        <li key={index} className={footerLink}>
                                                                              <Link href={item.slug}>{`${item.label}`}</Link>
                                                                        </li>
                                                                  )
                                                            })}
                                                      </ul>
                                                      <ul className="w-1/2">
                                                            <li className={footerLink}>
                                                                  <Link href="/privacy-policy">Investors</Link>
                                                            </li>
                                                            <li className={footerLink}>
                                                                  <Link href="/privacy-policy">Partners</Link>
                                                            </li>
                                                            <li className={footerLink}>
                                                                  <Link href="/privacy-policy">Suppliers</Link>
                                                            </li>
                                                            <li className={footerLink}>
                                                                  <Link href="/privacy-policy">Careers</Link>
                                                            </li>
                                                            <li className={footerLink}>
                                                                  <Link href="/privacy-policy">Privacy Policy</Link>
                                                            </li>
                                                            <li className={footerLink}>
                                                                  <Link href="/privacy-policy">Terms of Use</Link>
                                                            </li>
                                                            <li className={footerLink}>
                                                                  <Link href="/privacy-policy">Sitemap</Link>
                                                            </li>
                                                      </ul>

                                                </div>
                                          </div>
                                          <div className={widgeCss}>
                                                <h4 className="text-2xl mb-4">Visit us</h4>
                                                <div className="w-full h-[300px] object-cover max-w-max max-h-max relative">

                                                      <Image src="/images/map-location.jpeg" width={305} height={280} style={{ maxHeight: "270px" }} alt="find our location" />

                                                      <Link href="https://goo.gl/maps/RHiihuRQLj1CufHc6" target="_blank" title="Navigate to our location" >

                                                            <div className="absolute left-[40%] top-[30%] text-red-500 transform translate-x-[-30%] border border-red-600 px-2 flex flex-col items-center" >
                                                                  <HiLocationMarker size={26} />
                                                                  <span>{Content.shortBrandName}</span>
                                                            </div>
                                                      </Link>
                                                </div>
                                          </div>
                                    </div>
                              </Container>
                        </section>

                        <section className="py-10 bg-gray-800">
                              <Container className="flex items-center justify-between md:flex-row flex-col">
                                    <p className="text-center text-gray-500">
                                          {`© 2022 - ${year}  All Copyright reserved . `} <Link href="/" className="hover:text-blue-600" title={Content.brandName}>{Content.brandName}</Link>
                                    </p>
                                    <p className="text-center text-gray-500">
                                          Developed By <Link href="https://zeemedia.co" title="Zee Media Tech Solutions and Training" className="hover:text-green-600" >Zee Media</Link>
                                    </p>
                              </Container>
                        </section>
                  </footer>
            </>
      )
}