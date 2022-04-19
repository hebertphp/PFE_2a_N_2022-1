var num, res;
//num=prompt("Digite um numero inteiro");
//num=parseInt(num);

num=parseInt(prompt("Digite um numero inteiro"));

res=num%2;

//document.write(num+"-x-"+res);

if(res==1){
    document.write(num+" - Ímpar");
}
else{
    document.write(num+" - par");
}


/*
Elaborar um código Javascript para dado um número inteiro, verificar se
o número é PAR ou ÍMPAR. A saída deverá mostrar o número e mostrar
PAR ou ÍMPAR, como mostrado a seguir:
275 - ÍMPAR
28 - PAR
*/