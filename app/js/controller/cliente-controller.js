class ClienteController {
    constructor() {
        this.inputNome = document.querySelector("#nome");
        this.inputCpf = document.querySelector("#cpf");
        // Cria uma lista de clientes
        this.clientes = new Clientes();
    }
    // Insere um cliente na lista de clientes
    inserir(evento) {
        evento.preventDefault();
        if (this.inputNome.value === "" || this.inputCpf.value === "")
            throw new Error("Favor preencher todos os campos");
        // Instancia um novo cliente com os dados das inputs
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value);
        // Insere o cliente instanciado na lista de clientes
        this.clientes.inserir(novoCliente);
        // Atualiza o HTML listando o novo cliente inserido
        this.inserirClienteNoHTML(novoCliente);
    }
    // Método que vai inserir cada um dos clietes (na lista de clientes) no HTML
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    // Atualiza o HTML com os dados do novo cliente cadastrado e o botão para apagar
    inserirClienteNoHTML(cliente) {
        // Cria um elemento "p"
        const elementoP = document.createElement("p");
        // Altera o conteúdo/descrição do parágrafo contendo os dados do cliente
        elementoP.textContent = cliente.toString();
        // Cria um elemento "button"
        const botaoApagar = document.createElement("button");
        // Altera o conteúdo/descrição do botão
        botaoApagar.textContent = "X";
        // Lógica para remover um cliente inserido no HTML ao clicar no botão de remoção
        botaoApagar.addEventListener("click", (event) => {
            console.log("Removendo cliente " + cliente.toString());
            // Remove o cliente em questão da lista de clientes
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        // Coloca o botão de apagar no final do parágrafo
        elementoP.appendChild(botaoApagar);
        // Coloca o parágrafo (contendo o botão) no final do body
        document.body.appendChild(elementoP);
    }
}
