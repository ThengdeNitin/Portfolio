import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer(){
  return(
    <div className="relative border-t bg-gradient-to-l to-violet-950 from-blue-950 border-[#353951] text-white">
     <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
     <div className="flex justify-center -z-40">
      <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
     </div>

     <div className="flex flex-col md:flex-row items-center justify-between">
     <p className="text-sm">
        © Developer Portfolio by <Link target="_black" to="https://www.linkedin.com/in/nitin-thengde016/" className="text-[#16f2b3]">
          NITIN THENGDE
        </Link>
     </p>

     <div className="flex items-center gap-5">
      <Link target="_blank" to="https://github.com/ThengdeNitin"
      className="flex items-center gap-2 uppercase hover:text-[#16f2b3]">
        <IoStar/>
        <span>Star</span>
      </Link>
     </div>
     {/* <div className="flex items-center gap-5">
      <Link target="_blank" to="https://github.com/ThengdeNitin"
      className="flex items-center gap-2 uppercase hover:text-[#16f2b3]">
        <CgGitFOrk/>
        <span>Fork</span>
      </Link>
     </div> */}
     </div>
     </div>
    </div>
  )
}

export default Footer;