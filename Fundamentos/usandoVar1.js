{
    {
        {
            var sera = 'Será???'
            console.log(sera) // Será???
        }
    }
}

console.log(sera) // Será???

function teste() {
    var local = 123
    console.log(local)
}

teste() //123

// Variavel criada dentro de function, não pode ser usada fora do bloco.
// console.log(local) // error