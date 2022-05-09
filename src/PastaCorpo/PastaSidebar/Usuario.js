import UsuarioImagem from "./UsuarioImagem";
import UsuarioTexto from "./UsuarioTexto";

export default function Usuario(){
    return(
        <div class="usuario">
            <UsuarioImagem imagem="assets/img/catanacomics.svg" />
            <UsuarioTexto nome="catanacomics" texto="Catana" />
        </div>
    );
};
