import Container from './Container'
import Image from 'next/image'

const PageHeading = (props) => {

      const fallBackImage = "images/3d-surgery-room.jpg";
      const bgImage = props.image ? props.image : fallBackImage;
      const imageCss = `url("${bgImage}")`;
      const overlyColor = props.overlyColor ? props.overlyColor : "bg-white/70"
      // style={{backgroundImage: "url(images/3d-surgery-room.jpg)"}

      return(
            <>
            {/* <style jsx global>{`
                  body {
                        background-color: red;
                  }
            `}</style> */}

            <section className={`relative bg-no-repeat bg-cover bg-center z-[1] py-20 ${props.className}`} style={{backgroundImage: imageCss}}>
                  <div className={`absolute left-0 top-0 z-[2] h-full w-full ${ overlyColor }`}/>
                  <Container className={`relative z-[3] ${props.className} `}>
                        <div className='md:w-[60%]'>
                        {props.children}
                        </div>
                  </Container>
            </section>
            </>
      )
}

export default PageHeading