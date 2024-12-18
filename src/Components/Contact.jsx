import { useState } from "react"
import axios from "axios"
import { motion, AnimatePresence } from "motion/react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async"
import Icons from "./Icons";
const Contact = () => {

  const [animate1, setanimate1] = useState(true)
  const [animate2, setanimate2] = useState(true)
  const [animate3, setanimate3] = useState(true)
  const [animate6, setanimate6] = useState(true)
  const handleanimate = () => {
    setInterval(() => {
      setanimate3(false)
    }, 2000);
  }
  const animate = () => {
    setInterval(() => {
      setanimate1(false)
    }, 1000);
  }
  const [form, setform] = useState({ name: "", number: "", email: "", company: "", message: "" })

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const sendEmail = async () => {
    if (form.name.length >= 3 && /^\d+$/.test(form.number) && form.number.length >= 10 && form.email.includes('@') && form.email.includes('.com') && form.email.length >= 3 && form.company.length >= 3 && form.message.length >= 3) {
      try {
        const response = await axios.post(
          'https://api.brevo.com/v3/smtp/email',
          {
            sender: { name: 'urjaengg.com', email: 'info@urjaengg.com' },
            to: [{ email: 'info@urjaengg.com' },
            { email: 'jigar@urjaengg.com' }
            ],
            subject: `Query from ${form.name}`,
            htmlContent: `
              <p>You have received a mail from www.urjaengg.com website</p>
              <p><strong>Name: </strong> ${form?.name}</p>
              <p><strong>Number: </strong> ${form?.number}</p>
              <p><strong>Email: </strong> ${form?.email}</p>
              <p><strong>Company: </strong> ${form?.company}</p>
              <p><strong>Message: </strong> ${form?.message}</p>
            `,
          },
          {
            headers: {
              'api-key': import.meta.env.VITE_BREVO_API_KEY,
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.status === 201) {
          setform({ name: "", number: "", email: "", company: "", message: "" })
          setTimeout(() => {
            toast('Response Submitted ✅', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }, 1000);
        }
      } catch (error) {
        console.error('Error sending email:', error);
      }
    }
    else {
      alert("Please Enter Valid Name , Mobile No , Email , Company name and Message !!")
    }
  };

  const handlesubmit = async () => {
    await sendEmail()
  }


  return (
    <>
      <Helmet>
        <title>Contact Us - Urja Engg Co.</title>
        <meta name="description" content="Get in touch with Urja Engineering Co. for inquiries, support, or partnerships. Reach out to us for high-quality electrical panel board solutions tailored to your needs." />
      </Helmet>
      <Icons />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <ToastContainer />
      {animate1 && <motion.div className="fixed top-0 z-30 h-[1vh] bg-gradient-to-r from-blue-500 via-green-500 to-purple-500"
        initial={{ width: 0 }}
        animate={{ width: '100vw', ease: 'easeInOut' }}
        transition={{ duration: 2, type: 'spring', stiffness: 100, damping: 10 }}
        onAnimationComplete={animate}
      ></motion.div>}
      <AnimatePresence>
        {animate3 && (
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

      <motion.div className="flex flex-col items-center gap-8 overflow-x-hidden">

        <motion.div id="carouselExampleControls" className="carousel slide w-full" data-interval="8000" data-ride="carousel"
          initial={animate2 ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 2.3 } }}
          exit={{ opacity: 1, scale: 1 }}
          onAnimationComplete={() => setanimate2(false)}
        >
          <div className="carousel-inner ">
            <div className="carousel-item bg-blr bg-[url('/contact-banner-2.webp')] bg-cover w-full active h-[550px] max-md:h-40">
              <div className="absolute inset-0 bg-gradient-to-b from-[#bababad6] via-[#111] to-[#000000] -z-10 opacity-70"></div>
              <div className="flex h-full px-32 justify-center items-center cursor-default max-md:px-14">
                <motion.div className="flex items-center flex-col gap-5 max-md:gap-2"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, ease: 'anticipate', type: 'spring', shiftness: 100, damping: 10 }}
                >
                  <div className="lato-bold text-neutral-300 text-5xl max-md:text-xl"><span className="text-blue-600">Contact </span>Us</div>
                  <div className="roboto-regular text-lg text-neutral-200 leading-8 w-[80%] max-md:text-[8px] max-md:leading-normal max-md:w-full">
                    Reach out to Urja Engineering Co. for inquiries, support, or collaboration. We’re here to assist with all your electrical panel board and service needs. Contact us today to explore tailored solutions for your requirements.</div>
                </motion.div>
              </div>
            </div>
          </div>
          
        </motion.div>

        <div className="w-full my-10 flex items-center max-md:flex-col max-md:justify-center">
          <motion.div className="left w-[49%] max-md:w-full"
            initial={animate6 ? { opacity: 0, x: -200 } : { opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 2.6 } }}
            exit={{ opacity: 1, x: -200 }}
            onAnimationComplete={() => setanimate6(false)}
          >
            <form action="submit" className="flex flex-col gap-6 items-center justify-center pl-10 max-md:pl-0">
              <h1 className="text-2xl text-slate-700 font-bold lato-bold text-center">How can we help you?</h1>
              <div className="flex items-center gap-5">
                <input value={form.name} onChange={handlechange} placeholder="Name" className="placeholder-slate-500 bg-gray-200 shadow-lg w-80 rounded-lg text-slate-700 px-2 py-1 text-base" type="text" name="name" id="name" />
              </div>

              <div className="flex gap-5">
                <input value={form.number} onChange={handlechange} placeholder="Mobile No." className="bg-gray-200 shadow-lg w-80 placeholder-slate-500 rounded-lg text-black px-2 py-1 text-base" type="tel" name="number" id="number" />
              </div>

              <div className="flex gap-5">
                <input value={form.email} onChange={handlechange} placeholder="Email" className="bg-gray-200 shadow-lg w-80 placeholder-slate-500 rounded-lg text-black px-2 py-1 text-base" type="email" name="email" id="email" />
              </div>

              <div className="flex gap-5">
                <input value={form.company} onChange={handlechange} placeholder="Company Name" required className="bg-gray-200 shadow-lg w-80 placeholder-slate-500 rounded-lg text-black px-2 py-1 text-base" type="text" name="company" id="company" />
              </div>

              <div className="flex gap-5">
                <textarea value={form.message} onChange={handlechange} placeholder="Message" className="h-36 bg-gray-200 shadow-lg w-80 placeholder-slate-500 rounded-lg text-black px-2 py-1 text-base" name="message" id="message" cols="30" rows="10"></textarea>
              </div>
              <button onClick={handlesubmit} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>

            </form>

          </motion.div>

          <motion.div className="w-[49%] h-full flex items-center text-white roboto-regular max-md:w-full"
            initial={animate6 ? { opacity: 0, x: 300 } : { opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 2.6 } }}
            exit={{ opacity: 1, x: 300 }}
            onAnimationComplete={() => setanimate6(false)}
          >
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
        </div>
      </motion.div>
    </>
  )
}

export default Contact
