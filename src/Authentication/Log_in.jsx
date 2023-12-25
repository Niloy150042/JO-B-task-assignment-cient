import { Link, useNavigate } from "react-router-dom";
import login from "../assets/Images/login-form.gif";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { Authcontext } from "../provider/Authprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Log_in = () => {
  const navigate =useNavigate()
 

  const {signinuser,signinwithgoogle} = useContext(Authcontext)

  const handlesubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value 
    const password = e. target. password.value 
    signinuser(email,password)
    .then(result=>{
      console.log(result.user);
      toast.success('Log in successfully ! ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        navigate('/dashboard')
        
        
    })
    .catch(error=>{
      console.log(error);
    })
    
    

  };
  
  const handlegooglelogin =()=>{
  
    signinwithgoogle()
    .then(result=>{

      toast.success('Google-log in successfully !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        navigate('/dashboard')
      
    })
    .catch(error=>{
      console.log(error);

    })
  }

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="hero-content flex-col lg:flex-row ">
        <img src={login} className="h-[380px] rounded-2xl mt-20" alt="" />

        <div className="card  w-full shadow-2xl bg-gradient-to-r from-blue-400 to to-blue-200 mt-20">
          <p className="text-center font-poppins font-bold text-4xl mt-4 animate-bounce ">
            Login-Now
          </p>

          <form className="card-body" onSubmit={handlesubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-poppins text-xl  font-bold">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold font-poppins text-xl">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <button className=" border border-blue-500 border-x-8 border-y-8  btn btn-outline btn-primary  animate-pulse ">Log-in</button>
          
                
                 
          
           
          </form>
          <p className=" flex justify-center gap-4 font-Dosis text-2xl font-bold ">Also Log-in with <button onClick={handlegooglelogin}><FcGoogle className="text-4xl"></FcGoogle></button> </p>
          <p className="font-Dosis text-xl font-bold flex justify-center items-center gap-3">
              New to this platform ?{" "}
              <Link to={"/register"}>
                <button className="btn btn-primary">Register </button>
              </Link>{" "}
            </p>
        </div>
      </div>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </div>
  );
};

export default Log_in;
