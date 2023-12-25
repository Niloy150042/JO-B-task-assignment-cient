import { FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { IoMdCreate } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { RiMastodonLine } from "react-icons/ri";
import { IoIosGitNetwork } from "react-icons/io";
import { MdOutlineIncompleteCircle } from "react-icons/md"
import { useContext } from "react";
import { Authcontext } from "../provider/Authprovider";


const Dashboard = () => {
    const {user}=useContext(Authcontext)

    return (
    <div className="min-h-screen " >
        <p className="text-center py-6 text-6xl font-cinzel font-bold">  -Welcome to the Dashboard -  </p>
        <p className="font-bold text-center font-poppins text-2xl uppercase" >-- {user.displayName} --</p>
        <div className="flex flex-col lg:flex-row gap-5 justify-center lg:justify-start  ">
            
            <div className="lg:ml-6 p-4 bg-gradient-to-b from-blue-500 to-blue-800 text-center rounded-2xl ">
             <p className="flex justify-center">   <img src={user.photoURL} className="rounded-[80%]" alt="" /></p>
             <p className="text-center py-2 font-poppins font-bold text-2xl" >{user.displayName}</p>
          
            <Link to={'createtask'}><div className=" mb-2 py-2 flex items-center gap-3 justify-center font-bold font-Dosis text-2xl bg-blue-900 rounded-full text-white  ">Create Task <IoMdCreate/> </div></Link>

            <Link to={'managetask'}><div className="flex  mb-2 py-2 items-center justify-center  gap-3 font-bold text-xl bg-blue-900 text-white rounded-full"> Manage-task   <MdManageAccounts/> </div></Link>

           <Link to={'todotask'}> <div className="flex  mb-2 py-2 items-center justify-center  gap-3 font-bold text-xl bg-blue-900 text-white rounded-full"> To-do Task <RiMastodonLine/> </div></Link>
           <Link to={'ongoingtask'} > <div className="flex  mb-2 py-2 items-center justify-center  gap-3 font-bold text-xl bg-blue-900 text-white rounded-full">Ongoing-task <IoIosGitNetwork/> </div></Link>
            <Link to={'completedtask'}><div className="flex  mb-2 py-2 items-center justify-center  gap-3 font-bold text-xl bg-blue-900 text-white rounded-full">Completed -task <MdOutlineIncompleteCircle/> </div></Link>

            <div className="h-[2px] bg-black    "></div>
            <Link to={'/'}><p className="flex items-center justify-center py- font-Roboto text-xl text-white gap-2 bg-blue-500 rounded-xl  mt-3   ">Home <FaHome></FaHome> </p></Link>
            </div>


            <div className="w-[70%]">
            <Outlet></Outlet> 
            </div>

             
              
            
        </div>
    </div>
    );
};

export default Dashboard;