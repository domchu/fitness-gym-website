// import { useState } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png"

import Link from "./Link"

type Props = {
     selectedPage: string,
    setSelectedPage: (values: string) => void
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
const flexBetween ="flex items-center justify-between "

  return (
      <nav>
          <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 `}>
              <div className={`${flexBetween} mx-auto w-5/6`}>
                  {/* LOGO */}
                  <div className={`${flexBetween} w-full gap-16`}>
                      <img src={Logo} alt="Logo-image" />
                      {/* RIGHT SIDE */}
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
                              <button>Become a Member</button>
                          </div>
                      </div>
                  </div>
                  
          </div>
          </div> 

    </nav>
  )
}

export default Navbar