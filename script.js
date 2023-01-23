
// All The Eminem Song List Will be Here
const songs = [
    {
        image: "jatimaya",
        title: "Jati Maya Laye Pani ",
        artist: "1974 Ad",
        songName: "jatimaya"
    },
    {
        image: "worapara",
        title: "Wora Para Gau Bhari",
        artist: "1974 Ad",
        songName: "1974-ad-wora-para-gaun-bhari-chyangba-and-the-bloody-revolution-lyrics-video-givefastlink"

    },

    {
        image: "parelima",
        title: "Parelima",
        artist: "1974 Ad",
        songName: "parelima-audio-lyrics-1974ad-givefastlink"
    },
    {
        image: "sanjhakobela",
        title: "Sanja Ko Bela Ma",
        artist: "1974 Ad",
        songName: "sanjha-ko-bela-audio-lyrics-1974ad-givefastlink"

    }, {
        image: "dheraidherai",
        title: "Dherai Dherai",
        artist: "1974 Ad",
        songName: "dherai-dherai-aauncha-mana-ma-1974-ad-pahelo-junima-givefastlink"

    }, {
        image: "gurasaifulyo",
        title: "Gurasai Fulyo",
        artist: "1974 Ad",
        songName: "gurasai-fulyo-banaima-गुराँसै-फुल्यो-वनैमा-1974-ad-lyrical-video-with-guitar-chords-givefastlink"

    },
    {
        image: "chaubandicholo",
        title: "Chaubandi Cholo",
        artist: "1974 Ad",
        songName: "chaubandi-choli-by-1974ad-givefastlink"

    }

]

// list of buttons
const playPause = document.querySelector("#playPause")
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const songName = document.querySelector("#songName")
const artist = document.querySelector("#artist")
const image = document.querySelector("#image")
const audio = document.querySelector("audio")

let isPlaying = false

// for play Function
const playMusic = () => {
    isPlaying = true
    audio.play()
    playPause.classList.remove("fa-play");
    playPause.classList.add("fa-pause");
}
// for pause Function
const pauseMusic = () => {
    isPlaying = false
    audio.pause()
    playPause.classList.remove("fa-pause");
    playPause.classList.add("fa-play");
}

playPause.addEventListener("click", () => {
    isPlaying ? pauseMusic() : playMusic()
});


const loadSong = (songs) => {
    songName.innerText = songs.title
    artist.innerText = songs.artist
    image.src = "photo/" + songs.image + ".jpg"
    audio.src = "song/" + songs.songName + ".mp3"

}

let songIndex = 0
const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length
    loadSong(songs[songIndex])
    playMusic()
}
const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length
    loadSong(songs[songIndex])
    playMusic()
}
next.addEventListener("click", nextSong)
prev.addEventListener("click", prevSong)

document.addEventListener("keydown", (e) => {
    if (e.key == "s") {
        pauseMusic()
    }
    else if (e.key == "n") {
        nextSong()
    }
    else if (e.key == "p") {
        prevSong()
    }
    else if (e.key == "r") {
        playMusic()
    }
})