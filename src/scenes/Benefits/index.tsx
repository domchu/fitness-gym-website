import Htext from "@/shared/Htext";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActiveButton from "@/shared/ActiveButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"


const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatibus expedita fuga vel sint accusamus officia, eaque nulla enim esse."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatibus expedita fuga vel sint accusamus officia, eaque nulla enim esse."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Experts and Pro Trainers",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatibus expedita fuga vel sint accusamus officia, eaque nulla enim esse."
  },
]

// FRAMER MOTION
const container = {
  hidden: {},
  visible: {
    transition:{staggerChildren: 0.2}

  }
}

type Props = {
  setSelectedPage :(value:SelectedPage )=> void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <>
      <section id="benefits" className="mx-auto min-h-full w-5/6">
        <motion.div  onViewportEnter={() =>setSelectedPage(SelectedPage.Home)}>
          
       

        {/* HEADER COMMENT */}
        <motion.div
          className="my-7 md:my-10 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{delay:0.2, duration: 1 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible:{opacity: 1, x:0}
          }}
        >
          <Htext>MORE THAN JUST A GYM</Htext>
          <p className="my-5 text-sm">We provide world class fitness equipment, Trainers and Classes to get you to your ultimate fitness goals with ease. We provide true care  into each and every member</p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) =>( 
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
          </motion.div>
          {/* GRAPHIC & DESCRIPTION */}
          <div className="mt-20 mb-10 items-center justify-between gap-20 md:mt-20 md:flex">
            {/* IMAGE */}
            <img src={BenefitsPageGraphic} alt="Benefits Image Graphic" className="mx-auto " />

            {/* DESCRIPTION */}
            <div>
{/* TITLE */}
              <div className="relative">
                <div className="mt-20 before:absolute before:-top-20 left:-20 before:-z[-1] before:content-abstractwaves">
                  <motion.div
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, amount: 0.5 }}
                   transition={{ duration: 1 }}
                   variants={{
                       hidden: { opacity: 0, x: 50 },
                       visible:{opacity: 1, x:0}
                   }}
                  >
                    <Htext>MILLION OF HAPPY MEMEBERS GETTING {" "} <span className="text-primary-500">FIT</span></Htext>
                  </motion.div>

                </div>
</div>
              {/* DESCRIPTION*/}
              <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{delay:0.2, duration: 1 }}
               variants={{
                   hidden: { opacity: 0, x: 50 },
                   visible:{opacity: 1, x:0}
               }}
              >
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatibus expedita fuga vel sint accusamus officia, eaque nulla enim esse.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatibus expedita fuga vel sint accusamus officia, eaque nulla enim esse.</p>
                <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatibus expedita fuga vel sint accusamus officia, eaque nulla enim esse.</p>
              </motion.div>
{/* BUTTON */}
              <div className="relative">
                <div className="before:absolute before:-bottom-20 before:right-40 before:-z-[-1] before:content-sparkles"></div>
                <ActiveButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActiveButton>
</div>
            </div>
          </div>
        </motion.div>
    </section>
    </>
  )
}

export default Benefits