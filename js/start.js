const musicUrl = "./../assets/music/title-screen-music.mp3";
const music = new Audio(musicUrl);
const selection = "./../assets/sounds/selection.wav";
const gameStartSound = new Audio(selection);

window.onmouseover = () => {
    music.play();
}

music.loop = true;

const gameStartBtn = document.querySelector('.startBtn');
gameStartBtn.onclick = () => {
    gameStartSound.play(selection);
    setTimeout(() => {
        location.assign('/game.html');
    }, 2000);
}