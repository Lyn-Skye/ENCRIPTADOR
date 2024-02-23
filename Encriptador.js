const input=document.querySelector("#input");

const matriz_code= [
  ["e", "enter"], //indice 0
  ["i", "imes"], //indice 1
  ["a", "ai"], //indice 2
  ["o", "ober"], //indice 3
  ["u", "ufat"], //indice 4
]

function boton_encriptar(){
  const texto = encriptar(input.value);
  console.log(texto); 
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
  console.log(texto); 
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

function boton_copiar(){
  const texto = desencriptar(input.value);
  console.log(texto); 
}


/*
function limpiarCaja() {
    document.querySelector('#input').value ='';
}



var textarea = document.getElementById("my-button");
button.addEventListener("click", changeColor);

function changeColor() {
  document.getElementById("my-div").style.backgroundColor = "green";
}



function swap(str) {
    var texto = ''
    var string;
    for (i = 0; i <= str.length - 1; i++) {
      string = str[i];  
      if (str[i] == string.toUpperCase()) {
        texto += string.toLowerCase();
      } else {
        texto += string.toUpperCase();
      }
    }
    return texto;
  }
  
  console.log(swap('PeTeR')); */