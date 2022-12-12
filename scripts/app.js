/*
Hello Chef, quale cucina vorresti proporci?
    Italian Messicana Americana
 
 - Quale piatto vuoi farci?
    primo secondo dolce
1) hai perso
2) 
*/

let cuisine = prompt("Hello Chef, quale cucina vorresti proporci? Italiana, Messicana o Americana")

if (cuisine === "Italiana" || cuisine === "Messicana" || cuisine === "Americana") {
   let entree = prompt ("Quale piatto vuoi farci? Primo, secondo o dolce?")
 if (entree === "primo") {
    let minuti = prompt ("Di quanti minuti hai bisogno?")
    minuti = parseInt(minuti)
    if (minuti <= 5){
        alert("Hai distrutto un dente ad un cliente, la pasta era troppo dura. Il tuo ristorante è chiuso")
    } else if (minuti >= 20){
        alert("Trova un'altra professione. Ristorante chiuso")
    } else alert ("Bravo questo cliente tornerà")
} else if (entree === "secondo") { // chiedere ad Erik come fare un while
    let proteine = prompt ("Scegli quale carne: pollo, manzo o sorprendimi")
    while(proteine !== "pollo" && proteine !== "manzo" && proteine !== "sorprendimi") {
// if any are true, all true, one will always be true so it won't break out of loop
// all have to be true in order to run - 

        alert ("Non hai seguito le regole. GAME OVER.") 
        proteine = prompt ("Scegli quale carne: pollo, manzo o sorprendimi")
    }
    if (proteine === "pollo") {
        alert ("Non sei molto avventuroso col cibo") 
    } else {} if (proteine === "manzo" ) {
        alert ("Troppo manzo fa male alla salute")
    } else if (proteine === "sorprendimi"){
        alert ("Complimenti hai appena mangiato uno scoiattolo")
    }  
    
}}
