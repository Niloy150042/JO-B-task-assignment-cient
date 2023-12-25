import Completed_task from "./Completed_task";
import Ongoingtask from "./Ongoingtask";


const To_dotask = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 ">
             <div className="border border-black min-h-screen rounded-2xl">
               <p className="font-bold text-2xl font-Roboto text-center"> To-do task</p>
             </div>
             <div className="border border-black min-h-screen rounded-2xl">
             <p className="font-bold text-2xl font-Roboto text-center"> Ongoing-task</p><Ongoingtask></Ongoingtask></div>
             <div className="border border-black min-h-screen rounded-2xl">
                <p className="font-bold text-2xl font-Roboto text-center">Completed-task</p><Completed_task></Completed_task></div>
        </div>
    );
};

export default To_dotask;