/** 
 * 1. estraggo 100 numeri
 * 2. verifico se sono divisibili per 3, 5 o entrambi
 * 3. stampo il risultato
*/

const row = document.querySelector('.row');

console.log(row);


for(let i = 1; i <= 100; i++){

   const box = document.createElement('div');
   // creo il risultato di dafault
   let result = i;
   let classBox = '';  // la classe specifica per fizz, buzz, fizzbuzz

   // se è divisibile per 15 (3 e 5) (il modulo non da resto)
  if(i % 15 === 0) {  // if(!(i % 15))
      result = 'fizzbuzz';
      classBox = result;
   }else if(i % 3 === 0){ // se invece è divisibilie solo per 3
      result = 'fizz';
      classBox = result;
   }else if(i % 5 === 0){ // se invece è divisibilie solo per 5
      result = 'buzz';
      classBox = result;
   }


   // VERSIONE COMPATTA
   /*if(!(i % 3)) result = 'fizz';
   if(!(i % 5)) result = 'buzz';
   if(!(i % 15)) result = 'fizzbuzz';*/


   // stampo in pagina i box
   box.innerHTML = result;
   box.className = "box " + classBox;
   row.append(box);


   console.log(result);

}