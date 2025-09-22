const videojuegos = Object.freeze([
        { "id": 1, "nombre": "The Legend of Zelda: Breath of the Wild", "genero": "aventura", "plataforma": "Nintendo Switch" },
        { "id": 2, "nombre": "Super Mario Odyssey", "genero": "plataformas", "plataforma": "Nintendo Switch" },
        { "id": 3, "nombre": "Red Dead Redemption 2", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
        { "id": 4, "nombre": "The Witcher 3: Wild Hunt", "genero": "RPG", "plataforma": "PC" },
        { "id": 5, "nombre": "Fortnite", "genero": "battle royale", "plataforma": "multiplataforma" },
        { "id": 6, "nombre": "Minecraft", "genero": "sandbox", "plataforma": "multiplataforma" },
        { "id": 7, "nombre": "Overwatch", "genero": "shooter", "plataforma": "multiplataforma" },
        { "id": 8, "nombre": "FIFA 20", "genero": "deportes", "plataforma": "multiplataforma" },
        { "id": 9, "nombre": "Super Smash Bros. Ultimate", "genero": "lucha", "plataforma": "Nintendo Switch" },
        { "id": 10, "nombre": "League of Legends", "genero": "MOBA", "plataforma": "PC" },
        { "id": 11, "nombre": "God of War", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
        { "id": 12, "nombre": "Animal Crossing: New Horizons", "genero": "simulación", "plataforma": "Nintendo Switch" },
        { "id": 13, "nombre": "Call of Duty: Warzone", "genero": "shooter", "plataforma": "multiplataforma" },
        { "id": 14, "nombre": "Cyberpunk 2077", "genero": "acción-RPG", "plataforma": "multiplataforma" },
        { "id": 15, "nombre": "Assassin's Creed Valhalla", "genero": "acción-aventura", "plataforma": "multiplataforma" },
        { "id": 16, "nombre": "Among Us", "genero": "party", "plataforma": "multiplataforma" },
        { "id": 17, "nombre": "Pokémon Sword and Shield", "genero": "RPG", "plataforma": "Nintendo Switch" },
        { "id": 18, "nombre": "Genshin Impact", "genero": "acción-RPG", "plataforma": "multiplataforma" },
        { "id": 19, "nombre": "Valorant", "genero": "shooter táctico", "plataforma": "PC" },
        { "id": 20, "nombre": "Death Stranding", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
        { "id": 21, "nombre": "Spider-Man: Miles Morales", "genero": "acción-aventura", "plataforma": "PlayStation 5" },
        { "id": 22, "nombre": "Hades", "genero": "roguelike", "plataforma": "PC" },
        { "id": 23, "nombre": "Overcooked! 2", "genero": "cooperativo", "plataforma": "multiplataforma" },
        { "id": 24, "nombre": "Sekiro: Shadows Die Twice", "genero": "acción-aventura", "plataforma": "multiplataforma" },
        { "id": 25, "nombre": "Rainbow Six Siege", "genero": "shooter táctico", "plataforma": "multiplataforma" },
        { "id": 26, "nombre": "Grand Theft Auto V", "genero": "acción-aventura", "plataforma": "multiplataforma" }
    ]);

//1) Un conjunto de videojuegos cuyo número de identificación es divisible uniformemente por 3.
const juegosIdentificacionDivisible3=videojuegos.filter(juego=>juego.id%3==0);
console.log(juegosIdentificacionDivisible3);

//2) Un conjunto de videojuegos que pertenecen al género “acción-RPG”.
const juegosAccionRPG=videojuegos.filter(juego=>juego.genero.includes("acción-RPG"));
console.log(juegosAccionRPG);

//3) Un conjunto de videojuegos que tienen más de un género.
const juegosMasDeUnGenero=videojuegos.filter(juego=>juego.genero.includes(" "));
console.log(juegosMasDeUnGenero);

//4) Una lista con los nombres de los videojuegos.
const listaNombreVideoJuegos=videojuegos.map(juego=>juego.nombre);
console.log(listaNombreVideoJuegos);

//5) Una lista con los nombres de los videojuegos con un número de identificación superior a 19.
const listaNombreVideoJuegosMayor19=videojuegos.filter(juego=>juego.id>19).map(juego=>juego.nombre);
console.log(listaNombreVideoJuegosMayor19);

//6) Una lista con los nombres de los videojuegos cuyo único género es “shooter”.
const listaNombreVideoJuegosShooter=videojuegos.filter(juego=>juego.genero==="shooter").map(juego=>juego.nombre);
console.log(listaNombreVideoJuegosShooter);

//7) Una lista que contenga solo el primer género de todos los videojuegos cuyo segundo género es “aventura”.
const listaPrimerGeneroSegundoAventura=videojuegos.filter(juego => juego.genero.includes("-aventura")).map(juego => juego.genero.split("-")[0]);
console.log(listaPrimerGeneroSegundoAventura);

//8) Un conteo del número de videojuegos que son del género “party”.
const cantidadVideojuegosParty=videojuegos.filter(juego=> juego.genero.includes("party")).length;
console.log(cantidadVideojuegosParty);

//9) Una lista con todos los videojuegos excepto aquellos cuyo número de identificación sea múltiplo de 5.
const listaVideojuegosNoMultiplosDe5=videojuegos.filter(juego=>juego.id%5!=0);
console.log(listaVideojuegosNoMultiplosDe5);

//10) Una lista con todos los videojuegos y para el videojuego con el número de identificación 5, se cambia su género por “otro”.
const reemplazarGeneroVideojuego5=(juego)=>{
    if(juego.id===5){
        juego.genero="otro";
        return juego;
    }
    return juego;
}
const listaVideoJuegosConGeneroDel5Modificado=videojuegos.map(reemplazarGeneroVideojuego5);
console.log(listaVideoJuegosConGeneroDel5Modificado);