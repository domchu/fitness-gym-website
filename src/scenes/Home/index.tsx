import { SelectedPage } from "@/shared/types";
import ActiveButton from "@/shared/ActiveButton";
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png.png"
import SponsorFortune from "@/assets/SponsorFortune.png.png"

type Props = {
    setSelectedPage:(value:SelectedPage)=> void
}

const Home = ({setSelectedPage }: Props) => {
  return (
    <div>Home</div>
  )
}

export default Home