// oppgave 1a

let sauer=100;

function tellensau(){

    sauer=sauer-1;
    console.log("du har " + sauer + " sauer igjen å telle før du sovner");
}
// oppgave 1b +  1d

function TellNoenSauer(antall){

    sauer = sauer - antall;
    if(sauer<=0){
        console.log("zzz zzz zzz")
    } else{
        console.log("du har " + sauer + " sauer igjen å telle før du sovner");
    }

}
// oppgave 1c

function MistetTellingen(){
    sauer = 100;
}

TellNoenSauer(1);
TellNoenSauer(80);
TellNoenSauer(19);


// oppgave e

function klippSauer(antallSauer){

    if(antallSauer > 0 && 10>=antallSauer)
}

