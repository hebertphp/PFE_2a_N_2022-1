//       0  1   2
var x=[2020,2,"Hoje"];

x[0]++;//2021
x[1]=x[0]%2;//1
x[2]+=" em dia";//"Hoje em dia"
document.querySelector("#dv1").innerHTML=x[0]+"<br>"+x[1];
document.querySelector(".teste").innerHTML=x[2];
/*
mostrar os valores da posição [0] e [1], dentro da div id="dv1"
mostrar o valor da pos [2] dentro da div class="teste"
*/