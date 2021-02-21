//Define a list of artists
const artists = ['Jean-Jacques Goldman', 'Christophe Colomb', 'Leonard da Vinci', 'Jesus', 'Marie Curie', 'Hugh Hefner'];

//Define a list of actions
const actions = ['has written', 'has sailed to', 'has painted', 'has met', 'has discovered', 'has pusblished'];

//Define a list of objects
const objects = ['Bonne idée', 'America', 'Mona Lisa', 'God', 'radioactivity', 'playboy'];

const randomMessage = () => artists[Math.floor(Math.random() * artists.length)] + ' ' + actions[Math.floor(Math.random() * actions.length)] + ' ' +  objects[Math.floor(Math.random() * objects.length)] + '.';

console.log(randomMessage());