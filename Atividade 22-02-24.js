function verificarMaiorIdade(idade) {
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
}

//tarefa 2

function orderArray() {
    let arr = [1, 2, 3, 6, 7, 9];

    // Adicionando os números faltantes
    for (let i = 0; i < 10; i++) {
        if (!arr.includes(i)) { 
            arr.push(i);
        }
    }

    // Ordenando o array
    arr.sort((a, b) => a - b);

    return arr;
}

console.log(orderArray()); // Saída: [0, 1, 2, 3, 6, 7, 9]

//tarefa 3

function meusDados() {
    let pessoa = {
        nome: 'Renato',
        idade: '32',
        cidade: 'Florianópolis'
    };

    // Reatribuindo os valores
    pessoa = {
        nome: 'Gustavo',
        cidade: 'Maringa'
    };

    // Deletando o campo 'idade'
    delete pessoa.idade;

    return pessoa;
}

console.log(meusDados());



// tarefa 4

function manipulaArray() {
    let animais = ['cacohrro', 'gato', 'abelha', 'rato', 'leão',  'galinha'];

    const ordemAlfabetica = animais.sort();
    const primeiro = animais[1];
    const ultimo = animais[animais.length - 1];
    const tamanhoDaLista = animais.length;

    return {
        ordemAlfabetica,
        primeiro,
        ultimo,
        tamanhoDaLista
    };
}

console.log(manipulaArray());
