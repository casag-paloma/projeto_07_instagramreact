import Esquerda from "./PastaCorpo/Esquerda";
import Sidebar from "./PastaCorpo/Sidebar";

export default function Corpo(){
    return(
      <div class="corpo">
        <Esquerda/>
        <Sidebar/>        
      </div>
    );

}