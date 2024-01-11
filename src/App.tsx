import Navbar from "@/scenes/navbar"
import { useState } from "react"

function App() {
  const [selectedPage, setSelectedPage] = useState("home")

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
