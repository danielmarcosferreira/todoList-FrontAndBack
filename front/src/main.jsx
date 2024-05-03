import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignInPage from './pages/SignInPage/SignInPage.jsx'
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx'
import NotFounPage from './pages/NotFoundPage/NotFoundPage.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import GlobalStyle from './styles/GlobalStyle.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
    errorElement: <NotFounPage />
  },
  {
    path: "/signUpPage",
    element: <SignUpPage />
  },
  {
    path: "/homePage",
    element: <HomePage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
