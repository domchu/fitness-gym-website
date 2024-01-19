import Navbar from "@/scenes/navbar"
import { useState } from "react"
import {SelectedPage} from "@/shared/types"




function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  return (
    <>
      <nav className="app bg-gray-20">
        <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />
        </nav>
    </>
  )
}

export default App
