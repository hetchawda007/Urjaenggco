import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
import Icons from "./Icons"
const About = () => {
  const [animate0, setanimate0] = useState(true)
  const [animate2, setanimate2] = useState(true)
  const [animate3, setanimate3] = useState(true)
  const [animate4, setanimate4] = useState(true)
  const [animate5, setanimate5] = useState(true)
  const [animate6, setanimate6] = useState(true)
  const [animate7, setanimate7] = useState(true)
  const [animate8, setanimate8] = useState(true)
  const [animate9, setanimate9] = useState(true)
  const [animate10, setanimate10] = useState(true)
  const [animate11, setanimate11] = useState(true)
  const [animate13, setanimate13] = useState(true)
  const [animate14, setanimate14] = useState(true)
  const [animate15, setanimate15] = useState(true)
  const [animate16, setanimate16] = useState(true)
  const [animate17, setanimate17] = useState(true)
  const handleanimate = () => {
    setInterval(() => {
      setanimate15(false)
    }, 2000);
  }
  const animate = () => {
    setInterval(() => {
      setanimate16(false)
    }, 1000);
  }
  return (
    <>
      <Helmet>
        <title>About - Urja Engg Co.</title>
        <meta name="description" content="Learn about our expertise in electrical panel board manufacturing. We specialize in producing and supplying high-quality electrical panel boards, meeting industrial standards and export quality for various countries with our in-house quality control." />
      </Helmet>
      <Icons />
      <motion.div>
        {animate16 && <motion.div className="fixed top-0 z-30 h-[1vh] bg-gradient-to-r from-blue-500 via-green-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: '100vw', ease: 'easeInOut' }}
          transition={{ duration: 2, type: 'spring', stiffness: 100, damping: 10 }}
          onAnimationComplete={animate}
        ></motion.div>}
        <AnimatePresence>
          {animate15 && (
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

        <motion.div id="carouselExampleControls" className="carousel slide" data-interval="8000" data-ride="carousel"
          initial={animate0 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 2.3 } }}
          onAnimationComplete={() => setanimate0(false)}
        >
          <div className="carousel-inner ">
            <div className="carousel-item bg-blr bg-[url('/about-banner-1.webp')] bg-cover w-full active h-[550px] max-md:h-40">
              <div className="absolute inset-0 bg-gradient-to-b from-[#bababad6] via-[#111] to-[#000000] -z-10 opacity-70"></div>
              <div className="flex h-full px-32 justify-around items-center cursor-default max-md:px-14">
                <motion.div className="w-[60%] flex flex-col items-center gap-5 max-md:w-full max-md:gap-2"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, ease: 'anticipate', type: 'spring', shiftness: 100, damping: 10 }}
                >
                  <div className="lato-bold text-neutral-300 text-5xl max-md:text-sm">Urja<span className="text-blue-600"> Engineering</span> Company</div>
                  <div className="roboto-regular text-lg text-neutral-200 leading-8 w-[80%] max-md:text-[8px] max-md:leading-relaxed max-md:w-full">
                    Based in Gandhidham, Gujarat, India, the company is committed to excellence, reliability, and innovation. With extensive experience and consistent delivery of top-notch products, Urja Engineering Co. has earned a reputation as a trusted name in the panel board manufacturing industry.</div>
                </motion.div>
              </div>
            </div>
            <div className="carousel-item w-full bg-[url('/about-banner-3.webp')] bg-cover h-[550px] max-md:h-40">
              <div className="absolute inset-0 bg-gradient-to-b from-[#bababad6] via-[#111] to-[#000000] -z-10 opacity-70"></div>
              <div className="flex h-full px-32 justify-around items-center cursor-default  max-md:px-14">
                <motion.div className="w-[60%] flex flex-col items-center gap-5 max-md:w-full max-md:gap-2"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, ease: 'anticipate', type: 'spring', shiftness: 100, damping: 10 }}
                >
                  <div className="lato-bold text-blue-600 text-5xl max-md:text-sm">Infrastructure</div>
                  <div className="roboto-regular text-lg text-neutral-200 leading-8 w-[80%] max-md:w-full max-md:leading-normal max-md:text-[8px]">
                    We boasts a state-of-the-art in-house fabrication setup, enabling the production of high-quality panels tailored to client needs. Our spacious and well-equipped workshop, combined with advanced technology, ensures efficient storage, streamlined manufacturing, and timely delivery of large-scale consignments.</div>
                </motion.div>
              </div>
            </div>
            <div className="carousel-item w-full bg-[url('/about-banner-2.webp')] bg-cover h-[550px] max-md:h-40">
              <div className="absolute inset-0 bg-gradient-to-b from-[#bababad6] via-[#111] to-[#000000] -z-10 opacity-70"></div>
              <div className="flex h-full px-32 justify-around items-center cursor-default  max-md:px-14">
                <motion.div className="w-[60%] flex flex-col items-center gap-5 max-md:w-full max-md:gap-2"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, ease: 'anticipate', type: 'spring', shiftness: 100, damping: 10 }}
                >
                  <div className="lato-bold text-blue-600 text-5xl max-md:text-sm">Teamwork</div>
                  <div className="roboto-regular text-lg text-neutral-200 leading-8 w-[80%] max-md:w-full max-md:leading-normal max-md:text-[8px]">
                    Our success is driven by a proficient team of engineers, technicians, quality auditors, and sales professionals. This collective dedication has established us as a trusted leader in panel fabrication.</div>
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

        <div className="container flex flex-col gap-5 py-10 w-full">

          <motion.div className="flex w-full my-8 items-center max-md:flex-col"
            initial={animate2 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 2.9 } }}
            onAnimationComplete={() => setanimate2(false)}
          >
            <div className="flex justify-center object-cover w-[50%] max-md:w-full">
              <img className="w-auto h-72 border shd border-black rounded-xl cursor-pointer scale" src="leadership.webp" alt="" />
            </div>
            <div className="flex flex-col w-[50%] items-center justify-center gap-5 px-20 max-md:px-5 max-md:w-full">

              <h2 className="text-2xl font-bold max-md:pt-8 text-blue-500 lato-bold">Urja Engineering Co.</h2>

              <p className="font-semibold text-[#59595A] roboto-regular">A company dedicated to Electrical Panel Board Manufacturing. We manufacture and supply a wide range of electrical panel boards. With the help of our inhouse quality control we are able to meet the industrial standard as well as the quality standard for exports in various countries. At Urja Engineering Co., our philosophy is to maintain the high standards of quality and reliability in industry in all aspects. We are also a renowned manufacturer of quality APFC, PCC, MCC, MLDB, DG SET Panels of various types. Centered in Gandhidham - Gujarat - India. This company was started with an objective of being a leader in panel board manufacturing and suppliers. Through consistent and regular supply of quality panel boards, the company has established itself as a reliable player in the industry with a wide experience.</p>

            </div>
          </motion.div>

          <motion.div className="flex w-full my-8 items-center max-md:flex-col-reverse"
            initial={animate3 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
            exit={{ opacity: 1, scale: 1 }}
            onAnimationComplete={() => setanimate3(false)}
          >

            <div className="flex flex-col w-[50%] items-center justify-center gap-5 px-20 max-md:px-5 max-md:w-full">

              <h2 className="text-2xl font-bold max-md:pt-8 text-blue-500 lato-bold">Infrastructure</h2>

              <p className="font-semibold text-[#59595A] roboto-regular">With the help of well advanced & equipped in house fabrication setup, we are able to manufacture quality panels to meet clients requirements.The spacious workshop facilities with cutting edge technologies aids in the storing of procured material, electrical panels in abundance. This also helps in the delivery of the manufactured panels in a well-organized manner. Streamlining our manufacturing unit has further helped us take on large scale consignments with efficiency and deliver them within the stipulated time frame.</p>

            </div>
            <div className="flex justify-center object-cover w-[50%] max-md:w-full">
              <img className="w-auto h-72 border shd border-black rounded-xl cursor-pointer scale" src="infrastructure.webp" alt="" />
            </div>
          </motion.div>

          <div className="flex w-full my-8 max-md:flex-col max-md:mb-0">

            <motion.div className="flex flex-col w-[50%] gap-5 items-center max-md:w-full  max-md:mb-14"
              initial={animate4 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
              exit={{ opacity: 1, scale: 1 }}
              onAnimationComplete={() => setanimate4(false)}

            >

              <div className="flex justify-center object-cover cursor-pointer">
                <img className="w-auto h-56 border shd border-black rounded-xl max-md:h-72 scale" src="vision.webp" alt="" />
              </div>
              <div className="flex flex-col items-center justify-center gap-5 px-20 w-[90%] max-md:w-full max-md:px-5">

                <h2 className="text-2xl font-bold text-blue-500 lato-bold text-center">Our Vision</h2>
                <div className="flex flex-col justify-center">
                  <p className="font-semibold flex gap-1 roboto-regular"><div>●</div> Urja Engineering Co. Must be most trusted, respected and preferred one for electrical panels.</p>
                  <p className="font-semibold flex gap-1 roboto-regular"><div>●</div> Urja Engineering Co. shall server as a role model and an inspiration to other panel manufacturing companies.</p>
                  <p className="font-semibold flex gap-1 roboto-regular"><div>●</div> Urja Engineering Co. name must widely be recognized as trustable and leading manufacturers of panel.</p>
                  <p className="font-semibold flex gap-1 roboto-regular"><div>●</div> Employees and Management of Urja Engineering Co. are two hands of a single body.</p>
                </div>

              </div>
            </motion.div>

            <motion.div className="flex flex-col w-[50%] gap-5 items-center max-md:w-full max-md:my-14"
              initial={animate5 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
              exit={{ opacity: 1, scale: 1 }}
              onAnimationComplete={() => setanimate5(false)}

            >

              <div className="flex justify-center object-cover cursor-pointer">
                <img className="w-auto h-56 border shd border-black rounded-xl max-md:h-72 scale" src="mission.webp" alt="" />
              </div>
              <div className="flex flex-col items-center justify-center gap-5 px-20 w-[80%] max-md:w-full max-md:px-5">

                <h2 className="text-2xl font-bold text-blue-500 lato-bold text-center">Our Mission</h2>
                <div className="flex flex-col justify-center">
                  <p className="font-semibold flex roboto-regular gap-1"><div>●</div> To provide proper satisfaction to our customers.</p>
                  <p className="font-semibold flex roboto-regular gap-1"><div>●</div> To create a relish and vibrant workplace where employees are empowered and gain an wide opportunity for their growth</p>
                  <p className="font-semibold flex roboto-regular gap-1"><div>●</div> To satisfy each and every employee for their contribution towards the company and to increase their moral.</p>
                </div>

              </div>
            </motion.div>

          </div>

          <motion.div className="flex w-full my-8 items-center max-md:flex-col-reverse"
            initial={animate6 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
            exit={{ opacity: 1, scale: 1 }}
            onAnimationComplete={() => setanimate6(false)}
          >

            <div className="flex flex-col w-[50%] items-center justify-center gap-5 px-20 max-md:w-full max-md:px-5">

              <h2 className="text-2xl font-bold text-blue-500 lato-bold max-md:pt-8">Teamwork</h2>

              <p className="font-semibold roboto-regular">We take pride in nurturing proficient and skilled team of professionals skilled in manufacturing varied electrical panels. Our professionals comprises of Engineers, Technicians, Researchers, Quality Auditors, Servicing Engineers and Sales & Marketing Professionals.Their dedicated service all through the years has enabled us in gaining the present status and recognized as one of the leading fabricators of electrical panels. Owing to their deep industrial knowledge and expertise we are able to manufacture the range in varying models as per the client specifications.</p>
            </div>
            <div className="flex justify-center object-cover w-[50%] max-md:w-full">
              <img className="w-auto h-72 border shd border-black rounded-xl cursor-pointer scale" src="teamwork.webp" alt="" />
            </div>
          </motion.div>

          <div className="flex flex-col gap-10 w-[90%] mx-auto">
            <motion.div className="flex gap-3 items-center justify-center my-10"
              initial={animate7 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
              exit={{ opacity: 1, scale: 1 }}
              onAnimationComplete={() => setanimate7(false)}
            >
              <h2 className="text-4xl text-amber-950 font-bold max-md:text-2xl">Our Workshop gallery</h2>
              <div className="cursor-pointer">
                <lord-icon
                  src="https://cdn.lordicon.com/fwkrbvja.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#4d2c19,secondary:#4d2c19"
                  style={{ width: '48px', height: '48px' }}>
                </lord-icon>
              </div>
            </motion.div>

            <motion.div className="flex justify-evenly gap-10 flex-wrap"
              initial={animate8 ? { opacity: 0 } : { opacity: 1 }}
              whileInView={{ opacity: 1, transition: { duration: 2 } }}
              exit={{ opacity: 1 }}
              onAnimationComplete={() => setanimate8(false)}
            >
              <div>
                <img className="h-[178px] shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-10.webp" alt="" />
              </div>
              <div>
                <img className="h-auto shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-30.webp" alt="" />
              </div>
              <div>
                <img className="h-[178px] shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-2.webp" alt="" />
              </div>
              <div>
                <img className="h-auto shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-15.webp" alt="" />
              </div>
            </motion.div>

            <motion.div className="flex justify-evenly gap-10 flex-wrap"
              initial={animate17 ? { opacity: 0 } : { opacity: 1 }}
              whileInView={{ opacity: 1, transition: { duration: 2 } }}
              exit={{ opacity: 1 }}
              onAnimationComplete={() => setanimate17(false)}
            >
              <div>
                <img className="h-[178px] shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-35.webp" alt="" />
              </div>
              <div>
                <img className="h-[178px] shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-36.webp" alt="" />
              </div>
              <div>
                <img className="h-[178px] shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-37.webp" alt="" />
              </div>
              <div>
                <img className="h-[178px] shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-38.webp" alt="" />
              </div>
            </motion.div>

            <motion.div className="flex justify-evenly gap-10 flex-wrap"
              initial={animate9 ? { opacity: 0 } : { opacity: 1 }}
              whileInView={{ opacity: 1, transition: { duration: 2 } }}
              exit={{ opacity: 1 }}
              onAnimationComplete={() => setanimate9(false)}
            >
              <div>
                <img className="h-[178px] shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-20.webp" alt="" />
              </div>
              <div>
                <img className="h-[178px] shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-19.webp" alt="" />
              </div>
              <div>
                <img className="h-auto shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-28.webp" alt="" />
              </div>
              <div>
                <img className="h-[178px] shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-29.webp" alt="" />
              </div>
            </motion.div>

            <motion.div className="flex justify-evenly gap-10 flex-wrap"
              initial={animate10 ? { opacity: 0 } : { opacity: 1 }}
              whileInView={{ opacity: 1, transition: { duration: 2 } }}
              exit={{ opacity: 1 }}
              onAnimationComplete={() => setanimate10(false)}
            >
              <div>
                <img className="h-auto shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-1.webp" alt="" />
              </div>
              <div>
                <img className="h-auto shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-32.webp" alt="" />
              </div>
              <div>
                <img className="h-auto shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-5.webp" alt="" />
              </div>
              <div>
                <img className="h-auto shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-6.webp" alt="" />
              </div>
            </motion.div>

            <motion.div className="flex justify-evenly gap-10 flex-wrap"
              initial={animate11 ? { opacity: 0 } : { opacity: 1 }}
              whileInView={{ opacity: 1, transition: { duration: 2 } }}
              exit={{ opacity: 1 }}
              onAnimationComplete={() => setanimate11(false)}
            >
              <div>
                <img className="h-auto shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-7.webp" alt="" />
              </div>
              <div>
                <img className="h-auto shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-8.webp" alt="" />
              </div>
              <div>
                <img className="h-[320px] shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-16.webp" alt="" />
              </div>
              <div>
                <img className="h-[320px] shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-13.webp" alt="" />
              </div>
            </motion.div>


            <motion.div className="flex justify-evenly gap-10 flex-wrap"
              initial={animate13 ? { opacity: 0 } : { opacity: 1 }}
              whileInView={{ opacity: 1, transition: { duration: 2 } }}
              exit={{ opacity: 1 }}
              onAnimationComplete={() => setanimate13(false)}
            >
              <div>
                <img className="h-[320px] shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-22.webp" alt="" />
              </div>
              <div>
                <img className="h-[320px] shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-24.webp" alt="" />
              </div>
              <div>
                <img className="h-[320px] shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-23.webp" alt="" />
              </div>
              <div>
                <img className="h-[320px] shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-34.webp" alt="" />
              </div>
            </motion.div>

            <motion.div className="flex justify-evenly gap-10 flex-wrap"
              initial={animate14 ? { opacity: 0 } : { opacity: 1 }}
              whileInView={{ opacity: 1, transition: { duration: 2 } }}
              exit={{ opacity: 1 }}
              onAnimationComplete={() => setanimate14(false)}
            >
              <div>
                <img className="h-auto shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-25.webp" alt="" />
              </div>
              <div>
                <img className="h-[320px] shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-18.webp" alt="" />
              </div>
              <div>
                <img className="h-[320px] shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-27.webp" alt="" />
              </div>
              <div>
                <img className="h-auto shd border border-black scale cursor-pointer w-60 object-fill scale rounded-xl" src="gallery-31.webp" alt="" />
              </div>
            </motion.div>

          </div>

        </div>

      </motion.div>
    </>
  )
}

export default About
