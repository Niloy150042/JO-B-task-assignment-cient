

import Aos from 'aos';
import pic1 from '../assets/Images/68294675.png'
import pic2 from '../assets/Images/become-a-market-manager.jpg'
import pic3 from '../assets/Images/financial-manager-job-description-template-sM5Kzi.jpg'
import "aos/dist/aos.css"
import { useEffect } from 'react';

const User_Types = () => {

  useEffect(()=>{

    Aos.init({duration:"3000"})

  },[])
    
    return (
        <div className="py-4 px-3">
             <p className="text-center font-Dosis text-3xl font-bold">---There are many Kinds of User in this platform--- </p>
             <div className="h-[2px] bg-black lg:w-[600px] mx-auto">

             </div>
             <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 py-3'>

             <div data-aos='fade-left' className="card   shadow-xl image-full">
  <figure><img src={pic1}  alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-Dosis text-3xl">Developers!</h2>
    
   
  </div>
</div>

<div data-aos='fade-left' className="card  shadow-xl image-full">
  <figure><img src={ pic2 } alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-Dosis text-3xl font-bold">Financial Employee!</h2>
    
   
  </div>
</div>

<div data-aos='fade-left' className="card   shadow-xl image-full">
  <figure><img src={pic3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold font-Dosis text-3xl">Accountants  !</h2>
    
    
  </div>
</div>
             </div>
  
                
      

        </div>
    );
};

export default User_Types;