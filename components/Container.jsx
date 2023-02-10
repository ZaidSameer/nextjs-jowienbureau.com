const Container = ({children, className=""}) => {
      return(
            <div className={`container max-w-[1040px] lg:max-w-[1200px] mx-auto px-4 xl:px-0 ${className}`}>
                  {children}
            </div>
      )
}

export default Container