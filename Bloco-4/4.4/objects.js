/*let name = 'Marta';
let lastName = 'Silva';
let age = '34';
let medals = { golden: 2, silver: 3};
let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
*/

let soccerPlayer = {
  name: 'Marta',
  lastName: 'Silva',
  age: '34',
  medals: {
    Golden: 2,
    Silver: 3 ,
  }
}

console.log('A jogadora ' +soccerPlayer.name+ ' ' + soccerPlayer.lastName+ ' tem ' +soccerPlayer.age+ ' idade.');

soccerPlayer['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora ' +soccerPlayer.name+ ' ' +soccerPlayer.lastName+ ' foi eleita a melhor do mundo 6 vezes.');

console.log('A jogadora possui ' +soccerPlayer.medals.Golden+ ' medalhas de ouro e ' +soccerPlayer.medals.Silver+ ' prata.' );

