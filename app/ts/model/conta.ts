class Conta {

    // Atributos
    private _numero: string;
    private _saldo: number;

    // Construtor
    constructor(numero: string, saldo = 0) {
        this._numero = numero;
        this._saldo = saldo;
    }

    // Getters e setters
    get numero(): string {
        return this._numero;
    }

    set numero(numero) {
        this._numero = numero;
    }

    get saldo(): number {
        return this._saldo;
    }

    // Debita (saca) um determinado valor da conta
    debitar(valor: number): void {
        //apenas debita se houver saldo
        if (valor < this._saldo) {
            this._saldo -= valor;
        }
    }

    // Credita (deposita) um determinado valor na conta
    creditar(valor: number): void {
        this._saldo += valor;
    }

    // toString
    toString(): string {
        return `Número: ${this._numero} 
        - Saldo: ${this._saldo}`;
    }
}