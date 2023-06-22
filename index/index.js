// Criamos uma variavel medida, onde o usuario coloca a sua medida em metros
const medida = prompt("Insira uma medida em metros: ");
// Criamos o menu, onde o usuario escolhe a uma funcionalidade
const unidade = prompt(
  "Para qual unidade de medida deseja converter?" +
    "\n1. milimetros (mm)" +
    "\n2. centímetros (cm)" +
    "\n3. decímetros(dm)" +
    "\n4. decâmetros(dam)" +
    "\n5. hectometros(hm)" +
    "\n6. quilômetros(km)"
);
// Criamos o switch para definir os casos
switch (unidade) {
  // Aqui temos uma conversão de metros para milimetros
  case "1":
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mm");
    break;
  // Aqui temos uma conversão de metros para centimetros
  case "2":
    alert("Resultado: " + medida + "m = " + medida * 100 + "cm");
    break;
  // Aqui temos uma conversão de metros para decimetros
  case "3":
    alert("Resultado: " + medida + "m = " + medida * 10 + "dm");
    break;
  // Aqui temos uma conversão de metros para decametros
  case "4":
    alert("Resultado: " + medida + "m = " + medida / 10 + "dam");
    break;
  // Aqui temos uma conversão de metros para hectometros
  case "5":
    alert("Resultado: " + medida + "m = " + medida / 100 + "hm");
    break;
  // Aqui temos uma conversao de metros para quilometros
  case "6":
    alert("Resultado: " + medida + "m = " + medida / 1000 + "km");
    break;
  // Um caso padrao para cuidar de digitação errada
  // Caso o usuario digite um elemento que nao é pre definido
  default:
    alert("Opção Inválida");
}
