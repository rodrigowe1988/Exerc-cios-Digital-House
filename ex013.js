//entre parentesis depois de declarar as funçoes temos os parametros

function saudacao(firstName = `Visitante`, lastName = `Anonimo`){
    console.log(`Olá ${firstName} ${lastName}.`);
} 
saudacao();

//ao invocar a função novamente esses valores entre parentesis
//são chamados de argumentos