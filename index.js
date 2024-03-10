import colecaoChuvasDeMeteoros from "./data/chuva-de-meteoros.js";
import imprimeListaDeChuvas from "./funcoes/funcoesInterface.js";
import {verificaChuvaVisivelPorData,verificaChuvaVisivelProximos2Meses} from "./funcoes/funcoesLogicas.js";

const dataAtual = new Date();

const chuvasVisiveisHoje = colecaoChuvasDeMeteoros.filter((chuvas) =>
verificaChuvaVisivelPorData(chuvas, dataAtual));

const verificaChuvaVisivelProximos2Meses = colecaoChuvasDeMeteoros.filter(
  (chuvas) => verificaChuvaVisivelProximos2Meses(chuvas, dataAtual)
);

console.log("Chuvas de Meteoros");

if (chuvasVisiveisHoje.length > 0){
  let msg ="\n Encontramos ";
  msg += chuvasVisiveisHoje.length == 1 ? "1 chuva de meteoros que pode ser vista hoje" 
  : chuvasVisiveisHoje.length + "chuvas de meteoros que podem ser vistas hoje";
  
  console.log(msg);

  imprimeListaDeChuvas(chuvasVisiveisHoje);
} else {
  console.log("\n\n Nenhuma chuva de meteoros passando no momento");
}
  
console.log("\n\nNão perca as próximas chuvas de meteoros: ");
imprimeListaDeChuvas(verificaChuvaVisivelProximos2Meses);
  

