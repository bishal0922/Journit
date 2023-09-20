import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import About from './components/About.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import JournalEntryView from './components/JournalEntryView.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "journals/:journaldate",
    element: <JournalEntryView/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/about",
    element: <About/>,
    errorElement: <ErrorPage/>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
