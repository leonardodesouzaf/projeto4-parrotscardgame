let cardsnumber;

function verifycardsnumber(){
    cardsnumber = prompt('Qual a quantidade de cartas que deseja jogar?');

    if(cardsnumber>3 && cardsnumber<15){
        if(cardsnumber%2 === 0){
            cardsdistribution(cardsnumber);
        }
        else{
            alert('Número ímpar não é válido para esse jogo!');
            verifycardsnumber();
        }
    }
    else{
        alert('Somente números entre 4 e 14 são permitidos!');
        verifycardsnumber();
    }
}

verifycardsnumber();

function cardsdistribution(x){
    for(let i=0; i<x; i++){
        let card = ` 
        <div class="card">
        <img src="/imagens/front.png" alt="">
        </div>
        `;
        document.querySelector(".cards").innerHTML += card;
    }
}

