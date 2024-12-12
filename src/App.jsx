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

function App() {
  {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 "></div></div> */ }
  const router = createBrowserRouter([
    {

      path: "/",
      element: <>
        <Navbar />
        <Home />
        <Footer />
      </>
    },
    {
      path: "/about",
      element: <><Navbar /> <About /> <Footer /></>
    },
    {
      path: "/products",
      element: <><Navbar /> <div className='overflow-x-hidden'>< Products /></div> <Footer /></>
    },
    {
      path: "/quality",
      element: <><Navbar /> <Quality /> <Footer /></>
    },
    {
      path: "/services",
      element: <><Navbar /> <Services /> <Footer /></>
    },
    {
      path: "/contact",
      element: <><Navbar /> <Contact /> <Footer /></>
    },

  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
