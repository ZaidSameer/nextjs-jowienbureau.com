
import { useEffect, useState } from "react"
import Logo from "./Logo"
import Navigation from './Navigation'
import Container from "./Container"

export default function Header() {
      const [headerCss, setHeaderCss] = useState('bg-transparent h-[80px] md:h-[100px] shadow')
      const [showTagline, setShowTagline] = useState(true)

      useEffect(() => {
            const changeNavigationCss = () => {
                  if(window.scrollY >= 40) {
                        setHeaderCss('bg-white shadow-lg h-[60px] md:h-80px]')
                        setShowTagline(false)
                  } else {
                        setHeaderCss('bg-transparent h-[80px] md:h-[100px]')
                        setShowTagline(true)
                  }
            };
            window.addEventListener('scroll', changeNavigationCss)
      }, []);

      return(
            <header className={`fixed left-0 top-0 w-full z-10 ease-linear duration-300 flex items-center ${headerCss}`}>
                  <Container className={`flex items-center justify-between`}>
                        <Logo withSlogan={showTagline ? true : false} />
                        <Navigation />
                  </Container>
            </header>
      )
}