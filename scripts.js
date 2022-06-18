let cardsnumber;
let cards=[];
const gifs = [`backcard0.gif`,`backcard0.gif`,`backcard1.gif`,`backcard1.gif`,`backcard2.gif`,`backcard2.gif`,`backcard3.gif`,`backcard3.gif`,`backcard4.gif`,`backcard4.gif`,`backcard5.gif`,`backcard5.gif`,`backcard6.gif`,`backcard6.gif`];
let matchingcard=[];
let counter=0;


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

function cardsdistribution(cardsnumber){
    console.log(gifs);
    for(let i=0; i<cardsnumber; i++){
        console.log(gifs[i]);
        let card = ` 
        <div class="card" onclick="flipcard(this)">
            <div class="front-card">
                <img src="./imagens/front.png" alt="">
            </div>
            <div class="back-card">
                <img src="./imagens/${gifs[i]}" >
            </div>
        </div>
        `;
        cards.push(card);
    }
    document.querySelector(".cards").innerHTML=cards.sort(comparador).join('');
}


function comparador() { 
	return Math.random() - 0.5; 
}

function flipcard(elemento){
    counter++;
    let flippedcard=elemento.querySelector(".front-card").classList.contains("flip-front");
    if (flippedcard===false){
        elemento.querySelector(".front-card").classList.add("flip-front");
        elemento.querySelector(".back-card").classList.add("flip-back");
        matchingcard.push(elemento);
    }

    if(matchingcard.length===2){
        const firstback = matchingcard[0].querySelector(".back-card");
        const firstfront = matchingcard[0].querySelector(".front-card");
        const secondback = matchingcard[1].querySelector(".back-card");
        const secondfront = matchingcard[1].querySelector(".front-card");
        
        console.log(matchingcard[0]);
        console.log(matchingcard[1]);

        if(matchingcard[0].innerHTML == matchingcard[1].innerHTML){
            firstback.classList.add("match-back");
            firstfront.classList.add("match-front");
            firstback.classList.remove("back-card");
            firstfront.classList.remove("front-card");

            secondback.classList.add("match-back");
            secondfront.classList.add("match-front");
            secondback.classList.remove("back-card");
            secondfront.classList.remove("front-card");

            let checkfinal = document.querySelectorAll(".match-front");

            console.log(checkfinal.length)
            console.log(cardsnumber)

            if(checkfinal.length===Number(cardsnumber)){
                function finalalert(){
                    console.log("entrei no if")
                    alert(`Você ganhou em ${counter} jogadas!`);
                }
                setTimeout(finalalert,1000);
            }
            

        }else{
            function errorflip(){
                firstfront.classList.remove("flip-front");
                firstback.classList.remove("flip-back");
                secondfront.classList.remove("flip-front");
                secondback.classList.remove("flip-back");
            }   
            setTimeout(errorflip,1000);
        }
        matchingcard = [];
    }
}
