const id_dv=document.querySelector("#dv");
const class_teste=document.querySelector(".teste");
const id_nome=document.querySelector("#nome");
const tag_h2=document.querySelector("h2");

// tag_h2="Eita!!!!";
tag_h2.innerHTML="Mudou!";

var notas=[10,9,8];
var outras_notas=[4,3,2,1];
// document.write(notas+"<hr>");// direcionar para id="dv"
id_dv.innerHTML=notas;
var novas_notas=notas.concat(7,6,5);
// document.write(novas_notas+"<hr>");// direcionar para class="teste"
class_teste.innerHTML=novas_notas;
class_teste.style.color="red";
var junta_tudo=novas_notas.concat(outras_notas);
// document.write(junta_tudo+"<hr>");// direcionar para id="nome"
id_nome.value=junta_tudo;
var conteudo=id_nome.value;
// document.querySelector("#cep").value="Algo!";