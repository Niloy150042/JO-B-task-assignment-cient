import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import backgroundpic from '../src/assets/Images/background-pic.jpg'

import {
  
  RouterProvider,
} from "react-router-dom";
import router from './route/Myroute';
import {  HelmetProvider } from 'react-helmet-async';
import Authprovider from './provider/Authprovider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const querylcient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Authprovider>
      <QueryClientProvider client={querylcient}>
      <div style={{backgroundImage :`url(${backgroundpic})` , backgroundRepeat:'no-repeat' , backgroundSize:'100% 100% '}}       className='bg-fixed mt-0'>
      <HelmetProvider>
       <RouterProvider router={router} />
       </HelmetProvider>
      </div>
      </QueryClientProvider>
      </Authprovider>

  </React.StrictMode>,
)
