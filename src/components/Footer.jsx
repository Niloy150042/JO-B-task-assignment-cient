
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import pic from '../assets/Images/Task.png'
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
       <div className="bg-gradient-to-r from-blue-400 to-blue-500 ">
       
           <p className="flex justify-center" > <img src={pic} className='h-[50px]' alt="" /></p>
          
          <p className='font-poppins font-semibold  text-2xl text-white text-center'>Pentacyclic Platform Ltd.<br/>Providing reliable Task since 2021</p>
      

         <div className="grid grid-cols-2 lg:grid-cols-3  md:grid-cols-3 justify-between items-center  py-5  ">
        
        <nav className="font-poppins text-center font-semibold text-[15px] lg:ml-5 flex flex-col ">
          <header className="text-xl  font-Roboto  text-white">Services</header> 
          <a className="link link-hover py-2 ">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover py-2">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav> 

        <nav className="font-poppins font-semibold  text-[15px] ">
          <header className=" font-Roboto text-xl  text-center text-white">Contact us </header> 
         
       <div className="flex  items-center justify-center">
       <p className="text-center"> <a className="link link-hover  gap-2 py-2">Facebook  </a></p>
         <FaFacebook/>
       </div>

          <a className="link link-hover flex items-center justify-center gap-2 py-2">Twitter <FaTwitter></FaTwitter></a>
          <a className="link link-hover flex justify-center items-center gap-2">Instragram <FaInstagramSquare></FaInstagramSquare> </a>
          <a className="link link-hover flex justify-center items-center gap-2 py-2">Linked-in <FaLinkedin></FaLinkedin></a>
      
        </nav> 

        <nav className="font-poppins text-center text-[15px] font-semibold flex flex-col">
          <header className="font-Roboto text-xl text-white ">Legal</header> 
          <a className="link link-hover py-2">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover py-2">Cookie policy</a>
        </nav>
      </div>
       </div>
    );
};

export default Footer;