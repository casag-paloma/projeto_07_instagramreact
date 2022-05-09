export default function UsuarioTexto(props){
    return(
        <div class="texto">
            <strong>{props.nome}</strong>
            {props.texto}
        </div>
    );
};