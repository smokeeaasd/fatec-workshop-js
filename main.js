// Lucas de Alencar Gomes - 2º DSM
const y = 5
let x = 5 // trocando 'const' por 'let' pois a variável x sofre alterações
x += 10 // corrigindo o operador de atribuição de adição para aumentar o valor de x

// função lambda pra calcular a soma
// dessa maneira, é possível criar funções simples usando apenas uma linha.
// adicionando parâmetros na função, para reutilizá-la com vários números
const somar = (n1, n2) => n1 + n2

console.log(somar(x, y))
