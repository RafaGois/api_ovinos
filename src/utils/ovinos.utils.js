function atribuiIdade(registros) {
    let dataAtual = new Date();
    return registros.map(reg => {
        let dataNascimento = new Date(reg.dtBirth);
        const milissegundosPorDia = 1000 * 60 * 60 * 24 * 30;
        const months = Math.floor((dataAtual - dataNascimento) / milissegundosPorDia);

        return {
            id: reg.id,
            tag: reg.tag,
            dtBirth: reg.dtBirth,
            mother: reg.mother,
            gender: reg.gender,
            createdAt: reg.createdAt,
            updatedAt: reg.updatedAt,
            age: months
        }
    })
}

module.exports = {
    atribuiIdade,
}