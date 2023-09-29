function atribuiIdade(registros) {
    let dataAtual = new Date();
    return registros.map(registro => {
        let dataNascimento = new Date(registro.dtNascimento);
        const milissegundosPorDia = 1000 * 60 * 60 * 24 * 30;
        const meses = Math.floor((dataAtual - dataNascimento) / milissegundosPorDia);

        return {
            id: registro.id,
            brinco: registro.id,
            dtNascimento: registro.dtNascimento,
            brincoMae: registro.brincoMae,
            genero: registro.genero,
            createdAt: registro.createdAt,
            updatedAt: registro.updatedAt,
            idade: meses
        }
    })
}

module.exports = {
    atribuiIdade,
}