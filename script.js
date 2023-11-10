const musicContainer = document.getElementById('music-container');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const imageContainer = document.getElementById('img-container');
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const next = document.getElementById('next');
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const songs = ['hey', 'summer', 'ukulele'];

let songIndex = songs.length - 1;

loadSong(songs[songIndex]);

function loadSong(song){
     title.innerText = song;
     audio.src = `music/${song}.mp3`;
     cover.src = `images/${song}.jpg`;
}

function playSong(){
     musicContainer.classList.add('play');
     play.querySelector('i.fas').classList.remove('fa-play');
     play.querySelector('i.fas').classList.add('fa-pause');
     audio.play();
}

function pauseSong(){
     musicContainer.classList.remove('play');
     play.querySelector('i.fas').classList.remove('fa-pause');
     play.querySelector('i.fas').classList.add('fa-play');
     audio.pause();
}

function prevSong(){
     songIndex--;
     if(songIndex < 0){
          songIndex = songs.length -1;
     }

     loadSong(songs[songIndex]);
     playSong();
}

function nextSong(){
     songIndex++;
     if(songIndex > songs.length - 1){
          songIndex = 0;
     }

     loadSong(songs[songIndex])
     playSong()
}


play.addEventListener('click', () => {
     const isPlaying = musicContainer.classList.contains('play');
     // console.log(isPlaying);
     if(isPlaying){
          pauseSong();
     }else{
          playSong();
     }
});

function updateProgress(e){
     const { currentTime, duration } = e.srcElement;
     // console.log(e);
     const percentProgress = (currentTime / duration) * 100;
     progress.style.width = `${percentProgress}%`;
}

function seekProgress(e){
     const width = this.clientWidth;
     const clickX = e.offsetX;
     const duration = audio.duration;
     console.log(e);

     audio.currentTime = (clickX / width) * duration;
}

prev.addEventListener('click', prevSong);
next.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', seekProgress);


