//       0  1  2  3  4 (posições)
var num=[10,20,30,40,50];
//num.length //quantidade de valores do array num 
//ultima pos 4 //num.length -1
document.querySelector("h2").innerHTML+=", será que foi";
document.querySelector("#dv1").innerHTML="var num possui "+num.length+" valores<hr>";
document.querySelector("#dv1").innerHTML+="Todos os valores da var num: "+num+"<hr></hr>";
document.querySelector(".teste").innerHTML="Valor da primeira posição de num: "+num[0]+"<hr>";
document.querySelector(".teste").innerHTML+="Valor da última posição de num: "+num[num.length-1]+"<hr>";
/*
Colocar a saída dos dois primeiros document.write (linhas 11 e 12), direcionar para 
id="dv1" e document.write das linnhas 13 e 14 direcionar para class="teste"

document.write("var num possui "+tam+" valores<hr>");
document.write("Todos os valores da var num: "+num+"<hr>");
document.write("Valor da primeira posição de num: "+num[0]+"<hr>");
document.write("Valor da última posição de num: "+num[tam-1]+"<hr>");

*/