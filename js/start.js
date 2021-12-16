const musicUrl = "Ironhack-project-1/assets/music/title-screen-music.mp3";
const music = new Audio(musicUrl);
const selection = "assets/sounds/selection.wav";
const gameStartSound = new Audio(selection);

window.onmouseover = () => {
    music.addEventListener('canplaythrough', () => {
        music.load();
    });
    const title = document.querySelector('#title h1');
    title.classList.add('rotate');
}

music.loop = true;

const gameStartBtn = document.querySelector('.startBtn');
gameStartBtn.onclick = () => {
    gameStartSound.play(selection);
    setTimeout(() => {
        location.assign('/game.html');
    }, 2000);
}