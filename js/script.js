/*
  Consegna:

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.*/

//1)L'utente cliccando su un bottone genererà una griglia di gioco quadrata

const rigaElemento = document.querySelector(".row");

const button = document.querySelector("#button-grid");


//aggiunta evento click

button.addEventListener("click" , function(){

    const difficulty = parseInt(document.querySelector('#difficulty').value);

    console.log('Hai selezionato difficoltà: ', difficulty);

    rigaElemento.innerHTML = "" ;

    //inseriamo 16 numeri random 
    const numeroBombe = 16 ;

    const indexBombe = [];

    while(indexBombe.length < numeroBombe){

        let numeroRandom = generaNumeriRandoms(1 , difficulty);

        if(!indexBombe.includes(numeroRandom)){
            
        console.log(numeroRandom , "Numero Random" , typeof numeroRandom);
        indexBombe.push(numeroRandom);
        }

    }
    
    console.log(indexBombe , "Numero Bombe" ,  typeof indexBombe);

    console.log(indexBombe.lenght < 16);
    

    // diamo un classe differente in base alla difficoltà

    let classeValoreBox = "";
        if(difficulty == "49"){
           classeValoreBox = "box-difficile";
        }
        else if(difficulty == "81"){
            classeValoreBox = "box-medio";
        }
        else{
           classeValoreBox = "box-facile";
        }
        console.log(classeValoreBox);

    for(let i = 1; i<=difficulty; i++){
        // creare la cella
        const rigaCliccabile = document.createElement("div");
        rigaCliccabile.classList.add("clickable" , classeValoreBox );

        const divCella = document.createElement("div");
        divCella.classList.add("cell");

        divCella.innerHTML = i ;

        divCella.addEventListener("click" , function (){
           
            this.classList.add("activated");
            
            console.log(this.innerHTML);

        
        const cellsElement = document.querySelectorAll(".cell")

        for(let i = 0 ; i < cellsElement.lenght ; i++ ){
            const currentElement = cellsElement[i].innerHTML ;

            if(indexBombe.includes(currentElement)){
                currentElement[i].style.backgroundColor = "red";
            }
        }

        })

        rigaCliccabile.append(divCella);
        
        rigaElemento.append(rigaCliccabile);   

    }
    
});



// FUNCTIONS

function generaNumeriRandoms(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

