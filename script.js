/* ===== LOOTIFY — Music Player Logic ===== */

// ── Song Data ─────────────────────────────────────────────────
const songs = [
    {
        title: "Neelothi",
        artist: "Masstamilan",
        album: "Neelothi",
        src: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779647716/Neelothi_-_Masstamilan.MY_fonblh.mp4",
        cover: "images/neelothi_cover.png",
        gradient: null,
    },
    {
        title: "Verappa (Extended)",
        artist: "Karuppu",
        album: "Karuppu",
        src: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779647713/Verappa_-_Extended_From_Karuppu_-_Masstamilan.MY_karczs.mp3",
        cover: "images/karuppu_cover.png",
        gradient: null,
    },
    {
        title: "Aura 10/10",
        artist: "Meesaya Murukku 2",
        album: "Meesaya Murukku 2",
        src: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779647707/Aura_10_10_From_Meesaya_Murukku_2_-_Masstamilan.MY_t49gxv.mp3",
        cover: "images/aura_cover.png",
        gradient: null,
    },
    {
        title: "Karuppa Kooda Va",
        artist: "Karuppu",
        album: "Karuppu",
        src: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779647703/Karuppa_Kooda_Va_Karuppu_-_Masstamilan.MY_vgj2qi.mp3",
        cover: "images/karuppu_cover.png",
        gradient: null,
    },
    {
        title: "Hey Minnale",
        artist: "Amaran",
        album: "Amaran (Tamil)",
        src: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779647700/Hey_Minnale_From_Amaran_Tamil_-_Masstamilan.MY_wjp1ri.mp3",
        cover: "images/heyminnale_cover.png",
        gradient: null,
    },
    {
        title: "Raga of Revenge",
        artist: "DC",
        album: "DC",
        src: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779647695/Raga_of_Revenge_DC_-_Masstamilan.MY_ye1no3.mp3",
        cover: null,
        gradient: "linear-gradient(135deg, #b91d3a, #3a0d14)",
    },
    {
        title: "Naatu Kuthu",
        artist: "RRR",
        album: "RRR",
        src: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779979007/23_RRR_NAATU_KUTHU_olob2a.mp3",
        cover: null,
        gradient: "linear-gradient(135deg, #e65c00, #f9d423)",
    },
    {
        title: "KGF 2 Theme",
        artist: "KGF Chapter 2",
        album: "KGF Chapter 2",
        src: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779978941/14_KGF2_m7wnz5.mp3",
        cover: null,
        gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    },
    {
        title: "Once Upon A Time",
        artist: "Vikram",
        album: "Vikram",
        src: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779978921/28_VIKRAM_ONCE_UPON_A_TIME_alhb5d.mp3",
        cover: null,
        gradient: "linear-gradient(135deg, #0f2027, #2c5364)",
    },
    {
        title: "Thumbi Thullal",
        artist: "Cobra",
        album: "Cobra",
        src: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779979259/05_COBRA_THUMBI_THULLAL_wad3pe.mp3",
        cover: null,
        gradient: "linear-gradient(135deg, #11998e, #38ef7d)",
    },
    {
        title: "Bullet",
        artist: "Warrior",
        album: "Warrior",
        src: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779979262/04_WARROR_BULLET_dx5odc.mp3",
        cover: null,
        gradient: "linear-gradient(135deg, #fc4a1a, #f7b733)",
    },
    {
        title: "Muthal Nee",
        artist: "Soundtrack",
        album: "Muthal Nee",
        src: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779979267/34_MUTHAL_NEE_pucyeq.mp3",
        cover: null,
        gradient: "linear-gradient(135deg, #ff6a88, #ff99ac)",
    },
    {
        title: "Kaalthuku",
        artist: "VTK",
        album: "VTK",
        src: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779979272/24_VTK_KAALTHUKU_fu4czv.mp3",
        cover: null,
        gradient: "linear-gradient(135deg, #4568dc, #b06ab3)",
    },
    {
        title: "Pinju Pinju",
        artist: "Naane Varuven",
        album: "Naane Varuven",
        src: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779979272/29_NAANE_VARUVEN_PINJU_PINJU_jxk35i.mp3",
        cover: null,
        gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
    },
    {
        title: "Ranjithama",
        artist: "Varisu",
        album: "Varisu",
        src: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779979280/01_VARISU_RANJITHAMA_jz1cux.mp3",
        cover: null,
        gradient: "linear-gradient(135deg, #fad0c4, #ffd1ff)",
    },
    {
        title: "Dum Maro Dum",
        artist: "Hare Rama Hare Krishna",
        album: "Hare Rama Hare Krishna (Remix)",
        src: "https://res.cloudinary.com/dpnljli7x/video/upload/v1779991556/Dum_Maro_Dum_Mit_Jaye_Gham_From__Hare_Rama_Hare_Krishna__-_Remix_syd9cs.mp3",
        cover: null,
        gradient: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
    },
];

// ── State ────────────────────────────────────────────────────
let currentIndex = -1;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let volume = 0.7;

// ── DOM ──────────────────────────────────────────────────────
const audio = document.getElementById("audio-player");
const tracklist = document.getElementById("tracklist");
const npCover = document.getElementById("np-cover");
const npTitle = document.getElementById("np-title");
const npArtist = document.getElementById("np-artist");
const npCurrentTime = document.getElementById("np-current-time");
const npDuration = document.getElementById("np-duration");
const progressBar = document.getElementById("np-progress-bar");
const progressFill = document.getElementById("np-progress-fill");
const progressHandle = document.getElementById("np-progress-handle");
const playIcon = document.getElementById("play-icon");
const ctrlPlay = document.getElementById("ctrl-play");
const ctrlPrev = document.getElementById("ctrl-prev");
const ctrlNext = document.getElementById("ctrl-next");
const ctrlShuffle = document.getElementById("ctrl-shuffle");
const ctrlRepeat = document.getElementById("ctrl-repeat");
const playAllBtn = document.getElementById("play-all-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const volumeBar = document.getElementById("volume-bar");
const volumeFill = document.getElementById("volume-fill");
const volumeHandle = document.getElementById("volume-handle");
const ctrlVolIcon = document.getElementById("ctrl-vol-icon");
const npLike = document.getElementById("np-like");
const mainContent = document.getElementById("main-content");
const topBar = document.querySelector(".top-bar");

// ── Render Track List ────────────────────────────────────────
function renderTracks() {
    tracklist.innerHTML = "";
    songs.forEach((song, i) => {
        const row = document.createElement("div");
        row.className = "track-row";
        row.id = `track-${i}`;
        row.setAttribute("role", "button");
        row.setAttribute("tabindex", "0");

        // Cover element
        let coverHTML;
        if (song.cover) {
            coverHTML = `<img class="track-cover" src="${song.cover}" alt="${song.title}" />`;
        } else {
            const initial = song.title.charAt(0).toUpperCase();
            coverHTML = `<div class="track-cover-gradient" style="background:${song.gradient}">${initial}</div>`;
        }

        row.innerHTML = `
            <div class="track-num">
                <span class="track-num-text">${i + 1}</span>
                <span class="track-num-play">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M8 5v14l11-7z"/></svg>
                </span>
            </div>
            <div class="track-title-group">
                ${coverHTML}
                <div class="track-text">
                    <span class="track-name">${song.title}</span>
                    <span class="track-artist">${song.artist}</span>
                </div>
            </div>
            <span class="track-album">${song.album}</span>
            <span class="track-duration" id="dur-${i}">--:--</span>
        `;

        row.addEventListener("click", () => playSong(i));
        row.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                playSong(i);
            }
        });

        tracklist.appendChild(row);
    });
}

// ── Play Song ────────────────────────────────────────────────
function playSong(index) {
    if (index < 0 || index >= songs.length) return;

    currentIndex = index;
    const song = songs[index];

    audio.src = song.src;
    audio.load();
    audio.play().catch(() => {});
    isPlaying = true;

    updateUI();
}

function updateUI() {
    const song = songs[currentIndex];
    if (!song) return;

    // Now Playing info
    npTitle.textContent = song.title;
    npArtist.textContent = song.artist;

    if (song.cover) {
        npCover.src = song.cover;
        npCover.style.background = "";
    } else {
        npCover.src = "";
        npCover.style.background = song.gradient;
        // Use a small transparent pixel
        npCover.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    }

    // Play/pause icon
    updatePlayPauseIcon();

    // Active track row
    document.querySelectorAll(".track-row").forEach((r) => r.classList.remove("active"));
    const activeRow = document.getElementById(`track-${currentIndex}`);
    if (activeRow) {
        activeRow.classList.add("active");

        // Replace number with eq bars
        const numEl = activeRow.querySelector(".track-num-text");
        if (isPlaying) {
            numEl.innerHTML = `<div class="eq-bars"><span></span><span></span><span></span><span></span></div>`;
        } else {
            numEl.textContent = currentIndex + 1;
        }
    }

    // Update hero gradient based on song
    const hero = document.querySelector(".playlist-hero");
    if (song.gradient) {
        const color = song.gradient.match(/#[a-fA-F0-9]{6}/)?.[0] || "#1a3a2a";
        hero.style.background = `linear-gradient(180deg, ${color}44 0%, #121212 100%)`;
    } else {
        hero.style.background = `linear-gradient(180deg, #1a3a2a 0%, #121212 100%)`;
    }
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playIcon.innerHTML = `<path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>`;
    } else {
        playIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
    }
}

// ── Controls ─────────────────────────────────────────────────
ctrlPlay.addEventListener("click", togglePlay);
playAllBtn.addEventListener("click", () => {
    if (currentIndex === -1) playSong(0);
    else togglePlay();
});

function togglePlay() {
    if (currentIndex === -1) {
        playSong(0);
        return;
    }
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play().catch(() => {});
        isPlaying = true;
    }
    updatePlayPauseIcon();
    updateEqBars();
}

function updateEqBars() {
    const activeRow = document.getElementById(`track-${currentIndex}`);
    if (!activeRow) return;
    const numEl = activeRow.querySelector(".track-num-text");
    if (isPlaying) {
        numEl.innerHTML = `<div class="eq-bars"><span></span><span></span><span></span><span></span></div>`;
    } else {
        numEl.textContent = currentIndex + 1;
    }
}

ctrlPrev.addEventListener("click", () => {
    if (audio.currentTime > 3) {
        audio.currentTime = 0;
        return;
    }
    const prev = currentIndex > 0 ? currentIndex - 1 : songs.length - 1;
    playSong(prev);
});

ctrlNext.addEventListener("click", () => nextTrack());

function nextTrack() {
    if (isShuffle) {
        let rand;
        do {
            rand = Math.floor(Math.random() * songs.length);
        } while (rand === currentIndex && songs.length > 1);
        playSong(rand);
    } else {
        const next = (currentIndex + 1) % songs.length;
        playSong(next);
    }
}

ctrlShuffle.addEventListener("click", () => {
    isShuffle = !isShuffle;
    ctrlShuffle.classList.toggle("active", isShuffle);
    shuffleBtn.classList.toggle("active", isShuffle);
});

shuffleBtn.addEventListener("click", () => {
    isShuffle = !isShuffle;
    ctrlShuffle.classList.toggle("active", isShuffle);
    shuffleBtn.classList.toggle("active", isShuffle);
});

ctrlRepeat.addEventListener("click", () => {
    isRepeat = !isRepeat;
    ctrlRepeat.classList.toggle("active", isRepeat);
    audio.loop = isRepeat;
});

// ── Progress ─────────────────────────────────────────────────
audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = pct + "%";
    progressHandle.style.left = `calc(${pct}% - 6px)`;
    npCurrentTime.textContent = formatTime(audio.currentTime);
});

audio.addEventListener("loadedmetadata", () => {
    npDuration.textContent = formatTime(audio.duration);
    // Update duration in tracklist
    const durEl = document.getElementById(`dur-${currentIndex}`);
    if (durEl) durEl.textContent = formatTime(audio.duration);
});

audio.addEventListener("ended", () => {
    if (!isRepeat) nextTrack();
});

// Progress bar click
progressBar.addEventListener("click", (e) => {
    if (!audio.duration) return;
    const rect = progressBar.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * audio.duration;
});

// Progress bar drag
let isDragging = false;
progressBar.addEventListener("mousedown", (e) => {
    isDragging = true;
    seekTo(e);
});
document.addEventListener("mousemove", (e) => {
    if (isDragging) seekTo(e);
});
document.addEventListener("mouseup", () => { isDragging = false; });

function seekTo(e) {
    if (!audio.duration) return;
    const rect = progressBar.getBoundingClientRect();
    let pct = (e.clientX - rect.left) / rect.width;
    pct = Math.max(0, Math.min(1, pct));
    audio.currentTime = pct * audio.duration;
    progressFill.style.width = (pct * 100) + "%";
    progressHandle.style.left = `calc(${pct * 100}% - 6px)`;
}

// ── Volume ───────────────────────────────────────────────────
audio.volume = volume;
volumeFill.style.width = (volume * 100) + "%";

volumeBar.addEventListener("click", (e) => {
    const rect = volumeBar.getBoundingClientRect();
    volume = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.volume = volume;
    volumeFill.style.width = (volume * 100) + "%";
    volumeHandle.style.left = `calc(${volume * 100}% - 6px)`;
    updateVolumeIcon();
});

let volDragging = false;
volumeBar.addEventListener("mousedown", (e) => { volDragging = true; setVolume(e); });
document.addEventListener("mousemove", (e) => { if (volDragging) setVolume(e); });
document.addEventListener("mouseup", () => { volDragging = false; });

function setVolume(e) {
    const rect = volumeBar.getBoundingClientRect();
    volume = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.volume = volume;
    volumeFill.style.width = (volume * 100) + "%";
    volumeHandle.style.left = `calc(${volume * 100}% - 6px)`;
    updateVolumeIcon();
}

let prevVolume = volume;
ctrlVolIcon.addEventListener("click", () => {
    if (volume > 0) {
        prevVolume = volume;
        volume = 0;
    } else {
        volume = prevVolume || 0.7;
    }
    audio.volume = volume;
    volumeFill.style.width = (volume * 100) + "%";
    volumeHandle.style.left = `calc(${volume * 100}% - 6px)`;
    updateVolumeIcon();
});

function updateVolumeIcon() {
    const svg = document.getElementById("vol-svg");
    if (volume === 0) {
        svg.innerHTML = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>`;
    } else if (volume < 0.5) {
        svg.innerHTML = `<path d="M7 9v6h4l5 5V4l-5 5H7z"/>`;
    } else {
        svg.innerHTML = `<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>`;
    }
}

// ── Like Button ──────────────────────────────────────────────
npLike.addEventListener("click", () => {
    npLike.classList.toggle("liked");
});

// ── Top bar scroll ───────────────────────────────────────────
mainContent.addEventListener("scroll", () => {
    topBar.classList.toggle("scrolled", mainContent.scrollTop > 280);
});

// ── Helpers ──────────────────────────────────────────────────
function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
}

// ── Keyboard Shortcuts ───────────────────────────────────────
document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

    switch (e.code) {
        case "Space":
            e.preventDefault();
            togglePlay();
            break;
        case "ArrowRight":
            if (audio.duration) audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
            break;
        case "ArrowLeft":
            audio.currentTime = Math.max(0, audio.currentTime - 5);
            break;
        case "ArrowUp":
            e.preventDefault();
            volume = Math.min(1, volume + 0.05);
            audio.volume = volume;
            volumeFill.style.width = (volume * 100) + "%";
            updateVolumeIcon();
            break;
        case "ArrowDown":
            e.preventDefault();
            volume = Math.max(0, volume - 0.05);
            audio.volume = volume;
            volumeFill.style.width = (volume * 100) + "%";
            updateVolumeIcon();
            break;
    }
});

// ── Pre-load durations ───────────────────────────────────────
function preloadDurations() {
    songs.forEach((song, i) => {
        const tempAudio = new Audio();
        tempAudio.preload = "metadata";
        tempAudio.src = song.src;
        tempAudio.addEventListener("loadedmetadata", () => {
            const durEl = document.getElementById(`dur-${i}`);
            if (durEl) durEl.textContent = formatTime(tempAudio.duration);
        });
    });
}

// ── Init ─────────────────────────────────────────────────────
renderTracks();
preloadDurations();
