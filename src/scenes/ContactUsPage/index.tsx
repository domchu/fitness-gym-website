import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import Htext from '@/shared/Htext';
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { useForm } from "react-hook-form";


type Inputs = {
    name: string;
    required: string;
    email: string | number;
    message: string | number;
  }

type Props = {
    setSelectedPage:(value: SelectedPage) => void
}

  const ContactUsPage = ({ setSelectedPage }: Props) => {

      const {
          register,
          trigger,
          formState: { errors },
      } = useForm<Inputs>();
    
      const handleSubmit = async (e: any) => {
          const inValid = await trigger()
          if (!inValid) {
              e.preventDefault()
            
     
          }
      }

        const inputStyles = `mt-5 w-full rounded-lg bg-primary-300 px-3 py-5 placeholder-white`;

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
              <div className='mt-10 gap-8 justify-between md:flex md:items-center'>
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
                          action='https://formsubmit.co/francisoffionor249@gmail.com'
                          onSubmit={handleSubmit}
                          target='_blank'
                          method='POST'>
                          
                          <input
                              type="text"
                              placeholder="NAME"
                              className={inputStyles}
                              {...register("name", {
                                  required: true,
                                  maxLength: 100
                              })}
                          /> 
                          {errors.name && ( <p className='mt-2 text-primary-500'>
                              {errors.name.type === "required" && "This field is required"}
                              {errors.name.type === "maxLength" && "Max length is 100 characters"}
                              </p>
                              )}
                          <input
                              type="email"
                              placeholder="EMAIL"
                              className={inputStyles}
                              {...register("email", {
                                  required: true,
                                  pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Z]{2,}$/i,
                              })}
                          /> 
                          {errors.email && ( <p className='mt-2 text-primary-500'>
                              {errors.email.type === "required" && "This field is required"}
                              {errors.email.type === "pattern" && "Invalid email address"}
                              </p>
                          )}
                          
                          {/* message */}
                          <textarea
                              rows={5}
                             cols={50}
                              placeholder="MESSAGE"
                              className={inputStyles}
                              {...register("message", {
                                  required: true,
                                  maxLength: 2000
                              })}
                          /> 
                          {errors.message && ( <p className='mt-2 text-white'>
                              {errors.message.type === "required" && "This field is required"}
                              {errors.message.type === "maxLength" && "Max length is 2000 characters"}
                              </p>
                              )}
                        
                          {/* SUBMIT */}
                          <button type="submit" className='mt-5 bg-secondary-500 px-20 py-3 rounded-lg transitio duration-500 hover:text-white'>
                              SUBMIT
                          </button>
                          
                      </form>

                  </motion.div>
                  <motion.div className='relative mt-16  md:0'
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{delay:0.2, duration: 1 }}
                  variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible:{opacity: 1, y:0}
                  }}
                  >
                      <div className='md:before:content-evolvetext w-full before:absolute before:z-[-1] before:-bottom-20 before:-right-10'>
                          
                  <img src={ContactUsPageGraphic} alt=" Contact Us Person" className='w-full' />
                      </div>
                </motion.div>
                  
              </div>
          </motion.div>
    </section>
  )
}
export default ContactUsPage;