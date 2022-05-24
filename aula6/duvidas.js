var uf=["SP","RJ","MG","ES"];
var txt="Hoje tem atividade!";
var class_teste=document.querySelectorAll(".teste");
document.querySelector("#nome").innerHTML=uf[1]+" - "+uf[3];
document.querySelector("h2").innerHTML+="- " +uf.length ;
// document.querySelector(".teste").innerHTML=txt;
// class_teste[4].innerHTML=txt;
// class_teste[0].innerHTML=txt;
// class_teste[3].innerHTML=txt;

for(var i=0;i<class_teste.length;i++){
     class_teste[i].innerHTML=txt+" "+i;
}
var imagem=["comp.jpg","floresta.jpg"];
document.querySelector(".img").innerHTML="<img src='img/comp.jpg'>";