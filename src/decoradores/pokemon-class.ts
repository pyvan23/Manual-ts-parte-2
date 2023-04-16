function printConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printConsole;
  } else {
    return () => {};
  }
};

const bloquearPrototype = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

//factory decorator se usa () para que se ejecute
function checkValidIdPokemon() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error("el id debe estar en el rango de 1 y 800");
      } else {
        return originalMethod(id);
      }
    };
  };
}

//ejecuta la funcion sin una instancia-la ejecuta en tiempo de transpilacion
@bloquearPrototype
@printToConsoleConditional(false)
export class Pokemon {
  public pokemonApi: string = "https://pokeapi.com";

  constructor(public name: string) {}
  @checkValidIdPokemon()
  savePokemonDB(id: number) {
    console.log("pokemon guardado en base de datos");
  }
}
