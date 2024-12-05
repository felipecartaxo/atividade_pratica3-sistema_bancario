class Contas {

    // Atributos
    private contas: Array<Conta>;

    // Construtor
    constructor() {
        this.contas = new Array<Conta>();

        // Cria duas contas
        const c1 = new Conta('1', 100);
        const c2 = new Conta('2', 200);

        // E adiciona as contas cradas à lista de contas
        this.contas.push(c1, c2);
    }

    // Insere uma conta na lista de contas
    inserir(conta: Conta): void {
        this.contas.push(conta);
    }

    // Retorna a lista de contas
    listar(): Array<Conta> {
        return this.contas;
    }

    // Retorna uma conta a partir do número passado coomo parâmetro
    pesquisar(numero: string): Conta {
        return this.contas.find(
            // Retorna a primeira conta cujo número for igual ao que foi passado como argumento
            conta => conta.numero === numero
        );
    }

    // Remove, a partir do número, uma das contas cadastradas
    remover(numero: string): void {
        // Procura a conta que será removida, a partir do número passado como argumento
        const contaARemover = this.pesquisar(numero);

        // Caso a conta exista
        if (contaARemover) {
            // "Pega" o índice da conta que foi retornada
            const indiceConta = this.contas.indexOf(contaARemover);
            
            // Se o índice for maior do que -1, isto é, se algo tiver sido retornado (pois, por padrão, o método indexOf retorna -1 caso NADA tenha sido encontrado)
            if (indiceConta > -1) {
                // Remove a conta em questão (passando o índice do elemento a ser removido e a quantidade de elementos que serão removidos)
                this.contas.splice(indiceConta, 1);
            }
        }
        // Caso a conta não existe
        else {
            throw new Error("Conta inexistente")
        }
    }
}