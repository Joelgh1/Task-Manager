import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import {Root} from "./components/commons/Root.tsx";
import {HomePage} from "./components/commons/HomePage.tsx";
import {ProjectsFeed} from "./components/feed/ProjectsFeed.tsx";
import {ProjectDetail} from "./components/detail/ProjectDetail.tsx";
import {loader as projectLoader} from "./components/detail/ProjectDetail.tsx";

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
            },
            {
                path: "/projects/:projectId",
                element: <ProjectDetail/>,
                loader: projectLoader
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
