import SugestaoUsuario from "./SugestaoUsuario";
import Seguir from "./Seguir";

export default function Sugestao(props){
    return(
      <div class="sugestao">
        <SugestaoUsuario imagem={props.imagem} nome={props.nome} razao={props.razao}/>
        <Seguir/>
      </div>
    
    );
};



