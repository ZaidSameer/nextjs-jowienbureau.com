
import Image from "next/image"
import Link from "next/link"
import {SlCalender} from "react-icons/sl"

const NewsCard = (props) => {

      const fallBackImage = "/images/3d-surgery-room.jpg";
      const featuredImage = props.image ? props.image : fallBackImage;

      const content = props.excerpt.substring(0, 120) + " ..."
      return(
            <div className="md:w-[calc(33.333333%-1.67rem)] group">
              <Link href="/news">
              <figure className="group-hover:shadow-2xl transition-all overflow-hidden ease-linear duration-300 ">
                <Image src={featuredImage} className="h-[187px] group-hover:scale-110 transition-all ease-linear duration-300" width={373} height={187} style={{width: "auto", height: "187px", objectFit: "cover", objectPosition: "center center"}} alt={props.title} />
              </figure>
              </Link>

              <p className="text-gray-400 mt-2 flex items-center"><SlCalender className="mr-2" /> {props.date}</p>
              <Link href="/news">
              <h4 className="text-xl font-bold my-3 group-hover:text-blue-800 text-blue-600 transition-all ease-linear duration-300">{props.title}</h4>
              </Link>
              <p className="text-gray-400 mb-3">{content}</p>

              <Link href="/news" className="hover:text-blue-600 text-lg transition-all ease-linear duration-300">Read more</Link>

            </div>
      )
}

export default NewsCard