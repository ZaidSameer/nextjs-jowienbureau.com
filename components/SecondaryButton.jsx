const SecondaryButton = ({ text, type, textSizeClass }) => {
      return (
            <button type={type} className={`text-blue-700 hover:bg-blue-700 sm:w-full hover:text-white px-8 py-3 border-2 border-blue-700 rounded w-auto ${textSizeClass}`}>
                  {text}
            </button>
      )
}
export default SecondaryButton