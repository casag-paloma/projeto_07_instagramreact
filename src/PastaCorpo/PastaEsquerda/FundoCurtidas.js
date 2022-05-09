export default function FundoCurtidas(props){
    return(
        <div class="curtidas">
            <img src={props.imagem} />
            <div class="texto">
                Curtido por <strong>{props.texto}</strong> e <strong> outras {props.curtidas} pessoas</strong>
            </div>
        </div>
    );
};