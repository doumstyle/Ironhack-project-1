const musicUrl = "../Ironhack-project-1/assets/music/title-screen-music.mp3";
const music = new Audio(musicUrl);
const selection = "../Ironhack-project-1/assets/sounds/selection.wav";
const gameStartSound = new Audio(selection);

window.onmouseover = () => {
    music.play();
    const title = document.querySelector('#title h1');
    title.classList.add('rotate');
}

music.loop = true;

const gameStartBtn = document.querySelector('.startBtn');
gameStartBtn.onclick = () => {
    gameStartSound.play(selection);
    gameStartBtn.setAttribute('src', '../Ironhack-project-1/game.html');
    setTimeout(() => {
        location.assign('../Ironhack-project-1/game.html');
    }, 2000);
}