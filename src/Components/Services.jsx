import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
import Icons from "./Icons"
const Services = () => {
  const [animate1, setanimate1] = useState(true)
  const [animate2, setanimate2] = useState(true)
  const [animate3, setanimate3] = useState(true)
  const [animate4, setanimate4] = useState(true)
  const [animate5, setanimate5] = useState(true)
  const [animate6, setanimate6] = useState(true)
  const [animate7, setanimate7] = useState(true)
  const [animate8, setanimate8] = useState(true)
  const handleanimate = () => {
    setInterval(() => {
      setanimate1(false)
    }, 2000);
  }
  const animate = () => {
    setInterval(() => {
      setanimate8(false)
    }, 1000);
  }
  return (
    <>
      <Helmet>
        <title>Services - Urja Engg Co.</title>
        <meta name="description" content="Explore the services offered by Urja Engineering Co., including custom design, manufacturing, and support for high-quality electrical panel boards tailored to meet diverse industrial needs." />
      </Helmet>
      <Icons />
      {animate8 && <motion.div className="fixed top-0 z-30 h-[1vh] bg-gradient-to-r from-blue-500 via-green-500 to-purple-500"
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
            <div className="text-purple-800 font-semibold lato-bold">Leading panel Board Manufacturer</div>
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
            <div className="carousel-item bg-blr bg-[url('/service-banner-1.webp')] bg-cover w-full active h-[550px] max-md:h-40">
              <div className="absolute inset-0 bg-gradient-to-b from-[#bababad6] via-[#111] to-[#000000] -z-10 opacity-70"></div>
              <div className="flex h-full px-32 justify-center items-center cursor-default max-md:px-10">
                <motion.div className="w-[60%] flex items-center flex-col gap-5 max-md:gap-2"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, ease: 'anticipate', type: 'spring', shiftness: 100, damping: 10 }}
                >
                  <div className="lato-bold text-neutral-300 text-5xl max-md:text-sm">Advanced <span className="text-blue-600">Panel</span> Manufacturing</div>
                  <div className="roboto-regular text-lg text-neutral-200 leading-8 w-[80%] max-md:text-[8px] max-md:w-full max-md:leading-normal">
                    Urja Engineering Co. specializes in crafting a wide range of electrical panel boards, including PCC, MCC, and Distribution Boards. Built to meet global quality standards, our panels ensure safety, efficiency, and reliability. Designed for complex power needs, they serve industrial, commercial, and export applications seamlessly.</div>
                </motion.div>
                <motion.div className="w-[30%] flex justify-end"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, ease: 'anticipate', type: 'spring', shiftness: 100, damping: 10, delay: 1 }}
                >
                  <motion.img className="h-96 w-auto cursor-pointer max-md:h-28" src="panel-6.webp" alt="panel"
                    drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    whileHover={{ scale: 1.1 }}
                  />
                </motion.div>
              </div>
            </div>
            <div className="carousel-item w-full bg-[url('/service-banner-3.webp')] bg-cover h-[550px] max-md:h-40">
              <div className="absolute inset-0 bg-gradient-to-b from-[#bababad6] via-[#111] to-[#000000] -z-10 opacity-70"></div>
              <div className="flex h-full px-32 justify-center items-center cursor-default max-md:px-10">
                <motion.div className="w-[60%] flex items-center flex-col gap-5 max-md:gap-2"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, ease: 'anticipate', type: 'spring', shiftness: 100, damping: 10 }}
                >
                  <div className="lato-bold text-neutral-300 text-5xl max-md:text-sm">Dp <span className="text-blue-600">Structure </span>Installing</div>
                  <div className="roboto-regular text-lg text-neutral-200 leading-8 w-[80%] max-md:text-[8px] max-md:w-full max-md:leading-normal">
                    At Urja Engineering Company, we combine cutting-edge technology with robust design to create efficient, reliable electrical panel boards. Our solutions are crafted to meet the evolving demands of modern industries, ensuring seamless functionality, reduced downtime, and enhanced operational efficiency for both local and global markets.</div>
                </motion.div>
                <motion.div className="w-[30%] flex justify-end"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, ease: 'anticipate', type: 'spring', shiftness: 100, damping: 10, delay: 1 }}
                >
                  <motion.img className="h-96 w-auto cursor-pointer max-md:h-28" src="panel-4.webp" alt="panel"
                    drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    whileHover={{ scale: 1.1 }}
                  />
                </motion.div>
              </div>
            </div>
            <div className="carousel-item w-full bg-[url('/service-banner-2.webp')] bg-cover h-[550px] max-md:h-40">
              <div className="absolute inset-0 bg-gradient-to-b from-[#bababad6] via-[#111] to-[#000000] -z-10 opacity-70"></div>
              <div className="flex h-full px-32 justify-center items-center cursor-default max-md:px-10">
                <motion.div className="w-[60%] flex items-center flex-col gap-5 max-md:gap-2"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, ease: 'anticipate', type: 'spring', shiftness: 100, damping: 10 }}
                >
                  <div className="lato-bold text-neutral-300 text-5xl max-md:text-sm">Expert <span className="text-blue-600">Cable</span>Installation</div>
                  <div className="roboto-regular text-lg text-neutral-200 leading-8 w-[80%] max-md:text-[8px] max-md:w-full max-md:leading-normal">
                    We deliver seamless cable installation services, covering underground cabling and overhead lines. Our expertise includes laying high-tension (HT) and low-tension (LT) cables, ensuring durability and efficiency. From planning to testing, we guarantee safe and reliable power supply tailored to your needs.</div>
                </motion.div>
                <motion.div className="w-[30%] flex justify-end"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, ease: 'anticipate', type: 'spring', shiftness: 100, damping: 10, delay: 1 }}
                >
                  <motion.img className="h-96 w-auto cursor-pointer max-md:h-28" src="panel-5.webp" alt="panel"
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
            initial={animate2 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 2.3 } }}
            onAnimationComplete={() => setanimate2(false)}
          >
            <div className="flex justify-center object-cover w-[50%] max-md:w-full cursor-pointer">
              <img className="w-auto h-72 border shadow-2xl border-black rounded-xl scale scale" src="gallery-29.webp" alt="" />
            </div>
            <div className="flex flex-col w-[50%] items-center justify-center gap-5 px-20 max-md:px-5 max-md:w-full">

              <h2 className="text-2xl font-bold text-blue-500 lato-bold text-center max-md:mt-8">Electrical Panel Board Manufacturing</h2>

              <p className="text-[#59595A] roboto-regular">Urja Engineering Co. excels in the manufacturing of a comprehensive range of electrical panel boards, including Power Control Centers (PCC), Motor Control Centers (MCC), and Distribution Boards. Our products are engineered to meet both national and international quality standards, ensuring safety, reliability, and efficiency. Equipped with advanced technology and rigorous quality testing, our panels are designed to handle complex power distribution needs, making them ideal for industrial, commercial, and export purposes.</p>

            </div>
          </motion.div>

          <motion.div className="flex w-full my-8 max-md:flex-col-reverse"
            initial={animate3 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
            exit={{ opacity: 1, scale: 1 }}
            onAnimationComplete={() => setanimate3(false)}
          >

            <div className="flex flex-col w-[50%] items-center justify-center gap-5 px-20 max-md:px-5 max-md:w-full">

              <h2 className="text-2xl font-bold text-blue-500 lato-bold text-center max-md:mt-8">Installation of DP Structures</h2>

              <p className="text-[#59595A] roboto-regular">We provide professional installation services for Double Pole (DP) structures, which are critical components in power distribution networks. Our experienced team ensures that each DP structure is installed with precision, adhering to all safety regulations. This service includes the installation of poles, cross arms, and conductors, guaranteeing optimal performance and longevity. Whether it’s a new setup or an upgrade, our solutions are designed to support high-capacity power transmission efficiently.</p>

            </div>
            <div className="flex justify-center object-cover  w-[50%] max-md:w-full cursor-pointer">
              <img className="w-auto h-72 border shadow-2xl border-black rounded-xl scale scale" src="dp-structure.webp" alt="" />
            </div>
          </motion.div>

          <motion.div className="flex w-full my-8 max-md:flex-col"
            initial={animate4 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
            exit={{ opacity: 1, scale: 1 }}
            onAnimationComplete={() => setanimate4(false)}
          >
            <div className="flex justify-center object-cover w-[50%] max-md:w-full cursor-pointer">
              <img className="w-auto h-72 border shadow-2xl border-black rounded-xl scale scale" src="cable.webp" alt="" />
            </div>
            <div className="flex flex-col w-[50%] items-center justify-center gap-5 px-20 max-md:px-5 max-md:w-full">

              <h2 className="text-2xl font-bold text-blue-500 lato-bold text-center max-md:mt-8">Cable Installation Services</h2>

              <p className="text-[#59595A] roboto-regular">Urja Engineering Co. offers expert cable installation services, ranging from underground cabling to overhead lines. We handle everything from planning and trenching to installation and testing, ensuring a smooth and efficient power supply. Our team specializes in laying high-tension (HT) and low-tension (LT) cables, adhering to industry best practices to ensure durability and minimal power loss. With our advanced tools and methodologies, we deliver seamless and safe cabling solutions tailored to your specific requirements.</p>

            </div>
          </motion.div>

          <motion.div className="flex w-full my-8 max-md:flex-col-reverse"
            initial={animate5 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
            exit={{ opacity: 1, scale: 1 }}
            onAnimationComplete={() => setanimate5(false)}
          >

            <div className="flex flex-col w-[50%] items-center justify-center gap-5 px-20 max-md:px-5 max-md:w-full">

              <h2 className="text-2xl font-bold text-blue-500 lato-bold text-center max-md:mt-8">Supply of Transformers and Vacuum Circuit Breakers (VCBs)</h2>

              <p className="text-[#59595A] roboto-regular">We are a trusted supplier of high-performance transformers and vacuum circuit breakers. Our transformers, available in various capacities, are built for optimal energy efficiency and are suitable for industrial and utility applications. VCBs are a crucial component in managing high-voltage electrical systems, providing reliable protection against faults and overcurrents. Our products are rigorously tested and certified to ensure maximum safety and performance, meeting the diverse needs of our clients.</p>
            </div>
            <div className="flex justify-center object-cover  w-[50%] max-md:w-full cursor-pointer">
              <img className="w-auto h-72 border shadow-2xl border-black rounded-xl scale scale" src="transformer.webp" alt="" />
            </div>
          </motion.div>

          <motion.div className="flex w-full my-8 max-md:flex-col"
            initial={animate6 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
            exit={{ opacity: 1, scale: 1 }}
            onAnimationComplete={() => setanimate6(false)}
          >
            <div className="flex justify-center object-cover w-[50%] max-md:w-full cursor-pointer">
              <img className="w-auto h-72 border shadow-2xl border-black rounded-xl scale scale" src="switch-gear.webp" alt="" />
            </div>
            <div className="flex flex-col w-[50%] items-center justify-center gap-5 px-20 max-md:px-5 max-md:w-full">

              <h2 className="text-2xl font-bold text-blue-500 lato-bold text-center max-md:mt-8">Supply of Switchgear and HT & LT Dealings</h2>

              <p className="text-[#59595A] roboto-regular">At Urja Engineering Co. we provide a wide range of switchgear solutions, including circuit breakers, relays, and isolators, tailored for HT and LT systems. Our products are designed for seamless integration into power systems, offering superior control and protection. Our expertise in managing power distribution projects ensures reliable and efficient service delivery.</p>

            </div>
          </motion.div>

          <motion.div className="text-xl text-center text-blue-500 lato-bold py-5 font-bold w-[60%] mx-auto max-md:w-full max-md:px-2"
            initial={animate7 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
            exit={{ opacity: 1, scale: 1 }}
            onAnimationComplete={() => setanimate7(false)}
          >
            Each service is delivered with a commitment to quality and professionalism, ensuring that our clients receive the best solutions for their electrical infrastructure needs.
          </motion.div>

        </div>

      </motion.div>

    </>
  )
}

export default Services
