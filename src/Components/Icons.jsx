import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"
const Icons = () => {
  const [animate12, setanimate12] = useState(true)
  const [scroll, setScroll] = useState(false)
  const animateicon = () => {
    setanimate12(!animate12)
  }

  const handlescroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <motion.div className="fixed flex gap-3 items-center z-10 top-[88vh] left-8 max-md:left-1">
        <motion.button
          className="focus:outline-none"
          onClick={animateicon}
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.2 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 1, delay: 3, ease: "anticipate", type: "spring" } }}
        >
          <lord-icon
            src="https://cdn.lordicon.com/hrjifpbq.json"
            trigger="hover"
            colors="primary:#1c1c1c"
            style={{ width: '70px', height: '70px' }}
          >
          </lord-icon>
        </motion.button>
        <AnimatePresence>
          {animate12 === false &&
            <a href="tel:+91 98791 95121">
              <motion.button
                className="focus:outline-none"
                key={2}
                whileHover={{ scale: 1.2 }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: { duration: 1, ease: "anticipate", type: "spring" } }}
                exit={{ x: -70, opacity: 0 }}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/srsgifqc.json"
                  trigger="hover"
                  colors="primary:#047a0a"
                  style={{ width: '50px', height: '50px' }}
                >
                </lord-icon>
              </motion.button>
            </a>}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {animate12 === false && <motion.div
          className="fixed z-10 top-[80vh] left-10 max-md:left-4 max-md:top-[82vh]"
          key={3}
          whileHover={{ scale: 1.2 }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1, ease: "anticipate", type: "spring" } }}
          exit={{ y: 70, opacity: 0 }}
        >
          <a href="mailto:info@urjaengg.com?subject=Hello&body=I%20am%20reaching%20out%20about...">
            <button className="focus:outline-none">
              <lord-icon
                src="https://cdn.lordicon.com/xtzvywzp.json"
                trigger="hover"
                colors="primary:#ccc506"
                style={{ width: '50px', height: '50px' }}
              >
              </lord-icon>
            </button>
          </a>
        </motion.div>}
      </AnimatePresence>
      <AnimatePresence>
        {scroll === true && <motion.button
          className="focus:outline-none fixed z-10 top-[88vh] left-[92vw] max-md:right-1 max-md:left-[80vw]"
          key={1}
          onClick={handlescroll}
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.2 }}
          whileInView={{ scale: 1, opacity: 1, transition: { duration: 1, ease: "anticipate", type: "spring" } }}
          exit={{ scale: 0, opacity: 0 }}
        >

          <lord-icon
            src="https://cdn.lordicon.com/ternnbni.json"
            trigger="hover"
            colors="primary:#0e0038"
            style={{ width: '65px', height: '65px' }}
          >
          </lord-icon>
        </motion.button>}
      </AnimatePresence>
      <AnimatePresence>
        {animate12 === false && <motion.div
          className="fixed z-10 top-[80vh] left-28 max-md:left-[85px] max-md:top-[82vh]"
          key={4}
          whileHover={{ scale: 1.2 }}
          initial={{ x: -100, y: 100, opacity: 0 }}
          exit={{ x: -70, y: 70, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1, transition: { duration: 1, ease: "anticipate", type: "spring" } }}>
          <a target="_blank" href="https://wa.me/919879195121?text=Hi%20there!%20I%27m%20reaching%20out%20from%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services.%20Looking%20forward%20to%20your%20response!">
            <button className="focus:outline-none">
              <lord-icon
                src="https://cdn.lordicon.com/ayhtotha.json"
                trigger="hover"
                colors="primary:#ad0303"
                style={{ width: '50px', height: '50px' }}
              >
              </lord-icon>
            </button>
          </a>
        </motion.div>}
      </AnimatePresence >
    </>
  )
}

export default Icons
