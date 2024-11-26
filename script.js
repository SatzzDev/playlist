const loadingOverlay = document.createElement('div');
loadingOverlay.className = 'fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center text-white';
loadingOverlay.innerHTML = '<div class="spinner"></div>';
document.body.appendChild(loadingOverlay);

let songs = []; 
fetch('/playlist.json') 
.then(response => response.json())
.then(data => {
songs = data; 
loadSong(0); 
loadingOverlay.remove();
})
.catch(error => console.error("Error fetching the playlist:", error));

const audio = new Audio();
const playButton = document.getElementById('playButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const progressBar = document.getElementById('progressBar');
const progressContainer = document.querySelector('.w-full.bg-gray-600');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const albumImage = document.getElementById('albumImage');
const songTitle = document.getElementById('songTitle');
const channelName = document.getElementById('channelName');
const playIcon = document.getElementById('playIcon');
let currentSongIndex = 0;

let currentLyrics = []; // Array to store lyrics with timestamps
const lyricsContent = document.getElementById('lyrics');
const showSongsButton = document.getElementById('showSongsButton');
const songModal = document.getElementById('info-popup');
const closeSongsButton = document.querySelector('#info-popup button'); 
const songList = document.getElementById('songList');
// Function to fetch and parse LRC file
function fetchLrcFile(index) {
const song = songs[index];
// Construct the LRC file URL based on the song's channel and title
const url = `https://www.lyricsify.com/lyrics/${song.channel.toLowerCase().replace(/ /g, "-")}/${song.title.replace(/ /g, "-")}`;
fetch(url)
.then(response => response.text())
.then(data => {
const parser = new DOMParser();
const doc = parser.parseFromString(data, 'text/html');
const mainPageDiv = doc.querySelector('.main-page');
const songDivs = mainPageDiv.querySelectorAll('div[id^="lyrics_"]');
if (songDivs.length > 0) {
const firstSongDiv = songDivs[0];  
const songId = firstSongDiv.id.split('lyrics_')[1]; 
console.log(`Found song with ID: ${songId}`);
const lyricsDiv = doc.querySelector(`#lyrics_${songId}_details`);
if (lyricsDiv) {
const lyricsText = lyricsDiv.textContent || lyricsDiv.innerText;
currentLyrics = parseLrc(lyricsText);
} else {
console.error("Lyrics div not found for song ID:", songId);
}
} else {
console.error("No song divs found under .main-page");
}
})
.catch(error => console.error("Error fetching or processing the LRC file:", error));
}
// Function to parse LRC format
function parseLrc(lrc) {
const lines = lrc.split('\n');
return lines.map(line => {
const match = line.match(/\[(\d{2}):(\d{2}\.\d{2})\](.*)/);
if (match) {
const minutes = parseInt(match[1]);
const seconds = parseFloat(match[2]);
return {
time: minutes * 60 + seconds,
text: match[3].trim()
};
}
return null;
}).filter(item => item !== null);
}

function updateLyrics() {
  const currentTime = audio.currentTime;
  let activeIndex = -1;

  // Cari lirik aktif berdasarkan waktu
  for (let i = 0; i < currentLyrics.length; i++) {
    if (currentTime >= currentLyrics[i].time) {
      activeIndex = i;
    } else {
      break;
    }
  }

  if (activeIndex !== -1) {
    const lyricsContainer = document.getElementById('lyricsContainer');
    lyricsContainer.innerHTML = ''; // Kosongkan container

    currentLyrics.forEach((line, index) => {
      const lyricDiv = document.createElement('div');
      lyricDiv.className = 'lyric-line';
      lyricDiv.textContent = line.text;

      if (index === activeIndex) {
        lyricDiv.classList.add('active');
      }

      lyricsContainer.appendChild(lyricDiv);
    });

    // Scroll otomatis ke baris lirik aktif dengan smooth scroll
    const activeLyric = document.querySelector('.lyric-line.active');
    if (activeLyric) {
      const containerHeight = lyricsContainer.clientHeight;
      const activeTop = activeLyric.offsetTop - containerHeight / 2 + activeLyric.clientHeight / 2;
      lyricsContainer.scrollTo({
        top: activeTop,
        behavior: 'smooth' // Smooth scrolling
      });
    }
  }
}



// Load the song and its corresponding LRC file
function loadSong(index) {
const song = songs[index];
audio.src = song.audio_url;
albumImage.src = song.image;
songTitle.textContent = song.title;
channelName.textContent = song.channel;

fetchLrcFile(index); // Fetch LRC for the song

audio.addEventListener('loadedmetadata', () => {
durationDisplay.textContent = formatTime(audio.duration);
});

audio.load();
playIcon.classList.add('animate-spin'); 
audio.addEventListener('canplay', async() => {
  playIcon.classList.remove('animate-spin')
await audio.play().catch(_ => {
playIcon.classList.remove('animate-spin')
  playIcon.classList.replace('fa-spinner', 'fa-play');
});
playIcon.classList.replace('fa-spinner', 'fa-pause');
});
}

function formatTime(seconds) {
const minutes = Math.floor(seconds / 60);
const remainingSeconds = Math.floor(seconds % 60);
return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Play/Pause Toggle
playButton.addEventListener('click', () => {
if (audio.paused) {
audio.play();
playIcon.classList.replace('fa-play', 'fa-pause');
} else {
audio.pause();
playIcon.classList.replace('fa-pause', 'fa-play');
}
});

// Next and Previous Song Navigation
prevButton.addEventListener('click', () => {
  playIcon.classList.replace('fa-pause', 'fa-spinner')
  playIcon.classList.replace('fa-play', 'fa-spinner')
currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
loadSong(currentSongIndex);
});

nextButton.addEventListener('click', () => {
//playIcon.classList.remove('animate-spin')
playIcon.classList.replace('fa-pause', 'fa-spinner')
playIcon.classList.replace('fa-play', 'fa-spinner')
currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
loadSong(currentSongIndex);
});

// Handle end of song
audio.addEventListener('ended', () => {
if (currentSongIndex < songs.length - 1) {
currentSongIndex++;
loadSong(currentSongIndex);
} else {
currentSongIndex = 0;
loadSong(currentSongIndex);
}
});

// Update lyrics while song plays
audio.addEventListener('timeupdate', () => {
updateLyrics();
const progress = (audio.currentTime / audio.duration) * 100;
progressBar.style.width = progress + '%';
currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

// Handle progress bar click
progressContainer.addEventListener('click', (e) => {
const rect = progressContainer.getBoundingClientRect();
const clickX = e.clientX - rect.left;
audio.currentTime = (clickX / rect.width) * audio.duration;
});
// Show Song List Modal
function displaySongList() {
songList.innerHTML = '';
songs.forEach((song, index) => {
const listItem = document.createElement('li');
listItem.className = 'p-2 border-b last:border-b-0 border-gray-200 text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg';
listItem.textContent = `${index + 1}. ${song.title} - ${song.channel}`;
listItem.addEventListener('click', () => {
loadSong(index);
songModal.classList.add('hidden');
});
songList.appendChild(listItem);
});
}

showSongsButton.addEventListener('click', () => {
displaySongList();
songModal.classList.remove('hidden');
});

// Close Song List Modal
closeSongsButton.addEventListener('click', () => {
songModal.classList.add('hidden');
});