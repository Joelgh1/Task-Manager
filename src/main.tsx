import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import {Root} from "./components/Root.tsx";
import {HomePage} from "./components/HomePage.tsx";
import {ProjectsFeed} from "./components/ProjectsFeed.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/projects",
                element: <ProjectsFeed/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
