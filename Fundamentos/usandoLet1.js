let numero = 1
{
    let numero = 2
    console.log('Dentro =',numero) // Dentro = 2
}

// Observação let não funciona como variavel global, 
// mas de escopo, por isso valor não foi sobrescrito
console.log('Fora =', numero) // Fora = 1