import React from 'react';

export default function FundoAcoes(){
    const [icone, setIcone] = React.useState("heart-outline");
    const [cor, setCor] = React.useState("normal");
    
    function Likar(){
        setIcone("heart");
        setCor("vermelho");
    }

    function Deslikar(){
        setIcone("heart-outline");
        setCor("normal");
    }
    
    const icones = ["chatbubble-outline", "paper-plane-outline"];
    return(
        <div class="acoes">
            <div>
                <ion-icon name={icone} class={cor} onClick={(icone === "heart-outline") ? Likar : Deslikar}></ion-icon>
                {icones.map(icone => <ion-icon name={icone}></ion-icon> )}
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    );
};

