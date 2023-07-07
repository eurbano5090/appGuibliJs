
  var tabla=document.getElementById("tabla");
  var contenido=document.getElementById("contenido");
  var card=document.getElementById("card")
//consumo de api con fetch
console.log(tabla);
console.log(contenido);


  //fetch api o peticion para obtener las frases
  fetch(`https://studio-ghibli-films-api.herokuapp.com/api/`)
  .then(response=>response.json()) //se obtiene el json de la respuesta 
  .then(data=>{  //a esos datos se le llama con una variable data
    let datos=(Object.values(data));
    console.log(datos)  //impresion en consola para verificar
    mostrarTabla(datos);
 //   buscar(datos);
})         

function mostrarTabla(data){
     //limpiar elemento con id contenido
     contenido.innerHTML="";
     for(let temp of data){
   contenido.innerHTML+=

   `<div class="card-shadow my-5 text-white bg-dark mx-auto" style="width:18rem">
   <img src="${temp.poster}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${temp.title}</h5>
     <p class="card-text">${temp.director}</p>
   </div>`
    }
  }


  function mostrarCarta(){
    let busqueda = document.getElementById("ingreso").value;
    let tabla = document.getElementById("tabla")
    let contenido = document.getElementById("contenido");
    if (tabla != null && contenido != null){
     tabla.style.display = "none"
    contenido.style.display ="none"
    
    }
    fetch(`https://studio-ghibli-films-api.herokuapp.com/api/${busqueda}`)
        .then(response=>response.json())
        .then(valor=>{
        //  let datos=(Object.values(valor));
            console.log(valor);
            construirCarta(valor);
        })}
    
  function construirCarta(param){
     /*document.getElementById("tabla").style.display="none";
     document.getElementById("contenido").style.display="none";*/

          tabla.innerHTML=""
          contenido.innerHTML=""

          
       //   card.innerHTML=""
 //       for(let temp of param){
          card.innerHTML+=
          `<div class="card text-white bg-dark col-6 mx-auto" style="width:40rem">
          <img src="${param.poster}" width="160" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${param.title}</h5>
            <p class="card-text"> ${param.genre}</p>
            <p class="card-text">${param.synopsis}</p>
            <p class="card-text"><b>Director:</b> ${param.director}</p>
            <p class="card-text"><b>Año Estreno:</b> ${param.release}</p>
            <a href="#" class="btn btn-primary">Mas Informacion</a>
          </div>`
          }
// }
      
/*
function buscar(ingreso){
  contenido.innerHTML="";
  for(let temp of ingreso){
    if(temp.title == ingreso){
      carta.innerHTML+=
      `<div class="card" style="width: 48rem;">
      <img src="${temp.poster}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${temp.title}</h5>
        <p class="card-text">${temp.synopsis}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${temp.genre}</li>
        <li class="list-group-item">${temp.release}</li>
        <li class="list-group-item">${temp.director}</li>
      </ul> 
    </div>`
       }
    }
  }*/




