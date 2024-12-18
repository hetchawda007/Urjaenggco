import { motion } from "motion/react"
import { NavLink } from "react-router-dom"
import { useState } from "react"
const Navbar = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>

            <motion.nav className="bg-blue-950 blr bg-opacity-50 bg-blend-saturation sticky top-0 py-1 z-10"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 1, delay: 2.3 }}
            >

                <ul className="flex items-center justify-center gap-20 text-white max-xl:gap-5 max-xl:py-0 max-md:gap-3 max-md:justify-center">
                    <li className="self-start max-md:self-auto">
                        <NavLink to="/"><img className="w-52 h-auto rounded-xl max-md:w-56" src="khodiyar-logo.webp" alt="logo" /></NavLink>
                    </li>
                    <li className="cursor-pointer"><NavLink className={(e) => { return e.isActive ? "brightness-200 hover:no-underline hover:text-black shadow-xl font-bold md:px-3 md:py-2 transition duration-1000 bg-white text-black rounded-full max-md:hidden" : "hover:no-underline hover:transition hover:duration-1000 font-semibold shadow-xl rounded-full hover:text-black hover:rounded-full md:px-3 md:py-2 hover:bg-white max-md:hidden" }} to="/">Home</NavLink></li>
                    <li className="cursor-pointer"><NavLink className={(e) => { return e.isActive ? "brightness-200 hover:no-underline hover:text-black shadow-xl font-bold md:px-3 md:py-2 transition duration-1000 bg-white text-black rounded-full max-md:hidden" : "hover:no-underline hover:transition hover:duration-1000 font-semibold shadow-xl rounded-full hover:text-black hover:rounded-full md:px-3 md:py-2 hover:bg-white max-md:hidden" }} to="/about">About</NavLink></li>
                    <li className="cursor-pointer"><NavLink className={(e) => { return e.isActive ? "brightness-200 hover:no-underline hover:text-black shadow-xl font-bold md:px-3 md:py-2 transition duration-1000 bg-white text-black rounded-full max-md:hidden" : "hover:no-underline hover:transition hover:duration-1000 font-semibold shadow-xl rounded-full hover:text-black hover:rounded-full md:px-3 md:py-2 hover:bg-white max-md:hidden" }} to="/products">Products</NavLink></li>
                    <li className="cursor-pointer"><NavLink className={(e) => { return e.isActive ? "brightness-200 hover:no-underline hover:text-black shadow-xl font-bold md:px-3 md:py-2 transition duration-1000 bg-white text-black rounded-full max-md:hidden" : "hover:no-underline hover:transition hover:duration-1000 font-semibold shadow-xl rounded-full hover:text-black hover:rounded-full md:px-3 md:py-2 hover:bg-white max-md:hidden" }} to="/quality">Quality</NavLink></li>
                    <li className="cursor-pointer"><NavLink className={(e) => { return e.isActive ? "brightness-200 hover:no-underline hover:text-black shadow-xl font-bold md:px-3 md:py-2 transition duration-1000 bg-white text-black rounded-full max-md:hidden" : "hover:no-underline hover:transition hover:duration-1000 font-semibold shadow-xl rounded-full hover:text-black hover:rounded-full md:px-3 md:py-2 hover:bg-white max-md:hidden" }} to="/services">Services</NavLink></li>
                    <li className="cursor-pointer"><NavLink className={(e) => { return e.isActive ? "brightness-200 hover:no-underline hover:text-black shadow-xl font-bold md:px-3 md:py-2 transition duration-1000 bg-white text-black rounded-full max-md:hidden" : "hover:no-underline hover:transition hover:duration-1000 font-semibold shadow-xl rounded-full hover:text-black hover:rounded-full md:px-3 md:py-2 hover:bg-white max-md:hidden" }} to="/contact">Contact Us</NavLink></li>
                    <li onClick={() => setVisible(!visible)} className="md:hidden"><img src="/hamburger.png" alt="hamburger" /></li>
                </ul>

                {visible === true && <motion.ul className="flex flex-col my-3 gap-3"
                    initial={{ opacity: 0, y: -100 }}
                    key={1}
                    whileInView={{ opacity: 1, y: 0 }}

                    transition={{ duration: 1.5, ease: "easeInOut", type: "spring", stiffness: 100, damping: 10 }}
                >
                    <li className="cursor-pointer"><NavLink className={(e) => { return e.isActive ? "brightness-200 hover:no-underline hover:text-black shadow-xl font-bold md:px-3 md:py-2 transition duration-1000 bg-white text-black rounded-fmotion.ull flex rounded-full justify-center items-center py-2 md:hidden" : "hover:no-underline hover:transition hover:duration-1000 font-semibold shadow-xl rounded-full hover:text-black hover:rounded-full md:px-3 md:py-2 hover:bg-white flex justify-center items-center py-2 md:hidden" }} to="/">Home</NavLink></li>
                    <li className="cursor-pointer"><NavLink className={(e) => { return e.isActive ? "brightness-200 hover:no-underline hover:text-black shadow-xl font-bold md:px-3 md:py-2 transition duration-1000 bg-white text-black rounded-full flex justify-center items-center py-2 md:hidden" : "hover:no-underline hover:transition hover:duration-1000 font-semibold shadow-xl rounded-full hover:text-black hover:rounded-full md:px-3 md:py-2 hover:bg-white flex justify-center items-center py-2 md:hidden" }} to="/about">About</NavLink></li>
                    <li className="cursor-pointer"><NavLink className={(e) => { return e.isActive ? "brightness-200 hover:no-underline hover:text-black shadow-xl font-bold md:px-3 md:py-2 transition duration-1000 bg-white text-black rounded-full flex justify-center items-center py-2 md:hidden" : "hover:no-underline hover:transition hover:duration-1000 font-semibold shadow-xl rounded-full hover:text-black hover:rounded-full md:px-3 md:py-2 hover:bg-white flex justify-center items-center py-2 md:hidden" }} to="/products">Products</NavLink></li>
                    <li className="cursor-pointer"><NavLink className={(e) => { return e.isActive ? "brightness-200 hover:no-underline hover:text-black shadow-xl font-bold md:px-3 md:py-2 transition duration-1000 bg-white text-black rounded-full flex justify-center items-center py-2 md:hidden" : "hover:no-underline hover:transition hover:duration-1000 font-semibold shadow-xl rounded-full hover:text-black hover:rounded-full md:px-3 md:py-2 hover:bg-white flex justify-center items-center py-2 md:hidden" }} to="/quality">Quality</NavLink></li>
                    <li className="cursor-pointer"><NavLink className={(e) => { return e.isActive ? "brightness-200 hover:no-underline hover:text-black shadow-xl font-bold md:px-3 md:py-2 transition duration-1000 bg-white text-black rounded-full flex justify-center items-center py-2 md:hidden" : "hover:no-underline hover:transition hover:duration-1000 font-semibold shadow-xl rounded-full hover:text-black hover:rounded-full md:px-3 md:py-2 hover:bg-white flex justify-center items-center py-2 md:hidden" }} to="/services">Services</NavLink></li>
                    <li className="cursor-pointer"><NavLink className={(e) => { return e.isActive ? "brightness-200 hover:no-underline hover:text-black shadow-xl font-bold md:px-3 md:py-2 transition duration-1000 bg-white text-black rounded-full flex justify-center items-center py-2 md:hidden" : "hover:no-underline hover:transition hover:duration-1000 font-semibold shadow-xl rounded-full hover:text-black hover:rounded-full md:px-3 md:py-2 hover:bg-white flex justify-center items-center py-2 md:hidden" }} to="/contact">Contact Us</NavLink></li>
                </motion.ul>}

            </motion.nav>

        </>
    )
}

export default Navbar