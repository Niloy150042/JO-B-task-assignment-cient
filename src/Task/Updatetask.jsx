import { useNavigate, useParams } from "react-router-dom";

import useTask from "../Hooks/useTask";
import useAxiossecure from "../Hooks/useAxiossecure";
import { ToastContainer, toast } from "react-toastify";



const Updatetask = () => {
    const navigate = useNavigate()
    const [Task]=useTask()
    const {id}=useParams()
    const axiossecure = useAxiossecure()

    const mathcingtask = Task.find((task) => task._id === id )
   console.log(mathcingtask);

   const handlesubmit=(e,id)=>{
        e.preventDefault()
        const title =e.target.title.value 
        const description =e.target.description.value 
        const deadline = e.target.deadline.value 
        const priority = e. target.priority.value 
        id =mathcingtask._id
        console.log(title,description,deadline,priority,id);
        const updatedinfo ={title,description,deadline,priority}

        axiossecure.patch(`/taskinfo/${id}`,updatedinfo)
        .then(res=>{
            if(res.data.modifiedCount > 0){
                toast('Task is added successfully !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                    navigate('/dashboard/managetask')
            }
        })
        .catch(error=>{
            console.log(error);
        })

        
   }

  

  
    return (

       
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-gradient-to-b from-blue-300 to-blue-600">
        <p className="text-center py-3 font-bold font-Roboto text-2xl" >Update Your Task </p>
      <form onSubmit={handlesubmit} className="card-body ">
        <div className="form-control">
          <label className="font-bold text-2xl font-Roboto py-2 ">
            <span className="">Title: </span>
          </label>
          <input type="text" defaultValue={mathcingtask.title}  name="title" placeholder="email" className="input input-bordered" required />
        </div>
        <div>
            <p className="text-2xl font-bold font-poppins">Description : </p>
        <textarea name="description" defaultValue={mathcingtask.description} id="" cols="40" rows="5" className="rounded-md"  ></textarea>

        </div>
        <div className="form-control">
          <label className="font-bold text-2xl font-Roboto py-2 ">
            <span className="">Deadline : </span>
          </label>
          <input type="date"  defaultValue={mathcingtask.deadline} name="deadline" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className=" py-2">
            <span className="label-text font-poppins text-xl font-bold  ">Tast-Priority  : </span>
          </label>

          <select id="cars" name="priority" defaultValue={mathcingtask.priority} >
        <option value="Low">Low</option>
        <option value="Moderate">Moderate</option>
         <option value="High">High</option>
 
</select>
        </div>
     
        <div className="form-control mt-6">
          <button className="btn btn-info  text-xl font-poppins animate-pulse">Update Task</button>
        </div>
      </form>
    </div>

    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />



  </div>

    );
};

export default Updatetask;