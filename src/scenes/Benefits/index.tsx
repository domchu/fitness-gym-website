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
        <div className="my-7 md:my-10 md:w-3/5">
          <Htext>MORE THAN JUST A GYM</Htext>
          <p className="my-5 text-sm">We provide world class fitness equipment, Trainers and Classes to get you to your ultimate fitness goals with ease. We provide true care  into each and every member</p>
        </div>

        {/* BENEFITS */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {benefits.map((benefit: BenefitType) =>( 
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
        
    </section>
    </>
  )
}

export default Benefits