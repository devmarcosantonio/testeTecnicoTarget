// Valores de faturamento mensal por estado
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calcular o faturamento total
const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);

// Calcular o percentual de representação de cada estado
const percentualPorEstado = Object.entries(faturamentoPorEstado).map(([estado, valor]) => {
    const percentual = (valor / faturamentoTotal) * 100;
    return { estado, percentual: percentual.toFixed(2) };
});

// Exibir os resultados
console.log('Percentual de representação por estado:');
percentualPorEstado.forEach(({ estado, percentual }) => {
    console.log(`${estado}: ${percentual}%`);
});