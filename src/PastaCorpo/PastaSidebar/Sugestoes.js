import Sugestao from "./Sugestao";
import SugestoesTitulo from "./SugestoesTitulo";

export default function Sugestoes(){
  const sugestoes = [
    {imagem:"assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes",razao:"Segue você"},
    {imagem:"assets/img/chibirdart.svg", nome:"chibirdart",razao:"Segue você"},
    {imagem:"assets/img/razoesparaacreditar.svg", nome:"razoesparaacreditar",razao:"Novo no Instagram"},
    {imagem:"assets/img/adorable_animals.svg", nome:"adorable_animals",razao:"Segue você"},
    {imagem:"assets/img/smallcutecats.svg", nome:"smallcutecats",razao:"Segue você"}];

    return(
        <div class="sugestoes">
            <SugestoesTitulo/>
            {sugestoes.map(objeto => <Sugestao imagem={objeto.imagem} nome={objeto.nome} razao={objeto.razao} />)}
          </div>
    );
};