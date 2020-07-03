

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
console.log(arreglo1.concat(arreglo2));

//Encontrar un elemento en un arreglo
//console.log(meses);

