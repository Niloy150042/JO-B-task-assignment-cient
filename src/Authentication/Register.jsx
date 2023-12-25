import { Link, useNavigate } from 'react-router-dom';
import register from '../assets/Images/Register.gif'
import { useContext, useState } from 'react';
import { Authcontext } from '../provider/Authprovider';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  
  const navigate = useNavigate()
    const {signupuser,updateuserprofile,setloading} =useContext(Authcontext)




    const handlesubmit =(e)=>{

          e.preventDefault()
          const name = e.target.name.value
          const email = e.target.email.value
          const password = e.target.password.value 
          const photoURL = e.target.photourl.value


          signupuser(email, password,photoURL)
         .then((result) => {

          updateuserprofile(name, photoURL)
            
          .then((result) => {
            setloading(false)
            console.log('update profile:', result);      
          })
          .catch((error) => {
            console.log(error);
          });
          console.log(result.user);
        navigate('/')

        toast.success(` Your Register is successful`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });  
        
      })
      .catch((error) => {
        console.log(error);
        toast.error('something were wrong!',{
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      });

          

    }
    return (

        <div className="max-w-7xl mx-auto">
  <div className="hero-content flex-col lg:flex-row">
    <img src={register} className='h-[480px] rounded-3xl' alt="" />
    
    <div className="card shadow-2xl bg-gradient-to-r from-blue-400 to to-blue-200 w-full  mt-14 ">
        <p className='text-center font-poppins font-bold text-3xl animate-bounce mt-6 '>Register-Now </p>
    
        
      <form className="card-body" onSubmit={handlesubmit}>

      <div className="form-control">
          <label className="label">
            <span className="label-text font-poppins text-xl  font-bold">Name</span>
          </label>
          <input type="text" name='name' placeholder="your name " className="input input-bordered" required />
        </div>
        



        <div className="form-control">
          <label className="label">
            <span className="label-text font-poppins text-xl  font-bold">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold font-poppins text-xl">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold font-poppins text-xl">Photo-Url</span>
          </label>
          <input type="text" name='photourl' placeholder="Your photo url " className="input input-bordered" required />
          
        </div>
        <button className='btn btn-outline btn-primary ' >Register</button>
        <p className='font-Dosis text-xl font-bold flex justify-center items-center gap-3' >Already have an account ?  <Link to={'/log-in'}><button className='btn btn-primary'>Log-in</button></Link>  </p>
        
      </form>
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

export default Register;