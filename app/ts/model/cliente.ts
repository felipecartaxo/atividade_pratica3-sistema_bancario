class Cliente {

    // Atributos
    private _nome: string;
    private _cpf: string;
    private _conta: Conta;

    // Construtor
    constructor(nome: string, cpf: string) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = null;
    }

    // Getters e setters
    get nome(): string {
        return this._nome;
    }

    set nome(novoNome: string) {
        this._nome = novoNome;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(novoCpf: string) {
        this._cpf = novoCpf;
    }

    get conta(): Conta {
        return this._conta;
    }

    setConta(novaConta: Conta) {
        this._conta = novaConta;
    }

    // toString
    toString(): string {
        return `Nome: ${this._nome} - CPF: ${this._cpf} - Conta: ${this._conta}`;
    }
}