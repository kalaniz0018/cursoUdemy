

           const producto1 = 'pizza',
                 precio1 = 30,
                 producto2 = 'hamburgesa',
                 precio2= 40;

                 let html;
/* Forma antigua
                 html = '<ul>'+
                        '<li>Orden: ' + producto1 + '<li>'+
                        '<li>Precio: ' + precio1  + '<li>'+
                        '<li>Orden: ' + producto2 + '<li>'+
                        '<li>Precio: '+ precio2 + '<li>' + 
                        '<li>Total: ' +( precio1 + precio2 )+ '<li>' +
                        '</ul>';
 */          

 /*temple literal*/
html = `
<ul>
    <li>Orden: ${producto1} </li>
    <li>Precio: ${precio1} </li>
    <li>Orden: ${producto2} </li>
    <li>Precio: ${precio2} </li>
    <li>Total: ${total(precio1,precio2)}</li>
    </ul>`;

    function total(precio1, precio2){
        return precio1 + precio2;
    }
    

document.getElementById('app').innerHTML = html;

/* Arreglos en JS y sus metodos*/
// Crear arreglo

const numeros = [10,20,30,40,50,60];
//console.log(numeros);

const meses = ['Enero', 'Febrero','Marzo','Abril','Mayo'];
//console.log(meses);

meses [5] = 'Junio';
meses [6] = 'Julio';
//Aniadir al inicio un arreglo ("unshift")
meses.unshift('Mes 0');

//Eliminar un elemento de un arreglo (desaparece Julio)
meses.pop()
//Eliminar un elemtno del arreglo (el primero)
meses.shift();
//Quitar un rango (por el medio)
meses.splice(2, 1);
  //Revertir
  meses.reverse();
  //Arreglo

   let arreglo1 = [1,2,3],
       arreglo2 = [9,8,7];
//console.log(arreglo1.concat(arreglo2));

//Ordenar un arreglo con letras alfabeticamente

const frutas = ['Banana', 'Manzana', 'Naranja', 'Fresas', 'Zanahoria'];

frutas.sort();
//console.log(frutas);

//Ordenar numeros x - y (menos a mayor)/ y - x (mayor a menor)

arreglo1 = [3,9,10,78,100,54,89,5,2,46,35];
 arreglo1.sort(function(x, y){
     return x- y;
 })
  //console.log(arreglo1);

//Encontrar un elemento en un arreglo
//console.log(meses);

//Crear un objeto(para llamar a uno poner "punto" y el nombre)
const persona = {
      nombre :'Karina',
      apellido : 'Alaniz Kogan',
      profesion : 'Programadora',
      email : 'karina.alaniz.kogan@gmail.com',

      //Agregar arreglo y acceder 
      edad : 20,
      musica : ['Queen', 'Mercedes Sosa', 'Silvio Rodriguez'],
      hogar: {
          ciudad: 'CABA',
          pais: 'Argentina'
      },
      nacimiento: function() {
          return new Date().getFullYear() - this.edad;
      }
}
//persona.musica.push('Alternativo');
//console.log(persona.nacimiento() );

//Como crear un arreglo de objetos 
//Mezcla entre definir un arreglo y agregarle objetos 

const autos = [ 
    {modelo: 'Citroen', motor: 6.2},
    {modelo: 'Fiat', motor: 6.1},
    {modelo: 'Hyundai', motor: 6.3}
 ];
  
for(let i = 0; i <autos.length; i++ ) {
    //console.log(`${autos[i].modelo} ${autos[i].motor}`);
}
//Con string literal, $, {} y ``. colocando los datos a gusto, y los valores accediendo a ellos de forma individual si se pueden modificar.
autos[0].modelo = 'Audi';
//console.log(autos);

//Function Declaration
 function saludar(nombre){
     //console.log(`Hola ${nombre}`);
 }
  saludar ('Ruben');
  saludar ('Karina');
  saludar ('Veronica');

  //Suma
   function sumar (a,b){
      //console.log(a+b);
  }
    sumar(1,2);
    sumar(3+4);
function sumar(a,b){
    return a +b;
}
let suma;
suma = sumar (1,2);
suma = sumar (3,4);
suma = sumar (5,2);

//console.log(suma);

function saludar(nombre = 'Visitante') {
    return `hola ${nombre}`;
}
 let saludo;
 saludo = saludar();

 //console.log(saludo);

//Function expression

const suma2 = function(a =3, b =5){
    return a + b;
}
 //console.log( suma2(1,2) );
 //console.log(suma2 (5));


  //IIFE funciones que se declaran y se invocan inmediatamente 
 ///(function (tecnologia){
    // console.log(`Aprendiendo ${tecnologia}`);
// })('JavaScript');
 
 // Metodos de propiedad
 // Cuando una función se pone dentro de un objeto y al crear este objeto las funciones que estan dentro se les conoce como método.

 const musica = {
     reproducir: function(id) { 
         console.log(`Reproduciendo Canción id ${id}`);
     },
     pausar: function(){
         console.log(`Pause la Música`);
     }
 }
 //Los metodos tambien pueden guardarse o crearse fuera del objeto.
  musica.borrar = function(id){
          console.log(`Borrando canción con el ID ${id}`);
  }
   musica.reproducir(30); 
   musica.pausar();
   musica.borrar(2);

    //Funcion que no existe Try catch, finally se ejecuta siempre por mas q haya o no haya tirado excepción

    try{
        algo();
    } catch (error){
        console.log(error);
    } finally {
        console.log("No le importa, ejecuta de todos modos");
    }
    
    function obtenerClientes(){
        console.log("Descargando...");

        setTimeout(function(){
             console.log("Completo")
        }, 3000);
        
    }