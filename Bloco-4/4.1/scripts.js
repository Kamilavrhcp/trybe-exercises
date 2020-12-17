let singer = {
  name: 'Matthew',
  lastName: 'Cameron',
  nickName: 'Matt Cameron',
  birthday: '28/11/1962',
  age: '58',
  profession: 'baterista',
  bestAlbuns: {
    soundgarden: ['Ultramega Ok', 'Louder Than Love', 'Badmotorfinger', 'Superunknown', 'Down on the Upside', 'King Animal'],
    pearlJam: ['Binatural', 'Riot Act', 'Pearl Jam', 'BackSpacer', 'Ligthting Bolt', 'Gigaton'],
  },
  bestBand: ['Soundgarden', ' Pearl Jam ', ' Temple of the Dog ', ' Queens of the Stone Age ', ' The Smashing Pumpkins'],     
};

//acessando as propriedades dos objetos:
console.log('O cantor ' +singer.name+ ' ' + singer.lastName+ ' possui ' + singer.age + ' anos. ' +singer.nickName+ ' é ' +singer.profession+ ' das bandas ' + singer.bestBand + '. Trabalhou nos seguintes albuns: com Soundgarden ' +singer.bestAlbuns.soundgarden+ ' e com o Pearl Jam: ' +singer.bestAlbuns.pearlJam+ '.');


