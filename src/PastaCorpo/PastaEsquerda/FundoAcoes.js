export default function FundoAcoes(){
    const icones = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];
    return(
        <div class="acoes">
            <div>
                {icones.map(icone => <ion-icon name={icone}></ion-icon> )}
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    );
};