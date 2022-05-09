import PostConteudo from "./PostConteudo";
import PostFundo from "./PostFundo";
import PostTopo from "./PostTopo";

export default function Post(props){
    return(
        <div class="post">
            <PostTopo imagem ={props.imagemTopo} nome={props.nomeTopo}/>
            <PostConteudo imagem={props.imagemConteudo}/>
            <PostFundo imagem={props.imagemFundo} texto={props.textoFundo} curtidas={props.curtidasFundo}/>
        </div>
    );
};