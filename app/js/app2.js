let clienteController = new ClienteController();
// Requisito 3: Alterar o arquivo app.ts para criar um objeto da classe Clientes e inserir clientes dentro, listar, remover e pesquisar
// Criando lista (ainda vazia) de clientes
const cli = new Clientes();
// Criando clientes
const cli1 = new Cliente("Felipe Cartaxo", "12345");
const cli2 = new Cliente("Maria Joana", "99999");
const cli3 = new Cliente("João da Silva", "55667");
// Populando a lista de clientes
cli.inserir(cli1);
cli.inserir(cli2);
cli.inserir(cli3);
// Exibindo a lista de clientes
console.log(`Listando clientes: ${cli.listarDadosClientes()}`);
// Removendo um dos clientes da lista
cli.remover("99999");
// Imprimindo a lista de clientes após a remoção
console.log(`Listando clientes após a remoção: ${cli.listarDadosClientes()}`);
// Pesquisando por um dos clientes
let cliTemp = cli.pesquisar("12345");
console.log(`Listando um dos clientes: ${cliTemp.toString()}`);
