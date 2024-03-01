const input=document.querySelector("#input");

const matriz_code= [
  ["e", "enter"], //indice 0
  ["i", "imes"], //indice 1
  ["a", "ai"], //indice 2
  ["o", "ober"], //indice 3
  ["u", "ufat"], //indice 4
]

function boton_encriptar(){  
  const texto = encriptar(input.value);  //para que la constante texto cache el valor resultado de la funcion encriptar enviando valor de input
  document.getElementById("output").innerHTML=texto;  //para mandar el valor texto a un área del html
}

function encriptar(fraseEncriptada){
  for(let i=0; i<matriz_code.length; i++){
    if(fraseEncriptada.includes(matriz_code[i][0])){
        fraseEncriptada = fraseEncriptada.replaceAll(
        matriz_code[i][0],
        matriz_code[i][1]
      );
    }
  }
  return fraseEncriptada;
}

function boton_desencriptar(){
  const texto = desencriptar(input.value);
  document.getElementById("output").innerHTML=texto;
}

function desencriptar(fraseDesencriptada){
  for(let i=0; i<matriz_code.length; i++){
    if(fraseDesencriptada.includes(matriz_code[i][0])){
      fraseDesencriptada = fraseDesencriptada.replaceAll(
        matriz_code[i][1],
        matriz_code[i][0]
      );
    }
  }
  return fraseDesencriptada;
}

function boton_copiar(){ //la función para copiar el contenido de la caja de texto
  var text=document.getElementById("output");
  text.select();
  document.execCommand("copy");
}

function desaparece(){ //desaparecer los elementos al picar el boton desencriptar ó encriptar
  document.getElementById("desaparece").style.display = "none";
  return;
}

function aparece(){ //aparece el botón de copiar
  document.getElementById("boton-copiar").style.display = "inline";
  document.getElementById("output").style.display = "inline";
  return;
}
