import AnchorLink from "react-anchor-link-smooth-scroll"
import {SelectedPage} from "@/shared/types"

type Props = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (values: SelectedPage) => void
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
    
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
  return (
      <AnchorLink className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`} 
          onClick={() => setSelectedPage(lowerCasePage)}
          href={`#${lowerCasePage}`}>
         {page} 
    </AnchorLink>
  )
}

export default Link