
import FAQ from '../assets/Images/FAQ secion.jpg'
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

const FAQ_section = () => {
    useEffect(()=>{

        Aos.init({duration:"2500"})
    
      },[])
    return (
        <div data-aos="fade-up" className='flex flex-col lg:flex-row md:flex-row items-center justify-between'>
             <div className='text-center lg:text-start'>
                <p className="text-4xl font-bold font-Dosis ">What type of people are usually use this website <span className="text-6xl font-cinzel font-bold text-red-700">?</span></p>
                <p className="text-3xl font-bold font-Dosis py-3 ">Whome this can be on <span className="font-bold font-Dosis text-red-700 text-4xl">benifit</span> ! </p>
                <button className='text-xl btn btn-info' >See below</button>
               
             </div>
             <div> 
             <img src={ FAQ} className='h-[300px] w-[400px] rounded-full ' alt="" />
            

             </div>
             
        </div>
    );
};

export default FAQ_section;