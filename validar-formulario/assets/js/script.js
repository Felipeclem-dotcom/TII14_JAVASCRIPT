// capturar formulario
 
const formulario = document.getElementById('formulario');
 
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const erroNome = document.getElementById('erroNome')
const mensagem = document.getElementById('Mensagem');
 
// adicionar evento de envio
 
formulario.addEventListener('submit', function(event){
    event.preventDefault();
   
    erroNome.innerText = '';
    erroEmail.innerText = '';
    erroSenha.innerText = '';

    let formularioValido = true;
    
    if(nome.value === ''){
        erroNome.innerText = 'O nome é obrigatório';
        formularioValido = false;
    }

    if(email.value === ''){
        erroEmail.innerText = 'O e-mail é obrigatório';
        formularioValido = false;
    }else if(!email.value.includes('@')){
        erroEmail.innerText = 'Digite um e-mail valido';
        formularioValido = false;
    }

    if(senha.value === ''){
        erroSenha.innerText = 'A senha é obrigatório';
        formularioValido = false;
    }else if(senha.value.length < 6){
        erroSenha.innerText = 'A senha deve ter no minimo 6 carcteres';
        formularioValido = false;
    }

     
    if (formularioValido === true) {
        mensagem.innerText = "Cadastro realizado com sucesso!";
        
        mensagem.classList.add('sucesso');

        // setTimeout(() => {
        //     mensagem.innerText = '';
        //     mensagem.classList.remove('sucesso');
        // }, 3000);

        let intervalo = setInterval(() => {
            mensagem.innerText = '';
            mensagem.classList.remove('sucesso')
            clearInterval(intervalo);
        }, 3000);
    }

})