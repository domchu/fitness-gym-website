import { SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";


type Props = {
  setSelectedPage :(value:SelectedPage )=>void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <>
      <section id="benefits" className="mx-auto h-full w-5/6">
        <motion.div  onViewportEnter={() =>setSelectedPage(SelectedPage.Home)}>
          
        </motion.div>

        
    </section>
    </>
  )
}

export default Benefits