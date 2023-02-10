import Link from "next/link"

// function PrimaryButton({children, link, className="", outline=false}) {
function PrimaryButton(props) {

      return(
            <Link href={props.link} className={`${props.className} ${ props.outline ? 'btn-secondary' : 'btn-primary' } `}>{props.children}</Link>
      )
}

export default PrimaryButton