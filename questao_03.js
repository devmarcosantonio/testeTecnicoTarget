const fs = require('fs');

// Lê o arquivo JSON
const dados = JSON.parse(fs.readFileSync('./dados_questao_03/dados.json', 'utf-8'));

// Filtrar apenas os dias com faturamento maior que 0
const diasComFaturamento = dados.filter(dia => dia.valor > 0);

// Calcular o menor e o maior valor de faturamento
const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

// Calcular a média mensal de faturamento
const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0); 
const mediaMensal = somaFaturamento / diasComFaturamento.length;

// Contar os dias com faturamento acima da média
const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

// Exibir os resultados
console.log('Menor faturamento ocorrido em um dia do mês:', menorFaturamento.toFixed(2));
console.log('Maior faturamento ocorrido em um dia do mês:', maiorFaturamento.toFixed(2));
console.log('Número de dias com faturamento diário superior à média mensal:', diasAcimaDaMedia);

