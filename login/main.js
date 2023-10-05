const form = document.querySelector('.login-form');
const usuarioInput = form.querySelector("input[type='text']");
const senhaInput = form.querySelector("input[type='password']");

form.addEventListener('submit', (event) => {
    // Adicionar o event.preventDefault() evita que a página seja recarregada quando o botão for apertado
    event.preventDefault();

    // Obtém os valores dos campos de entrada do usuário e senha

    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value.trim();

    if(usuario === '' || senha === '') {
        alert("Por favor preencha os campos");
    } else if (usuario === 'usuario' && senha === 'senha') {
        // Verifica se as informações de login e senha estão corretas
        alert("Bem vindo!")
        location.replace("/../tarefa/index.html", "_self")
    } else {
        // Exibe uma mensagem de erro se as informações estiverem, erradas
        alert( "Usuário ou senha incorreto, tente novamente" )
    
    }

})