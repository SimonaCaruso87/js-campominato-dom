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

const rowElement = document.querySelector(".row");

const button = document.querySelector("#button-grid");


//aggiunta evento click

button.addEventListener("click" , function(){

    const difficulty = parseInt(document.querySelector('#difficulty').value);

    console.log('Hai selezionato difficoltà: ', difficulty)

    rowElement.innerHTML = "" ;

    for(let i = 1; i<=difficulty; i++){
        // creare la cella
        const rowClickable = document.createElement("div");
        rowClickable.classList.add("clickable");

        const divCell = document.createElement("div");
        divCell.classList.add("cell");

        divCell.innerHTML = i ;

        divCell.addEventListener("click" , function (){
           
            this.classList.add("activated");
            
            console.log(this.innerHTML);
        })

        rowClickable.append(divCell);
        
        rowElement.append(rowClickable);   

    }

});


// creare due classi alternative 

const valoreMedia = 81 ;

const valoreDifficile = 49 ;

//ricreare le dimensioni del clickated da 10 a 9 e poi 7


//cambiare la variabile cycle 
//in base al numero che mi ritorna (value) un if else 


// FUNCTIONS

