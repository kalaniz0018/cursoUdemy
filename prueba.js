

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
         //console.log(`Reproduciendo Canción id ${id}`);
     },
     pausar: function(){
         //console.log(`Pause la Música`);
     }
 }
 //Los metodos tambien pueden guardarse o crearse fuera del objeto.
  musica.borrar = function(id){
          //console.log(`Borrando canción con el ID ${id}`);
  }
   musica.reproducir(30); 
   musica.pausar();
   musica.borrar(2);

    //Funcion que no existe Try catch, finally se ejecuta siempre por mas q haya o no haya tirado excepción

    try{
        algo();
    } catch (error){
        //console.log(error);
    } finally {
        //console.log("No le importa, ejecuta de todos modos");
    }
    
    function obtenerClientes(){
        //console.log("Descargando...");

        setTimeout(function(){
             //console.log("Completo")
        }, 3000);
        
    }

    //Fechas
    //En JavaScript existe un objeto llamadl Date

    const diaHoy = new Date();

    let valor;
    // Obtener Mes
    valor = diaHoy.getMonth();
    // Obtener Dia
    valor = diaHoy.getDate();
    valor = diaHoy.getFullYear();
    //Obtener el Anio
    valor = diaHoy.getFullYear();
    //Minutos
    valor = diaHoy.getMinutes();
    //Hora
    valor = diaHoy.getHours();
    //Segundos

    valor = diaHoy.getFullYear();
    valor = diaHoy.getFullYear(2016);
    valor = diaHoy.getFullYear();


     //console.log(valor);
    //Estructura de control, IF, ELSE, ELSEIF

    const edad = 17;

    if(edad >= 18) {
        //console.log('Puedes entrar al sitio');
    }else{
        //console.log('No puedes entrar al sitio');
    }

   //Como comprbar que una variable tiene un valor
    let puntaje;

    if(typeof puntaje != 'undefined') {
        //console.log(`El puntaje fue de ${puntaje}`);
    }else {
       // console.log(`No hay puntaje`);
    }
    
        let efectivo = 500;
        let totalCarrito = 300;

        if(efectivo > totalCarrito){
            //console.log('Pago Correcto');
        }else{
            //console.log('Fondos Insuficuentes');
        }

        let hora = 25;
        if(hora > 0 && hora <= 10){
            console.log('Buenos Dias!!');
        } else if(hora > 10 && hora<=18){
             //console.log('Buenas Tardes');
        } else if(hora > 18 && hora<=24){
             //console.log('Buenas Tardes');
        } else{
            //console.log('Hora no valida');
        }
        
        /*Siempre que haya al menos dos opciones, en este caso de puntaje y se cumplan las dos condiciones, 
            se va a ejecutar la 1ra que encuentre que cumple la condicion queen este caso seria "puntaje /, 150"*/

        let puntajes = 100;
        if(puntajes < 150){
            //console.log('Puntajes < 150');
        }else if (puntajes < 200){
            //console.log('Puntajes <200');
        }

        //Operador || 
        
        let efectivos = 300,
            credito = 700,
            totalesCarrito = 500;

            if(totalesCarrito < efectivos || totalesCarrito < credito || totalesCarrito < disponible) {
                //console.log('Puedo pagar');
            } else {
                //console.log('No puedo pagar');
            }

            //Ternario, es como unir en una sola linea el IF Y ELSE
            ///const logueado = true;
                        //  condicion //   //   IF   // //else//  
            //console.log(logueado === true ?'Si se logueo' : 'No se logueo');
              // llaves para el IF ?//  // llaves para el else :/

              //Switch en JavaScript
              const metodoPago = 'debito';

        switch(metodoPago){
         case 'efectivo':
             //console.log(`El usuario pago con ${metodoPago}`);
             break;
        case 'cheque':
            //console.log(`El usuario pago con ${metodoPago}`);
            break;
        case 'credito':
            //console.log(`El usuario pago con ${metodoPago}`);
            break;
            default:
                //console.log('Metodo de pago no disponible');
                break;
    }
            
    let mes;
    switch(new Date().getMonth()){
        case 0:
            mes = 'Enero';
            break;
        case 1:
            mes = 'Febrero';
            break;
        case 2:
                mes = 'Marzo';
                break;    
        case 3:
                mes = 'Abril';
                break;
       case 4:
                mes = 'Mayo';
                break; 
        case 5:
                mes = 'Junio';
                break; 
        case 6:
                mes = 'Julio';
                break; 
        case 7:
                mes = 'Agosto';
                break; 
        case 8:
                mes = 'Septiembre';
                break; 
        case 9:
                mes = 'Octubre';
                break; 
        case 10:
                mes = 'Novimbre';
                break;
        case 11:
                mes = 'Diciembre';
                break;
    }
    //console.log(`este mes es ${mes}`);

 // For Loops un loop en cualquier lenguaje de programacion usualmente es codigo que se repite una y otra vez hasta que cierta condicion se cumple.
  //For Loops, la estrucura de un foro es la siguiente... escibis for (condicion) {es el codigo que se va a repetir} lo que esta entre parentesis e=consta de tres partes
  // 1ro Inicializar un valor  
  // 2do Son las condiciones de hasta cuando quieres que se corra este codigo, en general pones la misma variable q es la q vas a estar incrementando 
  // 3ro Cuantas veces quieres que corra
  // Como ultimo va el Incremento

  //for(let i = 0; i < 10; i++){
      //console.log(`Numero: ${i}`);
  //}
  
  for(let i = 0; i < 10; i++){
      if(i == 5) {
          //console.log('voy en el 5');
          continue;
      }
      //console.log(`${i}`);
  }
  //Otra manera es en vez de 'continue', poner break que se va a detener hasta el 5. 
  

  for(let i = 0; i < 10; i++){
      if(i % 2 == 0) {
          //console.log(`El numero ${i}es Par`);
      }else{
        //console.log(`El numero ${i}es Impar`);
      }
  }

  const arregloProducto = ['Camisa','Boleto','Guitarra','Disco'];



  for(let i = 0; i < arregloProducto.length; i++){
        //console.log(`Tu Producto ${arregloProducto[i]} fue agregado`);
  }

  //While  si el arreglo queda vacio, no recorre ni una vez, lo que hace el while es revisar que la condicion se cumpla antes de correr el codigo 

   
  let i = 0;

  while(i < 10) {

      if(i === 5) {
          //console.log('cinco');
          i++;
          break;
      }
      //console.log(`Numero: ${i}`);
      i++;
  }
 
  const musicaaa = ['Cancion 1','Cancion 2','Cancion 3'];

  i = 0;

  while( i < musicaaa.length){

      //console.log(`Reproduciendo la cancion ${musicaaa[i]}`);
       i++;
  }

  //Do While Loop tiene caracteristica en la que corre el codigo al menos una vez sin importar si la condicion se cumple o no.
   
  //let i = 1000;

  do{
      //console.log(`Numero: ${i}`);
      i++;
  }while( i < 10);

  //ForEach, Map e iteradores

  //ForEach para recorrer un arreglo

  const pendientes = ['Tareas','Comer','Proyecto','Aprender JavaScript'];

  //For
   for(let i = 0; i < pendientes.length; i++){
       //console.log(pendientes[i]);
   }

   //ForEach

   pendientes.forEach(function(pendiente,index){
      // console.log(`${index}: ${pendiente}`);
   });


  //console.log(pendientes);

  //Map, se puede utilizar para recorrer este carrito, const, nombre, nombre del producto para acceder a cada uno de ellos va a ser igual a... y tenemos que usar el nombre del arreglo que queremos recorrer

  const carrito = [ 
      {id: 1, producto: 'Libro'},
      {id: 2, producto: 'Camisa'},
      {id: 3, producto: 'Guitarra'},
      {id: 4, producto: 'Disco'},
    ];
const nombreProducto = carrito.map(function(carrito) {
    return carrito.producto;
})

    //console.log(carrito);

    //For

    const automovil = {
        modelo: 'C4',
        motor:'6.1',
        Anio:'2007',
        marca:'Citroen'
    } 
    for( let auto in automovil){
       //console.log(`${auto} : ${automovil[auto]}`);
    }
     //console.log(automovil);

     //Iteradores en JavaScript ya incluidos

     const ciudades = ['Londres', 'New York', 'Argentina', "Paris"];
     const ordenes = new Set ([123, 231, 131, 102 ]);
     const datos = new Map();
     datos.set('nombre', 'Juan');
     datos.set('Profesion', 'Desarrollador Web');

     //console.log(ciudades);
     //console.log(ordenes);
     //console.log(datos);

    //Entries iterador
    // Values a las ciudades
    //for(let entrada of ciudades) {
    //   console.log(entrada);
    //}

    //Entries para las ordenes
    // for(let entradas of ordenes.entries() ){
    //     console.log(entradas);
    // }


    //Entries para el Map
    //for (let entrada of datos.entries() ){
    //  console.log(entrada);
    // }

    //Window Objects

    let altura,
        anchura;

        altura = window.outerHeight;   // altura
        anchura = window.outerWidth;   // ancho

        //console.log(altura);
        //console.log(anchura);

    //Obteber solo la ventada 
    
    altura = window.innerHeight;   
    anchura = window.innerWidth; 

        //Ubicacion 
        let ubicacion;
        ubicacion = window.location;
        //window.location.href = 'http://twitter.com' para redireccionarlo auomaticamente directo a una pagina que quieras


        //Navigator        

        ubicacion = window.navigator;

        //console.log(ubicacion);

         //Scope en JavaScript es la visibilidad que tiene un valor en JS dentro de una funcion, bloque, un for, etc

         var a = 'a';
         let b = 'b';
         const c = 'c';
        //Scoop de la funcion 
         function funcionScope(){ //estas variables solo existen en esta funcion "funcionScope".
            var a = 'A';
            let b = 'B';
            const c = 'C';
            console.log('FUNCION: ' +  a,b,c);
         }
         funcionScope();




         console.log('GLOBALES:' + a,b,c); // variables globales, no estas dentro de una funcion, bloque de codigo, y puedne ser accedidos por otras funciones y bloques de codigo en cualquier ligar del programa sib globales.


        // Scoop de bloque, usuallmente es todo lo qe esta dentro de las llaves {}
         if(true) {
            var a = 'AA';
            let b = 'BB';
            const c = 'CC';
             console.log('BLOQUE: ' +  a,b,c);
         }

        // Lo mas importante es que este codigo es ej var puede ser global sin embargo en la ejecucion del programa si puede ser modificado, y modificar las variables globales q no es correcto.
        // Mientras Let y Const estas variables son reescritas dentro de la funcion, bloque de codigo se quedan en esos bloques de codigo y esas funciones y no afectan lo que viene siendo las variables globales.