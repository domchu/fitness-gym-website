import Htext from "@/shared/Htext";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";


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
          
        </motion.div>

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
        
    </section>
    </>
  )
}

export default Benefits