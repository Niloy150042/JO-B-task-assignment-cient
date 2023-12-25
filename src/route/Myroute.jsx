import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Home/Home";
import Register from "../Authentication/Register";
import Log_in from "../Authentication/Log_in";
import FAQ_section from "../components/FAQ_section";
import Dashboard from "../dashboard/Dashboard";
import Createtask from "../Task/Createtask";
import Managetask from "../Task/Managetask";
import To_dotask from "../Task/To_dotask";
import Ongoingtask from "../Task/Ongoingtask";
import Completed_task from "../Task/Completed_task";
import Updatetask from "../Task/Updatetask";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/log-in',
          element:<Log_in></Log_in>
        },
        {
          path:'/Faq',
          element:<FAQ_section></FAQ_section>
        }
      ]
    },

    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'createtask',
          element:<Createtask></Createtask>
        },
        {
          path:'managetask',
          element:<Managetask></Managetask>
        },
        {
          path:'todotask',
          element:<To_dotask></To_dotask>
        },
        {
          path:'ongoingtask',
          element:<Ongoingtask/>
        },
        {
          path:'completedtask',
          element:<Completed_task></Completed_task>
        },
        {
          path:'updatetask/:id',
          element:<Updatetask></Updatetask>,
              
        }
      ]
    }
  ]);

  export default router