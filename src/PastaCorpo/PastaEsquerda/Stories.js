import Story from "./Story";
import StoriesSetinha from "./StoriesSetinha";

export default function Stories(){
    const stories = [
        {imagem:"assets/img/9gag.svg", usuario:"9gag"},
        {imagem:"assets/img/meowed.svg", usuario:"meowed"},
        {imagem:"assets/img/barked.svg", usuario:"barked"},
        {imagem:"assets/img/nathanwpylestrangeplanet.svg", usuario:"nathanwpylestrangeplanet"},
        {imagem:"assets/img/wawawicomics.svg", usuario:"wawawicomics"},
        {imagem:"assets/img/respondeai.svg", usuario:"respondeai"},
        {imagem:"assets/img/filomoderna.svg", usuario:"filomoderna"},
        {imagem:"assets/img/memeriagourmet.svg", usuario:"memeriagourmet"},
        {imagem:"assets/img/9gag.svg", usuario:"9gag"},];

    return(
        <div class="stories">

            {stories.map(objeto => <Story imagem={objeto.imagem} usuario={objeto.usuario}/>)}

            <StoriesSetinha/>
          </div>
    )
}