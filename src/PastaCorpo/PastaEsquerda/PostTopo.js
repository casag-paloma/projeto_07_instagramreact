import TopoAcoes from "./TopoAcoes";
import TopoUsuario from "./TopoUsuario";

export default function PostTopo(props){
    return(
        <div class="topo">
            <TopoUsuario imagem={props.imagem} nome={props.nome}/>
            <TopoAcoes/>
        </div>
    );
};