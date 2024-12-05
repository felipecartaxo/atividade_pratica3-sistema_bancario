class Poupanca extends Conta{

    // Atributo
    private _dataAniversario: Date;

    // Construtor
    constructor(numero: string, saldo: number) {
        super(numero, saldo);
        this._dataAniversario = new Date();
    }

    // Getters e setters
    get dataAniversario(): Date {
        return this._dataAniversario;
    }

    set dataAniversario(value: Date) {
        this._dataAniversario = value;
    }

    // Método referente às regras de negócio da classe
    atualizarSaldoAniversario(){
        const hoje = new Date();
        if (hoje.getDay() === this.dataAniversario.getDay()) {
            this.creditar(this.saldo * 0.02);
        }
    }
}