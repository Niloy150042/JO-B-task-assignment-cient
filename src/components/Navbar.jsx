
import { Link, useNavigate } from 'react-router-dom';
import pic from '../assets/Images/Task.png'
import { CiLogin } from "react-icons/ci";
import { useContext } from 'react';
import { Authcontext } from '../provider/Authprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
  const navigate =useNavigate()

  
 
  const {user,logout}=useContext(Authcontext)


  const handlelogout =()=>{
    logout()
    .then(result=>{
      toast.info('Log-out  successfully ! ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      console.log(result);
      navigate('/')
    })
    .catch(error=>{
      console.log(error);
  
    })
   }


    const navitems = <>
    
  <div className='lg:flex gap-5 items-center'>
  <Link to={'/'}> <p className='font-Roboto text-xl  hover:text-xl hover:border-b-2 hover:border-b-white text-white hover:animate-pulse'  ><a>Home</a></p></Link>
   
   <Link to={`/register`}>  <p className='font-poppins  text-xl hover:text-xl hover:border-b-2 hover:border-b-white text-white hover:animate-pulse' ><a>Register</a></p></Link>
   
   {user?<Link className='mr-3 mt-3 lg:mt-0 btn btn-outline text-white' to={'/dashboard'}> Dashboard  </Link> :''
    }
 
   <p className='text-white'>{user? <button onClick={handlelogout} className=' text-white btn btn-outline'>Log-out</button> : ''}</p>

   
  </div>

    </>
    return (
        <div className="navbar bg-gradient-to-r from-blue-600 to to-blue-500 rounded-md fixed z-10 max-w-7xl ">
          
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-r from-cyan-300 to to-blue-500 rounded-box w-52 ">
        {navitems}
      </ul>
    </div>
   <div className='flex  items-center gap-3'>
    <img src={pic} className='h-[40px] w-[40px]' alt="" />
   <a className="text-3xl font-Dosis font-bold text-white ">Pentacyclic</a>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

        {navitems}
 
     
    </ul>
  </div>
  <div className="navbar-end">
    
   {
    user? <div className='flex flex-col-reverse  items-center'>
     <div className=''>
     <p className='font-bold font-Dosis'>{user.displayName}</p>
   
     </div>
      <div className='' >
      <img src={user.photoURL} className='h-[40px] rounded-full' alt="" />
      </div>
      
    </div> :<Link to={'/log-in'}> <a className="btn text-white bg-gradient-to-r from-blue-600  to to-blue-600 border-none  font-Dosis text-xl">Log-in <CiLogin/></a></Link>
   }
    

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

export default Navbar;