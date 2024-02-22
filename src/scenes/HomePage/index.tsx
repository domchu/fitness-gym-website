import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActiveButton from "@/shared/ActiveButton";
import HomePageText from "@/assets/HomePageText.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import { motion } from "framer-motion";


type Props = {
    // SelectedPage: string;
    setSelectedPage:(value:SelectedPage)=> void
}

const HomePage = ({ setSelectedPage }: Props) => {
    
    const isAboveMediumQueryScreens = useMediaQuery("(min-width:1060px")
  return (
      <section id="home" className="gap-16 bg-gray-20 py-10 md:w-full pb-0">
          {/* IMAGE AND MAIN HEADER */}
          <div className="md:flex mx-auto w-5/6 items-center justify-center h-5/6">
              {/* MAIN HEADER */}
              <div className="z-10 mt-32 md:basis-3/5">
                  {/* HEADING */}
                  <motion.div className="md:-mt-20"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1 }}
                      variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible:{opacity: 1, x:0}
                      }}
                  >
                      <div className="relative">
                          <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                              <img src={HomePageText} alt="Home Page Text" />
                          </div>
                      </div>
                      <p className="mt-8 text-sm ">Unraviled Gym. Unparalled Traning Fitness Classes. World Class Studio to get that Body Shapes You Dream of ... Get Your Dream Body Now </p>
                  </motion.div>
                  {/* ACTION */}
                  <motion.div className="mt-8 flex items-center gap-8 "
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{delay:0.2, duration: 1 }}
                  variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible:{opacity: 1, x:0}
                  }}
                  >
                      <ActiveButton setSelectedPage={setSelectedPage}>Join Now</ActiveButton>
                      <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                          onClick={() => setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>Learn More</AnchorLink>
                          
                  </motion.div>
              </div>
              {/* IMAGE */}
              <div className="flex basic-3/5 judtify-center md:z-10 md:ml-40 mt-16 justify-items-end">
                  <img src={HomePageGraphic} alt=" Home Page Graphic" />
              </div>
          </div>
          
          {/* SPONSOR */}
          {isAboveMediumQueryScreens && (
              <div className="h-[150px] w-full bg-primary-100 py-10">
                  <div className="mx-auto w-3/6">
                      <div className="flex justify-between items-center gap-8">
                          <img src={SponsorRedBull} alt="Sponsor Red Bull" />
                          <img src={SponsorForbes} alt="Sponsor Forbes" />
                          <img src={SponsorFortune} alt="Sponsor Fortune" />
                      </div>
                  </div>
              </div>
          )}
    </section>
  )
}

export default HomePage