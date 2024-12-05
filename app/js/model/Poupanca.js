class Poupanca extends Conta {
    // Construtor
    constructor(numero, saldo) {
        super(numero, saldo);
        this._dataAniversario = new Date();
    }
    // Getters e setters
    get dataAniversario() {
        return this._dataAniversario;
    }
    set dataAniversario(value) {
        this._dataAniversario = value;
    }
    // Método referente às regras de negócio da classe
    atualizarSaldoAniversario() {
        const hoje = new Date();
        if (hoje.getDay() === this.dataAniversario.getDay()) {
            this.creditar(this.saldo * 0.02);
        }
    }
}
