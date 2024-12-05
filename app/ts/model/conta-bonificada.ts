class ContaBonificada extends Conta {

    // Construtor
    constructor(numero: string, saldo: number) {
        super(numero, saldo);
    }

    // Método referente às regras de negócio da classe
    creditar(valor: number): void {
        super.creditar(valor * 1.1);
    }
}