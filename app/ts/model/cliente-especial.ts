class ClienteEspecial extends Cliente {
    // Atributos
    private dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string) {
        super(nome, cpf);
        this.dependentes = new Array<Cliente>();
    }

    get listar(): Array<Cliente> {
        return this.dependentes;
    }

    adicionarDependente(dependente: Cliente): void {
        if (this.cpf === dependente.cpf) {
            throw new Error("Não é possível cadastrar o titular como dependente");
        }

        this.dependentes.push(dependente);
    }

    removerDependente(cpf: string): void {
        // Retorna o dependente cujo cpf é igual ao que foi passado como argumento do método
        const dependenteARemover: Cliente = this.dependentes.find(
            dependente => dependente.cpf === cpf
        );

        if (dependenteARemover) {
            const index = this.dependentes.indexOf(dependenteARemover);
            this.dependentes.splice(index, 1);
        }
    }

    editarCpfDependente(cpfAntigo: string, cpfNovo: string): void {
        const dependente = this.dependentes.find(
            dependente => dependente.cpf === cpfAntigo
        );

        // Atualizando o cpf
        if (dependente) {
            dependente.cpf = cpfNovo;
        }
        else {
            throw new Error("Dependente não encontrado");
        }
    }
}