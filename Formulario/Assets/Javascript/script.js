class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', event => {
            this.handleSubmit(event);
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas) {
            alert('FORMULÁRIO ENVIADO');
            this.formulario.submit();
        }
    }

    senhasSaoValidas() {
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const senhaRepetida = this.formulario.querySelector('.senhaRepetida');

        if(senha.value !== senhaRepetida.value) {
            valid = false;
            this.criaErro(senha, 'Senhas não coincidem.');
            this.criaErro(senhaRepetida, 'Senhas não coincidem.');
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.criaErro(senha, 'Senha precisa conter entre 6 a 12 caracteres');
        }

        return valid;
    }

    camposSaoValidos() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            let label = campo.previousElementSibling.innerHTML;
            
            if(!campo.value) {
                this.criaErro(campo, `Campo "${label.replace(':', '').toLocaleLowerCase()}" não pode estar em branco.`);
                valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCpf(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário deve conter entre 3 e 12 caracteres.');
            valid = false;
        };

        if(!usuario.match(/[a-zA-Z0-9]+/g)) {
            this.criaErro(campo, 'Nome deve conter apenas letras e/ou números.');
            valid = false;
        }
        
        return valid;
    }

    validaCpf(campo) {
        const cpf = new ValidarCPF(campo.value);

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF Inválido');
            return false;
        }

        return true;
    }

    criaErro(campo, mensagem){
        const div = document.createElement('div');
        div.innerHTML = mensagem;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();