import Link from "next/link"

// function PrimaryButton({children, link, className="", outline=false}) {
function PrimaryButton(props) {
      if(props.type === "submit" || props.type === "button" ){
            // console.log(props.type)
            return <button type={props.type} onClick={props.onClick} className={`${props.className} ${ props.outline ? 'btn-secondary' : 'btn-primary' } `}>{props.children}</button>
      }

      return(
            <Link href={props.link} className={`${props.className} ${ props.outline ? 'btn-secondary' : 'btn-primary' } `}>{props.children}</Link>
      )
}

export default PrimaryButton