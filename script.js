// Dark Mode Toggle Based on User Preference
let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

if (theme == 'dark') {
document.documentElement.classList.add('dark');
}

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
document.documentElement.classList.toggle('dark');
});

// Fetching Playlist from JSON URL
let songs = [];
let now_playing = -1;  // Initialize 'now_playing' to track the current song index
fetch('https://raw.githubusercontent.com/SatzzDev/Datas/refs/heads/main/playlist.json')
.then(response => response.json())
.then(data => {
songs = data;
Amplitude.init({
"bindings": {
37: 'prev', // Left Arrow: Previous song
39: 'next', // Right Arrow: Next song
32: 'play_pause' // Spacebar: Play/Pause
},
songs: songs.map(song => ({
name: song.title,
artist: song.channel,
url: song.audio_url,
cover_art_url: song.image
}))
});
loadSong(0); // Load the first song on startup
})
.catch(error => console.error("Error fetching the playlist:", error));

// DOM Elements for Modal and Lyrics
const nextButton = document.getElementById('nextButton')
const prevButton = document.getElementById('prevButton')
const showSongsButton = document.getElementById('showSongsButton');
const songModal = document.getElementById('info-popup');
const closeSongsButton = document.getElementById('closeSongsButton');
const lyricsContent = document.getElementById('lyrics');
let currentLyrics = [];
let currentLine = 0;

function displaySongList() {
const songList = document.getElementById('songList');
songList.innerHTML = ''; // Clear previous song list

// Add songs dynamically
songs.forEach((song, index) => {
const li = document.createElement('li');
li.classList.add('flex', 'items-center');

// Add song cover image
const img = document.createElement('img');
img.src = song.image || 'https://via.placeholder.com/40'; // Default placeholder if no cover is provided
img.alt = 'Song Cover';

// Add song title
const span = document.createElement('span');
span.textContent = song.title;
li.addEventListener('click', () => {
Amplitude.playSongAtIndex(index);
let u = Amplitude.getActiveIndex()
fetchLrcFile(u)
closeModal()
});
li.appendChild(img);
li.appendChild(span);
songList.appendChild(li);
});

// Show the modal with a fade-in effect
document.getElementById('info-popup').classList.add('show');
}

// Closing the Modal
function closeModal() {
document.getElementById('info-popup').classList.remove('show');
}

// Show Songs Button Event
showSongsButton.addEventListener('click', async () => {
displaySongList();
});

// Close Modal Button Event
closeSongsButton.addEventListener('click', () => {
closeModal();
});

// Close Modal by Clicking Outside of It
songModal.addEventListener('click', (e) => {
if (e.target === songModal) {
closeModal();
}
});
function align() {
const highlightedElement = $('.highlighted');

// Check if the highlighted element exists
if (highlightedElement.length > 0) {
const highlightedHeight = highlightedElement.height();
const contentHeight = $('.content').height();
const offsetTop = highlightedElement.offset().top - highlightedElement.parent().offset().top;
const scrollTop = offsetTop + highlightedHeight / 2 - contentHeight / 2;
$('.content').animate({ scrollTop: scrollTop + 'px' }, { easing: 'swing', duration: 250 });
}
}

// Handling Resize for Lyrics Alignment
let lyricHeight = $('.lyrics').height();
$(window).on('resize', function() {
if ($('.lyrics').height() != lyricHeight) {
lyricHeight = $('.lyrics').height();
align();
}
});

// Generating Lyrics HTML
function generate() {
let html = '';
for (let i = 0; i < currentLyrics.length; i++) {
html += `<div ${i === currentLine ? 'class="highlighted"' : ''}>${currentLyrics[i].text || '•'}</div>`;
}
$('.lyrics').html(html);
align();
}

// Fetching and Parsing LRC Lyrics from API
function fetchLrcFile(index) {
const song = songs[index];
const url = `https://www.lyricsify.com/lyrics/${song.channel.toLowerCase().replace(/ /g, "-")}/${song.title.replace(/ /g, "-")}`;

fetch(url)
.then(response => response.text())
.then(data => {
const parser = new DOMParser();
const doc = parser.parseFromString(data, 'text/html');
const lyricsDiv = doc.querySelector('.main-page div[id^="lyrics_"]');

if (lyricsDiv) {
const lyricsText = lyricsDiv.textContent || lyricsDiv.innerText;
currentLyrics = parseLrc(lyricsText);
generate(); // Update lyrics display
} else {
console.error("Lyrics not found for song:", song.title);
}
})
.catch(error => console.error("Error fetching lyrics:", error));
}

// Parsing LRC Format
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

// Updating lyrics based on current song's time
function updateLyrics() {
const currentTime = Amplitude.getSongPlayedSeconds();  // Getting current song play time
let displayedLyric = '';

// Showing lyrics matching the song's current time
for (let i = 0; i < currentLyrics.length; i++) {
if (currentTime >= currentLyrics[i].time) {
displayedLyric = currentLyrics[i].text;
} else {
break;
}
}

// Highlighting the current lyric line
const pastLyrics = currentLyrics.filter(item => item.time < currentTime);
if (currentLyrics[pastLyrics.length] !== currentLine) {
currentLine = currentLyrics[pastLyrics.length];
$('.lyrics div').removeClass('highlighted');
$(`.lyrics div:nth-child(${pastLyrics.length})`).addClass('highlighted'); // Highlighting current lyric
align(); // Adjust the lyrics view to stay centered
}
}

// Loading Song by Index (also triggers lyrics fetching)
function loadSong(index) {
let u = Amplitude.getActiveIndex()
fetchLrcFile(u)  // Fetch lyrics when song changes
}


nextButton.addEventListener('click', () => {
Amplitude.next()
let u = Amplitude.getActiveIndex()
fetchLrcFile(u)
})
prevButton.addEventListener('click', () => {
let u = Amplitude.getActiveIndex()
fetchLrcFile(u)
})
// Interval for Lyrics Update
setInterval(updateLyrics, 100);
