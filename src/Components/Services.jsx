import { motion } from "motion/react"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
const Services = () => {
  const [animate1, setanimate1] = useState(true)
  const [animate2, setanimate2] = useState(true)
  const [animate3, setanimate3] = useState(true)
  const [animate4, setanimate4] = useState(true)
  const [animate5, setanimate5] = useState(true)
  const [animate6, setanimate6] = useState(true)
  const [animate7, setanimate7] = useState(true)
  return (
    <>
      <Helmet>
        <title>Services - Urja Engg Co.</title>
        <meta name="description" content="Explore the services offered by Urja Engineering Co., including custom design, manufacturing, and support for high-quality electrical panel boards tailored to meet diverse industrial needs." />
      </Helmet>
      <motion.div className="w-[98.9vw] flex absolute h-screen overflow-x-hidden overflow-y-hidden top-0 z-20"
        style={{
          visibility: animate1 ? "visible" : "hidden"
        }}
      >
        <motion.div className="w-1/2 bg-black h-full"
          initial={{ x: 0 }}
          animate={{ x: -800 }}
          exit={{ x: 0 }}
          transition={{ duration: 2, ease: "backOut" }}
        >
        </motion.div>
        <motion.div className="w-1/2 bg-black h-full"
          initial={{ x: 0 }}
          animate={{ x: 800 }}
          exit={{ x: 0 }}
          onAnimationComplete={() => setanimate1(false)}
          transition={{ duration: 2, ease: "backOut" }}
        >
        </motion.div>
      </motion.div>
      <motion.div>
        <motion.div id="carouselExampleControls" className="carousel slide" data-ride="carousel"
          initial={animate2 ? { opacity: 0, scaleX: 0.8 } : { opacity: 1, scaleX: 1 }}
          whileInView={{ opacity: 1, scaleX: 1, transition: { duration: 1 } }}
          exit={{ opacity: 1, scaleX: 1 }}
          onAnimationComplete={() => setanimate2(false)}
        >
          <div className="carousel-inner ">
            <div className="carousel-item h-96 active max-md:h-40">
              <img className="h-auto w-full" src="service-banner-1.webp" alt="First slide" />
            </div>
            <div className="carousel-item h-96  max-md:h-40">
              <img className="h-auto w-full" src="service-banner-2.webp" alt="Second slide" />
            </div>
            <div className="carousel-item h-96  max-md:h-40">
              <img className="h-auto w-full" src="service-banner-3.webp" alt="Third slide" />
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
            initial={animate2 ? { opacity: 0, scaleX: 0.8 } : { opacity: 1, scaleX: 1 }}
            whileInView={{ opacity: 1, scaleX: 1, transition: { duration: 2 } }}
            exit={{ opacity: 1, scaleX: 1 }}
            onAnimationComplete={() => setanimate2(false)}
          >
            <div className="flex justify-center object-cover w-[50%] max-md:w-full cursor-pointer">
              <img className="w-auto h-72 border shadow-2xl border-black rounded-xl scale scale" src="electric-pannel-board.webp" alt="" />
            </div>
            <div className="flex flex-col w-[50%] items-center justify-center gap-5 px-20 max-md:px-5 max-md:w-full">

              <h2 className="text-2xl font-bold text-center max-md:mt-8">Electrical Panel Board Manufacturing</h2>

              <p className="font-semibold text-center">Urja Engineering Co. excels in the manufacturing of a comprehensive range of electrical panel boards, including Power Control Centers (PCC), Motor Control Centers (MCC), and Distribution Boards. Our products are engineered to meet both national and international quality standards, ensuring safety, reliability, and efficiency. Equipped with advanced technology and rigorous quality testing, our panels are designed to handle complex power distribution needs, making them ideal for industrial, commercial, and export purposes.</p>

            </div>
          </motion.div>

          <motion.div className="flex w-full my-8 max-md:flex-col-reverse"
            initial={animate3 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
            exit={{ opacity: 1, scale: 1 }}
            onAnimationComplete={() => setanimate3(false)}
          >

            <div className="flex flex-col w-[50%] items-center justify-center gap-5 px-20 max-md:px-5 max-md:w-full">

              <h2 className="text-2xl font-bold text-center max-md:mt-8">Installation of DP Structures</h2>

              <p className="font-semibold text-center">We provide professional installation services for Double Pole (DP) structures, which are critical components in power distribution networks. Our experienced team ensures that each DP structure is installed with precision, adhering to all safety regulations. This service includes the installation of poles, cross arms, and conductors, guaranteeing optimal performance and longevity. Whether it’s a new setup or an upgrade, our solutions are designed to support high-capacity power transmission efficiently.</p>

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

              <h2 className="text-2xl font-bold text-center max-md:mt-8">Cable Installation Services</h2>

              <p className="font-semibold text-center">Urja Engineering Co. offers expert cable installation services, ranging from underground cabling to overhead lines. We handle everything from planning and trenching to installation and testing, ensuring a smooth and efficient power supply. Our team specializes in laying high-tension (HT) and low-tension (LT) cables, adhering to industry best practices to ensure durability and minimal power loss. With our advanced tools and methodologies, we deliver seamless and safe cabling solutions tailored to your specific requirements.</p>

            </div>
          </motion.div>

          <motion.div className="flex w-full my-8 max-md:flex-col-reverse"
            initial={animate5 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
            exit={{ opacity: 1, scale: 1 }}
            onAnimationComplete={() => setanimate5(false)}
          >

            <div className="flex flex-col w-[50%] items-center justify-center gap-5 px-20 max-md:px-5 max-md:w-full">

              <h2 className="text-2xl font-bold text-center max-md:mt-8">Supply of Transformers and Vacuum Circuit Breakers (VCBs)</h2>

              <p className="font-semibold text-center">We are a trusted supplier of high-performance transformers and vacuum circuit breakers. Our transformers, available in various capacities, are built for optimal energy efficiency and are suitable for industrial and utility applications. VCBs are a crucial component in managing high-voltage electrical systems, providing reliable protection against faults and overcurrents. Our products are rigorously tested and certified to ensure maximum safety and performance, meeting the diverse needs of our clients.</p>
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

              <h2 className="text-2xl font-bold text-center max-md:mt-8">Supply of Switchgear and HT & LT Dealings</h2>

              <p className="font-semibold text-center">At Urja Engineering Co. we provide a wide range of switchgear solutions, including circuit breakers, relays, and isolators, tailored for HT and LT systems. Our products are designed for seamless integration into power systems, offering superior control and protection. Our expertise in managing power distribution projects ensures reliable and efficient service delivery.</p>

            </div>
          </motion.div>

          <motion.div className="text-xl text-center py-5 font-bold w-[60%] mx-auto max-md:w-full max-md:px-2"
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
