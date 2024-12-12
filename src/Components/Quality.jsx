import { motion } from "motion/react"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
const Quality = () => {
    const [animate1, setanimate1] = useState(true)
    const [animate2, setanimate2] = useState(true)
    const [animate3, setanimate3] = useState(true)
    const [animate4, setanimate4] = useState(true)
    const [animate5, setanimate5] = useState(true)
    const [animate6, setanimate6] = useState(true)
    return (
        <>
            <Helmet>
                <title>Quality - Urja Engg Co.</title>
                <meta name="description" content="At Urja Engineering Co., quality is our core principle. Our electrical panel boards undergo rigorous testing to ensure unmatched performance, reliability, and durability." />
            </Helmet>
            <motion.div className="w-[98.9vw] absolute h-screen overflow-y-hidden top-0 z-20"
                style={{
                    visibility: animate1 ? "visible" : "hidden"
                }}
            >
                <motion.div className="w-full bg-black h-1/2"
                    initial={{ y: 0 }}
                    animate={{ y: -800 }}
                    exit={{ y: 0 }}
                    transition={{ duration: 2, ease: "backOut" }}
                >
                </motion.div>
                <motion.div className="w-full bg-black h-1/2"
                    initial={{ y: 0 }}
                    animate={{ y: 800 }}
                    exit={{ y: 0 }}
                    onAnimationComplete={() => setanimate1(false)}
                    transition={{ duration: 2, ease: "backOut" }}
                >
                </motion.div>
            </motion.div>

            <motion.div>
                <motion.div id="carouselExampleControls" className="carousel slide" data-ride="carousel"
                    initial={animate2 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    exit={{ opacity: 1, scale: 1 }}
                    onAnimationComplete={() => setanimate2(false)}
                >
                    <div className="carousel-inner ">
                        <div className="carousel-item h-96 active max-md:h-40 ">
                            <img className="h-auto w-full object-fill" src="quality-banner-1.webp" alt="First slide" />
                        </div>
                        <div className="carousel-item h-96  max-md:h-40 ">
                            <img className="h-auto w-full object-fill" src="quality-banner-2.webp" alt="Second slide" />
                        </div>
                        <div className="carousel-item h-96  max-md:h-40 ">
                            <img className="h-auto w-full object-fill" src="quality-banner-3.webp" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </motion.div>

                <div className="container flex flex-col gap-5 w-full my-10">

                    <motion.div className="flex w-full my-8 max-md:flex-col"
                        initial={animate3 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                        exit={{ opacity: 1, scale: 1 }}
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
