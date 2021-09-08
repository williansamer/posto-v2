//ANTES DE COMEÇAR, SE CRIA O 'package.json'(npm init) no terminal

var xlsx = require("xlsx"); //Importando pacote criado pelo "npm init"

const postos = require("./postos"); //Importando o objeto 'postos'

var wb = xlsx.readFile("./arquivos_xlsx/MODELO.xlsx"); //Lendo o WorkBook(o arquivo do excel)

var ws = wb.Sheets["postos_planilha"] //Selecionando a planilha do arquivo(WorkSheet)

var data = xlsx.utils.sheet_to_json(ws);//Transformando o arquivo 'sheet' em 'json' para poder trabalhar neste arquivo.

var newData = data.map((record)=>{return record}); //Criando um novo objeto a partir do original(via callback)

newData.forEach((posto_xlsx, i)=>{ //Criando um 'for' para: Em cada objeto(linha no excel), modificar determinado campo(celula no excel)

  posto_xlsx.POSTOS = `${postos[i].nome}\r\n${postos[i].endereco}\r\n${postos[i].bairroInner}`;
  posto_xlsx.ETANOL = postos[i].etanol;
  posto_xlsx.GAS_COMUM = postos[i].g_comum;
  posto_xlsx.GAS_ADITIVADA = postos[i].g_aditivada;
  posto_xlsx.DIESEL_500 = postos[i].d_500;
  posto_xlsx.DIESEL_S10 = postos[i].d_s10;
  if(postos[i].conveniencia == true){
    posto_xlsx.CONVENIENCIA = "SIM";
  } else{
    posto_xlsx.CONVENIENCIA = "NÃO";
  }
})

//console.log(newData)

var newWb = xlsx.utils.book_new() //Criando um novo WorkBook(Preparando um novo arquivo excel)
var newWs = xlsx.utils.json_to_sheet(newData); //Criando o WorkSheet(Convertendo do 'json' para 'sheet(xlsx)', ou seja, p o arquivo do excel) e anexando o newData(os dados modificados)
xlsx.utils.book_append_sheet(newWb, newWs, "Combustíveis") //Criando nome da planilha, colocando no WorkSheet e colocando o WorkSheet no WorkBook

xlsx.writeFile(newWb, "./arquivos_xlsx/Preços dos Combustíveis_.xlsx");
//Por fim, Escrevendo e Salvando o arquivo no local './arquivos_xlsx' com o nome 'Preços dos Combustíveis_.xlsx'

//Para surtir efeito, vá no terminal e execute o arquivo(node sheets.js). Perceba que criará um novo arquivo como solicitado