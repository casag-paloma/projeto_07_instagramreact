import Logo from "./PastaNavBar/Logo";
import LogoMobile from "./PastaNavBar/LogoMobile";
import InstagramMobile from "./PastaNavBar/InstagramMobile";
import Pesquisa from "./PastaNavBar/Pesquisa";
import Icones from "./PastaNavBar/Icones";
import IconesMobile from "./PastaNavBar/IconesMobile";

export default function NavBar(){
    return(
        <div class="navbar">
        <div class="container">
          <Logo/>
          <LogoMobile/>
          <InstagramMobile/>
          <Pesquisa/>
          <Icones/>
          <IconesMobile/>
        </div>
      </div>
    );
}