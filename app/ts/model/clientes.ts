// Requisito 2: Desenvolver a classe cliente
class Clientes {
    // Atributos
    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
    }

    // Requisio 2.3: Implementação do listar(), que deve retornar um array de Cliente
    listar(): Array<Cliente> {
        return this.clientes
    }

    // Método para listar os dados de cada cliente
    listarDadosClientes(): string {
        let dadosClientes = "";

        for (let cliente of this.clientes) {
            dadosClientes += cliente.toString() + "| ";
        }

        return dadosClientes;
    }

    // Requisito 2.1: Implementação do método inserir(), que recebe um Cliente e o armazenará no array de clientes
    inserir(novoCliente: Cliente): void {
        this.clientes.push(novoCliente);
    }

    // Requisito 2.4: Implementação do método pesquisar(), que deve passar um cpf como parâmetro e retornar o cliente que possui o cpf em questão
    pesquisar(cpf: string): Cliente {
        return this.clientes.find(
            cliente => cliente.cpf === cpf
        );
    }

    // Requisito 2.2: Implementação do método remover(), que, a partir de um cpf passado como argumento, remove um cliente
    remover(cpf: string): void {
        const clienteARemover = this.pesquisar(cpf);

        if(clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if(indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
}