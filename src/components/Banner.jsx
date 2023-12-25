
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import task1 from '../assets/Images/Task-1.jpg'
import task2 from '../assets/Images/Task-2.jpg'
import task3 from '../assets/Images/Task-3.jpg'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
const Banner = () => {
  useEffect(()=>{

    Aos.init({duration:"2500"})

  },[])
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div  className="bg-gradient-to-r from-black to white  rounded flex lg:items-center flex-col lg:flex-row  py-8  mb-2" >
            
            <div data-aos='fade-up' className="lg:w-[50%] text-white font-Dosis text-center lg:text-start lg:ml-2 mt-10 lg:mt-0 md:mt-10" >
                
             <p className=" text-4xl py-3 ">Welcome ! To Our Delightful Task Platform</p>
             <p className="text-3xl " > We are providing Best tast since <span className="text-blue-500 text-4xl" >2 years</span> </p>
             <p className="text-2xl py-3">In this platform </p>
            <Link to={'/log-in'}><p > <button className="btn btn-outline btn-info text-white ">
                Let's Elplore  No
             </button></p></Link>

            </div>



            <div className="lg:w-[50%] mt-10" >


            <div className="py-3" >
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={2500}
      >




     
      <div
        
          style={{
            backgroundImage:
              `url(${task1})`,borderRadius:`50px`,backgroundRepeat:`no-repeat`, backgroundSize:`100% 100%`,
          }}
        >
         
        
        </div>
   

        <div
          className=""
          style={{
            backgroundImage:
              `url(${task2})`,borderRadius:`50px`,backgroundRepeat:`no-repeat`,backgroundSize:`100% 100%`
          }}
        >
         
        </div>
        <div
          className="  "
          style={{
            backgroundImage:
              `url(${task3})`,borderRadius:`50px`,backgroundRepeat:`no-repeat`,backgroundSize:`100% 100%`
          }}
        >
       
        </div>




      </AutoplaySlider>
    </div>


            </div>

        </div>
    );
};

export default Banner;