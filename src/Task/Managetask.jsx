import { MdDelete, MdOutlineUpdate } from "react-icons/md";
import useTask from "../Hooks/useTask";
import useAxiossecure from "../Hooks/useAxiossecure";

import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"


const Managetask = () => {
    const axiossecure =useAxiossecure()

    const [Task,refetch] =useTask()
    useEffect(()=>{

      Aos.init({duration:"3000"})
  
    },[])

    const handledelte=(id)=>{
      console.log(id);
        axiossecure.delete(`taskinfo/${id}`)
        .then(res=>{
          

           if(res.data.deletedCount >  0){
            toast.success('This task is deleted successfully !', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
              refetch()
           }
        })
        .catch(error=>{
            console.log(error);
        })    
    }

    
  
    return (
        <div className="overflow-x-auto">

  <table className="table table-zebra  " data-aos='fade-up'>
    {/* head */}
    <thead>
      <tr className="text-xl text-center font-poppins text-black">
        <th>SI</th>
        <th>Title</th>
        <th>Descrition</th>
        <th>Deadline</th>
        <th>Priority</th>
        <th>Delete</th>
        <th>Update</th>
      </tr>
    </thead>

    {Task.map((task,idx)=>

         <tbody key={task._id}>
         {/* row 1 */}
         <tr className="">
           <th className="text-center font-bold">{idx+1}</th>
           <td className="text-center font-bold">{task.title}</td>
           <td className="text-center font-bold">{task.description}</td>
           <td className="text-center font-bold">{task.deadline}</td>
           <td className="text-center font-bold"> {task.priority}</td>
           <td className="flex justify-center "><button onClick={()=>handledelte(task._id)} className="btn btn-info text-2xl text-red-600"><MdDelete></MdDelete></button> </td>

             <td className="text-center"><p className="flex justify-center text-2xl"><Link to={`/dashboard/updatetask/${task._id}`}><button  className="btn  text-white btn-primary"><MdOutlineUpdate/></button></Link></p> </td>


         </tr>
       
         
        
        
       </tbody>)}


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
  </table>
</div>
    );
};

export default Managetask;