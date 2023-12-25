
import useAxiossecure from "../Hooks/useAxiossecure";

import { ToastContainer, toast } from "react-toastify";

const Createtask = () => {
  const axiossecure =useAxiossecure()

  const handlesubmit=(e)=>{
         e.preventDefault()
         const title = e.target.title.value 
         const description = e.target.description.value 
         const deadline = e.target.deadline.value 
         const priority = e.target.priority.value 
        const taskinfo= {
          title, description, deadline, priority
        }
        console.log(taskinfo);
        axiossecure.post('/taskifo',taskinfo)
        .then(res=>{
          if(res.data.insertedId){
            toast.success('Task created Successfully!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
          }
          

        })
        .catch(error=>{
          console.log(error);
        })
  }
    return (
        <div className="">
           <p className="text-center font-poppins text-2xl py-2 font-bold">Create  Your valuable  Task </p>

          
            
  <div  className="hero-content py-5 ">
    
    <div 
     className="card shrink-0 w-full max-w-lg   shadow-2xl bg-gradient-to-b from-indigo-400 to-indigo-600">
      <form onSubmit={handlesubmit} className="card-body">
        <div className="form-control">
          <label className="text-center py-2">
            <span className="label-text font-poppins text-xl font-bold  ">Task-Title : </span>
          </label>
          <input type="text" name="title" placeholder="Task-title" className="input input-bordered" required />
        </div>
        <textarea name="description" id="" cols="10" rows="5" className='rounded-2xl text-center texr-2xl ' placeholder="Description "></textarea>

        <div className="form-control">
          <label className="text-center py-2">
            <span className="label-text font-poppins text-xl font-bold  ">Task -Deadlines  : </span>
          </label>
          <input type="date" name="deadline" placeholder="Task-title" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="text-center py-2">
            <span className="label-text font-poppins text-xl font-bold  ">Tast-Priority  : </span>
          </label>

          <select id="cars" name="priority" >
        <option value="Low">Low</option>
        <option value="Moderate">Moderate</option>
         <option value="High">High</option>
 
</select>
        </div>

        

        <div className="form-control mt-6">
          <button className="btn btn-info  text-xl">Create-Task</button>
        </div>
      </form>
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
</div>

       
    );
};

export default Createtask;