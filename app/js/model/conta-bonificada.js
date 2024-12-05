class ContaBonificada extends Conta {
    // Construtor
    constructor(numero, saldo) {
        super(numero, saldo);
    }
    // Método referente às regras de negócio da classe
    creditar(valor) {
        super.creditar(valor * 1.1);
    }
}
