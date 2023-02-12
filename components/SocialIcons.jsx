import {
      SlSocialInstagram,
      SlSocialFacebook,
      SlSocialTwitter,
      SlSocialYoutube
} from "react-icons/sl"
import Link from "next/link";


const SocialIcons = () => {

      const socialMediaAttr = {
            target: "_blank",
            rel: "noopener noreferrer",
            className: "bg-blue-600 hover:bg-blue-100 group p-3 rounded-full"
      };

      const iconCss = "text-gray-200 group-hover:text-blue-600";

      return (
            <div className=" flex flex-nowrap gap-4">
                  <Link href="https://instagram.com" {...socialMediaAttr} >
                        <SlSocialInstagram size={22} className={iconCss}/>
                  </Link>
                  <Link href="https://facebook.com" {...socialMediaAttr}>
                        <SlSocialFacebook size={22} className={iconCss} />
                  </Link>
                  <Link href="https://twitter.com" {...socialMediaAttr}>
                        <SlSocialTwitter size={22} className={iconCss} />
                  </Link>
                  <Link href="https://youtube.com" {...socialMediaAttr}>
                        <SlSocialYoutube size={22} className={iconCss} />
                  </Link>
            </div>
      )
}

export default SocialIcons