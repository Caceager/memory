var nivel = 0;
$("button").click(function(){
  var a = this.innerHTML;
  if (a === "Nivel 1"){
    nivel = 1;
  }else if(a === "Nivel 2"){
    nivel = 2;
  }else{
    nivel = 3;
  }
  console.log("Nivel seleccionado: "+nivel);
  comenzarJuego(nivel);
});

function comenzarJuego(nivel){
  var puntuacion = 0;
  $("h2").addClass("oculto");
  $(".menu").addClass("oculto");
  $(".juego").removeClass("oculto");
  $("h1").text("Nivel seleccionado: "+nivel);
  crearCuadrados(nivel);

  for (var i = 0; i < (nivel+2)*(nivel+2); i++){
    $(".cuadrado")[i].setAttribute("id", "c"+i);
  }

  if (nivel === 2){
    distribuirFiguras(16);
  }
  else{
    distribuirFiguras((nivel+2)*(nivel+2)-1);
  }
  $(".cuadrado").click(function(event){
    seleccionJugador.push(event.target.innerHTML);
    idSeleccionJugador.push(event.target.id);
    mostrarSeleccion();
    $("#"+event.target.id).fadeOut(120).fadeIn(120);
    $("#"+event.target.id).removeClass("cartasVolteadas");
    if(seleccionJugador.length === 2 && seleccionJugador[0] != seleccionJugador[1]){
      setTimeout(function(){
        console.log("true");
        $("#"+idSeleccionJugador[0]).fadeOut(120).fadeIn(120);
        $("#"+idSeleccionJugador[0]).addClass("cartasVolteadas");
        $("#"+idSeleccionJugador[1]).fadeOut(120).fadeIn(120);
        $("#"+idSeleccionJugador[1]).addClass("cartasVolteadas");
        idSeleccionJugador = [];
        seleccionJugador = [];
      }, 1000);

    }
    else if(seleccionJugador.length === 2 && seleccionJugador[0] === seleccionJugador[1]){
      puntuacion +=1;
      console.log(puntuacion);
      idSeleccionJugador = [];
      seleccionJugador = [];
    }
});

var idSeleccionJugador = [];
var seleccionJugador = [];
function mostrarSeleccion(){
  console.log(seleccionJugador);
  console.log(idSeleccionJugador);
}

}
//$(".juego").append("<div class= 'cuadrado'>hola</div>");
function crearCuadrados(nivel){
  for (var i = 0; i < nivel+2; i++){
    for(var j = 0; j < nivel+2; j++){
      $(".juego").append("<div class= 'cuadrado noselect cartasVolteadas'></div>");
    }
  }
    $(".cuadrado").addClass("cLvl"+nivel);
  if (nivel === 1){
    var elemento = document.querySelectorAll(".cuadrado")[4];
    elemento.classList.add("cOculto");
  } else if(nivel === 3){
    var elementu = document.querySelectorAll(".cuadrado")[12];
    elementu.classList.add("cOculto");
  }

}

var letras = ["ф", "д", "ю", "ж", "п", "б", "Z", "ы", "э", "щ", "й", "я"];

var setDistr = [];
var finalDistr = [];

function distribuirFiguras(cantidad){
  for(i = 0; i < cantidad/2; i++){
    setDistr.push(letras[i]);
    setDistr.push(letras[i]);
  }
  console.log(finalDistr);
  for(i = 0; i < cantidad; i++){
    num = Math.floor(Math.random()*setDistr.length);
    agregar = setDistr.splice(num, 1);
    finalDistr.push(agregar[0]);
  }

  if (nivel === 2){
    listaCuadrados = document.querySelectorAll(".cuadrado");
    listaCuadrados.forEach(function(cuadr){
        var pos = parseInt(cuadr.id.slice(1,3));
        console.log(pos);
        cuadr.innerHTML = finalDistr[pos];
});
}else if(nivel === 1){
  listaCuadrados = document.querySelectorAll(".cuadrado");
  listCuadrados = Array.from(listaCuadrados);
  listaCuadrados1 = listCuadrados.slice(5,9);
  listaCuadrados2 = listCuadrados.slice(0,4);

  listaCuadrados1.forEach(function(cuadr){
      var pos = parseInt(cuadr.id.slice(1,3))-1;
      console.log(pos);
      cuadr.innerHTML = finalDistr[pos];
});
listaCuadrados2.forEach(function(cuadr){
    var pos = parseInt(cuadr.id.slice(1,3));
    console.log(pos);
    cuadr.innerHTML = finalDistr[pos];
});
    $(".cOculto").text("g");
}else if(nivel === 3){
  listaCuadrados = document.querySelectorAll(".cuadrado");
  listCuadrados = Array.from(listaCuadrados);
  listaCuadrados1 = listCuadrados.slice(13,25);
  listaCuadrados2 = listCuadrados.slice(0,12);

  listaCuadrados1.forEach(function(cuadr){
      var pos = parseInt(cuadr.id.slice(1,3))-1;
      console.log(pos);
      cuadr.innerHTML = finalDistr[pos];
});
listaCuadrados2.forEach(function(cuadr){
    var pos = parseInt(cuadr.id.slice(1,3));
    console.log(pos);
    cuadr.innerHTML = finalDistr[pos];
});
    $(".cOculto").text("g");
}
  }
