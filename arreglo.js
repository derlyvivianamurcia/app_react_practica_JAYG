let frutas = ['manzana', 'pera', 'fresa', 'banano']
console.log(frutas.length)

var aDias = new Array ('Domingo', 33, 'Colombia');
console.log(aDias)

var dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']
console.log(dias.length)

// for y MAP
//FOR
const name = ['Luisa', 'Cristian', 'Juan', 'David']
const capitalNames=[];

for (let i = 0; i < name.length; i++) {
    const capitalName = name[i].toUpperCase();
    capitalNames.push(capitalName);
    
}
console.log(capitalNames)
P//MAR
const name = ['Luisa', 'Cristian', 'Juan', 'David']
const capitalNames = name.map(
    name => name.toUpperCase
)
console.log(capitalNames)

