function printConsole(constructor: Function) {
    console.log(constructor)
}

const printToConsoleConditional = (print: boolean = false): Function => {
    if (print) {
        return printConsole
    } else {
        return () => { }
    }
}

//ejecuta la funcion sin una instancia-la ejecuta en tiempo de transpilacion
@printToConsoleConditional(true)
export class Pokemon {

    public pokemonApi: string = 'https://pokeapi.com'

    constructor(public name: string) {

    }
}