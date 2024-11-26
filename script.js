const loadingOverlay = document.createElement('div');
loadingOverlay.className = 'fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center text-white';
loadingOverlay.innerHTML = '<div class="spinner"></div>';
document.body.appendChild(loadingOverlay);

let songs = []; 
fetch('https://raw.githubusercontent.com/SatzzDev/Datas/refs/heads/main/playlist.json') 
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
let currentLyrics = []; 
const lyricsContent = document.getElementById('lyrics');
const showSongsButton = document.getElementById('showSongsButton');
const songModal = document.getElementById('info-popup');
const closeSongsButton = document.querySelector('#info-popup button'); 
const songList = document.getElementById('songList');
function fetchLrcFile(index) {
const song = songs[index];
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
let displayedLyric = '';
for (let i = 0; i < currentLyrics.length; i++) {
if (currentTime >= currentLyrics[i].time) {
displayedLyric = currentLyrics[i].text;
} else {
break;
}
}
const lyricsContent = document.getElementById('lyrics');
lyricsContent.textContent = displayedLyric;
lyricsContent.classList.remove('opacity-0', 'translate-y-5'); 
void lyricsContent.offsetWidth; 
lyricsContent.classList.add('opacity-100', 'translate-y-0'); 
}
function loadSong(index) {
const song = songs[index];
audio.src = song.audio_url;
albumImage.src = song.image;
songTitle.textContent = song.title;
channelName.textContent = song.channel;
fetchLrcFile(index); 
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
playButton.addEventListener('click', () => {
if (audio.paused) {
audio.play();
playIcon.classList.replace('fa-play', 'fa-pause');
} else {
audio.pause();
playIcon.classList.replace('fa-pause', 'fa-play');
}
});
prevButton.addEventListener('click', () => {
playIcon.classList.replace('fa-pause', 'fa-spinner')
playIcon.classList.replace('fa-play', 'fa-spinner')
currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
loadSong(currentSongIndex);
});

nextButton.addEventListener('click', () => {
playIcon.classList.replace('fa-pause', 'fa-spinner')
playIcon.classList.replace('fa-play', 'fa-spinner')
currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
loadSong(currentSongIndex);
});
audio.addEventListener('ended', () => {
if (currentSongIndex < songs.length - 1) {
currentSongIndex++;
loadSong(currentSongIndex);
} else {
currentSongIndex = 0;
loadSong(currentSongIndex);
}
});
audio.addEventListener('timeupdate', () => {
updateLyrics();
const progress = (audio.currentTime / audio.duration) * 100;
progressBar.style.width = progress + '%';
currentTimeDisplay.textContent = formatTime(audio.currentTime);
});
progressContainer.addEventListener('click', (e) => {
const rect = progressContainer.getBoundingClientRect();
const clickX = e.clientX - rect.left;
audio.currentTime = (clickX / rect.width) * audio.duration;
});
function displaySongList() {
songList.innerHTML = '';
songs.forEach((song, index) => {
const listItem = document.createElement('li');
listItem.className = 'flex items-center p-2 border-b last:border-b-0 border-gray-200 text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg';
const img = document.createElement('img');
img.src = song.image; 
img.alt = song.title;
img.className = 'w-12 h-12 object-cover rounded-md mr-4'; 
const textContainer = document.createElement('div');
textContainer.className = 'flex flex-col';
textContainer.innerHTML = `
<span class="font-semibold">${song.title}</span>
<span class="text-sm text-gray-500">${song.channel}</span>
`;
listItem.addEventListener('click', () => {
loadSong(index);
songModal.classList.add('hidden');
});
listItem.appendChild(img);           
listItem.appendChild(textContainer); 
songList.appendChild(listItem);
});
}
showSongsButton.addEventListener('click', () => {
displaySongList();
songModal.classList.remove('hidden');
});
closeSongsButton.addEventListener('click', () => {
songModal.classList.add('hidden');
});
