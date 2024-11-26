
# Music Player with Lyrics

This project is a simple music player that plays songs from a playlist, displays lyrics synchronized with the audio, and provides basic controls like play, pause, and navigation between songs.

## Features

- **Play/Pause Functionality**: Play and pause songs with a single button click.
- **Song Navigation**: Navigate to the next or previous song in the playlist.
- **Lyrics Display**: Lyrics are fetched from an external source and displayed in sync with the audio. The current lyric is highlighted.
- **Progress Bar**: Displays the current progress of the song and allows you to seek within the song.
- **Song List Modal**: A modal displays the available songs in the playlist, which can be clicked to jump directly to that song.

## Demo

To preview the music player and its features, clone the repository and run the project locally.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)
- [Tailwind CSS](https://tailwindcss.com/) for styling

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/music-player-with-lyrics.git
   cd music-player-with-lyrics
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm run dev
   ```

4. Open the application in your browser by navigating to [http://localhost:3000](http://localhost:3000).

## Usage

- **Play/Pause**: Click the play/pause button to start or stop the music.
- **Next/Previous**: Use the next and previous buttons to navigate through the playlist.
- **Lyrics**: The lyrics will automatically update as the song plays. The current lyric will be highlighted, and the page will scroll to ensure it's visible.
- **Song List**: Click the "Show Songs" button to display a list of songs. Click on any song in the list to jump directly to that song.

## Code Structure

- **`index.html`**: The main HTML structure of the music player.
- **`styles.css`**: The custom styles for the page (including Tailwind CSS configuration).
- **`script.js`**: The JavaScript to control the behavior of the music player and lyrics synchronization.
- **`playlist.json`**: A sample playlist in JSON format containing song details (e.g., title, audio URL, album image, and channel name).

## Project Overview

### Audio Playback:
The music player uses the `Audio` API to control playback, and it automatically updates the progress bar and time display as the song plays. You can also seek within the song by clicking on the progress bar.

### Lyrics Synchronization:
The lyrics are fetched from an external URL (e.g., [lyricsify.com](https://www.lyricsify.com)) based on the song title and channel. The lyrics are parsed and displayed on the page, with the current lyric highlighted in real-time.

### Styling:
Tailwind CSS is used for styling the layout and UI components of the player, making it responsive and modern. Custom styles are added for the lyrics display and transitions.

## Notes

- The project uses **fetch** to retrieve the playlist data and lyrics. Make sure you have an internet connection for these resources to load.
- This project is intended to be a basic implementation of a music player with lyrics. You can extend it further by adding more features like shuffle, repeat, or custom playlist management.

## Contributing

If you want to contribute to this project, feel free to fork the repository, make changes, and submit a pull request. All contributions are welcome!

## License

This project is open-source and available under the [MIT License](LICENSE).

---

**Enjoy your music! 🎵**
