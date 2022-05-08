import Logo from "./FolderNavBar/Logo";
import LogoMobile from "./FolderNavBar/LogoMobile";
import InstagramMobile from "./FolderNavBar/InstagramMobile";
import Pesquisa from "./FolderNavBar/Pesquisa";
import Icones from "./FolderNavBar/Icones";
import IconesMobile from "./FolderNavBar/IconesMobile";

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