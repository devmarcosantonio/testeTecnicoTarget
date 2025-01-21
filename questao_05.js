function inverterString(valor) {
    let valor_invertido = ""; 

    // Itera pela string de trás para frente coloocando o valor atual na sequencia invertida
    for (let i = valor.length - 1; i >= 0; i--) {
        valor_invertido += valor[i]; 
    }

    return valor_invertido; 
}


const entrada = "Marcos Antonio";

console.log("String original:", entrada);
console.log("String invertida:", inverterString(entrada));