import { faker } from "@faker-js/faker";

//funcion para generar una cancion aleatoria
const generateSong = () => ({
  id: faker.string.uuid(),
  titulo: faker.music.songName(),
  artista: faker.music.artist(),
  album: faker.music.album(),
  duracion: faker.string.numeric(),
  genero: faker.music.genre(),
  fechaLanzamiento: faker.date.anytime(),
});

const generatePlaylist = () => {
    const number=faker.number.int({ min: 3, max: 10 });
    const songs= Array.from({length:number},generateSong); //Me devuelve un array que aplica la funcion que le paso ese numero de veces

  return {
    idPlaylist: faker.string.uuid(),
    nombre: faker.music.album(),
    descripcion: faker.lorem.lines(1),
    canciones: songs,
    creador:faker.person.fullName(),
    fechaCreacion: faker.date.anytime()
  };
};

export default {generateSong, generatePlaylist};
