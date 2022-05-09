import FundoAcoes from "./FundoAcoes";
import FundoCurtidas from "./FundoCurtidas";

export default function PostFundo(props){
    return(
        <div class="fundo">
            <FundoAcoes/>
            <FundoCurtidas imagem={props.imagem} texto={props.texto} curtidas={props.curtidas} />
        </div>
    );
};