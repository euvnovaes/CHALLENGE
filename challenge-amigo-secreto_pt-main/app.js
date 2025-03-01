//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let nome = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');

function adicionarAmigo() {
    if (nome.value == '')
        alert('Por favor, insira um nome');
    else {
        amigos.push(nome.value);
        nome.value = '';
        lista.innerHTML = '';
        for (let i = 0; i < amigos.length; i++){
            
        }
    }
}