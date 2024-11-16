// 1.Krijoni nje funksion qe e pranon nje vlere, e shumezon ate me 50, e rrit per 6 pastaj e kthen.
// Nese vlera e dhene eshte string duhet te kthehet "Error".
//       problem(1) -> 56
//       problem("26") -> "Error"

function problem(vlera){

    if (typeof vlera === 'string'){
        return "error";
    }
    return vlera * 50 + 6
}

console.log(problem(1));
console.log(problem("string"));

//2. Krijoni nje funksion qe llogarit mesataren e numrave ne nje array me numra, p.sh:
//calcAverage([2, 4, 5, 6, 3, 4]) ->  4

function mesatarja(numrat){

        let sum = 0;

        for (let i = 0; i < numrat.length; i++){

            sum += numrat[i];
        }
        return sum / numrat.length;
}

console.log(mesatarja([2, 4, 5, 6, 3, 4]));
console.log(mesatarja([5, 10, 50]));
console.log(mesatarja([1, 2, 3, 4, 5, 6]));
console.log(mesatarja([100, 120, 150]));




// //3. Krijoni funksionin qe kthen fjalet mbrapsht, p.sh.:
// textReverser("Javascript") -> tpircsavaJ
// textReverser("Node") -> edoN

function textReverser(teksti){

    let reversedText = "";

    for (let i = teksti.length - 1; i >= 0; i--){

        reversedText += teksti[i];
    }
    return reversedText;

}

console.log(textReverser("Dardan"));
console.log(textReverser("JavaScript"));
console.log(textReverser("NodeJS"));

// Shfaq tabelen e shumezimit deri ne 10X10 ne console, si me poshte:
//        1 * 1 = 1
//        1 * 2 = 2
//        1 * 3 = 3
//        1 * 4 = 4
//        1 * 5 = 5
//        1 * 6 = 6
//        1 * 7 = 7
//        1 * 8 = 8
//        1 * 9 = 9
//        1 * 10 = 10

function tabelaEShumezimit(){

    for (let i = 1; i <= 10; i++){

        for(let j= 1; j<= 10; j++){
        
        console.log(`${i}  * ${j} = ${i * j}`);
        }
    }
}

tabelaEShumezimit();