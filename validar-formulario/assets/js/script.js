// capturar formulario
 
const formulario = document.getElementById('formulario');
 
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const erroNome = document.getElementById('erroNome')
 
// adicionar evento de envio
 
formulario.addEventListener('submit', function(event){
    event.preventDefault();
   
 
    if(nome.value === ''){
        erroNome.innerText = 'O nome é obrigatório'
    }
 
    if(email.value === ''){
        erroEmail.innerText = 'O senha é obrigatório'
    }
    // }else if(!email.value.include('@')){
    //     erroEmail.innerText = 'digite um e-mail valido'
    // }
 
    if(senha.value === ''){
        erroSenha.innerText = 'O senha é obrigatório'
    }else if(senha.value.length < 6){
        erroSenha.innerText = 'A senha deve ter no minimo 6 carcteres'
    }
})