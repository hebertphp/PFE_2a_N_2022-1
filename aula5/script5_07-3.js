var num;
num=parseInt(prompt("Digite um numero: "));

if(num==1){
    document.write("Financeiro");
}
else if(num==2){
    document.write("Reclamações");
}
else if(num==3){
    document.write("Cancelar");
}
else{
    document.write("Não entendi a sua opção");
}
