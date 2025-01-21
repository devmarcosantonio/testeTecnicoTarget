function isFibonacci(num) {
    if (num < 0) return `${num} não pertence à sequência de Fibonacci.`;

    let a = 0; // Primeiro número da sequência
    let b = 1; // Segundo número da sequência

    // Caso o número informado seja 0 ou 1, já está na sequência
    if (num === 0 || num === 1) return `${num} pertence à sequência de Fibonacci.`;

    // Gerar a sequência de Fibonacci até alcançar ou ultrapassar o número informado
    while (b <= num) {
        let temp = b;
        b = a + b;
        a = temp;

        // Verifica se o número informado está na sequência
        if (b === num || a === num) {
            return `${num} pertence à sequência de Fibonacci.`;
        }
    }

    // Se passar do número e ele não for encontrado, não pertence
    return `${num} não pertence à sequência de Fibonacci.`;
}

// Testando o programa

let numero = 21; 
console.log(isFibonacci(numero));