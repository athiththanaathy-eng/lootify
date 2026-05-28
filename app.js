// ==========================================================================
// TRACKS DATABASE
// ==========================================================================
const TRACKS = [
  {
    id: "1",
    title: "Neelothi",
    artist: "Leon James",
    album: "Neelothi",
    url: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779647716/Neelothi_-_Masstamilan.MY_fonblh.mp4",
    type: "video",
    cover: "https://images.unsplash.com/photo-1614680376593-902f74fa0d41?auto=format&fit=crop&w=300&h=300&q=80",
    category: "video",
    color: "#ff3366",
    duration: "4:01"
  },
  {
    id: "2",
    title: "Verappa (Extended)",
    artist: "Jakes Bejoy",
    album: "Karuppu",
    url: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779647713/Verappa_-_Extended_From_Karuppu_-_Masstamilan.MY_karczs.mp3",
    type: "audio",
    cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=300&h=300&q=80",
    category: "heavy",
    color: "#1a1a1a",
    duration: "5:08"
  },
  {
    id: "3",
    title: "Aura 10/10",
    artist: "Hiphop Tamizha",
    album: "Meesaya Murukku 2",
    url: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779647707/Aura_10_10_From_Meesaya_Murukku_2_-_Masstamilan.MY_t49gxv.mp3",
    type: "audio",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&h=300&q=80",
    category: "heavy",
    color: "#5b2c6f",
    duration: "2:54"
  },
  {
    id: "4",
    title: "Karuppa Kooda Va",
    artist: "Jakes Bejoy",
    album: "Karuppu",
    url: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779647703/Karuppa_Kooda_Va_Karuppu_-_Masstamilan.MY_vgj2qi.mp3",
    type: "audio",
    cover: "https://images.unsplash.com/photo-1487180142328-054b783fc471?auto=format&fit=crop&w=300&h=300&q=80",
    category: "heavy",
    color: "#2e4053",
    duration: "3:40"
  },
  {
    id: "5",
    title: "Hey Minnale",
    artist: "G.V. Prakash Kumar, Haricharan, Shweta Mohan",
    album: "Amaran",
    url: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779647700/Hey_Minnale_From_Amaran_Tamil_-_Masstamilan.MY_wjp1ri.mp3",
    type: "audio",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&h=300&q=80",
    category: "melodies",
    color: "#0e6251",
    duration: "3:48"
  },
  {
    id: "6",
    title: "Raga of Revenge",
    artist: "Ravi Basrur",
    album: "Revenge Theme",
    url: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779647695/Raga_of_Revenge_DC_-_Masstamilan.MY_ye1no3.mp3",
    type: "audio",
    cover: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=300&h=300&q=80",
    category: "heavy",
    color: "#7b241c",
    duration: "2:14"
  },
  {
    id: "7",
    title: "Naatu Kuthu",
    artist: "M.M. Keeravani, Rahul Sipligunj, Kaala Bhairava",
    album: "RRR",
    url: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779979007/23_RRR_NAATU_KUTHU_olob2a.mp3",
    type: "audio",
    cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=300&h=300&q=80",
    category: "trending",
    color: "#d35400",
    duration: "3:36"
  },
  {
    id: "8",
    title: "KGF 2 BGM (Track 14)",
    artist: "Ravi Basrur",
    album: "KGF Chapter 2",
    url: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779978941/14_KGF2_m7wnz5.mp3",
    type: "audio",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&h=300&q=80",
    category: "heavy",
    color: "#7e5109",
    duration: "2:30"
  },
  {
    id: "9",
    title: "Once Upon a Time",
    artist: "Anirudh Ravichander",
    album: "Vikram",
    url: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779978921/28_VIKRAM_ONCE_UPON_A_TIME_alhb5d.mp3",
    type: "audio",
    cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=300&h=300&q=80",
    category: "trending",
    color: "#283747",
    duration: "2:24"
  },
  {
    id: "10",
    title: "Thumbi Thullal",
    artist: "A.R. Rahman, Shreya Ghoshal, Nakul Abhyankar",
    album: "Cobra",
    url: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779979259/05_COBRA_THUMBI_THULLAL_wad3pe.mp3",
    type: "audio",
    cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=300&h=300&q=80",
    category: "melodies",
    color: "#78281f",
    duration: "4:43"
  },
  {
    id: "11",
    title: "Bullet Song",
    artist: "Silambarasan TR, Haripriya",
    album: "The Warriorr",
    url: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779979262/04_WARROR_BULLET_dx5odc.mp3",
    type: "audio",
    cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=300&h=300&q=80",
    category: "trending",
    color: "#1f618d",
    duration: "3:47"
  },
  {
    id: "12",
    title: "Muthal Nee Mudhalvidum",
    artist: "Darbuka Siva, Sid Sriram",
    album: "Muthal Nee Mudhalvidum",
    url: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779979267/34_MUTHAL_NEE_pucyeq.mp3",
    type: "audio",
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=300&h=300&q=80",
    category: "melodies",
    color: "#117a65",
    duration: "4:41"
  },
  {
    id: "13",
    title: "Kaalathukkum Nee Venum",
    artist: "A.R. Rahman, Sid Sriram",
    album: "Vendhu Thanindhathu Kaadu",
    url: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779979272/24_VTK_KAALTHUKU_fu4czv.mp3",
    type: "audio",
    cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=300&h=300&q=80",
    category: "melodies",
    color: "#6e2c00",
    duration: "5:06"
  },
  {
    id: "14",
    title: "Pinju Pinju Mazhai",
    artist: "Yuvan Shankar Raja, Sid Sriram",
    album: "Naane Varuven",
    url: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779979272/29_NAANE_VARUVEN_PINJU_PINJU_jxk35i.mp3",
    type: "audio",
    cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=300&h=300&q=80",
    category: "melodies",
    color: "#283747",
    duration: "3:40"
  },
  {
    id: "15",
    title: "Ranjithame",
    artist: "Thalapathy Vijay, M.M. Manasi",
    album: "Varisu",
    url: "https://res.cloudinary.com/dpnljli7x/video/upload/q_auto/f_auto/v1779979280/01_VARISU_RANJITHAMA_jz1cux.mp3",
    type: "audio",
    cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=300&h=300&q=80",
    category: "trending",
    color: "#7d6608",
    duration: "4:47"
  }
];

// ==========================================================================
// STATE MANAGEMENT
// ==========================================================================
let currentTrack = null;
let currentPlaylistId = null; // 'liked', or custom playlist UUID
let currentQueue = [...TRACKS];
let currentQueueIndex = -1;

let isPlaying = false;
let isShuffle = false;
let isRepeat = "off"; // "off", "all", "one"
let isMuted = false;
let volumeVal = 0.8;

// History Stack for Navigation Arrows
let viewHistory = ["home"];
let historyIndex = 0;

// Media Elements
const audioPlayer = new Audio();
const videoPlayer = document.getElementById("global-video-player");
let activeMedia = audioPlayer; // Tracks whichever is currently active (audio or video)

// Local Storage Keys
const LIKED_SONGS_KEY = "spotify_clone_liked_songs";
const PLAYLISTS_KEY = "spotify_clone_playlists";

// Initialize LocalStorage structures if empty
if (!localStorage.getItem(LIKED_SONGS_KEY)) {
  localStorage.setItem(LIKED_SONGS_KEY, JSON.stringify([]));
}
if (!localStorage.getItem(PLAYLISTS_KEY)) {
  localStorage.setItem(PLAYLISTS_KEY, JSON.stringify({}));
}

// ==========================================================================
// DOM ELEMENTS
// ==========================================================================
const sidebarMenuItems = document.querySelectorAll(".menu-item");
const sidebarPlaylistsContainer = document.getElementById("sidebar-playlists");
const createPlaylistSidebarBtn = document.getElementById("create-playlist-sidebar-btn");
const createPlaylistLargeBtn = document.getElementById("create-playlist-large-btn");

const navBackBtn = document.getElementById("nav-back-btn");
const navForwardBtn = document.getElementById("nav-forward-btn");
const searchContainer = document.getElementById("header-search-bar");
const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search-btn");

const contentScrollContainer = document.getElementById("content-scroll-container");
const contentViews = document.querySelectorAll(".content-view");

// Home View Nodes
const heroBanner = document.getElementById("hero-banner");
const heroSongTitle = document.getElementById("hero-song-title");
const heroSongDesc = document.getElementById("hero-song-desc");
const heroPlayBtn = document.getElementById("hero-play-btn");
const heroLikeBtn = document.getElementById("hero-like-btn");
const quickGridContainer = document.getElementById("quick-grid");
const trendingRow = document.getElementById("trending-row");
const melodiesRow = document.getElementById("melodies-row");
const heavyRow = document.getElementById("heavy-row");
const videosRow = document.getElementById("videos-row");

// Search View Nodes
const searchResultsSection = document.getElementById("search-results-section");
const searchResultsGrid = document.getElementById("search-results-grid");
const searchGenresSection = document.getElementById("search-genres-section");

// Library View Nodes
const libraryPlaylistsGrid = document.getElementById("library-playlists-grid");

// Playlist View Nodes
const playlistDetailType = document.getElementById("playlist-detail-type");
const playlistDetailTitle = document.getElementById("playlist-detail-title");
const playlistDetailDesc = document.getElementById("playlist-detail-desc");
const playlistDetailCount = document.getElementById("playlist-detail-count");
const playlistHeaderCover = document.getElementById("playlist-header-cover");
const playlistDetailPlayBtn = document.getElementById("playlist-detail-play-btn");
const playlistDetailDeleteBtn = document.getElementById("playlist-detail-delete-btn");
const playlistTracksBody = document.getElementById("playlist-tracks-body");

// Theater View Nodes
const videoScreenContainer = document.getElementById("video-screen-container");
const canvasScreenContainer = document.getElementById("canvas-screen-container");
const visualizerCanvas = document.getElementById("visualizer-canvas");
const visualizerSongCover = document.getElementById("visualizer-song-cover");
const visualizerSongTitle = document.getElementById("visualizer-song-title");
const visualizerSongArtist = document.getElementById("visualizer-song-artist");
const theaterUpNextList = document.getElementById("theater-up-next-list");

// Footer Player Nodes
const playerCover = document.getElementById("player-cover");
const playerCoverContainer = document.getElementById("player-cover-container");
const playerVideoBadge = document.getElementById("player-video-badge");
const playerTrackTitle = document.getElementById("player-track-title");
const playerTrackArtist = document.getElementById("player-track-artist");
const playerLikeBtn = document.getElementById("player-like-btn");
const playerAddPlaylistBtn = document.getElementById("player-add-playlist-btn");

const playerShuffleBtn = document.getElementById("player-shuffle-btn");
const playerPrevBtn = document.getElementById("player-prev-btn");
const playerPlayBtn = document.getElementById("player-play-btn");
const playerNextBtn = document.getElementById("player-next-btn");
const playerRepeatBtn = document.getElementById("player-repeat-btn");

const playerTimeElapsed = document.getElementById("player-time-elapsed");
const playerTimeTotal = document.getElementById("player-time-total");
const playerProgressContainer = document.getElementById("player-progress-container");
const playerProgressBar = document.getElementById("player-progress-bar");

const playerQueueBtn = document.getElementById("player-queue-btn");
const playerVisualizerBtn = document.getElementById("player-visualizer-btn");
const playerVolumeBtn = document.getElementById("player-volume-btn");
const playerVolumeContainer = document.getElementById("player-volume-container");
const playerVolumeBar = document.getElementById("player-volume-bar");
const playerTheaterBtn = document.getElementById("player-theater-btn");

// Modals & Context Menus
const playlistModal = document.getElementById("playlist-modal");
const closeModalBtn = document.getElementById("close-playlist-modal");
const modalPlaylistsContainer = document.getElementById("modal-playlists-container");
const modalCreatePlaylistBtn = document.getElementById("modal-create-playlist-btn");
const songContextMenu = document.getElementById("song-context-menu");

let currentContextTrack = null; // Track being operated on by context menu

// ==========================================================================
// CORE INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Load initial content rows on Home
  renderHomeRows();
  
  // Render Left Sidebar Playlists
  renderSidebarPlaylists();
  
  // Bind standard UI actions
  bindUIEvents();
  
  // Bind media element events
  bindMediaEvents();
  
  // Initialize dynamic visualizer canvas loop
  initVisualizer();
  
  // Sync initial volume settings
  activeMedia.volume = volumeVal;
  updateVolumeUI();

  // Set default initial Hero Banner song (Hey Minnale)
  setHeroBanner(TRACKS.find(t => t.id === "5"));

  // Update back/forward buttons state
  updateNavButtonsState();

  // Initialize Lucide icons
  lucide.createIcons();
});

// ==========================================================================
// NAVIGATION SYSTEM (SPA ROUTER)
// ==========================================================================
function navigateTo(viewId, playlistId = null) {
  // Hide search container in header unless viewing search page
  if (viewId === "search") {
    searchContainer.style.display = "flex";
  } else {
    searchContainer.style.display = "none";
  }

  // Update view history stack if we are not moving backwards/forwards programmatically
  const currentActive = document.querySelector(".content-view.active");
  const currentActiveId = currentActive ? currentActive.id : "home";
  
  if (viewHistory[historyIndex] !== viewId || (viewId === "playlist" && currentPlaylistId !== playlistId)) {
    // Slice off any forward history if we were in the middle of history and navigated away
    viewHistory = viewHistory.slice(0, historyIndex + 1);
    viewHistory.push({ viewId, playlistId });
    historyIndex = viewHistory.length - 1;
  }

  currentPlaylistId = playlistId;

  // Toggle active view elements
  contentViews.forEach(view => {
    view.classList.remove("active");
    if (view.id === `${viewId}-view`) {
      view.classList.add("active");
    }
  });

  // Toggle active styling on sidebar items
  sidebarMenuItems.forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("data-view") === viewId) {
      item.classList.add("active");
    }
  });

  // Special view content rendering
  if (viewId === "playlist" && playlistId) {
    renderPlaylistDetail(playlistId);
  } else if (viewId === "library") {
    renderLibraryPlaylists();
  } else if (viewId === "theater") {
    renderTheaterQueue();
  }

  // Scroll main view back to top
  contentScrollContainer.scrollTop = 0;
  
  updateNavButtonsState();
}

function handleGoBack() {
  if (historyIndex > 0) {
    historyIndex--;
    const state = viewHistory[historyIndex];
    if (typeof state === "string") {
      navigateTo(state);
    } else {
      navigateTo(state.viewId, state.playlistId);
    }
  }
}

function handleGoForward() {
  if (historyIndex < viewHistory.length - 1) {
    historyIndex++;
    const state = viewHistory[historyIndex];
    if (typeof state === "string") {
      navigateTo(state);
    } else {
      navigateTo(state.viewId, state.playlistId);
    }
  }
}

function updateNavButtonsState() {
  navBackBtn.disabled = historyIndex === 0;
  navBackBtn.style.opacity = historyIndex === 0 ? "0.4" : "1";
  
  navForwardBtn.disabled = historyIndex === viewHistory.length - 1;
  navForwardBtn.style.opacity = historyIndex === viewHistory.length - 1 ? "0.4" : "1";
}

// ==========================================================================
// HOME VIEW RENDERING
// ==========================================================================
function renderHomeRows() {
  // Render Good Evening quick grid (6 top items)
  const quickTracks = TRACKS.slice(0, 6);
  quickGridContainer.innerHTML = quickTracks.map(track => `
    <div class="quick-card" data-track-id="${track.id}">
      <div class="quick-card-art" style="background-image: url('${track.cover}')"></div>
      <span class="quick-card-title">${track.title}</span>
      <button class="quick-play-btn" data-play-id="${track.id}">
        <i data-lucide="play" fill="currentColor" size="18"></i>
      </button>
    </div>
  `).join("");

  // Render Horizontal rows
  renderCardRow(TRACKS.filter(t => t.category === "trending"), trendingRow);
  renderCardRow(TRACKS.filter(t => t.category === "melodies"), melodiesRow);
  renderCardRow(TRACKS.filter(t => t.category === "heavy"), heavyRow);
  renderCardRow(TRACKS.filter(t => t.category === "video"), videosRow);

  // Re-run lucide to render new icons
  lucide.createIcons();
}

function renderCardRow(tracks, container) {
  container.innerHTML = tracks.map(track => `
    <div class="song-card" data-track-id="${track.id}">
      <div class="card-art-container">
        <div class="card-art" style="background-image: url('${track.cover}')"></div>
        <button class="card-play-btn" data-play-id="${track.id}">
          <i data-lucide="play" fill="currentColor" size="20"></i>
        </button>
      </div>
      <span class="card-title">${track.title}</span>
      <span class="card-desc">${track.artist}</span>
    </div>
  `).join("");
}

function setHeroBanner(track) {
  if (!track) return;
  heroBanner.style.backgroundImage = `url('${track.cover}')`;
  heroSongTitle.innerText = track.title;
  heroSongDesc.innerText = `Listen to "${track.title}" from the album/movie ${track.album}. Experience the best of ${track.artist} in crystal clear audio.`;
  
  heroPlayBtn.setAttribute("data-track-id", track.id);
  heroLikeBtn.setAttribute("data-track-id", track.id);
  
  const liked = getLikedSongs().includes(track.id);
  heroLikeBtn.classList.toggle("liked", liked);
  const heartIcon = heroLikeBtn.querySelector("i");
  if (heartIcon) {
    if (liked) {
      heartIcon.setAttribute("fill", "currentColor");
    } else {
      heartIcon.removeAttribute("fill");
    }
  }
}

// ==========================================================================
// LOCAL STORAGE ACTIONS (LIKES AND PLAYLISTS)
// ==========================================================================
function getLikedSongs() {
  return JSON.parse(localStorage.getItem(LIKED_SONGS_KEY)) || [];
}

function toggleLikeTrack(trackId) {
  let liked = getLikedSongs();
  const index = liked.indexOf(trackId);
  let isLiked = false;
  if (index === -1) {
    liked.push(trackId);
    isLiked = true;
  } else {
    liked.splice(index, 1);
    isLiked = false;
  }
  localStorage.setItem(LIKED_SONGS_KEY, JSON.stringify(liked));
  
  // Sync Player Heart Active State
  if (currentTrack && currentTrack.id === trackId) {
    playerLikeBtn.classList.toggle("liked", isLiked);
    const heartIcon = playerLikeBtn.querySelector("i");
    if (isLiked) {
      heartIcon.setAttribute("fill", "currentColor");
    } else {
      heartIcon.removeAttribute("fill");
    }
  }

  // Sync Hero Banner
  const heroId = heroPlayBtn.getAttribute("data-track-id");
  if (heroId === trackId) {
    heroLikeBtn.classList.toggle("liked", isLiked);
    const heroHeart = heroLikeBtn.querySelector("i");
    if (isLiked) {
      heroHeart.setAttribute("fill", "currentColor");
    } else {
      heroHeart.removeAttribute("fill");
    }
  }

  // Re-render currently visible playlist detail or home
  if (currentPlaylistId === "liked") {
    renderPlaylistDetail("liked");
  }
}

function getPlaylists() {
  return JSON.parse(localStorage.getItem(PLAYLISTS_KEY)) || {};
}

function savePlaylists(playlists) {
  localStorage.setItem(PLAYLISTS_KEY, JSON.stringify(playlists));
  renderSidebarPlaylists();
}

function createNewPlaylist(customName = null) {
  const name = customName || prompt("Enter playlist name:", "My Playlist");
  if (!name || name.trim() === "") return;

  const playlists = getPlaylists();
  const playlistId = "pl_" + Date.now();
  playlists[playlistId] = {
    id: playlistId,
    name: name.trim(),
    description: "A custom user-defined playlist.",
    tracks: [],
    createdAt: new Date().toISOString()
  };

  savePlaylists(playlists);
}

function addTrackToPlaylist(playlistId, trackId) {
  const playlists = getPlaylists();
  if (playlists[playlistId]) {
    if (!playlists[playlistId].tracks.includes(trackId)) {
      playlists[playlistId].tracks.push(trackId);
      savePlaylists(playlists);
      alert(`Added to "${playlists[playlistId].name}"`);
    } else {
      alert("This song is already in this playlist.");
    }
  }
}

function removeTrackFromPlaylist(playlistId, trackId) {
  const playlists = getPlaylists();
  if (playlists[playlistId]) {
    playlists[playlistId].tracks = playlists[playlistId].tracks.filter(id => id !== trackId);
    savePlaylists(playlists);
    renderPlaylistDetail(playlistId);
  }
}

function deletePlaylist(playlistId) {
  if (confirm("Are you sure you want to delete this playlist?")) {
    const playlists = getPlaylists();
    delete playlists[playlistId];
    savePlaylists(playlists);
    
    // Fall back to library
    navigateTo("library");
  }
}

// ==========================================================================
// RENDER VIEWS: SIDEBAR, PLAYLIST DETAILS, LIBRARY
// ==========================================================================
function renderSidebarPlaylists() {
  const playlists = getPlaylists();
  const listContainer = document.getElementById("sidebar-playlists");
  
  // Keep Liked Songs item
  let html = `
    <div class="playlist-item liked-songs-item ${currentPlaylistId === 'liked' ? 'active-list' : ''}" data-view="playlist" data-playlist-id="liked">
      <div class="liked-badge">
        <i data-lucide="heart" fill="currentColor"></i>
      </div>
      <div class="playlist-item-info">
        <span class="playlist-name">Liked Songs</span>
        <span class="playlist-meta">Auto Playlist</span>
      </div>
    </div>
  `;

  // Render user custom playlists
  for (const id in playlists) {
    const pl = playlists[id];
    html += `
      <div class="playlist-item ${currentPlaylistId === id ? 'active-list' : ''}" data-view="playlist" data-playlist-id="${pl.id}">
        <div class="playlist-art" style="background-image: linear-gradient(135deg, #1e3c72, #2a5298)">
          ${pl.name.substring(0, 2).toUpperCase()}
        </div>
        <div class="playlist-item-info">
          <span class="playlist-name">${pl.name}</span>
          <span class="playlist-meta">${pl.tracks.length} songs</span>
        </div>
      </div>
    `;
  }

  listContainer.innerHTML = html;
  lucide.createIcons();

  // Attach click listeners to sidebar playlists
  listContainer.querySelectorAll(".playlist-item").forEach(item => {
    item.addEventListener("click", () => {
      const plId = item.getAttribute("data-playlist-id");
      navigateTo("playlist", plId);
    });
  });
}

function renderLibraryPlaylists() {
  const playlists = getPlaylists();
  
  let html = `
    <!-- Liked Songs Playlist Card -->
    <div class="song-card" style="background: linear-gradient(135deg, #450af5 0%, #8e2de2 100%); grid-column: span 2;" data-view="playlist" data-playlist-id="liked">
      <div style="flex: 1; display: flex; flex-direction: column; justify-content: flex-end; padding: 12px 6px;">
        <i data-lucide="heart" fill="currentColor" size="48" style="color: white; margin-bottom: 24px;"></i>
        <h2 style="font-size: 28px; font-weight: 800; line-height: 1.1; margin-bottom: 8px;">Liked Songs</h2>
        <span style="font-size: 14px; color: rgba(255,255,255,0.7);">${getLikedSongs().length} liked tracks</span>
      </div>
    </div>
  `;

  for (const id in playlists) {
    const pl = playlists[id];
    html += `
      <div class="song-card" data-view="playlist" data-playlist-id="${pl.id}">
        <div class="card-art-container">
          <div class="playlist-art" style="width: 100%; height: 100%; font-size: 32px; background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);">
            ${pl.name.substring(0, 2).toUpperCase()}
          </div>
          <button class="card-play-btn" data-playlist-play-id="${pl.id}">
            <i data-lucide="play" fill="currentColor" size="20"></i>
          </button>
        </div>
        <span class="card-title">${pl.name}</span>
        <span class="card-desc">${pl.tracks.length} songs</span>
      </div>
    `;
  }

  libraryPlaylistsGrid.innerHTML = html;
  lucide.createIcons();

  // Attach click listeners
  libraryPlaylistsGrid.querySelectorAll(".song-card").forEach(card => {
    card.addEventListener("click", (e) => {
      // Check if clicked the overlay play button
      const playBtn = e.target.closest("[data-playlist-play-id]");
      if (playBtn) {
        e.stopPropagation();
        const plId = playBtn.getAttribute("data-playlist-play-id");
        playPlaylistById(plId);
        return;
      }

      const plId = card.getAttribute("data-playlist-id");
      navigateTo("playlist", plId);
    });
  });
}

function renderPlaylistDetail(playlistId) {
  let plName = "";
  let plDesc = "";
  let plSongs = [];
  let isCustom = false;

  if (playlistId === "liked") {
    plName = "Liked Songs";
    plDesc = "Your personal collection of favorite tracks.";
    const likedIds = getLikedSongs();
    plSongs = TRACKS.filter(track => likedIds.includes(track.id));
    playlistHeaderCover.style.backgroundImage = "linear-gradient(135deg, #450af5, #c4efd9)";
    playlistHeaderCover.innerHTML = "";
  } else {
    const playlists = getPlaylists();
    const pl = playlists[playlistId];
    if (!pl) return navigateTo("home");
    
    plName = pl.name;
    plDesc = pl.description || "Custom user playlist";
    plSongs = TRACKS.filter(track => pl.tracks.includes(track.id));
    isCustom = true;
    playlistHeaderCover.style.backgroundImage = "linear-gradient(135deg, #1e3c72, #2a5298)";
    playlistHeaderCover.innerHTML = `<span style="font-size: 64px; font-weight: 800; color: white;">${plName.substring(0, 2).toUpperCase()}</span>`;
  }

  playlistDetailTitle.innerText = plName;
  playlistDetailDesc.innerText = plDesc;
  playlistDetailCount.innerText = `${plSongs.length} songs`;
  playlistDetailDeleteBtn.style.display = isCustom ? "flex" : "none";
  playlistDetailDeleteBtn.onclick = () => deletePlaylist(playlistId);

  // Set action for play button
  playlistDetailPlayBtn.onclick = () => {
    if (plSongs.length > 0) {
      currentQueue = [...plSongs];
      currentQueueIndex = 0;
      playTrack(currentQueue[0]);
    }
  };

  // Render Tracks
  if (plSongs.length === 0) {
    playlistTracksBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 48px 0;">
          <i data-lucide="music-4" size="36" style="margin-bottom: 12px; opacity: 0.5;"></i>
          <p>No songs in this playlist yet.</p>
        </td>
      </tr>
    `;
    lucide.createIcons();
    return;
  }

  playlistTracksBody.innerHTML = plSongs.map((track, idx) => {
    const isCurrent = currentTrack && currentTrack.id === track.id;
    const isLiked = getLikedSongs().includes(track.id);
    
    return `
      <tr class="track-row ${isCurrent ? 'active-track' : ''}" data-track-id="${track.id}">
        <td class="col-num">${isCurrent && isPlaying ? '<div class="eq-container"><div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div></div>' : idx + 1}</td>
        <td class="col-title">
          <div class="table-row-art" style="background-image: url('${track.cover}')"></div>
          <div class="table-row-info">
            <span class="table-row-title">${track.title}</span>
            <span class="table-row-artist">${track.artist}</span>
          </div>
        </td>
        <td class="col-album">${track.album}</td>
        <td class="col-actions">
          <button class="table-heart-btn ${isLiked ? 'liked' : ''}" data-like-id="${track.id}">
            <i data-lucide="heart" size="16"></i>
          </button>
          <button class="table-menu-btn" data-menu-id="${track.id}">
            <i data-lucide="more-horizontal" size="16"></i>
          </button>
        </td>
        <td class="col-duration">${track.duration}</td>
      </tr>
    `;
  }).join("");

  lucide.createIcons();

  // Attach double click to play or single click handler
  playlistTracksBody.querySelectorAll(".track-row").forEach(row => {
    row.addEventListener("dblclick", () => {
      const tId = row.getAttribute("data-track-id");
      const clickedTrack = TRACKS.find(t => t.id === tId);
      currentQueue = [...plSongs];
      currentQueueIndex = currentQueue.findIndex(t => t.id === tId);
      playTrack(clickedTrack);
    });

    // Touch click for play button icon triggers inside list
    row.addEventListener("click", (e) => {
      const likeBtn = e.target.closest("[data-like-id]");
      const menuBtn = e.target.closest("[data-menu-id]");
      
      if (likeBtn) {
        e.stopPropagation();
        toggleLikeTrack(likeBtn.getAttribute("data-like-id"));
        return;
      }
      
      if (menuBtn) {
        e.stopPropagation();
        showContextMenu(e, menuBtn.getAttribute("data-menu-id"));
        return;
      }
    });
  });
}

function playPlaylistById(playlistId) {
  if (playlistId === "liked") {
    const likedIds = getLikedSongs();
    const plSongs = TRACKS.filter(track => likedIds.includes(track.id));
    if (plSongs.length > 0) {
      currentQueue = [...plSongs];
      currentQueueIndex = 0;
      playTrack(currentQueue[0]);
    }
  } else {
    const playlists = getPlaylists();
    const pl = playlists[playlistId];
    if (pl && pl.tracks.length > 0) {
      const plSongs = TRACKS.filter(track => pl.tracks.includes(track.id));
      currentQueue = [...plSongs];
      currentQueueIndex = 0;
      playTrack(currentQueue[0]);
    }
  }
}

// ==========================================================================
// AUDIO/VIDEO PLAYBACK CONTROLLER
// ==========================================================================
function playTrack(track) {
  if (!track) return;
  
  // Pause any currently playing active element
  activeMedia.pause();
  
  currentTrack = track;
  const isVideo = track.type === "video";
  
  // Sync Queue Index
  currentQueueIndex = currentQueue.findIndex(t => t.id === track.id);
  if (currentQueueIndex === -1) {
    // If track is not in queue, insert it
    currentQueue = [track];
    currentQueueIndex = 0;
  }

  // Configure target active media element
  if (isVideo) {
    activeMedia = videoPlayer;
    videoPlayer.src = track.url;
    videoPlayer.load();
    
    // Auto shift UI views
    videoScreenContainer.style.display = "block";
    canvasScreenContainer.style.display = "none";
    
    // Automatically navigate to theater view for movies/video files
    navigateTo("theater");
    playerVideoBadge.style.display = "flex";
  } else {
    activeMedia = audioPlayer;
    audioPlayer.src = track.url;
    audioPlayer.load();
    
    videoScreenContainer.style.display = "none";
    canvasScreenContainer.style.display = "block";
    playerVideoBadge.style.display = "none";
  }

  // Start Playback
  isPlaying = true;
  activeMedia.play()
    .then(() => {
      updatePlaybackUI();
    })
    .catch(err => {
      console.warn("Playback blocked by browser auto-play restrictions, waiting for user input.", err);
      isPlaying = false;
      updatePlaybackUI();
    });

  // Highlight active row if we are inside playlist detail view
  document.querySelectorAll(".track-row").forEach(row => {
    row.classList.remove("active-track");
    const numCol = row.querySelector(".col-num");
    const idx = row.rowIndex;
    if (numCol) numCol.innerText = idx;
    
    if (row.getAttribute("data-track-id") === track.id) {
      row.classList.add("active-track");
      if (numCol) {
        numCol.innerHTML = '<div class="eq-container"><div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div></div>';
      }
    }
  });

  // Sync Hero Banner button to match current song info
  setHeroBanner(track);
}

function pauseTrack() {
  activeMedia.pause();
  isPlaying = false;
  updatePlaybackUI();
  
  // Remove equalizer icon on tables
  const activeRow = document.querySelector(".track-row.active-track .col-num");
  if (activeRow) {
    activeRow.innerText = document.querySelector(".track-row.active-track").rowIndex;
  }
}

function togglePlay() {
  if (!currentTrack) {
    // If nothing selected yet, play the first track in our list
    playTrack(TRACKS[0]);
    return;
  }
  if (isPlaying) {
    pauseTrack();
  } else {
    isPlaying = true;
    activeMedia.play();
    updatePlaybackUI();
  }
}

function nextTrack() {
  if (currentQueue.length === 0) return;
  
  if (isRepeat === "one") {
    // Repeat active track
    activeMedia.currentTime = 0;
    activeMedia.play();
    return;
  }

  if (isShuffle) {
    const randIdx = Math.floor(Math.random() * currentQueue.length);
    currentQueueIndex = randIdx;
  } else {
    currentQueueIndex++;
    if (currentQueueIndex >= currentQueue.length) {
      if (isRepeat === "all") {
        currentQueueIndex = 0;
      } else {
        currentQueueIndex = currentQueue.length - 1;
        isPlaying = false;
        activeMedia.pause();
        updatePlaybackUI();
        return;
      }
    }
  }

  playTrack(currentQueue[currentQueueIndex]);
}

function prevTrack() {
  if (currentQueue.length === 0) return;

  // If song played for more than 3 seconds, reset track timing first
  if (activeMedia.currentTime > 3) {
    activeMedia.currentTime = 0;
    return;
  }

  if (isShuffle) {
    const randIdx = Math.floor(Math.random() * currentQueue.length);
    currentQueueIndex = randIdx;
  } else {
    currentQueueIndex--;
    if (currentQueueIndex < 0) {
      if (isRepeat === "all") {
        currentQueueIndex = currentQueue.length - 1;
      } else {
        currentQueueIndex = 0;
      }
    }
  }

  playTrack(currentQueue[currentQueueIndex]);
}

// ==========================================================================
// SYNC UI WITH PLAYBACK STATE
// ==========================================================================
function updatePlaybackUI() {
  if (!currentTrack) return;

  // Update Footer Cover & Title
  playerCover.style.backgroundImage = `url('${currentTrack.cover}')`;
  playerTrackTitle.innerText = currentTrack.title;
  playerTrackArtist.innerText = currentTrack.artist;

  // Sync Favorite button state in player
  const liked = getLikedSongs().includes(currentTrack.id);
  playerLikeBtn.classList.toggle("liked", liked);
  const heartIcon = playerLikeBtn.querySelector("i");
  if (liked) {
    heartIcon.setAttribute("fill", "currentColor");
  } else {
    heartIcon.removeAttribute("fill");
  }

  // Update Play Button Icon
  playerPlayBtn.innerHTML = isPlaying ? `<i data-lucide="pause"></i>` : `<i data-lucide="play" fill="currentColor"></i>`;
  lucide.createIcons();

  // Sync Visualizer Screen Header details
  visualizerSongCover.src = currentTrack.cover;
  visualizerSongTitle.innerText = currentTrack.title;
  visualizerSongArtist.innerText = currentTrack.artist;

  // Pulse effect on player album cover
  if (isPlaying) {
    playerCover.classList.add("playing");
  } else {
    playerCover.classList.remove("playing");
  }

  // Render sidebar or theater lists to show playing icons
  if (document.getElementById("theater-view").classList.contains("active")) {
    renderTheaterQueue();
  }
}

function bindMediaEvents() {
  const mediaEvents = (player) => {
    player.addEventListener("timeupdate", () => {
      if (player === activeMedia) {
        updateProgressUI();
      }
    });

    player.addEventListener("loadedmetadata", () => {
      if (player === activeMedia) {
        playerTimeTotal.innerText = formatTime(player.duration);
      }
    });

    player.addEventListener("ended", () => {
      if (player === activeMedia) {
        nextTrack();
      }
    });
  };

  mediaEvents(audioPlayer);
  mediaEvents(videoPlayer);
}

function updateProgressUI() {
  const current = activeMedia.currentTime;
  const duration = activeMedia.duration || 0;
  
  playerTimeElapsed.innerText = formatTime(current);
  if (duration > 0) {
    playerTimeTotal.innerText = formatTime(duration);
    const pct = (current / duration) * 100;
    playerProgressBar.style.setProperty("--progress-pct", `${pct}%`);
  } else {
    playerProgressBar.style.setProperty("--progress-pct", `0%`);
  }
}

function formatTime(secs) {
  if (isNaN(secs)) return "0:00";
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

// Seek handler
function seekTo(e) {
  const rect = playerProgressContainer.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  const pct = Math.max(0, Math.min(1, clickX / width));
  
  if (activeMedia.duration) {
    activeMedia.currentTime = pct * activeMedia.duration;
    updateProgressUI();
  }
}

// Volume Slider logic
function updateVolumeUI() {
  if (isMuted) {
    playerVolumeBtn.innerHTML = `<i data-lucide="volume-x"></i>`;
    playerVolumeBar.style.setProperty("--volume-pct", "0%");
  } else {
    const icon = volumeVal === 0 ? "volume-x" : volumeVal < 0.3 ? "volume" : volumeVal < 0.7 ? "volume-1" : "volume-2";
    playerVolumeBtn.innerHTML = `<i data-lucide="${icon}"></i>`;
    playerVolumeBar.style.setProperty("--volume-pct", `${volumeVal * 100}%`);
  }
  lucide.createIcons();
}

function setVolume(e) {
  const rect = playerVolumeContainer.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  const pct = Math.max(0, Math.min(1, clickX / width));
  
  volumeVal = pct;
  isMuted = false;
  audioPlayer.volume = volumeVal;
  videoPlayer.volume = volumeVal;
  updateVolumeUI();
}

function toggleMute() {
  isMuted = !isMuted;
  const activeVol = isMuted ? 0 : volumeVal;
  audioPlayer.volume = activeVol;
  videoPlayer.volume = activeVol;
  updateVolumeUI();
}

// ==========================================================================
// SEARCH SYSTEM
// ==========================================================================
function handleSearch(query) {
  const cleanQuery = query.toLowerCase().trim();
  if (cleanQuery === "") {
    clearSearchBtn.style.display = "none";
    searchResultsSection.style.display = "none";
    searchGenresSection.style.display = "block";
    return;
  }

  clearSearchBtn.style.display = "flex";
  searchGenresSection.style.display = "none";
  searchResultsSection.style.display = "block";

  const results = TRACKS.filter(track => 
    track.title.toLowerCase().includes(cleanQuery) ||
    track.artist.toLowerCase().includes(cleanQuery) ||
    track.album.toLowerCase().includes(cleanQuery)
  );

  if (results.length === 0) {
    searchResultsGrid.innerHTML = `
      <div style="color: var(--text-muted); padding: 48px 0; text-align: center; width: 100%;">
        <i data-lucide="frown" size="32" style="margin-bottom: 12px; opacity: 0.6;"></i>
        <p>No results found for "${query}"</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  searchResultsGrid.innerHTML = `
    <table class="tracks-table">
      <thead>
        <tr>
          <th class="col-num">#</th>
          <th class="col-title">Title</th>
          <th class="col-album">Movie/Album</th>
          <th class="col-actions"></th>
          <th class="col-duration"><i data-lucide="clock"></i></th>
        </tr>
      </thead>
      <tbody>
        ${results.map((track, idx) => {
          const isCurrent = currentTrack && currentTrack.id === track.id;
          const isLiked = getLikedSongs().includes(track.id);
          return `
            <tr class="track-row ${isCurrent ? 'active-track' : ''}" data-track-id="${track.id}">
              <td class="col-num">${isCurrent && isPlaying ? '<div class="eq-container"><div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div></div>' : idx + 1}</td>
              <td class="col-title">
                <div class="table-row-art" style="background-image: url('${track.cover}')"></div>
                <div class="table-row-info">
                  <span class="table-row-title">${track.title}</span>
                  <span class="table-row-artist">${track.artist}</span>
                </div>
              </td>
              <td class="col-album">${track.album}</td>
              <td class="col-actions">
                <button class="table-heart-btn ${isLiked ? 'liked' : ''}" data-like-id="${track.id}">
                  <i data-lucide="heart" size="16"></i>
                </button>
                <button class="table-menu-btn" data-menu-id="${track.id}">
                  <i data-lucide="more-horizontal" size="16"></i>
                </button>
              </td>
              <td class="col-duration">${track.duration}</td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
  `;

  lucide.createIcons();

  // Attach search result row play listeners
  searchResultsGrid.querySelectorAll(".track-row").forEach(row => {
    row.addEventListener("dblclick", () => {
      const tId = row.getAttribute("data-track-id");
      const clickedTrack = TRACKS.find(t => t.id === tId);
      currentQueue = [...results];
      currentQueueIndex = currentQueue.findIndex(t => t.id === tId);
      playTrack(clickedTrack);
    });

    row.addEventListener("click", (e) => {
      const likeBtn = e.target.closest("[data-like-id]");
      const menuBtn = e.target.closest("[data-menu-id]");
      if (likeBtn) {
        e.stopPropagation();
        toggleLikeTrack(likeBtn.getAttribute("data-like-id"));
        handleSearch(searchInput.value); // refresh results list states
        return;
      }
      if (menuBtn) {
        e.stopPropagation();
        showContextMenu(e, menuBtn.getAttribute("data-menu-id"));
        return;
      }
    });
  });
}

// ==========================================================================
// CONTEXT MENU AND ADD PLAYLIST MODAL
// ==========================================================================
function showContextMenu(e, trackId) {
  currentContextTrack = TRACKS.find(t => t.id === trackId);
  if (!currentContextTrack) return;

  const isLiked = getLikedSongs().includes(trackId);
  document.getElementById("context-toggle-like").innerHTML = isLiked ? 
    `<i data-lucide="heart-off" size="16"></i> Remove from Liked Songs` : 
    `<i data-lucide="heart" size="16"></i> Add to Liked Songs`;

  // Check if we are inside a custom playlist view. If so, show "Remove from playlist"
  const removeLi = document.getElementById("context-remove-playlist");
  if (currentPlaylistId && currentPlaylistId !== "liked") {
    removeLi.style.display = "flex";
  } else {
    removeLi.style.display = "none";
  }

  songContextMenu.style.display = "block";
  
  // Reposition context menu safely
  const menuWidth = songContextMenu.offsetWidth || 220;
  const menuHeight = songContextMenu.offsetHeight || 180;
  let posX = e.clientX;
  let posY = e.clientY;

  if (posX + menuWidth > window.innerWidth) posX -= menuWidth;
  if (posY + menuHeight > window.innerHeight) posY -= menuHeight;

  songContextMenu.style.left = `${posX}px`;
  songContextMenu.style.top = `${posY}px`;
  
  lucide.createIcons();

  // Dismiss listeners
  document.addEventListener("click", hideContextMenu);
}

function hideContextMenu() {
  songContextMenu.style.display = "none";
  document.removeEventListener("click", hideContextMenu);
}

function openPlaylistModal() {
  const playlists = getPlaylists();
  
  let html = "";
  for (const id in playlists) {
    const pl = playlists[id];
    html += `
      <div class="modal-playlist-item" data-pl-id="${pl.id}">
        <div class="playlist-art" style="background-image: linear-gradient(135deg, #1e3c72, #2a5298)">
          ${pl.name.substring(0, 2).toUpperCase()}
        </div>
        <div>
          <span class="playlist-name">${pl.name}</span>
        </div>
      </div>
    `;
  }

  if (Object.keys(playlists).length === 0) {
    html = `<p style="text-align: center; color: var(--text-muted); padding: 16px 0;">No playlists created yet.</p>`;
  }

  modalPlaylistsContainer.innerHTML = html;
  playlistModal.style.display = "flex";

  // Bind playlist selector items
  modalPlaylistsContainer.querySelectorAll(".modal-playlist-item").forEach(item => {
    item.addEventListener("click", () => {
      const plId = item.getAttribute("data-pl-id");
      if (currentContextTrack) {
        addTrackToPlaylist(plId, currentContextTrack.id);
        playlistModal.style.display = "none";
      }
    });
  });
}

// ==========================================================================
// RENDERING THEATER QUEUE
// ==========================================================================
function renderTheaterQueue() {
  if (currentQueue.length === 0) {
    theaterUpNextList.innerHTML = `<p style="color: var(--text-muted); text-align: center; margin-top: 24px;">Queue is empty</p>`;
    return;
  }

  const upcoming = currentQueue.slice(currentQueueIndex + 1);
  if (upcoming.length === 0) {
    theaterUpNextList.innerHTML = `<p style="color: var(--text-muted); text-align: center; margin-top: 24px;">End of playlist</p>`;
    return;
  }

  theaterUpNextList.innerHTML = upcoming.map((track, idx) => `
    <div class="playlist-item" data-queue-track-id="${track.id}">
      <div class="playlist-art" style="background-image: url('${track.cover}')"></div>
      <div class="playlist-item-info">
        <span class="playlist-name" style="font-size: 13px;">${track.title}</span>
        <span class="playlist-meta" style="font-size: 11px;">${track.artist}</span>
      </div>
    </div>
  `).join("");

  // Play next items on double-click
  theaterUpNextList.querySelectorAll(".playlist-item").forEach(item => {
    item.addEventListener("dblclick", () => {
      const tId = item.getAttribute("data-queue-track-id");
      const track = TRACKS.find(t => t.id === tId);
      playTrack(track);
    });
  });
}

// ==========================================================================
// DYNAMIC PROCEDURAL VISUALIZER CANVAS (HIGH AESTHETICS)
// ==========================================================================
function initVisualizer() {
  const canvas = visualizerCanvas;
  const ctx = canvas.getContext("2d");
  
  let animationId;
  let lines = [];
  let particleList = [];

  function resizeCanvas() {
    canvas.width = canvas.parentElement.offsetWidth || 800;
    canvas.height = canvas.parentElement.offsetHeight || 450;
  }

  // Create initial wave line config
  for (let i = 0; i < 4; i++) {
    lines.push({
      amplitude: 25 + i * 15,
      frequency: 0.005 + i * 0.002,
      phase: i * Math.PI / 4,
      speed: 0.03 - i * 0.005,
      color: `rgba(29, 185, 84, ${0.15 + (i * 0.1)})`
    });
  }

  // Particle generator
  for (let i = 0; i < 50; i++) {
    particleList.push({
      x: Math.random() * 800,
      y: Math.random() * 450,
      radius: Math.random() * 3 + 1,
      speedY: -(Math.random() * 0.8 + 0.2),
      alpha: Math.random() * 0.5 + 0.1
    });
  }

  function draw() {
    animationId = requestAnimationFrame(draw);
    
    // Clear canvas with subtle radial trail
    const gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 10, canvas.width/2, canvas.height/2, canvas.width);
    gradient.addColorStop(0, '#101012');
    gradient.addColorStop(1, '#050505');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const animationSpeedFactor = isPlaying ? 1.0 : 0.08;

    // Draw background neon aura based on track properties
    if (currentTrack) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, Math.PI * 2);
      ctx.fillStyle = currentTrack.color || "#1db954";
      ctx.filter = "blur(120px)";
      ctx.globalAlpha = isPlaying ? 0.12 : 0.04;
      ctx.fill();
      ctx.restore();
    }

    // Render Particles
    ctx.fillStyle = "#ffffff";
    particleList.forEach(p => {
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
      
      // Update coordinates
      p.y += p.speedY * animationSpeedFactor;
      if (p.y < 0) {
        p.y = canvas.height;
        p.x = Math.random() * canvas.width;
      }
    });
    ctx.globalAlpha = 1.0;

    // Render glowing equalizer wave lines
    lines.forEach((line, idx) => {
      ctx.beginPath();
      ctx.lineWidth = idx === 0 ? 3 : 1.5;
      ctx.strokeStyle = currentTrack ? hexToRgbA(currentTrack.color, 0.2 + idx * 0.15) : line.color;
      
      if (isPlaying) {
        ctx.shadowColor = currentTrack ? currentTrack.color : "#1db954";
        ctx.shadowBlur = 15;
      }

      line.phase += line.speed * animationSpeedFactor;

      for (let x = 0; x < canvas.width; x++) {
        // Calculate vertical sine offset
        const rawOffset = Math.sin(x * line.frequency + line.phase);
        const y = canvas.height / 2 + rawOffset * line.amplitude * (isPlaying ? (1.0 + Math.sin(line.phase * 2) * 0.15) : 0.2);
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      ctx.shadowBlur = 0; // reset shadow
    });
  }

  // Helper conversion for colors
  function hexToRgbA(hex, alpha = 1.0){
    let c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x' + c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+alpha+')';
    }
    return `rgba(29, 185, 84, ${alpha})`;
  }

  // Handle resizing
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  
  // Start canvas visual loop
  draw();
}

// ==========================================================================
// GENERAL USER INTERFACE INTERACTIONS & EVENTS
// ==========================================================================
function bindUIEvents() {
  
  // Sidebar view links
  sidebarMenuItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const view = item.getAttribute("data-view");
      navigateTo(view);
    });
  });

  // History buttons
  navBackBtn.addEventListener("click", handleGoBack);
  navForwardBtn.addEventListener("click", handleGoForward);

  // Home Quick Play clicks
  quickGridContainer.addEventListener("click", (e) => {
    const playBtn = e.target.closest("[data-play-id]");
    const card = e.target.closest(".quick-card");
    
    if (playBtn) {
      e.stopPropagation();
      const tId = playBtn.getAttribute("data-play-id");
      playTrack(TRACKS.find(t => t.id === tId));
      return;
    }
    if (card) {
      const tId = card.getAttribute("data-track-id");
      navigateTo("playlist", "liked"); // open list or home context
      playTrack(TRACKS.find(t => t.id === tId));
    }
  });

  // Home Card Click handlers
  const handleCardClick = (e, rowSelector) => {
    const playBtn = e.target.closest("[data-play-id]");
    const card = e.target.closest(".song-card");
    
    if (playBtn) {
      e.stopPropagation();
      const tId = playBtn.getAttribute("data-play-id");
      playTrack(TRACKS.find(t => t.id === tId));
      return;
    }
    
    if (card) {
      const tId = card.getAttribute("data-track-id");
      const track = TRACKS.find(t => t.id === tId);
      
      if (track.type === "video") {
        playTrack(track);
      } else {
        // Normal card click sets banner featured song
        setHeroBanner(track);
        // Scroll view back to top to let user see hero banner
        contentScrollContainer.scrollTop = 0;
      }
    }
  };

  trendingRow.addEventListener("click", (e) => handleCardClick(e, trendingRow));
  melodiesRow.addEventListener("click", (e) => handleCardClick(e, melodiesRow));
  heavyRow.addEventListener("click", (e) => handleCardClick(e, heavyRow));
  videosRow.addEventListener("click", (e) => handleCardClick(e, videosRow));

  // Hero Play buttons
  heroPlayBtn.addEventListener("click", () => {
    const tId = heroPlayBtn.getAttribute("data-track-id");
    playTrack(TRACKS.find(t => t.id === tId));
  });

  heroLikeBtn.addEventListener("click", () => {
    const tId = heroLikeBtn.getAttribute("data-track-id");
    toggleLikeTrack(tId);
  });

  // Footer Player seek action
  playerProgressContainer.addEventListener("click", seekTo);

  // Footer Controls
  playerPlayBtn.addEventListener("click", togglePlay);
  playerNextBtn.addEventListener("click", nextTrack);
  playerPrevBtn.addEventListener("click", prevTrack);

  // Volume Bar click action
  playerVolumeContainer.addEventListener("click", setVolume);
  playerVolumeBtn.addEventListener("click", toggleMute);

  // Shuffle toggle
  playerShuffleBtn.addEventListener("click", () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle("active-control", isShuffle);
  });

  // Repeat toggle cycle: off -> all -> one -> off
  playerRepeatBtn.addEventListener("click", () => {
    if (isRepeat === "off") {
      isRepeat = "all";
      playerRepeatBtn.classList.add("active-control");
      playerRepeatBtn.innerHTML = `<i data-lucide="repeat"></i>`;
    } else if (isRepeat === "all") {
      isRepeat = "one";
      playerRepeatBtn.classList.add("active-control");
      playerRepeatBtn.innerHTML = `<i data-lucide="repeat-1"></i>`;
    } else {
      isRepeat = "off";
      playerRepeatBtn.classList.remove("active-control");
      playerRepeatBtn.innerHTML = `<i data-lucide="repeat"></i>`;
    }
    lucide.createIcons();
  });

  // Player Cover click navigates directly to theater/visualizer view
  playerCoverContainer.addEventListener("click", () => {
    navigateTo("theater");
  });

  // Utility toggles
  playerTheaterBtn.addEventListener("click", () => {
    navigateTo("theater");
  });

  playerVisualizerBtn.addEventListener("click", () => {
    navigateTo("theater");
  });

  playerQueueBtn.addEventListener("click", () => {
    navigateTo("theater");
  });

  // Search Live inputs
  searchInput.addEventListener("input", (e) => {
    handleSearch(e.target.value);
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    handleSearch("");
    searchInput.focus();
  });

  // Modals buttons
  createPlaylistSidebarBtn.addEventListener("click", () => createNewPlaylist());
  createPlaylistLargeBtn.addEventListener("click", () => createNewPlaylist());
  playerAddPlaylistBtn.addEventListener("click", () => {
    if (currentTrack) {
      currentContextTrack = currentTrack;
      openPlaylistModal();
    }
  });

  closeModalBtn.addEventListener("click", () => {
    playlistModal.style.display = "none";
  });

  modalCreatePlaylistBtn.addEventListener("click", () => {
    createNewPlaylist();
    // Re-render modal selection grid
    openPlaylistModal();
  });

  // Context Menu selections
  document.getElementById("context-play-now").addEventListener("click", () => {
    if (currentContextTrack) playTrack(currentContextTrack);
  });

  document.getElementById("context-add-queue").addEventListener("click", () => {
    if (currentContextTrack) {
      currentQueue.push(currentContextTrack);
      alert(`Added "${currentContextTrack.title}" to Queue`);
    }
  });

  document.getElementById("context-toggle-like").addEventListener("click", () => {
    if (currentContextTrack) toggleLikeTrack(currentContextTrack.id);
  });

  document.getElementById("context-add-playlist").addEventListener("click", () => {
    if (currentContextTrack) openPlaylistModal();
  });

  document.getElementById("context-remove-playlist").addEventListener("click", () => {
    if (currentContextTrack && currentPlaylistId && currentPlaylistId !== "liked") {
      removeTrackFromPlaylist(currentPlaylistId, currentContextTrack.id);
    }
  });

  // Click outside to close modals
  window.addEventListener("click", (e) => {
    if (e.target === playlistModal) {
      playlistModal.style.display = "none";
    }
  });
}
