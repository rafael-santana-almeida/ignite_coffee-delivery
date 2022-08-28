import { Info } from "./Info";
import { Menu } from "./Menu";
import { BackgroundContainer } from "./styles";

export function Home() {
  return (
    <>
      <BackgroundContainer>
        <Info />
      </BackgroundContainer>
      
      <Menu />
    </>
  )
}