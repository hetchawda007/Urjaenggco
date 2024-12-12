import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { useState } from "react"
import Marquee from "react-fast-marquee"
import { Helmet } from "react-helmet-async"
const Home = () => {

    const [animate1, setanimate1] = useState(true)
    const [animate2, setanimate2] = useState(true)
    const [animate3, setanimate3] = useState(true)
    const [animate4, setanimate4] = useState(true)
    const [animate5, setanimate5] = useState(true)
    const [animate6, setanimate6] = useState(true)
    const [animate7, setanimate7] = useState(true)
    const [animate8, setanimate8] = useState(true)
    const [animate9, setanimate9] = useState(true)
    const [animate10, setanimate10] = useState(true)

    return (
        <>
            <Helmet>
                <title>Home - Urja Engg Co.</title>
                <meta name="description" content="Urja Engg Co specializes in manufacturing and supplying a wide range of electrical panel boards. We ensure top-notch quality for industrial and export standards." />
            </Helmet>

            <motion.div className="w-[98.9vw] absolute h-screen overflow-y-hidden top-0 z-20"
                style={{
                    visibility: animate9 ? "visible" : "hidden"
                }}
            >
                <motion.div className="w-full bg-black h-1/2"
                    initial={{ y: 0 }}
                    animate={{ y: -800 }}
                    exit={{ y: 0 }}
                    transition={{ duration: 2, ease: "circInOut" }}
                >
                </motion.div>
                <motion.div className="w-full bg-black h-1/2"
                    initial={{ y: 0 }}
                    animate={{ y: 800 }}
                    exit={{ y: 0 }}
                    onAnimationComplete={() => setanimate9(false)}
                    transition={{ duration: 2, ease: "circInOut" }}
                >
                </motion.div>
            </motion.div>
            <motion.div className="w-[98.9vw] flex absolute h-screen overflow-x-hidden overflow-y-hidden top-0 z-20"
                style={{
                    visibility: animate9 ? "visible" : "hidden"
                }}
            >
                <motion.div className="w-1/2 bg-black h-full"
                    initial={{ x: 0 }}
                    animate={{ x: -800 }}
                    exit={{ x: 0 }}
                    transition={{ duration: 2, ease: "circInOut" }}
                >
                </motion.div>
                <motion.div className="w-1/2 bg-black h-full"
                    initial={{ x: 0 }}
                    animate={{ x: 800 }}
                    exit={{ x: 0 }}
                    onAnimationComplete={() => setanimate9(false)}
                    transition={{ duration: 2, ease: "circInOut" }}
                >
                </motion.div>
            </motion.div>
            <motion.div>
                <motion.div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"
                    initial={animate1 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 2.3 } }}
                    exit={{ opacity: 1, scale: 1 }}
                    onAnimationComplete={() => setanimate1(false)}
                >
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active h-96 max-md:h-40">
                            <img className="h-auto w-full" src="home-banner-1.webp" alt="First slide" />
                        </div>
                        <div className="carousel-item h-96 max-md:h-40">
                            <img className="h-auto w-full" src="home-banner-3.webp" alt="Second slide" />
                        </div>
                        <div className="carousel-item h-96 max-md:h-40">
                            <img className="h-auto w-full" src="home-banner-2.webp" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </motion.div>
                <div className='flex flex-col gap-5 my-14  max-md:hidden'>
                    <motion.div className='text-3xl text-[#59595A] lato-bold font-bold cursor-pointer text-center w-fit mx-auto'
                        initial={animate10 ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        onAnimationComplete={() => setanimate10(false)}
                        transition={{ duration: 1, delay: 2.9 }}
                    >
                        Trusted by the 50+ Companies
                    </motion.div>
                </div>
                <motion.div className='max-md:hidden'
                    initial={animate2 ? { opacity: 0, y: 100 } : { opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    onAnimationComplete={() => setanimate2(false)}
                    transition={{ duration: 1, delay: 3.3 }}
                >

                    <Marquee gradient delay={2.5} speed={100} className='flex items-center'>
                        <div className='mx-10 cursor-pointer'>
                            <img className="h-32 w-auto" src="/tense.webp" alt="" />
                        </div>
                        <div className='mx-10 cursor-pointer'>
                            <img className="h-20 w-auto" src="/ls-electric.svg" alt="" />
                        </div>
                        <div className='mx-10 cursor-pointer'>
                            <img className="h-32 w-auto" src="/c&s-electric.svg" alt="" />
                        </div>
                        <div className='mx-10 cursor-pointer'>
                            <img className="h-20 w-auto" src="/rr-kabel.svg" alt="" />
                        </div>
                        <div className='mx-10 cursor-pointer'>
                            <img className="h-20 w-auto" src="/socomec.webp" alt="" />
                        </div>
                    </Marquee>
                </motion.div>
                <div className="container flex flex-col gap-5 py-10 w-full">

                    <motion.div className="flex w-full my-8 max-md:flex-col"
                        initial={animate3 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                        exit={{ opacity: 1, scale: 1 }}
                        onAnimationComplete={() => setanimate3(false)}
                    >
                        <div className="flex justify-center object-cover w-[50%] max-md:w-full">
                            <img className="w-auto h-72 border shadow-2xl border-black rounded-xl cursor-pointer scale" src="About-us.webp" alt="" />
                        </div>
                        <div className="flex flex-col w-[50%] items-center justify-center gap-5 px-20 max-md:w-full max-md:px-5">

                            <h2 className="text-blue-500 lato-bold text-2xl max-md:mt-8">Urja Engineering Co.</h2>

                            <p className="text-[#59595A] roboto-regular">A company dedicated to Electrical Panel Board Manufacturing. We manufacture and supply a wide range of electrical panel boards. With the help of our inhouse quality control we are able to meet the industrial standard as well as the quality standard for exports in various countries. At Urja Engineering Co. our philosophy is to maintain the high standards of quality and reliability in industry in all aspects.</p>

                            <Link to={"/about"}>

                                <button type="button" className="scale text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2">About Us</button>

                            </Link>

                        </div>
                    </motion.div>

                    <motion.div className="flex w-full my-8 max-md:flex-col-reverse"
                        initial={animate4 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                        exit={{ opacity: 1, scale: 1 }}
                        onAnimationComplete={() => setanimate4(false)}
                    >

                        <div className="flex flex-col w-[50%] items-center justify-center gap-5 px-20 max-md:w-full max-md:px-5">

                            <h2 className="text-blue-500 lato-bold text-2xl font-bold max-md:mt-8">Our Products</h2>

                            <p className="text-[#59595A] roboto-regular">We offer a wide range of Electrical Panels including PCC Panels, MCC Panels, DG Set Panels etc. In addition, we follow a quality control policy at each level of our product development. Apart from this, we check our entire range on following parameters: Finish, Durability and Performance. Also, we carry out specific tests under the supervision of quality controllers who assist us throughout the process and maintaining standards.</p>
                            <Link to={"/products"}>

                                <button type="button" className="scale text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2 ">Products</button>

                            </Link>

                        </div>
                        <div className="flex justify-center object-cover w-[50%] max-md:w-full">
                            <img className="w-auto h-72 border shadow-2xl border-black rounded-xl cursor-pointer scale" src="Products.webp" alt="" />
                        </div>
                    </motion.div>

                    <motion.div className="flex w-full my-8 max-md:flex-col"
                        initial={animate5 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                        exit={{ opacity: 1, scale: 1 }}
                        onAnimationComplete={() => setanimate5(false)}
                    >
                        <div className="flex justify-center object-cover w-[50%] max-md:w-full">
                            <img className="w-auto h-72 border shadow-2xl border-black rounded-xl cursor-pointer scale" src="quality.webp" alt="" />
                        </div>
                        <div className="flex flex-col w-[50%] items-center justify-center gap-5 px-20 max-md:w-full max-md:px-5">

                            <h2 className="text-blue-500 lato-bold text-2xl font-bold max-md:mt-8">Our Quality</h2>

                            <p className="text-[#59595A] roboto-regular">At Urja Engineering Co. quality is the cornerstone of everything we do. From manufacturing superior electrical panel boards to delivering comprehensive electrical solutions, we prioritize precision, reliability, and safety at every stage. Our products undergo rigorous quality control, meeting both industrial and export standards, ensuring peak performance and durability. This commitment to excellence extends beyond production, with dedicated customer support to guarantee satisfaction and trust in every project.</p>

                            <Link to={"/quality"}>

                                <button type="button" className="scale text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2">Quality</button>

                            </Link>

                        </div>
                    </motion.div>

                    <motion.div className="flex w-full my-8 items-center max-md:flex-col-reverse"
                        initial={animate6 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                        exit={{ opacity: 1, scale: 1 }}
                        onAnimationComplete={() => setanimate6(false)}
                    >

                        <div className="flex flex-col w-[50%] items-center justify-center gap-5 p-20 max-md:w-full max-md:p-1">

                            <h2 className="text-blue-500 lato-bold text-2xl font-bold max-md:mt-8">Our Services</h2>

                            <div className="flex flex-col justify-center">
                                <p className="text-[#59595A] roboto-regular flex items-center gap-1">At Khodiyar Group, we specialize in providing top-quality electrical solutions tailored to meet your needs. With a commitment to excellence and safety, we deliver a comprehensive range of services to support all your electrical infrastructure requirements. At Khodiyar Group, our team of skilled professionals is dedicated to delivering solutions that enhance efficiency and safety. Whether you need manufacturing, installation, or supply services, we are here to power your success.</p>
                            </div>
                            <Link to={"/services"}>

                                <button type="button" className="scale text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2">Services</button>

                            </Link>

                        </div>
                        <div className="flex justify-center object-cover w-[50%] max-md:w-full">
                            <img className="w-auto h-72 border shadow-2xl border-black rounded-xl cursor-pointer scale" src="services.webp" alt="" />
                        </div>
                    </motion.div>

                    <motion.div className="flex w-full my-8 roboto-regular items-center max-md:flex-col max-md:my-1"
                        initial={animate7 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                        exit={{ opacity: 1, scale: 1 }}
                        onAnimationComplete={() => setanimate7(false)}
                    >
                        <div className="flex justify-center object-cover w-[50%] max-md:w-[100%] cursor-pointer">
                            <img className="w-auto h-96 border shadow-2xl border-black rounded-xl max-md:w-[95%] max-md:h-auto scale" src="contact.webp" alt="" />
                        </div>
                        <motion.div className="w-[49%] h-full flex items-center text-white roboto-regular max-md:w-full">
                            <div className="rounded-2xl mx-auto w-[55%] pl-10 py-8 lato-bold flex flex-col gap-5 bg-blue-950 text-sm h-[60%] max-md:w-[85%] max-md:pl-5 max-md:pr-5 max-md:my-14">
                                <h1 className="text-3xl font-bold text-white lato-bold text-center pr-10">Contact Us</h1>
                                <hr className="w-[90%] bg-white" />
                                <div className="flex gap-5">
                                    <a target="_blank" href="https://maps.app.goo.gl/QtJLjUZYvGJJbaeNA"><lord-icon
                                        src="https://cdn.lordicon.com/onmwuuox.json"
                                        trigger="hover"
                                        state="hover-jump-roll"
                                        stroke="bold"
                                        colors="primary:#ffffff,secondary:#ffffff"
                                        style={{ width: '40px', height: '40px' }}>
                                    </lord-icon></a>
                                    <div className="w-[70%]">We are located at <a className="hover:text-white" href="https://maps.app.goo.gl/QtJLjUZYvGJJbaeNA" target="_blank">Shed No. L-46, 47, 48 & M-49, 50, G.I.DC, Gandhidham (Kutch) 370201 Gujarat, India</a></div>
                                </div>
                                <hr className="w-[90%] bg-white" />
                                <div className="flex gap-5 items-center">
                                    <div className="cursor-pointer">
                                        <lord-icon
                                            src="https://cdn.lordicon.com/nnzfcuqw.json"
                                            trigger="hover"
                                            state="hover-jump-roll"
                                            stroke="bold"
                                            colors="primary:#ffffff,secondary:#ffffff"
                                            style={{ width: '40px', height: '40px' }}>
                                        </lord-icon>
                                    </div>
                                    <div className="w-[70%] flex flex-col gap-1">
                                        <div className="flex flex-col">
                                            <p>Contact Sumeet Khodiyar on</p>
                                            <a className="hover:text-white" href="tel:+91 98791 95121"> +91 98791 95121</a>
                                        </div>
                                        <div className="flex flex-col">
                                            <p>Contact Jigar Khodiyar on</p>
                                            <a className="hover:text-white" href="tel:+91 98794 04009 ">+91 9879404009</a>
                                        </div>
                                    </div>
                                </div>

                                <hr className="w-[90%] bg-white" />

                                <div className="flex gap-5 items-center">
                                    <div className="cursor-pointer">
                                        <lord-icon
                                            src="https://cdn.lordicon.com/vpbspaec.json"
                                            trigger="hover"
                                            state="hover-jump-roll"
                                            stroke="bold"
                                            colors="primary:#ffffff,secondary:#ffffff"
                                            style={{ width: '40px', height: '40px' }}>
                                        </lord-icon>
                                    </div>
                                    <div className="w-[70%] flex flex-col">
                                        <div className="flex gap-1 flex-wrap">Mail us on <a className="hover:text-white" href="mailto:info@urjaengg.com?subject=Hello&body=I%20am%20reaching%20out%20about...">
                                            info@urjaengg.com
                                        </a></div>
                                        <div className="flex gap-1">
                                            Or <a className="hover:text-white" href="mailto:jigar@urjaengg.com?subject=Hello&body=I%20am%20reaching%20out%20about...">
                                                jigar@urjaengg.com
                                            </a></div>
                                    </div>
                                </div>

                            </div>

                        </motion.div>

                    </motion.div>

                    <motion.div className="flex justify-around items-center max-md:flex-col max-md:gap-10 max-md:justify-center"
                        initial={animate8 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                        exit={{ opacity: 1, scale: 1 }}
                        onAnimationComplete={() => setanimate8(false)}
                    >
                        <div className="flex flex-col gap-3 justify-center items-center max-md:mt-10">
                            <div className="font-bold text-2xl">Upcoming Events</div>
                            <img className="w-52 cursor-pointer scale" src="events.webp" alt="" />
                        </div>
                        <div className="flex flex-col px-10 py-4 rounded-xl gap-1">
                            <h2 className="text-3xl py-1 text-blue-500 lato-bold font-bold mb-2 max-md:text-2xl text-center">Our Group Companies</h2>
                            <div className="font-semibold text-[#59595A] roboto-regular text-xl pl-6 max-md:text-lg">• Khodiyar Engineering Works</div>
                            <div className="font-semibold text-[#59595A] roboto-regular text-xl pl-6 max-md:text-lg">• Perfect Power Systems</div>
                            <div className="font-semibold text-[#59595A] roboto-regular text-xl pl-6 max-md:text-lg">• Unique Power Systems</div>
                        </div>
                    </motion.div>


                </div>

            </motion.div>

        </>
    )
}

export default Home
