import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { HomePage } from "./pages/Home";
import { ResearchPage } from "./pages/Research";
import { StudentsPage } from "./pages/Students"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/research",
    element: <ResearchPage />,
  },
  {
    path: "/students",
    element: <StudentsPage />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
