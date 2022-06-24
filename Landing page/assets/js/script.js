let nome = window.document.getElementById('nome') /* não funciona com # */
let email = document.querySelector('#email') /* não funciona sem # */
let mensagem = document.querySelector('#mensagem')
let nomeOk = false
let emailOk = false
let mensagemOk = false

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

function validaMensagem(){
    let txtMensagem = document.querySelector('#txtMensagem')
    if (mensagem.value.length > 500){
        txtMensagem.innerHTML = 'Texto muito grande, digite no máximo 200 caracteres'
        txtMensagem.style.color = 'red'
        txtMensagem.style.display = 'block'
    }
    else{
        txtMensagem.style.display = 'none'
        mensagemOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && mensagemOk == true )
        alert("Mensagem enviada!")
    else
        alert("Mensagem não enviada, tente novamente!")
}

