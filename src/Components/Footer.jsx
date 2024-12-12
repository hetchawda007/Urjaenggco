import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { useState } from "react"
const Footer = () => {
    const currentyear = new Date().getFullYear()
    const [animate, setAnimate] = useState(true)
    return (
        <>
            <motion.footer className="w-full bg-blue-950 shadow-inner flex flex-col"
                initial={animate ? { opacity: 0 } : { opacity: 1 }}
                whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1 }}
                onAnimationComplete={() => setAnimate(false)}
            >
                <div className="flex items-center justify-around py-10 max-md:flex-col max-md:gap-6 max-md:py-5">
                    <Link className="cursor-pointer flex items-center gap-3 hover:no-underline" to="/">
                        <img className="w-20 rounded-xl" src="logo.png" alt="logo" />
                        <div className="text-white font-bold text-2xl hover:brightness-200 max-md:text-xl">Urja Engineering Co.</div>
                    </Link>
                    <ul className="flex text-white gap-8 max-md:gap-5 max-sm:gap-3 max-md:text-[12px]">
                        <li><Link className="hover:text-[#454545] font-semibold hover:brightness-150 hover:transition hover:duration-500 hover:no-underline " to={"/"}>Home</Link></li>
                        <li><Link className="hover:text-[#454545] font-semibold hover:brightness-150 hover:transition hover:duration-500 hover:no-underline " to={"/about"}>About</Link></li>
                        <li><Link className="hover:text-[#454545] font-semibold hover:brightness-150 hover:transition hover:duration-500 hover:no-underline " to={"/products"}>Products</Link></li>
                        <li><Link className="hover:text-[#454545] font-semibold hover:brightness-150 hover:transition hover:duration-500 hover:no-underline " to={"/quality"}>Quality</Link></li>
                        <li><Link className="hover:text-[#454545] font-semibold hover:brightness-150 hover:transition hover:duration-500 hover:no-underline " to={"/services"}>Services</Link></li>
                        <li><Link className="hover:text-[#454545] font-semibold hover:brightness-150 hover:transition hover:duration-500 hover:no-underline " to={"/contact"}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-10 items-center max-md:gap-5">
                    <hr className="w-[90%] bg-white text-center" />
                    <div className="text-white pb-8 max-md:text-[12px]">Copyriht &copy; {currentyear} Urja Engg Co. All Rights Reserved.</div>
                </div>
            </motion.footer>


        </>
    )
}

export default Footer
