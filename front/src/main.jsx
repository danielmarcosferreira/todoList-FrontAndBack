import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignInPage from './pages/SignInPage/SignInPage.jsx'
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx'
import NotFounPage from './pages/NotFoundPage/NotFoundPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
    errorElement: <NotFounPage />
  },
  {
    path: "/signUpPage",
    element: <SignUpPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
