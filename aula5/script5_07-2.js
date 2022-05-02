var num;
num=parseInt(prompt("Digite um numero: "));

switch (num) {
    case 1:
        document.write("Financeiro");
    break;
    case 2:
        document.write("Reclamações");
    break;
    case 3:
        document.write("Cancelar");
    break;
    default:
        document.write("Não entendi a sua opção");
}