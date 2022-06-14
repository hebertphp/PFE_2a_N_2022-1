function mostra(){
   const id_n1=document.querySelector("#n1");
   const id_n2=document.querySelector("#n2");
   const id_op=document.querySelector("#op");
   const id_saida=document.querySelector("#saida");
   var n1=parseFloat(id_n1.value);
   var n2=parseFloat(id_n2.value);
   id_saida.innerHTML=id_n1.value+"<br>"+id_op.value+"<br>"+id_n2.value+"<br>-------<br>";
   id_saida.innerHTML+=calc(n1,n2,id_op.value);
}
function calc(n1,n2,op){
    if(op=="+"){
        return n1+n2;
    }
    else if(op=="-"){
        return n1-n2;
    }    
    else if(op=="*"){
        return n1*n2;
    } 
    else if(op=="/"){
        return n1/n2;
    } 
    else if(op=="%"){
        return n1%n2;
    } 
    else{
        return "Operador desconhecido!";
    }
}