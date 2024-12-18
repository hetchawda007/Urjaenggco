import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
import Icons from "./Icons"
const Quality = () => {
    const [animate1, setanimate1] = useState(true)
    const [animate2, setanimate2] = useState(true)
    const [animate3, setanimate3] = useState(true)
    const [animate4, setanimate4] = useState(true)
    const [animate5, setanimate5] = useState(true)
    const [animate6, setanimate6] = useState(true)
    const [animate7, setanimate7] = useState(true)

    const handleanimate = () => {
        setInterval(() => {
            setanimate1(false)
        }, 2000);
    }
    const animate = () => {
        setInterval(() => {
            setanimate7(false)
        }, 1000);
    }
    return (
        <>
            <Helmet>
                <title>Quality - Urja Engg Co.</title>
                <meta name="description" content="At Urja Engineering Co., quality is our core principle. Our electrical panel boards undergo rigorous testing to ensure unmatched performance, reliability, and durability." />
            </Helmet>
            <Icons />
            {animate7 && <motion.div className="fixed top-0 z-30 h-[1vh] bg-gradient-to-r from-blue-500 via-green-500 to-purple-500"
                initial={{ width: 0 }}
                animate={{ width: '100vw', ease: 'easeInOut' }}
                transition={{ duration: 2, type: 'spring', stiffness: 100, damping: 10 }}
                onAnimationComplete={animate}
            ></motion.div>}
            <AnimatePresence>
                {animate1 && (
                    <motion.div
                        key={1}
                        className="fixed z-20 top-0 h-screen w-screen bg-white flex flex-col items-center justify-center"
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                        onAnimationComplete={handleanimate}
                    >
                        <img className="h-40 w-auto" src="logo.webp" alt="" />
                        <div className="text-purple-800 font-semibold lato-bold">Leading Pannel Board Manufacturer</div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div>
                <motion.div id="carouselExampleControls" className="carousel slide" data-interval="8000" data-ride="carousel"
                    initial={animate2 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 2.3 } }}
                    onAnimationComplete={() => setanimate2(false)}
                >
                    <div className="carousel-inner ">
                        <div className="carousel-item bg-blr bg-[url('/quality-banner-1.webp')] bg-cover w-full active h-[550px] max-md:h-40">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#bababad6] via-[#111] to-[#000000] -z-10 opacity-70"></div>
                            <div className="flex h-full px-32 justify-center items-center cursor-default max-md:px-14">
                                <motion.div className="w-[60%] flex items-center flex-col gap-5 max-md:gap-2"
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2, ease: 'anticipate', type: 'spring', shiftness: 100, damping: 10 }}
                                >
                                    <div className="lato-bold text-neutral-300 text-5xl max-md:text-sm">Unmatched <span className="text-blue-600"> Quality </span> Assurance</div>
                                    <div className="roboto-regular text-lg text-neutral-200 leading-8 w-[80%] max-md:w-full max-md:text-[8px] max-md:leading-normal">
                                        Quality is our foundation at Urja Engineering Co. Every panel undergoes rigorous testing in our advanced in-house facilities to ensure unmatched performance and durability. Adhering to international safety standards, we deliver products designed to exceed expectations and stand the test of time.</div>
                                </motion.div>
                                <motion.div className="w-[30%] flex justify-end"
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2, ease: 'anticipate', type: 'spring', shiftness: 100, damping: 10, delay: 1 }}
                                >
                                    <motion.img className="h-96 w-auto cursor-pointer max-md:h-28" src="panel-4.webp" alt="pannel"
                                        drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                        whileHover={{ scale: 1.1 }}
                                    />
                                </motion.div>
                            </div>
                        </div>
                        <div className="carousel-item w-full bg-[url('/quality-banner-3.webp')] bg-cover h-[550px] max-md:h-40">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#bababad6] via-[#111] to-[#000000] -z-10 opacity-70"></div>
                            <div className="flex h-full px-32 justify-center items-center cursor-default max-md:px-14">
                                <motion.div className="w-[60%] flex items-center flex-col gap-5 max-md:gap-2"
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2, ease: 'anticipate', type: 'spring', shiftness: 100, damping: 10 }}
                                >
                                    <div className="lato-bold text-neutral-300 text-5xl max-md:text-sm">Innovative, <span className="text-blue-600"> Reliable</span> Solutions</div>
                                    <div className="roboto-regular text-lg text-neutral-200 leading-8 w-[80%] max-md:w-full max-md:text-[8px] max-md:leading-normal">
                                        At Urja Engineering Company, we combine cutting-edge technology with robust design to create efficient, reliable electrical panel boards. Our solutions are crafted to meet the evolving demands of modern industries, ensuring seamless functionality, reduced downtime, and enhanced operational efficiency for both local and global markets.</div>
                                </motion.div>
                                <motion.div className="w-[30%] flex justify-end"
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2, ease: 'anticipate', type: 'spring', shiftness: 100, damping: 10, delay: 1 }}
                                >
                                    <motion.img className="h-96 w-auto cursor-pointer max-md:h-28" src="panel-5.webp" alt="pannel"
                                        drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                        whileHover={{ scale: 1.1 }}
                                    />
                                </motion.div>
                            </div>
                        </div>
                        <div className="carousel-item w-full bg-[url('/quality-banner-2.webp')] bg-cover h-[550px] max-md:h-40">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#bababad6] via-[#111] to-[#000000] -z-10 opacity-70"></div>
                            <div className="flex h-full px-32 justify-center items-center cursor-default max-md:px-14">
                                <motion.div className="w-[60%] flex items-center flex-col gap-5 max-md:gap-2"
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2, ease: 'anticipate', type: 'spring', shiftness: 100, damping: 10 }}
                                >
                                    <div className="lato-bold text-neutral-300 text-5xl max-md:text-sm">Stringent <span className="text-blue-600"> Quality</span> Processes</div>
                                    <div className="roboto-regular text-lg text-neutral-200 leading-8 w-[80%] max-md:w-full max-md:text-[8px] max-md:leading-normal">
                                        Our dedicated in-house team ensures every product meets top safety and efficiency standards. Using advanced testing equipment, we simulate real-world conditions to verify durability and reliability. Each unit undergoes rigorous checks to guarantee flawless performance across various environments.</div>
                                </motion.div>
                                <motion.div className="w-[30%] flex justify-end"
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}

                                    transition={{ duration: 2, ease: 'anticipate', type: 'spring', shiftness: 100, damping: 10, delay: 1 }}
                                >
                                    <motion.img className="h-96 w-auto cursor-pointer max-md:h-28" src="panel-2.webp" alt="pannel"
                                        drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                        whileHover={{ scale: 1.1 }}
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev flex items-center justify-center ml-10 p-[10px] bg-[#2b2b2b] rounded-full w-fit h-fit mt-64 carousel-control-prev max-md:mt-16 max-md:ml-2 max-md:p-2" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next flex items-center justify-center mr-10 p-[10px] bg-[#2b2b2b] rounded-full w-fit h-fit mt-64 carousel-control-next max-md:mt-16 max-md:mr-2 max-md:p-2" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </motion.div>

                <div className="container flex flex-col gap-5 w-full my-10">

                    <motion.div className="flex w-full my-8 max-md:flex-col"
                        initial={animate3 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 2.9 } }}
                        onAnimationComplete={() => setanimate3(false)}
                    >
                        <div className="flex justify-center object-cover w-[50%] max-md:w-full cursor-pointer">
                            <img className="w-auto h-72 border shadow-2xl border-black rounded-xl scale" src="quality-page-1.webp" alt="" />
                        </div>
                        <div className="flex flex-col w-[50%] items-center justify-center gap-5 px-20 max-md:w-full max-md:px-5">

                            <h2 className="text-2xl font-bold text-blue-500 lato-bold max-md:mt-8 w-full">Commitment to Unparalleled Quality Standards</h2>

                            <p className="font-semibold text-[#59595A] roboto-regular">At Urja Engineering Co. quality isn&apos;t just a goal—it’s a core principle. Every electrical panel board and service we deliver undergoes rigorous testing to ensure optimal performance and durability. We adhere to both domestic and international quality standards, leveraging advanced in-house testing facilities to exceed client expectations. From material selection to final assembly, each step is meticulously monitored, guaranteeing products that withstand the test of time and meet stringent safety norms.</p>

                        </div>
                    </motion.div>

                    <motion.div className="flex w-full my-8 max-md:flex-col-reverse"
                        initial={animate4 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                        exit={{ opacity: 1, scale: 1 }}
                        onAnimationComplete={() => setanimate4(false)}
                    >

                        <div className="flex flex-col w-[50%] items-center justify-center gap-5 px-20 max-md:w-full max-md:px-5">

                            <h2 className="text-2xl font-bold text-blue-500 lato-bold max-md:mt-8 w-full">Innovative Solutions for Reliable Performance</h2>

                            <p className="font-semibold text-[#59595A] roboto-regular">Our innovative approach ensures that each product we manufacture is designed to offer maximum efficiency and reliability. By integrating cutting-edge technology with robust design principles, we craft electrical panel boards and related solutions that meet the dynamic needs of modern industries. Whether for local or international markets, our products ensure seamless functionality, minimizing downtime and enhancing operational efficiency.</p>

                        </div>
                        <div className="flex justify-center object-cover w-[50%] max-md:w-full cursor-pointer">
                            <img className="w-auto h-72 border shadow-2xl border-black rounded-xl scale" src="quality-page-4.webp" alt="" />
                        </div>
                    </motion.div>

                    <motion.div className="flex w-full my-8 max-md:flex-col"
                        initial={animate5 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                        exit={{ opacity: 1, scale: 1 }}
                        onAnimationComplete={() => setanimate5(false)}
                    >
                        <div className="flex justify-center object-cover w-[50%] max-md:w-full cursor-pointer">
                            <img className="w-auto h-72 border shadow-2xl border-black rounded-xl scale" src="quality-page-2.webp" alt="" />
                        </div>
                        <div className="flex flex-col w-[50%] items-center justify-center gap-5 px-20 max-md:w-full max-md:px-5">

                            <h2 className="text-2xl font-bold text-blue-500 lato-bold max-md:mt-8 w-full">Stringent Quality Control Processes</h2>

                            <p className="font-semibold text-[#59595A] roboto-regular">Our in-house quality control team employs a systematic approach to ensure that every product meets the highest benchmarks of safety and efficiency. Using state-of-the-art testing equipment, we simulate real-world conditions to verify the durability and reliability of our products. Each unit is tested against stringent criteria, ensuring flawless performance under diverse environmental and operational conditions.</p>

                        </div>
                    </motion.div>

                    <motion.div className="flex w-full my-8 max-md:flex-col-reverse"
                        initial={animate6 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                        exit={{ opacity: 1, scale: 1 }}
                        onAnimationComplete={() => setanimate6(false)}
                    >

                        <div className="flex flex-col w-[50%] items-center justify-center gap-5 px-20 max-md:w-full max-md:px-5">

                            <h2 className="text-2xl font-bold text-blue-500 lato-bold max-md:mt-8 w-full">Customer-Centric Quality Assurance</h2>

                            <p className="font-semibold text-[#59595A] roboto-regular">We place our customers at the center of our quality assurance strategy. Our commitment extends beyond product delivery, ensuring that our clients receive unmatched post-sale support and maintenance services. By consistently seeking feedback, we refine our processes and products, ensuring that they align perfectly with our clients&apos; evolving needs. This proactive approach has earned us a reputation for reliability and excellence in the electrical industry.</p>
                        </div>
                        <div className="flex justify-center object-cover w-[50%] max-md:w-full cursor-pointer">
                            <img className="w-auto h-72 border shadow-2xl border-black rounded-xl scale" src="quality-page-3.webp" alt="" />
                        </div>
                    </motion.div>

                </div>

            </motion.div>
        </>
    )
}

export default Quality
