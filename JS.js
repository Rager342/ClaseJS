let num1= 1
console.log(num1)
let num2=2.0
console.log(num2)
let cadena= "Hola Mundo"
console.log(cadena)


const txt1=new String("Hola a todos")
console.log(txt1)

console.log('1.2.3.4.5'.split('.'))
console.log(txt1.split(''))

console.log(txt1.length)

console.log(txt1.charAt(0))

console.log("Hola")


//Arreglos

var Animales=['Tigre', 'Ballena', 'Lobo', 'Aguila']

console.log(Animales.pop())
console.log(Animales)

console.log(Animales.push("Perro"))
console.log(Animales)

let Numeros=[11,10,5,4,12]
console.log(Numeros.reverse())

var Juntar=Numeros.join();
console.log(Juntar) //Junto los numeros

let anio=[1995,1999,2024,2020]
function encontrar(item){
    return item>=2000
}
console.log(anio.find(encontrar))
console.log(anio.some(encontrar))


var vestimenta= ['camisa','gorra','pantalon']

function miFuncion(item,index){
    console.log(index+":"+item)
}

vestimenta.forEach(miFuncion)

let array= Array.from("1A2B3C4D")
console.log(array)

let number=[32,33,35,40]
mifuncion2()
function validarArray(item){
    return item>=19
}
function mifuncion2(){
    console.log(number.every(validarArray))
}

//De un determinado arreglo con nombre y edad vamos a buscar aquellas personas que tengan mas de 5 años

let personas=[
    {nombre:"Alan",edad:10},
    {nombre:"Abdiel",edad:22},
    {nombre:"Adrian",edad:4},
    {nombre:"Larry",edad:17},
    {nombre:"Cesar",edad:3},
]

let busqueda=personas.filter(persona=>persona.edad>5)
console.log(busqueda)

//Hacer una busqueda de 10 trabajadores donde sean developers
let trabajadores=[
    {nombre:"Alan",rol:"Cocinero"},
    {nombre:"Abdiel",rol:"Sicario"},
    {nombre:"Adrian",rol:"developer"},
    {nombre:"Larry",rol:"developer"},
    {nombre:"Cesar",rol:"developer"},
    {nombre:"Mario",rol:"developer"},
    {nombre:"Arthur",rol:"developer"},
    {nombre:"Marcus",rol:"militar"},
    {nombre:"John",rol:"peleador"},
    {nombre:"AMLO",rol:"puto"},
]
let busq=trabajadores.filter(trabajador=>trabajador.rol=="developer")
console.log(busq)



console.log("Hola Mundo")