import Link from "next/link";
import {Content} from "../lib/constants"

export default function Logo({
  className = "text-blue-700 font-bold text-lg sm:text-2xl",
  withSlogan = false,
  sloganClassName = "text-[12px] md:text-sm text-gray-500"
}) {
  return (
    <Link href="/" title="Home Page">
      <h1 className={className}>{Content.brandName}</h1>
      {/* {withSlogan ? */}
      <p className={`ease-linear duration-300 transition-all ${withSlogan ? 'block' : 'hidden'} ${sloganClassName} `}>
        {Content.tagLine}
      </p>
      {/* : null
      } */}
    </Link>
  );
}
