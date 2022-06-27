const saida = document.querySelector("#saida");

var estudante = {
    nome: "Epaminondas",
    ra: 123456789,
    curso: "TADS",
    modulo: "01",
    dados: function () {
        return this.nome + ", ra " + this.ra + ", curso " + this.curso;
    }

};
saida.innerHTML=estudante["ra"]+"<br><br>";

for (let x in estudante) {
    // if(x!="dados")
    saida.innerHTML += typeof estudante[x] + " ";
    saida.innerHTML += `${x}: ${estudante[x]} <br>`
}
saida.innerHTML += "<hr>";
for (let x in estudante) {
    if (typeof estudante[x] != "function") {
        saida.innerHTML += `${x}: ${estudante[x]} <br>`
    }
}