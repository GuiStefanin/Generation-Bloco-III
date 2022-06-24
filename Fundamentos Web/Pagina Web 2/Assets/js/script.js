/* 
Por Tag : getElementByTagName()
Por Id : getElementByTagId()
Por Nome: getElementsByName()
Por Classe: getElementsClassName()
Por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome') /* não funciona com # */
let email = document.querySelector('#email') /* não funciona sem # */
let comentario = document.querySelector('#comentario')
let nomeOk = false
let emailOk = false
let comentarioOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaComentario() {
    let txtComentario = document.querySelector('#txtComentario')
    if (comentario.value.length > 200) {
        txtComentario.innerHTML = 'Texto muito grande, digite no máximo 200 caracteres'
        txtComentario.style.color = 'red'
        txtComentario.style.display = 'block'
    } else {
        txtComentario.style.display = 'none'
        comentarioOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && comentarioOk == true)
        alert("Formulário enviado com sucesso!")
    else
        alert("Falha ao enviar o formulário, verique novamente")
}

function mapaZoom() {
    mapa.style.width = "600px"
    mapa.style.height = "450px"
}

function mapaNormal() {
    mapa.style.width = "320px"
    mapa.style.height = "240px"

}