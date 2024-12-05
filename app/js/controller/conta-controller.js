class ContaController {
    constructor() {
        this.inputNumero =
            document.querySelector("#conta");
        this.inputSaldo =
            document.querySelector("#saldo");
        // Cria uma lista de clientes
        this.contas = new Contas();
    }
    // Insere uma conta na lista de contas
    inserir(evento) {
        evento.preventDefault();
        // Instancia uma nova conta com os dados das inputs
        let novaConta = new Conta(this.inputNumero.value, 
        // Converte o valor do saldo na input (que é lido como string) para float
        parseFloat(this.inputSaldo.value));
        // Insere a conta instanciada na lista de contas
        this.contas.inserir(novaConta);
        // Atualiza o HTML listando a nova conta inserida
        this.inserirContaNoHTML(novaConta);
    }
    // Método que vai inserir cada uma das contas (na lista de contas) no HTML
    listar() {
        this.contas.listar().forEach(conta => {
            this.inserirContaNoHTML(conta);
        });
    }
    // Atualiza o HTML com os dados da nova conta cadastrada e o botão para apagar
    inserirContaNoHTML(conta) {
        // Cria um elemento "p"
        const elementoP = document.createElement('p');
        // Altera o conteúdo/descrição do parágrafo contendo os dados da conta
        elementoP.textContent = conta.toString();
        // Cria um elemento "button"
        const botaoApagar = document.createElement('button');
        // Altera o conteúdo/descrição do botão
        botaoApagar.textContent = 'X';
        // Lógica para remover uma conta inserida no HTML ao clicar no botão de remoção
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo conta ' + conta.toString());
            // Remove a conta em questão da lista de contas
            this.contas.remover(conta.numero);
            event.target.parentElement.remove();
        });
        // Coloca o botão de apagar no final do parágrafo
        elementoP.appendChild(botaoApagar);
        // Coloca o parágrafo (contendo o botão) no final do body
        document.body.appendChild(elementoP);
    }
}
