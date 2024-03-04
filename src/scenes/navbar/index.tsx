import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import LogoImage from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActiveButton from "@/shared/ActiveButton";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (values: SelectedPage) => void;
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between ";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumQueryScreens = useMediaQuery("(min-width:1060px");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";



  return (
      <nav>
          <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 `}>
              <div className={`${flexBetween} mx-auto w-5/6`}>
                  {/* LOGO */}
                  <div className={`${flexBetween} w-full gap-16`}>
                      <img src={LogoImage} alt="Logo  Image" />
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

          
          {/* MOBILE MENU MODAL */}
          {!isAboveMediumQueryScreens && isMenuToggled && (
              <div className="fixed right-0 bottom-0 h-full w-[250px] z-40 bg-purple-100 drop-shadow-xl">
                  {/* CLOSE ICON */}
                  <div className="flex justify-end px-12 py-8">
                      <button onClick={() =>setIsMenuToggled(!isMenuToggled)}>
                          <XMarkIcon className="h-6 w-10 text-gray-400" />
                      </button>
                  </div>
                  {/* MENU ITEMS */}
                          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
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
                  
              </div>
          )}
    </nav>
  )
}

export default Navbar