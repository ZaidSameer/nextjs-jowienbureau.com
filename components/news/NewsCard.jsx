
import Image from "next/image"
import Link from "next/link"
import { SlCalender } from "react-icons/sl"

const NewsCard = (props) => {

  const fallBackImage = "/images/3d-surgery-room.jpg";
  const featuredImage = props.image ? props.image : fallBackImage;
  const content = props.excerpt.substring(0, 120)
  return (
    // <div className={`w-full sm:w-[calc(50%-1.25rem)] bg-gray-300 md:w-[calc(33.333333%-1.67rem)] group`}>
    <div className={`bg-white shadow-2xl group mb-10 `}>
      <Link href="/news">
        <figure className={`group-hover:shadow-xl transition-all overflow-hidden ease-linear duration-500 w-full h-full block object-cover`}>
          <img
            src={featuredImage}
            className="group-hover:scale-110 transition-all ease-linear duration-300 object-cover object-center contrast-115"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // fill
            alt={props.title}
          />
        </figure>
      </Link>

      <div className="p-6">
        <p className="text-gray-400 mt-2 flex items-center"><SlCalender className="mr-2" /> {props.date}</p>
        <Link href="/news">
          <h4 className="text-xl font-bold my-3 group-hover:text-blue-800 text-blue-600 transition-all ease-linear duration-300">{props.title}</h4>
        </Link>
        <p className="text-gray-400 mb-3">{content}</p>

        <Link href="/news" className="hover:text-blue-600 text-lg transition-all ease-linear duration-300">Read more</Link>
      </div>
    </div>
  )
}

export default NewsCard