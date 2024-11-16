/*Detyra 1:
Shoket e klases te kane kerkuar qe te kopjosh disa dokumente per ta.
Ti e di qe jane 'n' shoke klase dhe dokumenti ka 'm' faqe.
Detyra jote eshte te llogarisesh sa faqe te duhen. Nese n < 0 ose m < 0, kthe 0.
Shembull: Shembull:

n = 5, m = 5 --> 25
n = -5, m = 5 --> 0
*/

function llogaritKopjet(n , m){
    if(n < 0 || m < 0 ){
        return 0;
    }
        return n * m;
    
}

console.log(llogaritKopjet(5, 5));
console.log(llogaritKopjet(-5, 5));
console.log(llogaritKopjet(3, 9));

/*Krijoni nje funksion qe pranon si parameter nje string, i cili nese eshte numer na kthen true, ose te kthej false nese nuk eshte.
Shembull:
"20" - true
"3.14" - true
"asd" - false
"twenty" - false
*/

function numri(string){
    return !isNaN(string) && string.trim() !== "";
}

console.log(numri("20"));   
console.log(numri("2"));   
console.log(numri("ten"));   
console.log(numri("test"));   

/*
Krijo nje funksion qe merr 2 numra ne forme te stringut dhe kthen shumen po ashtu si nje string:
Shembull: 
"4", "5" --> "9" 
"34", "5" --> "39" 
"", "" --> "0" 
"2", "" --> "2" 
"-5", "3" --> "-2"
Shenim:
Nese njeri nga argumentet eshte string bosh, konsideroje ate si zero.
*/

function shumaString(string1, string2){

    const numri1 = string1 === "" ? 0 : parseFloat(string1);
    const numri2 = string2 === "" ? 0 : parseFloat(string2);

    return (numri1 + numri2).toString();
}

console.log(shumaString("1", "3"));
console.log(shumaString("", "2"));
console.log(shumaString("2", ""));
console.log(shumaString("22", "4"));
