function laCajaDePandora(numero) {
    if (numero % 2 === 0) {    
        const binario = numero.toString(2)
        return binario
    }
    if (numero % 2 !== 0) {
        const hexadecimal = numero.toString(16)
        return hexadecimal
    }
}