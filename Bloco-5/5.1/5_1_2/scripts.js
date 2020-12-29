//Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
function criandoTag() {
  const tagH1 = document.createElement("h1");
  tagH1.innerHTML = "Exercício 5.2 - JavaScript Dom";
  document.body.appendChild(tagH1);
}
criandoTag();

function classMainContentCenterContant() {
  //Adicione a tag div com a classe main-content como filho da tag body;
  const tagDivMain = document.createElement("div");
  tagDivMain.className = "main-content";
  document.body.appendChild(tagDivMain);

  //Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;

  const divCenterContent = document.createElement("div");
  divCenterContent.className = "center-content";
  tagDivMain.appendChild(divCenterContent);
}
classMainContentCenterContant();

