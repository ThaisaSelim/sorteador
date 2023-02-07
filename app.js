async function sortear () {
// pegar total de resultados
const totalResultados = Number(document.querySelector('#totalResultadosInput').value)

// pegar o menor valor
const menorValor = Number(document.querySelector('#menorValorInput').value)

// pegar o maior valor
const maiorValor = Number(document.querySelector('#maiorValorInput').value)

for(let j = 0; j < 20; j++){
// limpar resultados antigos do HTML existente
const elementoHTMLResultsValues = document.querySelector('.results-values')
elementoHTMLResultsValues.innerHTML = " "

 for (let i = 0; i < totalResultados; i++){
// gerar um numero aleatorio entre o menor e maior valor 
const Resultado = Math.floor( Math.random() * (maiorValor - menorValor+ 1) + menorValor)

// gerar um elemento HTML  para o resultado
const elementoHTMLdoResultado = document.createElement ('div')
elementoHTMLdoResultado.classList.add('result-value')
elementoHTMLdoResultado.innerText = Resultado

// adicionar o elemento criado dentro do HTML existente  
elementoHTMLResultsValues.append(elementoHTMLdoResultado)
 }
 await wait(20)
}
}
function wait(tempo) {
    return new Promise ((resolve)=> {
        setTimeout(() => resolve(), tempo);
    })
}