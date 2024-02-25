import Navbar from "@/scenes/navbar"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types"
import HomePage from "@/scenes/HomePage";
import Benefits from "@/scenes/Benefits";
import OurClasses from "@/scenes/OurClasses";
import ContactUsPage from "@/scenes/ContactUsPage"



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.screenY !== 0) {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () =>window.removeEventListener("scroll", handleScroll);
  }, [])


  return (
    <>
      <div className="app bg-gray-20">
        <Navbar
          isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />
        <HomePage
          setSelectedPage={setSelectedPage}
          />
        
        <Benefits
          setSelectedPage={setSelectedPage}
          />
        <OurClasses
          setSelectedPage={setSelectedPage} />
        <ContactUsPage setSelectedPage={setSelectedPage} />
        </div>
    </>
  )
}

export default App

