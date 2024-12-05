class ClienteController {

    // Atributos
    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputConta: HTMLInputElement;

    // Lista de clientes (simulando uma tabela em um banco de dados)
    private clientes: Clientes;

    // Lista de contas
    private contas: Contas;

    constructor() {
        this.inputNome = <HTMLInputElement>document.querySelector("#nome");
        this.inputCpf = <HTMLInputElement>document.querySelector("#cpf");
        this.inputConta = <HTMLInputElement>document.querySelector("#conta");

        this.clientes = new Clientes();
        this.contas = new Contas();
    }

    // Insere um cliente na lista de clientes
    inserir(evento: Event): void {
        evento.preventDefault();

        // Instancia um novo cliente com os dados das inputs
        const novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value);

        // Verifica se a conta existe (a partir de seu número)
        const contaVerificada = this.contas.pesquisar(this.inputConta.value);

        if (contaVerificada) {
            novoCliente.setConta(contaVerificada);
        }
        else {
            throw new Error("Conta inexistente");
        }

        // Insere o cliente instanciado na lista de clientes
        this.clientes.inserir(novoCliente);
        // Atualiza o HTML listando o novo cliente inserido
        this.inserirClienteNoHTML(novoCliente);
    }

    // Método que vai inserir cada um dos clientes (na lista de clientes) no HTML
    listar() {
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    // Atualiza o HTML com os dados do novo cliente cadastrado e o botão para apagar
    inserirClienteNoHTML(cliente: Cliente): void {
        // Cria um elemento "p"
        const elementoP = document.createElement("p");
        // Altera o conteúdo/descrição do parágrafo contendo os dados do cliente
        elementoP.textContent = cliente.toString();

        // Cria um elemento "button"
        const botaoApagar = document.createElement("button");
        // Altera o conteúdo/descrição do botão
        botaoApagar.textContent = "X";
        // Lógica para remover um cliente inserido no HTML ao clicar no botão de remoção
        botaoApagar.addEventListener("click",
            (event) => {
                console.log("Removendo cliente " + cliente.toString());
                // Remove o cliente em questão da lista de clientes
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
        )
        // Coloca o botão de apagar no final do parágrafo
        elementoP.appendChild(botaoApagar);
        // Coloca o parágrafo (contendo o botão) no final do body
        document.body.appendChild(elementoP);
    }
}