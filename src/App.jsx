import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Products from './Components/Products'
import Quality from './Components/Quality'
import Services from './Components/Services'
import Contact from './Components/Contact'
import ScrollToTop from './Components/ScrollToTop'
function App() {

  const router = createBrowserRouter([
    {

      path: "/",
      element: <>
        <ScrollToTop /><Navbar />
        <Home />
        <Footer />
      </>
    },
    {
      path: "/about",
      element: <><ScrollToTop /><Navbar /> <About /> <Footer /></>
    },
    {
      path: "/products",
      element: <><ScrollToTop /><Navbar /> <div className='overflow-x-hidden'>< Products /></div> <Footer /></>
    },
    {
      path: "/quality",
      element: <><ScrollToTop /><Navbar /> <Quality /> <Footer /></>
    },
    {
      path: "/services",
      element: <><ScrollToTop /><Navbar /> <Services /> <Footer /></>
    },
    {
      path: "/contact",
      element: <><ScrollToTop /><Navbar /> <Contact /> <Footer /></>
    },

  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
