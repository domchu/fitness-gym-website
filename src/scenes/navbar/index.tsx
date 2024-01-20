// import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png"
import Link from "./Link"
import {SelectedPage} from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import { useState } from "react";
import ActiveButton from "@/shared/ActiveButton";
ActiveButton

type Props = {
     selectedPage: SelectedPage,
    setSelectedPage: (values: SelectedPage) => void
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between "
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

    const isAboveMediumQueryScreens = useMediaQuery("(min-width:1060px")



  return (
      <nav>
          <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 `}>
              <div className={`${flexBetween} mx-auto w-5/6`}>
                  {/* LOGO */}
                  <div className={`${flexBetween} w-full gap-16`}>
                      <img src={Logo} alt="Logo-image" />
                      {/* RIGHT SIDE */}


{isAboveMediumQueryScreens ? (
                      
                      <div className={`${flexBetween} w-full`}>
                          {/* INNER LEFTSIDE */}
                          <div className={`${flexBetween} gap-8 text-sm`}>
                              <Link
                                  page="Home"
                                  selectedPage={selectedPage}
                                  setSelectedPage={setSelectedPage}
                              />
                              <Link
                                  page="Benefits"
                                  selectedPage={selectedPage}
                                  setSelectedPage={setSelectedPage}
                              />
                              <Link
                                  page="Contact Us"
                                  selectedPage={selectedPage}
                                  setSelectedPage={setSelectedPage}
                              />
                              <Link
                                  page="Our Classes"
                                  selectedPage={selectedPage}
                                  setSelectedPage={setSelectedPage}
                              />
                          </div>
                          {/* INNER RIGHTSIDE */}
                          <div className={`${flexBetween} gap-8 text-sm`}>
                              <p>Sign In</p>
                              <ActiveButton setSelectedPage={setSelectedPage}>Become a Member</ActiveButton>
                              </div>
                             
                          </div>
                          ): (
                              <button className="rounded-full bg-secondary-500 py-2" onClick={() =>setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className="h-6 w-10 text-white"/>  
                            </button>
                            )}
                          
                  </div>
                  
          </div>
          </div> 

    </nav>
  )
}

export default Navbar