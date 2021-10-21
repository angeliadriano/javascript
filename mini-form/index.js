const dados = function (nome, sobrenome, peso, altura) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    peso: peso,
    altura: altura
  }
}

const inputNome = document.querySelector('#nome')
const inputSobrenome = document.querySelector('#sobrenome').value
const inputPeso = document.querySelector('#peso').value
const inputAltura = document.querySelector('#altura').value

let eventoBotao = document.querySelector('#enviar')

const montaTr = document.createElement('tr')
const nomeTd = document.createElement('td')
const sobrenomeTd = document.createElement('td')
const pesoTd = document.createElement('td')
const alturaTd = document.createElement('td')

eventoBotao.addEventListener('click', function (event) {
  event.preventDefault()

  montaTr.appendChild()
})
