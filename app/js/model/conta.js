class Conta {
    // Construtor
    constructor(numero, saldo = 0) {
        this._numero = numero;
        this._saldo = saldo;
    }
    // Getters e setters
    get numero() {
        return this._numero;
    }
    set numero(numero) {
        this._numero = numero;
    }
    get saldo() {
        return this._saldo;
    }
    // Debita (saca) um determinado valor da conta
    debitar(valor) {
        //apenas debita se houver saldo
        if (valor < this._saldo) {
            this._saldo -= valor;
        }
    }
    // Credita (deposita) um determinado valor na conta
    creditar(valor) {
        this._saldo += valor;
    }
    // toString
    toString() {
        return `Número: ${this._numero} 
        - Saldo: ${this._saldo}`;
    }
}
