
import { FaLinkedinIn  } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import "../../../App.css";
import { SiGmail } from "react-icons/si";

function SocialMedia() {
  return (
    <section id="socialMedia" className='contain w-full h-full max-w-1300px'>
        <div className='flex justify-between '>
            <a href="https://www.linkedin.com/in/jose-fe/" target="_blank" rel="noopener noreferrer" className='w-25 md:w-35 h-11 flex items-center justify-evenly text-gray-400  border-2 border-gray-500 rounded-[30px] hover:border-gray-300 hover:text-gray-300 hover:scale-90 transition-all duration-500 ease-in-out'>
            <FaLinkedinIn  className="w-6 h-6 "/>
            <span className="text-lg"><i>Linkedin</i> </span>
            </a>
            <a href="https://github.com/JoseFerrer52" className='w-25 md:w-35 h-11 flex items-center justify-evenly  border-2 text-gray-400 border-gray-500 rounded-[30px] hover:border-gray-300 hover:text-gray-300 hover:scale-90 transition-all duration-500 ease-in-out'>
            <TbBrandGithubFilled  className="w-6 h-6 "/>
            <span className="text-lg "><i>Github</i> </span>
            </a>
            <a href="mailto:joseferrer5243@gmail.com" className='w-25 md:w-35 h-11 flex items-center justify-evenly  border-2 text-gray-400 border-gray-500 rounded-[30px] hover:border-gray-300 hover:text-gray-300 hover:scale-90 transition-all duration-500 ease-in-out'>
            <SiGmail  className="w-6 h-6 "/>
            <span className="text-lg"><i>Email</i> </span>
            </a>
        </div>
    </section>
  )
}

export default SocialMedia