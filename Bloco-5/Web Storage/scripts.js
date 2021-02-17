//Acesse o elemento elementoOndeVoceEsta.
function lastChild() {
  document.querySelector("#pai").lastChild;
}
lastChild();

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
function acessarPaipeloFilho() {
  document.querySelector("#elementoOndeVoceEsta").parentNode.style.background =
    "green";
}
acessarPaipeloFilho();

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
function addText() {
  document.querySelector("#elementoOndeVoceEsta").firstElementChild.innerText =
    "Testando aqui";
}
addText();

//Acesse o primeiroFilho a partir de pai .
function acessarPrimeiroFilhoDePai() {
  document.querySelector("#pai").firstElementChild;
}
acessarPrimeiroFilhoDePai();

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
function acessarPrimeiroFilhoElementoOndeVoceEsta() {
  document.querySelector("#elementoOndeVoceEsta").firstChild;
}
acessarPrimeiroFilhoElementoOndeVoceEsta();

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
function acessandoTextoAtencao() {
  document.querySelector("#elementoOndeVoceEsta").parentNode.innerText;
}
acessandoTextoAtencao();

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
function acessarTerceiroFilhoElementoOndeVoceEsta() {
  document.querySelector("#elementoOndeVoceEsta").nextElementSibling;
}
acessarTerceiroFilhoElementoOndeVoceEsta();

//Agora acesse o terceiroFilho a partir de pai .
function acessarTerceiroFilhoDePai() {
  document.querySelector("#pai").childNodes[5];
}
acessarTerceiroFilhoDePai();

//Crie um irmão para elementoOndeVoceEsta .
function criandoIrmao() {
  let buscando_pai = document.querySelector("#pai");
  let criando_irmao = document.createElement("div");
  buscando_pai.appendChild(criando_irmao);
}
criandoIrmao();

//Crie um filho para elementoOndeVoceEsta .
function filhoDeElementoOndeVoceEsta() {
  let buscando_elementoOndeVoceEsta = document.querySelector(
    "#elementoOndeVoceEsta"
  );
  let criando_filho = document.createElement("div");
  buscando_elementoOndeVoceEsta.appendChild(criando_filho);
}
filhoDeElementoOndeVoceEsta();

//Crie um filho para primeiroFilhoDoFilho .
function filhoPrimeiroFilhoDoFilho() {
  let buscando_elementoPrimeiroFilhoDoFilho = document.querySelector(
    "#primeiroFilhoDoFilho"
  );
  let criandoFilho_primeiroFilhoDoFilho = document.createElement("div");
  buscando_elementoPrimeiroFilhoDoFilho.appendChild(
    criandoFilho_primeiroFilhoDoFilho
  );
  criandoFilho_primeiroFilhoDoFilho.className = "criandoFilho";
}
filhoPrimeiroFilhoDoFilho();

//A partir desse filho criado, acesse terceiroFilho .

//Remova todos os elementos da página, menos pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.
function excluindoOsElementos() {
  let gambiarra = document.querySelector("#pai").children;
  let filhoDeGambiarra = document.querySelector("#elementoOndeVoceEsta").children;
  for (let index = 0; index < gambiarra.length; index +=1) {
    if (gambiarra[index].id !== "elementoOndeVoceEsta") {
      gambiarra[index].remove();
      index -=1;
    }
  } 
  for (let index =0; index < filhoDeGambiarra.length; index +=1) {
    if (filhoDeGambiarra[index].id !== "primeiroFilhoDoFilho") {
      filhoDeGambiarra[index].remove();
      index -=1;
    }
  }
}

excluindoOsElementos();

