import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from "./Pages/Home"
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function allChefLoader({request}){
  return fetch("http://localhost:5000/alldata", {
    signal: request.signal,
  });
}



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    loader: allChefLoader,
    // children: [
    //   {
        
       
        
    //   },
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
