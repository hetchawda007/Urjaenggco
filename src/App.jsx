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

  const router = createBrowserRouter([
    {

      path: "/",
      element: <> <div className="min-h-screen bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <Navbar />
        <Home />
        <Footer />
      </div> </>
    },
    {
      path: "/about",
      element: <><div className='min-h-screen bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]'><Navbar /> <About /> <Footer /></div></>
    },
    {
      path: "/products",
      element: <><div className='bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'><Navbar /> <div className='overflow-x-hidden'>< Products /></div> <Footer /></div></>
    },
    {
      path: "/quality",
      element: <><div className='bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]'><Navbar /> <Quality /> <Footer /></div></>
    },
    {
      path: "/services",
      element: <><div className=' bg-blue-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'><Navbar /> <Services /> <Footer /></div></>
    },
    {
      path: "/contact",
      element: <><div className='bg-blue-100 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'><Navbar /> <Contact /> <Footer /></div></>
    },

  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
