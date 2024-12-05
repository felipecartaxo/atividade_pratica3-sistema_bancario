class ClienteEspecial extends Cliente {
    constructor(nome, cpf) {
        super(nome, cpf);
        this.dependentes = new Array();
    }
    get listar() {
        return this.dependentes;
    }
    adicionarDependente(dependente) {
        if (this.cpf === dependente.cpf) {
            throw new Error("Não é possível cadastrar o titular como dependente");
        }
        this.dependentes.push(dependente);
    }
    removerDependente(cpf) {
        // Retorna o dependente cujo cpf é igual ao que foi passado como argumento do método
        const dependenteARemover = this.dependentes.find(dependente => dependente.cpf === cpf);
        if (dependenteARemover) {
            const index = this.dependentes.indexOf(dependenteARemover);
            this.dependentes.splice(index, 1);
        }
    }
    editarCpfDependente(cpfAntigo, cpfNovo) {
        const dependente = this.dependentes.find(dependente => dependente.cpf === cpfAntigo);
        // Atualizando o cpf
        if (dependente) {
            dependente.cpf = cpfNovo;
        }
        else {
            throw new Error("Dependente não encontrado");
        }
    }
}
