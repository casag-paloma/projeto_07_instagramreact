import Posts from "./PastaEsquerda/Posts";
import Stories from "./PastaEsquerda/Stories";

export default function Esquerda(){
    return(
        <div class="esquerda">
          <Stories/>
          <Posts/>
        </div>
    );
};