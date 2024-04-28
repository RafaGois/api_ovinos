function validatorMessage(atributo: string) {
    return `A propriedade [${atributo}] é inválida.`;
}

function notExists(atributo: string) {
    return `[${atributo}] não existe.`
}

export {
    validatorMessage,
    notExists
}