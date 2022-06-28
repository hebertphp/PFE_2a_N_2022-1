function soma(...num) {
    var resultado = 0;
    // resultado = num[0] + num[1]+num[2];
    // valor inicial 
    // condição
    // contador
    for(let i=0;i<num.length;i++){
        resultado+=num[i];
    }
    return resultado;
}
document.write(soma(20, 17,100,7,6,4,34,5,6,7,67,44,100,13,50));