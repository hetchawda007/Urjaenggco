import { motion } from "motion/react"
import { NavLink } from "react-router-dom"
const Navbar = () => {

    return (
        <>

                <motion.nav className="bg-blue-950 blr bg-opacity-50 bg-blend-saturation sticky top-0 py-1 z-10"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1, delay: 2.3 }}
                >
                    <ul className="flex items-center justify-center gap-20 text-white max-xl:gap-5 max-xl:py-4 max-md:gap-0">
                        <li className="self-start max-xl:hidden">
                            <NavLink to="/"><img className="w-52 h-auto rounded-xl" src="khodiyar-logo.webp" alt="logo" /></NavLink>
                        </li>
                        <li className="cursor-pointer"><NavLink className={(e) => { return e.isActive ? "brightness-200 hover:no-underline hover:text-black shadow-xl font-bold md:px-3 md:py-2 transition duration-1000 bg-white text-black rounded-full max-md:text-[12px] max-md:px-2 max-md:py-1" : "hover:no-underline hover:transition hover:duration-1000 font-semibold shadow-xl rounded-full hover:text-black hover:rounded-full md:px-3 md:py-2 hover:bg-white max-md:text-[12px] max-md:px-2 max-md:py-1" }} to="/">Home</NavLink></li>
                        <li className="cursor-pointer"><NavLink className={(e) => { return e.isActive ? "brightness-200 hover:no-underline hover:text-black shadow-xl font-bold md:px-3 md:py-2 transition duration-1000 bg-white text-black rounded-full max-md:text-[12px] max-md:px-2 max-md:py-1" : "hover:no-underline hover:transition hover:duration-1000 font-semibold shadow-xl rounded-full hover:text-black hover:rounded-full md:px-3 md:py-2 hover:bg-white max-md:text-[12px] max-md:px-2 max-md:py-1" }} to="/about">About</NavLink></li>
                        <li className="cursor-pointer"><NavLink className={(e) => { return e.isActive ? "brightness-200 hover:no-underline hover:text-black shadow-xl font-bold md:px-3 md:py-2 transition duration-1000 bg-white text-black rounded-full max-md:text-[12px] max-md:px-2 max-md:py-1" : "hover:no-underline hover:transition hover:duration-1000 font-semibold shadow-xl rounded-full hover:text-black hover:rounded-full md:px-3 md:py-2 hover:bg-white max-md:text-[12px] max-md:px-2 max-md:py-1" }} to="/products">Products</NavLink></li>
                        <li className="cursor-pointer"><NavLink className={(e) => { return e.isActive ? "brightness-200 hover:no-underline hover:text-black shadow-xl font-bold md:px-3 md:py-2 transition duration-1000 bg-white text-black rounded-full max-md:text-[12px] max-md:px-2 max-md:py-1" : "hover:no-underline hover:transition hover:duration-1000 font-semibold shadow-xl rounded-full hover:text-black hover:rounded-full md:px-3 md:py-2 hover:bg-white max-md:text-[12px] max-md:px-2 max-md:py-1" }} to="/quality">Quality</NavLink></li>
                        <li className="cursor-pointer"><NavLink className={(e) => { return e.isActive ? "brightness-200 hover:no-underline hover:text-black shadow-xl font-bold md:px-3 md:py-2 transition duration-1000 bg-white text-black rounded-full max-md:text-[12px] max-md:px-2 max-md:py-1" : "hover:no-underline hover:transition hover:duration-1000 font-semibold shadow-xl rounded-full hover:text-black hover:rounded-full md:px-3 md:py-2 hover:bg-white max-md:text-[12px] max-md:px-2 max-md:py-1" }} to="/services">Services</NavLink></li>
                        <li className="cursor-pointer"><NavLink className={(e) => { return e.isActive ? "brightness-200 hover:no-underline hover:text-black shadow-xl font-bold md:px-3 md:py-2 transition duration-1000 bg-white text-black rounded-full max-md:text-[12px] max-md:px-2 max-md:py-1" : "hover:no-underline hover:transition hover:duration-1000 font-semibold shadow-xl rounded-full hover:text-black hover:rounded-full md:px-3 md:py-2 hover:bg-white max-md:text-[12px] max-md:px-2 max-md:py-1" }} to="/contact">Contact Us</NavLink></li>
                    </ul>
                </motion.nav>

        </>
    )
}

export default Navbar