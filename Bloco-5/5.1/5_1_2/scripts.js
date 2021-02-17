//1-Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
const tagH1 = document.createElement("h1");
tagH1.innerHTML = "Exercício 5.2 - JavaScript Dom";
//10-Adicione a classe title na tag h1 criada;
tagH1.className= "title";
document.body.appendChild(tagH1);

//2-Adicione a tag div com a classe main-content como filho da tag body;
const tagDivMain = document.createElement("div");
tagDivMain.className = "main-content";
tagDivMain.style.background = 'Honeydew';
document.body.appendChild(tagDivMain);

//3-Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
const divCenterContent = document.createElement("div");
divCenterContent.className = "center-content";
//14-Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
divCenterContent.style.background = 'green';    
tagDivMain.appendChild(divCenterContent);

//4-Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
const tagP = document.createElement('p');
tagP.innerText = 'Estudar na Trybe é muito bom!';
divCenterContent.appendChild(tagP);

//5-Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
const tagDivLeftContent = document.createElement('div');
tagDivLeftContent.className = 'left-content';
tagDivMain.appendChild(tagDivLeftContent);
//12-Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
//tagDivLeftContent.remove();

//6-Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
const tagRightContent = document.createElement('div');
tagRightContent.className = 'right-content';
//13-Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
tagRightContent.style.marginRight = 'auto';
tagDivMain.appendChild(tagRightContent);

//7-Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
const addImg = document.createElement('img');
addImg.src = 'https://picsum.photos/200';
addImg.className ='small-image';
tagDivLeftContent.appendChild(addImg);

//8-Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
const listsUl = document.createElement('ul');
tagRightContent.appendChild(listsUl);
const arrayNumbers =['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito'];
  for(let num in arrayNumbers) {
    const listLi = document.createElement('li');
    listLi.innerHTML = arrayNumbers[num];
    listsUl.appendChild(listLi)
  listsUl.remove();
  }

  //9-Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
  for(let index = 1; index <=3; index +=1) {
  const tagsH3 = document.createElement('h3');
  tagsH3.innerHTML = ' ' + index;
   //11-Adicione a classe description nas 3 tags h3 criadas;
  tagsH3.className = 'description';
  tagDivMain.appendChild(tagsH3);
  tagsH3.remove();
  } 
  
