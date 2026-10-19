const FILIAL = new Map([
    [1, "Caxias do Sul"],
    [2, "Flores da Cunha"],
    [3, "Farroupilha"],
    [4, "Bento Goncalves"]
]);

const CARGO = new Map([
    [1, "Colaborador"],
    [2, "Gerente"],
])

class Funcionario {
    #nome;
    #codCargo;
    #codFilial;

    constructor(nome, codCargo, codFilial) {
        if (typeof nome !== "string" || nome.trim() === "") {
            throw new TypeError("Nome deve ser uma string e não pode ser vazia!");
        }

        if (!CARGO.has(codCargo)) {
            throw new RangeError(`Código cargo ${codCargo} Inválido`);
        }
        
        if (!FILIAL.has(codFilial)) {
            throw new RangeError(`Código filial ${codFilial} invalido`);
        }

        this.nome = nome;
        this.codCargo = codCargo;
        this.codFilial = codFilial;
    }

    toString() {
        return `Funcionario: ${this.nome} (${CARGO.get(this.codCargo)}) | ${FILIAL.get(this.codFilial)}`;
    };
}
try {
    const f1 = new Funcionario("pedro", 2, 4);
} catch (e) {
    console.error(e.message);
}


console.log(f1.toString());