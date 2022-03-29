var a,b;
a=prompt("Digite um número");//5
a=parseInt(a);
b=prompt("Digite outro número");//3
b=parseInt(b);
document.write ("soma: "+(a+b));
document.write ("<br>subtração: "+ (a-b));
document.write ("<br>multiplicação: "+ (a*b));
document.write ("<br>Divisão: "+(a/b)   );
document.write ("<br>Módulo: "+(a%b)   );
document.write ("<br>Exponenciação: "+(a**b)   );

/*
Divisão /
Resto %
Potencia **

19 % 2 = 1
% - resto da divisão
todo resto da div de número par,  vale 0
1980 % 2 = 0
todo resto da div de número ímpar, vale 1
36436423649847 % 2 = 1

157 % 3 = 2


2022 inteiro par
2021 inteiro ímpar

9.6 fracionado(float)

%2  (0,1)
%3  (0,1,2)
*/