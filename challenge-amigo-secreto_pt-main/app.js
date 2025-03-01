//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let nome = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');
let sorteado = document.getElementById('resultado');

function adicionarAmigo() {
    if (nome.value == '')
        alert('Por favor, insira um nome');
    else {
        amigos.push(nome.value);
        nome.value = '';
        lista.innerHTML = '';
        sorteado.innerHTML = '';
        for (let i = 0; i < amigos.length; i++){
            lista.innerHTML += `<li>${amigos[i]}</li>`;
        }
    }
}

function sortearAmigo() {
    if (amigos == '')
        alert('A lista está vazia');
    else {
        let sorteio = Math.floor(Math.random() * amigos.length);
        sorteado.innerHTML = `O amigo sorteado é ${amigos[sorteio]}`;
    }
}