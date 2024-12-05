class Cliente {
    // Construtor
    constructor(nome, cpf) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = null;
    }
    // Getters e setters
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(novoCpf) {
        this._cpf = novoCpf;
    }
    get conta() {
        return this._conta;
    }
    setConta(novaConta) {
        this._conta = novaConta;
    }
    // toString
    toString() {
        return `Nome: ${this._nome} - CPF: ${this._cpf} - Conta: ${this._conta}`;
    }
}
