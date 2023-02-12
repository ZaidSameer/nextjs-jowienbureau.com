import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link"
import { AiOutlineClose, AiOutlineAlignRight } from "react-icons/ai"
import {navLinks} from "../data/NavigationLinks"
import Logo from "./Logo"


const Navigation =() => {
      const router = useRouter();
      const initHeaderCss = 'top-[80px] md:top-[100px] h-[calc(100vh-80px)] md:h-[calc(100vh-100px)]';
      const [navOpen, setNavOpen] = useState(false)
      const [headerCss, setHeaderCss] = useState(initHeaderCss)
      let mobileMenuCss, navToggle;
      useEffect(() => {
            const changeNavigationCss = () => {
                  if(window.scrollY >= 40) {
                        setHeaderCss('top-[60px] md:top-[80px] h-[calc(100vh-60px)] md:h-[calc(100vh-80px)]')
                  } else {
                        setHeaderCss(initHeaderCss)
                  }
            };
            window.addEventListener('scroll', changeNavigationCss)
      }, []);


      const handleNav = () => {
            setNavOpen(!navOpen)
      }

      if(navOpen){
            mobileMenuCss = `md:hidden absolute left-0 ${headerCss} translate-x-0 flex justify-center flex-col items-center w-screen bg-blue-400 py-20 px-6 text-center ease-[cubic-bezier(.95, .9, .8, 1.4)] duration-300 z-30`;
      } else {
            mobileMenuCss = `sm:hidden absolute left-0 ${headerCss} bg-blue-400 py-20 px-6 w-screen translate-x-[-200%] duration-300 ease-[cubic-bezier(.95, .9, .8, 1.4)]`;
      }


      if(navOpen){
            navToggle=  <AiOutlineClose size={25} className="cursor-pointer" color="black" />;
      } else {
            navToggle=  <AiOutlineAlignRight size={25} className="cursor-pointer" color="black" />
      }

      return(
            <>
                  {/* Main Menu */}
                  <ul className="hidden md:flex list-none items-center justify-center text-gray-500">
                        {navLinks.map((item, i) => {
                              const isActive = router.pathname === item.slug
                              const isActiveCss = isActive ? "text-blue-700 font-semibold" : null;
                              if(item.slug == "/contact"){
                                    return false;
                              } else {
                                    return(
                                          <li className="p-4" key={item.slug}>
                                                <Link className={`hover:border-b-2 hover:border-blue-700 text-lg hover:text-blue-800 ${isActiveCss}`} href={`${item.slug}`}>{item.label}</Link>
                                          </li>
                                    )
                              }

                        })}
                  </ul>
                  <div className="flex items-center justify-center">
                        <Link href="/contact" className="hidden md:block text-sm md:text-base bg-blue-700 rounded text-white p-2 md:p-2 mr-4 md:mr-0">Contact us</Link>

                        {/* Mobile Button */}
                        <div onClick={handleNav} className="block lg:hidden z-40">{navToggle}</div>
                  </div>


                  {/* Mobile Menu */}
                  <div className={mobileMenuCss}>
                        {/* <Logo className="text-white text-xl font-bold" withSlogan={true} sloganClassName="text-white/70 text-md" /> */}
                        <ul className="flex flex-col w-screen">
                        {navLinks.map(item => {
                              const isActive = router.pathname === item.slug
                              return(
                              <li onClick={handleNav} className={`p-6 border-b last-of-type:border-0 border-white/10 ${isActive ? "bg-blue-500" : ""}`} key={item.slug} >
                                    <Link className={`text-2xl text-white hover:text-gray-100 ${isActive ? "font-semibold" : ""}`} href={item.slug}>{item.label}</Link>
                              </li>
                              )
                        })}
                        </ul>
                  </div>
            </>
      )
}

export default Navigation