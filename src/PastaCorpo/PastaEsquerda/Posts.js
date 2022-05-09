import Post from "./Post"

export default function Posts(){
    const posts = [
        {imagemTopo:"assets/img/meowed.svg", nomeTopo:"meowed", imagemConteudo:"assets/img/gato-telefone.svg", imagemFundo:"assets/img/respondeai.svg", textoFundo:"respondeai", curtidasFundo:"101.523"},
        {imagemTopo:"assets/img/barked.svg", nomeTopo:"barked", imagemConteudo:"assets/img/dog.svg", imagemFundo:"assets/img/adorable_animals.svg", textoFundo:"adorable_animals", curtidasFundo:"99.159"}
    ];

    return(
        <div class="posts">
            {posts.map(objeto => <Post imagemTopo={objeto.imagemTopo} nomeTopo={objeto.nomeTopo} imagemConteudo={objeto.imagemConteudo} imagemFundo={objeto.imagemFundo} textoFundo={objeto.textoFundo} curtidasFundo={objeto.curtidasFundo}/> )}
        </div>
    );
};