import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActiveButton from "@/shared/ActiveButton";
import HomePageText from "@/assets/HomePageText.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"

type Props = {
    SelectedPage: string;
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
                  <div>
                      <div>
                          <div>
                              <img src={HomePageText} alt="Home Page Text" />
                          </div>
                      </div>
                      <p>Unraviled Gym. Unparalled Traning Fitness Classes. World Class Studio to get that Body Shapes You Dream of ... Get Your Dream Body Now </p>
                  </div>
                  {/* ACTION */}
                  <div>
                      <ActiveButton setSelectedPage={setSelectedPage}>Join Now</ActiveButton>
                      <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                          onClick={() => setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>Learn More</AnchorLink>
                          
                  </div>
              </div>
              {/* IMAGE */}
              <div>
                  <img src={HomePageGraphic} alt=" Home Page Graphic" />
              </div>
          </div>
          
          {/* SPONSOR */}
          {isAboveMediumQueryScreens && (
              <div>
                  <div>
                      <div>
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