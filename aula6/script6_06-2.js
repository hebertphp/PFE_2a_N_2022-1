var i;
// document.querySelector(".teste").innerHTML="&#9193";
for(i=9193;i<9211;i++){
    document.querySelector("#dv1").innerHTML+="&#"+i+" ";
}
/*
Desafio1:
Criar um looping de:9193 até:9210
A saída mostrasse os emojis dos valores da faixa acima
link: https://www.w3schools.com/charsets/ref_emoji.asp


Desafio2:
De: 9800 até:9811
Mostrar o Emoji e o signo("string")
Criar um array com os signos
*/
// document.querySelector(".teste").innerHTML="&#9800 - "+signo[0];
var signo=["Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem", "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquario","Peixes"];
for(var j=0;j<signo.length;j++){
    document.querySelector(".teste").innerHTML+="&#"+(9800+j)+" - "+signo[j]+"<br>";
}