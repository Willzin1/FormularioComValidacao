# FormularioComValidacao

    Este projeto implementa um validador de formulário composto por uma classe chamada ValidaFormulario(). A seguir, descrevemos os principais componentes e métodos dessa classe:

1. Construtor
   O construtor da classe ValidaFormulario() recebe o formulário como parâmetro, inicializando-o para uso nos métodos da classe.

2. Método eventos()
   Este método é responsável por adicionar um listener ao evento submit do formulário. Ao ser disparado, o evento chama o método handleSubmit(), que é responsável por validar o formulário antes de enviá-lo.

3. Método handleSubmit()
   O método handleSubmit() é responsável por processar o envio do formulário. Inicialmente, ele impede que o formulário seja enviado vazio. Para isso, são feitas as verificações das condições de validação dos campos:

    O método camposSaoValidos() valida os campos do formulário.
    O método senhasSaoValidas() valida as senhas inseridas.
    Caso ambas as verificações retornem true, o formulário será enviado.

4. Método senhasSaoValidas()
   Este método verifica se as senhas inseridas no formulário são válidas. Ele possui a seguinte lógica:

    Cria uma flag de validação que é inicialmente true.
    Compara os valores da senha e da senha repetida. Caso não coincidam, a flag é definida como false, e o erro é registrado com o método criaErro().
    Verifica se as senhas têm entre 6 e 12 caracteres. Se não atenderem a essa condição, também registra um erro.
    Retorna a flag, que será true caso todas as condições sejam atendidas. 5. Método camposSaoValidos()
    Este método valida os campos do formulário. Para cada campo com a classe .validar, a seguinte lógica é aplicada:

    O valor do campo é verificado. Se estiver vazio, um erro é gerado utilizando o método criaErro().
    Se o campo tiver a classe cpf, ele será validado pela função validaCpf().
    Se o campo tiver a classe usuario, ele será validado pela função validaUsuario().
    Retorna true se todos os campos forem válidos e false caso contrário. 6. Método validaUsuario(campo)
    Este método valida o campo de "usuário", aplicando as seguintes condições:

    O valor do campo deve ter entre 3 e 12 caracteres. Caso contrário, um erro será registrado.
    O valor do campo deve conter apenas caracteres alfanuméricos (a-z, A-Z, 0-9). Se não atender a essa condição, também será gerado um erro.
    A flag de validação será retornada, sendo true ou false dependendo dos resultados da validação.

7. Método validaCpf(campo)
   Este método valida o campo "CPF", utilizando uma classe externa ValidarCpf. A lógica do método é:

    A constante cpf recebe o valor inserido no campo de CPF.
    Se o método valida() da classe ValidarCpf retornar false, um erro será registrado utilizando o método criaErro(). 8. Método criaErro(campo, msg)
    Este método é responsável por criar e exibir mensagens de erro. Ele realiza o seguinte:

    Cria uma div para exibir a mensagem de erro.
    A div recebe a mensagem de erro no innerText e é associada a uma classe CSS para estilização.
    A div é inserida logo após o campo de entrada no formulário.
