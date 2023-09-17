const btn = document.querySelector('#btn')
const formulario = document.querySelector('#formulario');



/*Funcion para extraer todos los datos del formulario y convertirlos en formato JSON */

const getData = (event) => {

    /*constructor que crea un objeto de tipo FormData */
const datos = new FormData(formulario);

 /* El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.*/
const datosCompletos = Object.fromEntries(datos.entries());
console.log(JSON.stringify(datosCompletos));
formulario.reset();
return datosCompletos;

}

/*Funcion para colocar los datos en el servidor*/
const postData = async () => {

/*Crea un objeto con la info del formulario*/
const nuevoUsuario = getData();

try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
/*especifica el método a usar, post como lo solicitado*/
method: 'POST',
/*Especifica el tipo de info json*/
headers: {'Content-Type': 'application/json'},
/*pone la info en formato json*/
body: JSON.stringify(nuevoUsuario)
});

if(response.ok){
    const jsonResponse = await response.json();

    /*código a ejecutarse con la respuesta*/

    alert("Formulario Enviado :)");
}
}catch(error){
    alert(error);
}

}


btn.addEventListener('click', (event) => {
    event.preventDefault();
    postData();
})

