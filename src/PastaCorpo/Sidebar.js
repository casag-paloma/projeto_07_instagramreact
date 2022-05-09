import Sugestoes from "./PastaSidebar/Sugestoes"
import Copyright from "./PastaSidebar/Copyright"
import Links from "./PastaSidebar/Links"
import Usuario from "./PastaSidebar/Usuario"

export default function Sidebar(){
    return(
        <div class="sidebar">
          <Usuario/>
          <Sugestoes/>
          <Links/>
          <Copyright/>
        </div>
    )
}