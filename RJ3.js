class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.#cpf = cpf
        this.endereco = endereco
        this.telefones = new Set()
    }

    get cpf() {
        return this.#cpf
    }

    get nomeCaixaAlta() {
        return this.nome.toUpperCase()
    }

    get nomeCaixaBaixa() {
        return this.nome.toLowerCase()
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone)
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua 
        this.numero = numero
    }

    get estadoCaixaAlta() {
        return this.estado.toUpperCase()
    }

    get cidadeCaixaAlta() {
        return this.cidade.toUpperCase()
    }

    get ruaCaixaAlta() {
        return this.rua.toUpperCase()
    }

    get estadoCaixaBaixa() {
        return this.estado.toLowerCase()
    }

    get cidadeCaixaBaixa() {
        return this.cidade.toLowerCase()
    }

    get ruaCaixaBaixa() {
        return this.rua.toLowerCase()
    }
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }

    get cnpj() {
        return this.#cnpj
    }

    get razaoSocialCaixaAlta() {
        return this.razaoSocial.toUpperCase()
    }

    get nomeFantasiaCaixaAlta() {
        return this.nomeFantasia.toUpperCase()
    }

    get razaoSocialCaixaBaixa() {
        return this.razaoSocial.toLowerCase()
    }

    get nomeFantasiaCaixaBaixa() {
        return this.nomeFantasia.toLowerCase()
    }

    adicionarCliente(cliente) {
        this.clientes.add(cliente)
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone)
    }

    detalhe() {
        console.log(`Razão Social: ${this.razaoSocial}`)
        console.log(`Nome fantasia: ${this.nomeFantasia}`)
        console.log("------------------------------")

        for (let cliente of this.clientes) {
            console.log(`\nNome: ${cliente.nome}`)
            console.log(`Estado: ${cliente.endereco.estado} cidade: ${cliente.endereco.cidade} rua: ${cliente.endereco.rua} numero: ${cliente.endereco.numero}`)

            for (let tel of cliente.telefones) {
                console.log(`ddd: ${tel.ddd} numero: ${tel.numero}`)
            }
        }
    }
}

const enderecoEmpresa = new Endereco("SP", "São José dos Campos", "Av Andrômeda", "1000")
const empresa = new Empresa("ABC LTDA", "Mercado Online", "12.345.678/0001-99", enderecoEmpresa)

const telefoneEmpresa1 = new Telefone("99999999", "99999999")
const telefoneEmpresa2 = new Telefone("88888888", "88888888")

empresa.adicionarTelefone(telefoneEmpresa1)
empresa.adicionarTelefone(telefoneEmpresa2)

const clientes = [
    new Cliente("João", "123.456.789-00", new Endereco("SP", "São José dos Campos", "Av Andrômeda", "987")),
    new Cliente("Gabriel", "234.567.890-11", new Endereco("SP", "São José dos Campos", "Av Andrômeda", "412")),
    new Cliente("Barbara", "345.678.901-22", new Endereco("SP", "São José dos Campos", "Av São João", "789")),
    new Cliente("Márcia", "456.789.012-33", new Endereco("SP", "São José dos Campos", "Av Andrômeda", "452")),
    new Cliente("Carlos", "567.890.123-44", new Endereco("SP", "São José dos Campos", "Av Central", "321"))
]

const telefonesClientes = [
    [new Telefone("99999999", "99999999"), new Telefone("99999999", "99999999")],
    [new Telefone("88888888", "88888888"), new Telefone("88888888", "88888888")],
    [new Telefone("77777777", "77777777"), new Telefone("77777777", "77777777")],
    [new Telefone("66666666", "66666666"), new Telefone("66666666", "66666666")],
    [new Telefone("55555555", "55555555"), new Telefone("55555555", "55555555")]
]

clientes.forEach((cliente, index) => {
    telefonesClientes[index].forEach(telefone => cliente.adicionarTelefone(telefone))
    empresa.adicionarCliente(cliente)
})

empresa.detalhe()