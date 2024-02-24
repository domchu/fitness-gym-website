import { SelectedPage } from "@/shared/types";
import Image1 from "@/assets/image1.png"
import Image2 from "@/assets/image2.png"
import Image3 from "@/assets/image3.png"
import Image4 from "@/assets/image4.png"
import Image5 from "@/assets/image5.png"
import Image6 from "@/assets/image6.png"
import { motion } from 'framer-motion';
import Htext from "@/shared/Htext";

type Props = {
    setSelectedPage: (value: SelectedPage) =>void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
      <>
          <section id="OurClasses" className="w-full bg-primary-100 py-5">
              <motion.div
              onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
              >
                  <motion.div className="mx-auto w-5/6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{delay:0.2, duration: 1 }}
                  variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible:{opacity: 1, x:0}
                  }}
                  >
                      <div className="md:w-3/5">
                          <Htext>OUR CLASSES</Htext>
                          <p className="py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero rem quibusdam earum accusantium, vel ullam officiis delectus obcaecati aut doloribus quasi voluptatibus, enim dicta corrupti inventore ut libero pariatur quis.</p>
                      </div> 
                  </motion.div>
              </motion.div>
              
          </section>
          
      
      </>
  )
}

export default OurClasses