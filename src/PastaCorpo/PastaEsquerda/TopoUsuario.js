export default function TopoUsuario(props){
    return(
        <div class="usuario">
            <img src={props.imagem} />
            {props.nome}
        </div>
    );
};