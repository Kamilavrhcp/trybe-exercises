/*let pizzas = {
  flavor: 'A moda',
  price: '40.00',
  bordaCatupiry:true, 
}

for(let key in pizzas){
  console.log(pizzas[key]);
}*/

//o código que mostra as marcas de carros presentes em um Array é:
let cars = ['Saab', 'Volvo', 'BMW'];
for (let i in cars) {
 // console.log(cars[i])
}

//bandas grunges
//for-in
let vocalsGrunge = {
  pj: 'Eddie Vedder',
  soundgarden: 'Chris Cornnel',
  lovesMotherBone: 'Andrew Wood',
};
for(let i in vocalsGrunge) {
 // console.log(i, vocalsGrunge[i]);
}

//for-of
let bandsGrunges = ['Pearl Jam', 'soundGarden', 'Loves Mother Bone'];
for(let bands of bandsGrunges) {
 // console.log(bands)
}
