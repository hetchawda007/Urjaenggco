import { motion } from "motion/react"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
const Products = () => {
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
  const [animate11, setanimate11] = useState(true)
  const [animate12, setanimate12] = useState(true)
  const [animate13, setanimate13] = useState(true)
  const [animate14, setanimate14] = useState(true)
  const [animate15, setanimate15] = useState(true)
  const [animate16, setanimate16] = useState(true)
  const [animate17, setanimate17] = useState(true)
  const [animate18, setanimate18] = useState(true)
  const [animate19, setanimate19] = useState(true)
  const [animate20, setanimate20] = useState(true)
  const [animate21, setanimate21] = useState(true)
  const [animate22, setanimate22] = useState(true)
  const [animate23, setanimate23] = useState(true)
  const [animate24, setanimate24] = useState(true)
  const [animate25, setanimate25] = useState(true)
  const [animate26, setanimate26] = useState(true)
  const [animate27, setanimate27] = useState(true)
  const [animate28, setanimate28] = useState(true)
  const [animate29, setanimate29] = useState(true)
  const [animate30, setanimate30] = useState(true)
  const [animate31, setanimate31] = useState(true)
  const [animate32, setanimate32] = useState(true)
  const [animate33, setanimate33] = useState(true)

  return (

    <>
      <Helmet>
        <title>Products - Urja Engg Co.</title>
        <meta name="description" content="Discover Urja Engineering Co., where precision, reliability, and innovation drive our high-performance electrical panel boards. We cater to the unique needs of diverse industries with quality and expertise." />
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
          transition={{ duration: 2, ease: "circInOut" }}
        >
        </motion.div>
        <motion.div className="w-1/2 bg-black h-full"
          initial={{ x: 0 }}
          animate={{ x: 800 }}
          exit={{ x: 0 }}
          onAnimationComplete={() => setanimate1(false)}
          transition={{ duration: 2, ease: "circInOut" }}
        >
        </motion.div>
      </motion.div>
      <motion.div className="min-h-[83vh]">
        <motion.div id="carouselExampleControls" className="carousel slide" data-ride="carousel"
          initial={animate2 ? { opacity: 0, scaleX: 0.8 } : { opacity: 1, scaleX: 1 }}
          whileInView={{ opacity: 1, scaleX: 1, transition: { duration: 1, delay: 1 } }}
          exit={{ opacity: 1, scaleX: 1 }}
          onAnimationComplete={() => setanimate2(false)}
        >
          <div className="carousel-inner ">
            <div className="carousel-item h-96 active max-md:h-40">
              <img className="h-auto w-full" src="home-banner-3.webp" alt="First slide" />
            </div>
            <div className="carousel-item h-96 max-md:h-40">
              <img className="h-auto w-full" src="product-banner-1.webp" alt="Second slide" />
            </div>
            <div className="carousel-item h-96 max-md:h-40">
              <img className="h-auto w-full" src="product-banner-2.webp" alt="Third slide" />
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
        <motion.div className="flex flex-col w-[80%] mx-auto my-14 gap-10"
          initial={animate3 ? { opacity: 0, scaleX: 0.8 } : { opacity: 1, scaleX: 1 }}
          whileInView={{ opacity: 1, scaleX: 1, transition: { duration: 1, delay: 1 } }}
          exit={{ opacity: 1, scaleX: 1 }}
          onAnimationComplete={() => setanimate3(false)}
        >
          <h1 className="text-3xl font-bold text-blue-500 lato-bold text-center">Our Products</h1>
          <p className="text-lg text-[#59595A] roboto-regular font-semibold max-md:text-center">At Urja Engineering Co. we take pride in offering a diverse range of high-performance electrical panel boards designed to meet the specific needs of various industries. Our products are built with precision engineering and undergo stringent quality control to ensure they meet both domestic and international standards.We offer custom solutions tailored to your unique needs, ensuring seamless integration and optimal performance. With a focus on innovation and excellence, our durable and efficient products, from control panels to distribution boards, are trusted by businesses worldwide.</p>
        </motion.div>
        <div className="container flex flex-col items-center">

          <div className="flex flex-col mb-10 mt-20 gap-24 mx-auto w-[90%] max-md:w-full">
            <motion.div className="flex justify-center"
              initial={animate4 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
              exit={{ opacity: 1, scale: 1 }}
              onAnimationComplete={() => setanimate4(false)}
              drag
            >
              <img className="w-96 scale cursor-pointer max-md:w-80" src="logo.webp" alt="" />
            </motion.div>
            <div className="flex justify-evenly flex-wrap gap-5 max-md:gap-10">

              <motion.div className="flex flex-col justify-center mt-5 items-center border shadow-2xl text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate5 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate5(false)}
              >
                <img className="h-32 scale w-auto object-cover rounded-lg max-md:h-56 scale" src="product-1.webp" alt="" />
                <div className="cursor-pointer text-blue-500 lato-bold text-xl font-bold">APFC Panels</div>
                <div className="text-sm text-[#59595A] roboto-regular">Our APFC Panels are manufactured from high quality raw material. The power factor controller of our APFC Panels monitors the reactive power which in turn helps in saving energy..</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate6 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate6(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="product-2.webp" alt="" />
                <div className="cursor-pointer text-xl font-bold text-blue-500 lato-bold">MCC Panels</div>
                <div className="text-sm text-[#59595A] roboto-regular">The MCC (Motor Circuit Control) panels conform to the international standards and are available with multiple power stabs that help in supporting high capacity industrial motors.</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate7 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate7(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="product-3.webp" alt="" />
                <div className="cursor-pointer text-xl font-bold text-blue-500 lato-bold">PCC Panels</div>
                <div className="text-sm text-[#59595A] roboto-regular">We are offering an effective range of process control panel which caters the specific requirements of various application areas. we can custom design PCC as per clients’ specifications.</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate8 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate8(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="product-4.webp" alt="" />
                <div className="cursor-pointer text-xl font-bold text-blue-500 lato-bold">MLDB Panels</div>
                <div className="text-sm text-[#59595A] roboto-regular">We are specialized in offering MLDB ( Main Lighting Distribution Board ) Panels that is made using finest grade of copper & aluminum, sourced from trusted vendors of the market.</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate9 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate9(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="product-5.webp" alt="" />
                <div className="cursor-pointer text-xl font-bold text-blue-500 lato-bold">DG Set Panels</div>
                <div className="text-sm text-[#59595A] roboto-regular">We are manufacturing a wide range of DG Set. These control panels help to start generator automatically when light goes off.</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate10 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate10(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="product-6.webp" alt="" />
                <div className="cursor-pointer text-xl font-bold text-blue-500 lato-bold">Ligntning Panel</div>
                <div className="text-sm text-[#59595A] roboto-regular">Robust and efficient panels designed for precise electrical management across various industries. Customizable to meet specific client needs.</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate11 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate11(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="product-7.webp" alt="" />
                <div className="cursor-pointer text-xl font-bold text-blue-500 lato-bold">Ats pannel</div>
                <div className="text-sm text-[#59595A] roboto-regular">Reliable and versatile automation panels, offering seamless control and optimization for industrial processes. Custom-built to match client specifications.  </div>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col mb-10 mt-20 gap-24 mx-auto w-[90%] max-md:w-full">
            <motion.div className="flex flex-col justify-center items-center cursor-pointer"
              initial={animate12 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
              exit={{ opacity: 1, scale: 1 }}
              onAnimationComplete={() => setanimate12(false)}
            >
              <div className="flex  scale flex-col items-center">
                <img className="w-96 max-md:w-80" src="tense.webp " alt="" />
                <div className="text-5xl font-bold max-md:text-3xl overflow-y-hidden">Authorized Importer ✅</div>
              </div>
            </motion.div>
            <div className="flex justify-evenly flex-wrap gap-5 max-md:gap-10">

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate13 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-1.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/DK-095-4-ROG-MT18-SVC_ENG.pdf">RGT-MT18 SVC</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">18 Level, SVC Compatible Three-Phase Power Factor Controller with Touch Screen</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate13 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-2.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/DK-94-7-RGT-12-SVC_ENG.pdf">RGT-12SVC</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">12 Level, SVC Compatible, Three-Phase Power Factor Controller with Graphic LCD Screen</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate13 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-3.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/DK-94-7-RGT-12-SVC_ENG.pdf">RGT-12E</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">12 Level, Three-Phase Power Factor Controller with Graphic LCD Screen</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate13 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate13(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-4.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/DK-94-7-RGT-12-SVC_ENG.pdf">RGT-18E</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">18 Level, Three-Phase Power Factor Controller with Graphic LCD Screen</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate14 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-5.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/doc_en-rgt-xxengpdf-products-2019-12-03-5ceea250d147c22a880fb8386c75949b-1.pdf">RGT-24H</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">24 Level, Graphic LCD Screen, Three-Phase Power Factor Controller with Communication</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate14 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-6.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/08/DK-105-1-RGM-12S_EN.pdf">RGM-12S</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">12 Level Mono-Phase Power Factor Controller with LED Display Screen</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate14 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-7.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/doc_en-rgm-xxepdf-products-2020-03-06-4d5d617fb7b1698b28db32f0348eedc4-1.pdf">RGM-07E</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">7 Level Mono-Phase Power Factor Controller with LED Display Screen</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate14 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate14(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-8.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/doc_en-rgm-xxepdf-products-2020-03-06-60d05d4b59920074d87d3475782ee2a7-1.pdf">RGM-12E</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">12 Level Mono-Phase Power Factor Controller with LED Display Screen</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate15 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-9.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/doc_en-srl-5tengpdf-products-2019-12-03-590a7055c88c029c33f33aad8c77f651-1.pdf">SRL-5T</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">5kVAr Inductive Load Driver (SVC)</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate15 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-10.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/doc_en-srl-10t-20tengpdf-products-2019-12-03-b04383b17f102a5310493211aeb6ab45-1.pdf">SRL-10T</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">10kVAr Endüktif Yük Sürücü (SVC)
                </div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate15 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-11.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/doc_en-srl-10t-20tengpdf-products-2019-12-03-1bce3aa9707cd04eb8809188b7d2bb2f-1.pdf">SRL-20T</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">20kVAr Inductive Load Driver (SVC)</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate15 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate15(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-12.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/doc_en-srl-30tengpdf-products-2019-12-03-1f60b03a98387730cb78dd39a30636a1-1.pdf">SRL-30T</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">30kVAr Inductive Load Driver (SVC) </div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate16 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-13.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/doc_en-dk-092-1-tpm-01eshengpdf-products-2020-06-08-64a9691567109f76fb7590da36c648f9-1.pdf">TPM-01E</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">Energy Analyzer with 4×4 Digit LED Display</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate16 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-14.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/DK-070-6-TPM-05-TPM-05A_ING.pdf">TPM-05</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">Energy Analyzer with 71.5×61.5 Glass LCD Screen</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate16 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-15.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/doc_en-dk-077-3-em-07eengpdf-products-2020-03-09-2f03fa922afeee5c2eaacec99ca65125-1.pdf">EM-07E</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">Adjustable Multimeter with 71.5×61.5 Glass LCD Screen</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate16 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate16(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-16.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/DK-071-4-EM-07_ENG.pdf">EM-07</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">Adjustable Multimeter with 71.5×61.5 Glass LCD Screen</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate17 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-17.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/DK-071-4-EM-07_ENG.pdf">EM-07D</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">Adjustable Direct Multimeter with 71.5×61.5 Glass LCD Screen (250A)</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate17 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-18.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/doc_en-em-06engpdf-products-2019-12-04-12b905aed3fba42fc3a3cef9a2ae6238-1.pdf">EM-06</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">Multimeter with 3×6 Digit LED Display</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate17 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-19.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/doc_en-em-06engpdf-products-2019-12-04-54def0fa39d8571c7515c24d82340452-1.pdf">EM-100D</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">Direct Multimeter with 3×6 Digit LED Display (100A)</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate17 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate17(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-20.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2022/02/DK-108-1-HM-48D.pdf">HM-48</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">Digital Hour Meter with 7 Digit LED Display</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate18 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-21.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/doc_en-tdk-01-02engpdf-products-2019-12-05-569b568d659506b6eb61e21fec05c5c2-1.pdf">TDK-02</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">Submersible Pump Control Relay</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate18 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-22.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/doc_en-dk-086-1-tdk-30ingpdf-products-2020-03-16-8772802f62fcfa491cbb5a3b3f2f20d8-1.pdf">TDK-30</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">Submersible Pump Control Relay</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate18 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-23.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2022/10/DK-112-1-TDK-96_EN.pdf">TDK-96</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">Submersible Pump Control Relay</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate18 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate18(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="tense-24.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="https://tense.com.tr/wp-content/uploads/2021/02/doc_en-ft-ftv-04-ft-grpdf-products-2019-12-05-b04d512cf596b27ae65515746f74316a-1.pdf">FTV-04</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">Photocell Relay</div>
              </motion.div>
            </div>
          </div>


          <div className="flex flex-col my-10 gap-24 mx-auto w-[90%] max-md:w-full">
            <motion.div className="flex flex-col gap-4 items-center justify-center cursor-pointer scale"
              initial={animate19 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
              exit={{ opacity: 1, scale: 1 }}
              onAnimationComplete={() => setanimate19(false)}
            ><div className="flex  scale flex-col items-center">
                <img className="w-96 max-md:w-80" src="ls-electric.svg" alt="" />
                <div className="text-5xl font-bold max-md:text-3xl">Authorized Importer ✅</div>
              </div>
            </motion.div>
            <div className="flex justify-evenly flex-wrap gap-5">

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate20 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="MC-18a.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-1.pdf">MC-18a</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">MC-6a AC240V 50/60Hz SCREW 1a (Metasol) EXP (MC6A-30-10-U7-S-E)</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate20 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="MC-32a.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-2.pdf">MC-32a</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">MC-32a AC240V 50/60Hz SCREW 1a1b (Metasol) EXP (MC32A-30-11-U7-S-E)</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate20 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="MC-65a.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-3.pdf">MC-65a</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">MC-65a AC240V 50/60Hz LUG 1a1b (Metasol) EXP (MC65A-30-11-U7-L-E)</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate20 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate20(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="MC-85a.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-4.pdf">MC-85a</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">MC-85a AC240V 50/60Hz LUG 1a1b (Metasol) EXP (MC85A-30-11-U7-L-E)</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate21 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="MC-100a.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-5.pdf">MC-100a</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">MC-100a AC240V 50/60Hz LUG 1a1b (Metasol) EXP (MC100A-30-11-U7-L-E)</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate21 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="MC-130a.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-6.pdf">MC-130a</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">MC-130a AC220~240V 50/60Hz LUG 1a1b (Metasol) EXP (MC130A-30-11-MU-L-E)</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate21 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="MC-185a.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-7.pdf">MC-185a</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">MC-185a AC100-240V 50/60Hz, DC100-220V 2a2b (Metasol) EXP (MC185A-30-22-FV-B-E)</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate21 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate21(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="MC-265a.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-8.pdf">MC-265a</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">MC-265a AC100-240V 50/60Hz, DC100-220V 2a2b (Metasol) EXP (MC265A-30-22-FV-B-E)</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate22 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="MC-400a.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-9.pdf">MC-400a</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">MC-400a AC100-240V 50/60Hz, DC100-220V 2a2b (Metasol) EXP (MC400A-30-22-FV-B-E)</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate22 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="ABN103c.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-10.pdf">ABN103c</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">ABN103c 100A EXP</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate22 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="ABS103c.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-11.pdf">ABS103c</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">ABS103c 125A EXP</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate22 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate22(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="ABN203c.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-12.pdf">ABN203c</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">ABN203c 150A EXP</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate23 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="ABN204c.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-13.pdf">ABN204c</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">ABN204c 175A EXP</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate23 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="ABN204c250a.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-14.pdf">ABN204c250a</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">ABN204c 250A EXP</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate23 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="ABN203c 250A.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-15.pdf">ABN203c 250A</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">ABN203c 250A EXP</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate23 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate23(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="ABN403c 350A.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-16.pdf">ABN403c 350A</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">ABN403c 350A EXP</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate24 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="ABN404c 400A.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-17.pdf">ABN404c 400A</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">ABN404c 400A EXP</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate24 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="ABN803c 630A.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-18.pdf">ABN803c 630A</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">ABN803c 630A EXP</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate24 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="ABN803c 800A.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-19.pdf">ABN803c 800A</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">ABN803c 800A EXP</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate24 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate24(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="ABN804c 800A.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-20.pdf">ABN804c 800A</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">ABN804c 800A EXP</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate25 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="TS400N.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-21.pdf">TS400N</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">TS400N ATU400 400A 3P EXP</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate25 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="MMS-32S 6A.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-22.pdf">MMS-32S 4A</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">	MMS-32S 4A METASOL EXP</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate25 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="MMS-32S 6A.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-23.pdf">MMS-32S 6A</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">MMS-32S 6A METASOL EXP</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate25 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate25(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="MMS-32S 10A.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-24.pdf">MMS-32S 10A</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">MMS-32S 10A METASOL EXP</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate26 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="MMS-32S 17A.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-25.pdf">MMS-32S 17A</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">MMS-32S 17A METASOL EXP</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate26 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="MMS-32S 26A.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-26.pdf">MMS-32S 26A</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">MMS-32S 26A METASOL EXP</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate26 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="MMS-32S 32A.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-27.pdf">MMS-32S 32A</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">MMS-32S 32A METASOL EXP</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate26 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate26(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="MMS-63S 40A.webp" alt="" />
                <div className="text-xl text-blue-500 lato-bold font-bold"><a target="_b text-blue-500 lato-boldlank" className="hover:text-blue-800" href="/ls-28.pdf">MMS-63S 40A</a></div>
                <div className="text-sm text-[#59595A] roboto-regular">MMS-63S 40A METASOL EXP</div>
              </motion.div>

            </div>
          </div>

          <div className="flex flex-col my-10 gap-24 mx-auto w-[90%] max-md:w-full">
            <motion.div className="flex flex-col items-center justify-center cursor-pointer scale "
              initial={animate27 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
              exit={{ opacity: 1, scale: 1 }}
              onAnimationComplete={() => setanimate27(false)}
            >
              <div className="flex scale flex-col items-center">
                <img className="w-96 max-md:w-80" src="c&s-electric.svg" alt="" />
                <div className="text-5xl font-bold max-md:text-3xl">Authorized Stockist ✅</div>
              </div>
            </motion.div>
            <div className="flex justify-evenly flex-wrap gap-5">

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate28 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="cns-1.webp" alt="" />
                <div className="cursor-pointer text-xl font-bold text-blue-500 lato-bold">Air Circuit Breakers</div>
                <div className="text-sm text-[#59595A] roboto-regular">With current rating up to 6300A available in 3 or 4 pole.</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate28 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="cns-2.webp " alt="" />
                <div className="cursor-pointer text-xl font-bold text-blue-500 lato-bold">Switch Disconnector Fuse</div>
                <div className="text-sm text-[#59595A] roboto-regular">Suitable for DIN / bolted type fuse-link</div>
              </motion.div>


              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate28 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="cns-3.webp " alt="" />
                <div className="cursor-pointer text-xl font-bold text-blue-500 lato-bold">Onload Changeover Switches</div>
                <div className="text-sm text-[#59595A] roboto-regular">Available in open / sheet steel enclosure version</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate28 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate28(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="cns-4.webp" alt="" />
                <div className="cursor-pointer text-xl font-bold text-blue-500 lato-bold">HRC Fuse</div>
                <div className="text-sm text-[#59595A] roboto-regular">With short circuit capacity at 80kA suitable for back up protection</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate29 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="cns-5.webp" alt="" />
                <div className="cursor-pointer text-xl font-bold text-blue-500 lato-bold">Control & Signalling Devices</div>
                <div className="text-sm text-[#59595A] roboto-regular">Illuminated & non- illuminated actuators in metal & polycarbonate</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate29 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="cns-6.webp" alt="" />
                <div className="cursor-pointer text-xl font-bold text-blue-500 lato-bold">Industrial Plugs and Sockets</div>
                <div className="text-sm text-[#59595A] roboto-regular">Secure & reliable with high grade thermoplastic material</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate29 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="cns-7.webp" alt="" />
                <div className="cursor-pointer text-xl font-bold text-blue-500 lato-bold">robusTa Contactors & Overload Relays</div>
                <div className="text-sm text-[#59595A] roboto-regular">With superior functional aesthetics and advanced performance</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate29 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate29(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="cns-8.webp" alt="" />
                <div className="cursor-pointer text-xl font-bold text-blue-500 lato-bold">Industrial Motor Starters</div>
                <div className="text-sm text-[#59595A] roboto-regular">Designed for easy cable termination conforming to IS13947-4-1</div>
              </motion.div>


            </div>
          </div>

          <div className="flex flex-col my-10 gap-24 mx-auto w-[90%] max-md:w-full">
            <motion.div className="flex flex-col items-center gap-5 justify-center cursor-pointer scale "
              initial={animate30 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
              exit={{ opacity: 1, scale: 1 }}
              onAnimationComplete={() => setanimate30(false)}
            >
              <div className="flex  scale flex-col items-center">
                <img className="w-96 max-md:w-80" src="rr-kabel.svg" alt="" />
                <div className="text-5xl font-bold max-md:text-3xl">Authorized Stockist ✅</div>
              </div>
            </motion.div>
            <motion.div className="flex justify-evenly flex-wrap gap-5 max-sm:gap-16"
              initial={animate31 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
              exit={{ opacity: 1, scale: 1 }}
              onAnimationComplete={() => setanimate31(false)}
            >

              <img className="w-72 border shadow-2xl border-black rounded-xl scale cursor-pointer" src="rrkabel-1.webp" alt="" />
              <img className="w-72 border shadow-2xl border-black rounded-xl scale cursor-pointer" src="rrkabel-2.webp" alt="" />

            </motion.div>
          </div>

          <div className="flex flex-col my-10 gap-24 mx-auto w-[90%] max-md:w-full">
            <motion.div className="flex flex-col items-center gap-5 justify-center cursor-pointer scale "
              initial={animate32 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
              exit={{ opacity: 1, scale: 1 }}
              onAnimationComplete={() => setanimate32(false)}
            >
              <div className="flex scale flex-col items-center">
                <img className="w-96 max-md:w-80" src="socomec.webp" alt="" />
                <div className="text-5xl font-bold max-md:text-3xl">Authorized Stockist ✅</div>
              </div>
            </motion.div>
            <div className="flex justify-evenly flex-wrap gap-5 mb-10">

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate33 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="/socomec-1.webp" alt="" />
                <div className="cursor-pointer text-xl font-bold text-blue-500 lato-bold">ATyS</div>
                <div className="text-sm text-[#59595A] roboto-regular">Remotely Operated Transfer Switching Equipment with double 230Vac power supply - from 40 to 125 A</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate33 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="/socomec-2.webp" alt="" />
                <div className="cursor-pointer text-xl font-bold text-blue-500 lato-bold">SIRCOVER I-0-II</div>
                <div className="text-sm text-[#59595A] roboto-regular">Manual Transfer Switching Equipment - from 63 to 3200 A</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate33 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                exit={{ opacity: 1, scale: 1 }}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="/socomec-3.webp" alt="" />
                <div className="cursor-pointer text-xl font-bold text-blue-500 lato-bold">SIRCO</div>
                <div className="text-sm text-[#59595A] roboto-regular">Load break and isolation switches for power distribution - from 63 to 5000 A</div>
              </motion.div>

              <motion.div className="flex flex-col justify-center items-center border shadow-2xl mt-5 text-center rounded-xl gap-2 border-black w-[20%] p-2 max-xl:w-[45%] max-md:w-[80%]"
                initial={animate33 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                exit={{ opacity: 1, scale: 1 }}
                onAnimationComplete={() => setanimate33(false)}
              >
                <img className="w-auto h-32 scale cursor-pointer object-cover rounded-lg max-md:h-56" src="/socomec-4.webp" alt="" />
                <div className="cursor-pointer text-xl font-bold text-blue-500 lato-bold">ATyS A</div>
                <div className="text-sm text-[#59595A] roboto-regular">Automatic Transfer Switching Equipment with Door Mounted Controller - from 125 to 3200 A</div>
              </motion.div>



            </div>
          </div>

        </div>

      </motion.div>
    </>
  )
}

export default Products
