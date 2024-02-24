import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import Htext from '@/shared/Htext';
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
// import { useForm } from "react-hook-form";


type Props = {
    setSelectedPage:(value: SelectedPage) => void
}

  const ContactUsPage = ({ setSelectedPage }: Props) => {

    // const {
    //     register,
    //     trigger,
    //     formState: { error }
    // } = useForm()
    
    //   const handleSubmit = async (e: any) => {
    //       const inValid = await trigger()
    //       if (!inValid) {
    //           e.preventDefault()
            
     
    //       }
    //   }

        const inputStyles = `w-full rounded-lg bg-primary-300 px-3 py-5 placeholder-white`;

  return (
      <section id='contactus' className='mx-auto w-5/6 pt-24'>
          <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
              <motion.div className='md:w-3/5'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{delay:0.2, duration: 1 }}
              variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible:{opacity: 1, x:0}
              }}
              >
                  <Htext><span className='text-primary-500'>JOIN NOW</span>{""} TO GET IN SHAPE</Htext>  
                  <p className='py-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis deleniti laboriosam eos sunt aut aliquid reiciendis tenetur necessitatibus delectus voluptatem dolores ullam maxime et maiores autem omnis quibusdam, eaque sed!</p>
              </motion.div>
              
              {/* FORM AND IMAGES */}
              <div className='mt-10 justify-between gap-8 md:flex'>
                  {/* FORM */}
                  <motion.div className='mt-10 basis-3/5 md:mt-0'
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{delay:0.2, duration: 1 }}
                  variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible:{opacity: 1, y:0}
                  }}
                  >
                      <form
                          action='https://formsubmit.co/your@gmail.com'
                        //   onSubmit={handleSubmit}
                          target='_blank'
                          method='POST'>
                          
                          <input
                              type="text"
                              placeholder="NAME"
                              className={inputStyles}
                        //   {...register}
                          /> 
                          <input
                              type="email"
                              placeholder="EMAIL"
                              className={inputStyles}
                        //   {...register}
                          /> 
                          <textarea placeholder="MESSAGE" cols="30" rows="10" className={inputStyles}></textarea>
                          
                      </form>

                      <img src={ContactUsPageGraphic} alt=" Contact Us Person" />
                  </motion.div>
                  
              </div>
          </motion.div>
    </section>
  )
}
export default ContactUsPage;