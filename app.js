const titles = [
  {
    id: "witch-harbor",
    title: "Witch Harbor",
    type: "manga",
    creator: "Aya Morimoto",
    meta: "Vol. 6 of 12 · RTL · 184 pages",
    progress: 72,
    color: "#0f766e",
    mark: "漫",
    description: "A supernatural harbor mystery with chapter-level page direction, translation notes, and double-spread handling."
  },
  {
    id: "silver-parallax",
    title: "Silver Parallax",
    type: "comic",
    creator: "Mae Rivas",
    meta: "Issue 14 · Guided view · 28 pages",
    progress: 38,
    color: "#4267ac",
    mark: "C",
    description: "A serialized sci-fi comic tracked by arcs, issues, variants, and guided panel reading."
  },
  {
    id: "cartographer",
    title: "The Cartographer's Clock",
    type: "ebook",
    creator: "Elias Shore",
    meta: "EPUB · 11 chapters · 43 highlights",
    progress: 54,
    color: "#9f3a5b",
    mark: "E",
    description: "A prose ebook with typography controls, annotations, dictionary lookup, and citation-friendly notes."
  },
  {
    id: "night-train",
    title: "Night Train Atlas",
    type: "audio",
    creator: "Mara Vale",
    narrator: "Lena Voss",
    meta: "Audiobook · 9h 42m · 18 chapters",
    remaining: "5h 14m",
    total: "9h 42m",
    progress: 46,
    color: "#c98b25",
    mark: "A",
    description: "A chaptered audiobook with bookmarks, speed control, sleep timers, and read-along sync hooks."
  },
  {
    id: "ink-crown",
    title: "Ink Crown",
    type: "manga",
    creator: "Ren Takeda",
    meta: "Vol. 2 of 8 · RTL · 212 pages",
    progress: 19,
    color: "#2f6f4e",
    mark: "漫",
    description: "A fantasy tournament manga organized by volumes, chapters, reading direction, and page spreads."
  },
  {
    id: "blackout-city",
    title: "Blackout City",
    type: "comic",
    creator: "Northstar Press",
    meta: "Collected edition · 7 issues",
    progress: 88,
    color: "#343a46",
    mark: "C",
    description: "A noir comic collection with issue grouping, missing-issue detection, and publisher metadata."
  },
  {
    id: "spider-man-asm-23",
    title: "Spider-Man",
    type: "comic",
    creator: "Marvel Comics",
    meta: "Amazing Spider-Man vol. 2 #23",
    storyTitle: "How Many Times?",
    storyPart: "2/3",
    seriesTitle: "Amazing Spider-Man",
    volume: "vol. 2",
    issue: "#23",
    releaseDate: "September 13, 2000",
    publisher: "Marvel Comics",
    cover: "./assets/asm-2-23.webp",
    progress: 41,
    color: "#0d5fa8",
    mark: "C",
    description: "Spider-Man is pushed into a brutal rematch as a burning enemy turns one ordinary rescue into a running fight."
  },
  {
    id: "soft-machines",
    title: "Soft Machines",
    type: "ebook",
    creator: "Priya Venn",
    meta: "EPUB · 24 chapters · 12 notes",
    progress: 7,
    color: "#7a4d8f",
    mark: "E",
    description: "A technical ebook prepared for focused reading, highlights, notes, and cross-device resume."
  },
  {
    id: "glass-orbit",
    title: "Glass Orbit",
    type: "audio",
    creator: "Nico Arendt",
    narrator: "Omar Reyes",
    meta: "Audiobook · 13h 06m · synced ebook",
    remaining: "4h 51m",
    total: "13h 06m",
    progress: 63,
    color: "#7a642a",
    mark: "A",
    description: "An audiobook paired to an ebook edition for text/audio progress alignment and quick bookmarks."
  },
  {
    id: "one-piece",
    title: "One Piece",
    type: "manga",
    creator: "Eiichiro Oda",
    meta: "Manga · 107 volumes · RTL",
    progress: 58,
    color: "#1f8aa8",
    mark: "漫",
    description: "A long-running manga shelf with volume tracking, chapter stacks, and right-to-left reading."
  },
  {
    id: "bleach",
    title: "Bleach",
    type: "manga",
    creator: "Tite Kubo",
    meta: "Manga · 74 volumes · RTL",
    progress: 47,
    color: "#c26f25",
    mark: "漫",
    description: "A manga shelf focused on volumes, arcs, chapter progress, and double-page spreads."
  },
  {
    id: "zombiepowder",
    title: "ZombiePowder",
    type: "manga",
    creator: "Tite Kubo",
    meta: "Manga · 4 volumes · RTL",
    progress: 100,
    color: "#6b7f3a",
    mark: "漫",
    description: "A completed manga shelf with volume history, reading direction, and collection status."
  }
];

const databaseComicIssues = [
  {
    id: "asm-v2-1",
    title: "Spider-Man",
    type: "comic",
    creator: "Marvel Comics",
    meta: "Amazing Spider-Man vol. 2 #1",
    storyTitle: "Where R U Spider-Man?",
    seriesTitle: "Amazing Spider-Man",
    volume: "vol. 2",
    issue: "#1",
    releaseDate: "January 6, 1999",
    publisher: "Marvel Comics",
    cover: "./assets/asm-v2-1.jpg",
    progress: 100,
    color: "#0d5fa8",
    mark: "C",
    description: "Peter Parker is missing from the city, leaving New York to wonder where Spider-Man has gone."
  },
  {
    id: "asm-v2-2",
    title: "Spider-Man",
    type: "comic",
    creator: "Marvel Comics",
    meta: "Amazing Spider-Man vol. 2 #2",
    storyTitle: "The Gathering of Five, Part Two",
    storyPart: "2/5",
    seriesTitle: "Amazing Spider-Man",
    volume: "vol. 2",
    issue: "#2",
    releaseDate: "February 10, 1999",
    publisher: "Marvel Comics",
    cover: "./assets/asm-v2-2.jpg",
    progress: 100,
    color: "#0d5fa8",
    mark: "C",
    description: "The Gathering of Five pulls Spider-Man deeper into a dangerous ritual with consequences across the city."
  },
  {
    id: "asm-v2-3",
    title: "Spider-Man",
    type: "comic",
    creator: "Marvel Comics",
    meta: "Amazing Spider-Man vol. 2 #3",
    storyTitle: "The Gathering of Five, Part Four",
    storyPart: "4/5",
    seriesTitle: "Amazing Spider-Man",
    volume: "vol. 2",
    issue: "#3",
    releaseDate: "March 10, 1999",
    publisher: "Marvel Comics",
    cover: "./assets/asm-v2-3.jpg",
    progress: 100,
    color: "#0d5fa8",
    mark: "C",
    description: "Spider-Man races through another chapter of the Gathering as the ritual's prize turns uglier."
  },
  {
    id: "asm-v2-4",
    title: "Spider-Man",
    type: "comic",
    creator: "Marvel Comics",
    meta: "Amazing Spider-Man vol. 2 #4",
    storyTitle: "Putting the Cat Out",
    seriesTitle: "Amazing Spider-Man",
    volume: "vol. 2",
    issue: "#4",
    releaseDate: "April 14, 1999",
    publisher: "Marvel Comics",
    cover: "./assets/asm-v2-4.jpg",
    progress: 100,
    color: "#0d5fa8",
    mark: "C",
    description: "A street-level fight puts Spider-Man in Black Cat's orbit as old loyalties become complicated."
  },
  {
    id: "asm-v2-5",
    title: "Spider-Man",
    type: "comic",
    creator: "Marvel Comics",
    meta: "Amazing Spider-Man vol. 2 #5",
    storyTitle: "A Day in the Life",
    seriesTitle: "Amazing Spider-Man",
    volume: "vol. 2",
    issue: "#5",
    releaseDate: "May 12, 1999",
    publisher: "Marvel Comics",
    cover: "./assets/asm-v2-5.jpg",
    progress: 92,
    color: "#0d5fa8",
    mark: "C",
    description: "Peter tries to keep one ordinary day from becoming another Spider-Man disaster."
  },
  {
    id: "ff-v3-1",
    title: "Fantastic Four",
    type: "comic",
    creator: "Marvel Comics",
    meta: "Fantastic Four vol. 3 #1",
    storyTitle: "Signal to Noise",
    seriesTitle: "Fantastic Four",
    volume: "vol. 3",
    issue: "#1",
    releaseDate: "January 14, 1998",
    publisher: "Marvel Comics",
    cover: "./assets/ff-v3-1.jpg",
    progress: 100,
    color: "#1f7ca8",
    mark: "C",
    description: "Marvel's first family returns to a public that still needs heroes, explorers, and problem solvers."
  },
  {
    id: "ff-v3-2",
    title: "Fantastic Four",
    type: "comic",
    creator: "Marvel Comics",
    meta: "Fantastic Four vol. 3 #2",
    storyTitle: "Be it Ever So Humble",
    seriesTitle: "Fantastic Four",
    volume: "vol. 3",
    issue: "#2",
    releaseDate: "February 11, 1998",
    publisher: "Marvel Comics",
    cover: "./assets/ff-v3-2.jpg",
    progress: 86,
    color: "#1f7ca8",
    mark: "C",
    description: "The team tries to rebuild home life while cosmic trouble keeps finding the front door."
  },
  {
    id: "ff-v3-3",
    title: "Fantastic Four",
    type: "comic",
    creator: "Marvel Comics",
    meta: "Fantastic Four vol. 3 #3",
    storyTitle: "Maria's World",
    seriesTitle: "Fantastic Four",
    volume: "vol. 3",
    issue: "#3",
    releaseDate: "March 11, 1998",
    publisher: "Marvel Comics",
    cover: "./assets/ff-v3-3.jpg",
    progress: 78,
    color: "#1f7ca8",
    mark: "C",
    description: "The Fantastic Four step into a strange mystery where family, science, and danger overlap."
  },
  {
    id: "ff-v3-4",
    title: "Fantastic Four",
    type: "comic",
    creator: "Marvel Comics",
    meta: "Fantastic Four vol. 3 #4",
    storyTitle: "A Matter of Faith",
    seriesTitle: "Fantastic Four",
    volume: "vol. 3",
    issue: "#4",
    releaseDate: "April 8, 1998",
    publisher: "Marvel Comics",
    cover: "./assets/ff-v3-4.jpg",
    progress: 70,
    color: "#1f7ca8",
    mark: "C",
    description: "Reed and Sue's family faces another test as the team balances belief, science, and survival."
  },
  {
    id: "ff-v3-5",
    title: "Fantastic Four",
    type: "comic",
    creator: "Marvel Comics",
    meta: "Fantastic Four vol. 3 #5",
    storyTitle: "The Beasts Below",
    seriesTitle: "Fantastic Four",
    volume: "vol. 3",
    issue: "#5",
    releaseDate: "May 13, 1998",
    publisher: "Marvel Comics",
    cover: "./assets/ff-v3-5.jpg",
    progress: 64,
    color: "#1f7ca8",
    mark: "C",
    description: "A threat beneath the surface reminds the Fantastic Four that exploration is never only outward."
  },
  {
    id: "xmen-v1-1",
    title: "X-Men",
    type: "comic",
    creator: "Marvel Comics",
    meta: "X-Men vol. 1 #1",
    storyTitle: "X-Men",
    seriesTitle: "X-Men",
    volume: "vol. 1",
    issue: "#1",
    releaseDate: "September 10, 1963",
    publisher: "Marvel Comics",
    cover: "./assets/xmen-v1-1.jpg",
    progress: 100,
    color: "#7a4d1d",
    mark: "C",
    description: "Professor Xavier gathers his first students as Magneto makes his debut against the original X-Men."
  },
  {
    id: "xmen-v1-2",
    title: "X-Men",
    type: "comic",
    creator: "Marvel Comics",
    meta: "X-Men vol. 1 #2",
    storyTitle: "No One Can Stop the Vanisher!",
    seriesTitle: "X-Men",
    volume: "vol. 1",
    issue: "#2",
    releaseDate: "November 12, 1963",
    publisher: "Marvel Comics",
    cover: "./assets/xmen-v1-2.jpg",
    progress: 100,
    color: "#7a4d1d",
    mark: "C",
    description: "The young mutant team faces the Vanisher, a thief whose power makes him nearly impossible to catch."
  },
  {
    id: "xmen-v1-3",
    title: "X-Men",
    type: "comic",
    creator: "Marvel Comics",
    meta: "X-Men vol. 1 #3",
    storyTitle: "Beware of the Blob!",
    seriesTitle: "X-Men",
    volume: "vol. 1",
    issue: "#3",
    releaseDate: "January 14, 1964",
    publisher: "Marvel Comics",
    cover: "./assets/xmen-v1-3.jpg",
    progress: 93,
    color: "#7a4d1d",
    mark: "C",
    description: "The X-Men recruit a carnival strongman, only to discover the Blob has no interest in joining quietly."
  },
  {
    id: "xmen-v1-4",
    title: "X-Men",
    type: "comic",
    creator: "Marvel Comics",
    meta: "X-Men vol. 1 #4",
    storyTitle: "The Brotherhood of Evil Mutants!",
    seriesTitle: "X-Men",
    volume: "vol. 1",
    issue: "#4",
    releaseDate: "March 10, 1964",
    publisher: "Marvel Comics",
    cover: "./assets/xmen-v1-4.jpg",
    progress: 81,
    color: "#7a4d1d",
    mark: "C",
    description: "Magneto forms a rival mutant team, forcing Xavier's students into a defining ideological fight."
  },
  {
    id: "xmen-v1-5",
    title: "X-Men",
    type: "comic",
    creator: "Marvel Comics",
    meta: "X-Men vol. 1 #5",
    storyTitle: "Trapped: One X-Man!",
    seriesTitle: "X-Men",
    volume: "vol. 1",
    issue: "#5",
    releaseDate: "May 12, 1964",
    publisher: "Marvel Comics",
    cover: "./assets/xmen-v1-5.jpg",
    progress: 74,
    color: "#7a4d1d",
    mark: "C",
    description: "The Brotherhood's pressure grows as one X-Man is isolated in a trap built to break the team."
  },
  {
    id: "sandman-v2-1",
    title: "Sandman",
    type: "comic",
    creator: "DC Comics",
    meta: "Sandman vol. 2 #1",
    storyTitle: "Sleep of the Just",
    seriesTitle: "Sandman",
    volume: "vol. 2",
    issue: "#1",
    releaseDate: "December 1, 1988",
    publisher: "DC Comics",
    cover: "./assets/sandman-v2-1.jpg",
    progress: 100,
    color: "#394268",
    mark: "C",
    description: "Dream is imprisoned by occultists, beginning a long reckoning for the Lord of Dreams and his realm."
  },
  {
    id: "sandman-v2-2",
    title: "Sandman",
    type: "comic",
    creator: "DC Comics",
    meta: "Sandman vol. 2 #2",
    storyTitle: "Imperfect Hosts",
    seriesTitle: "Sandman",
    volume: "vol. 2",
    issue: "#2",
    releaseDate: "January 1989",
    publisher: "DC Comics",
    cover: "./assets/sandman-v2-2.jpg",
    progress: 100,
    color: "#394268",
    mark: "C",
    description: "Dream returns to his damaged realm and begins the slow work of finding what was taken from him."
  },
  {
    id: "sandman-v2-3",
    title: "Sandman",
    type: "comic",
    creator: "DC Comics",
    meta: "Sandman vol. 2 #3",
    storyTitle: "Dream a Little Dream of Me",
    seriesTitle: "Sandman",
    volume: "vol. 2",
    issue: "#3",
    releaseDate: "February 2, 1989",
    publisher: "DC Comics",
    cover: "./assets/sandman-v2-3.jpg",
    progress: 88,
    color: "#394268",
    mark: "C",
    description: "Dream's search for his pouch brings him into contact with John Constantine and a trail of ruin."
  },
  {
    id: "sandman-v2-4",
    title: "Sandman",
    type: "comic",
    creator: "DC Comics",
    meta: "Sandman vol. 2 #4",
    storyTitle: "A Hope in Hell",
    seriesTitle: "Sandman",
    volume: "vol. 2",
    issue: "#4",
    releaseDate: "February 1989",
    publisher: "DC Comics",
    cover: "./assets/sandman-v2-4.jpg",
    progress: 76,
    color: "#394268",
    mark: "C",
    description: "Dream descends into Hell to reclaim his helm, gambling on wit in a place built for punishment."
  },
  {
    id: "sandman-v2-5",
    title: "Sandman",
    type: "comic",
    creator: "DC Comics",
    meta: "Sandman vol. 2 #5",
    storyTitle: "Passengers",
    seriesTitle: "Sandman",
    volume: "vol. 2",
    issue: "#5",
    releaseDate: "March 1989",
    publisher: "DC Comics",
    cover: "./assets/sandman-v2-5.jpg",
    progress: 69,
    color: "#394268",
    mark: "C",
    description: "Dream's hunt for his ruby intersects with dangerous human minds and the wider DC world."
  }
];

titles.push(...databaseComicIssues);

const typeLabels = {
  manga: "Manga",
  comic: "Comic",
  ebook: "Ebook",
  audio: "Audiobook"
};

const sectionFocusIds = {
  comic: [
    "spider-man-asm-23",
    "asm-v2-1",
    "asm-v2-2",
    "asm-v2-3",
    "asm-v2-4",
    "asm-v2-5",
    "ff-v3-1",
    "ff-v3-2",
    "ff-v3-3",
    "ff-v3-4",
    "ff-v3-5",
    "xmen-v1-1",
    "xmen-v1-2",
    "xmen-v1-3",
    "xmen-v1-4",
    "xmen-v1-5",
    "sandman-v2-1",
    "sandman-v2-2",
    "sandman-v2-3",
    "sandman-v2-4",
    "sandman-v2-5"
  ],
  manga: ["one-piece", "bleach", "zombiepowder"]
};

const finishedWorks = [
  { id: "sandman-v2-1", finishedDaysAgo: 8 },
  { id: "zombiepowder", finishedDaysAgo: 17 },
  { id: "blackout-city", finishedDaysAgo: 36 },
  { id: "glass-orbit", finishedDaysAgo: 54 },
  { id: "xmen-v1-1", finishedDaysAgo: 103 }
];

const collections = [
  {
    id: "dark-tower",
    title: "The Dark Tower",
    creator: "Stephen King",
    formats: ["Audiobook", "Ebook", "Comics"],
    chronological: ["The Gunslinger", "The Drawing of the Three", "The Waste Lands", "Wizard and Glass"],
    release: ["The Gunslinger", "The Drawing of the Three", "The Waste Lands", "Wizard and Glass"]
  },
  {
    id: "discworld",
    title: "Discworld",
    creator: "Terry Pratchett",
    formats: ["Ebook", "Audiobook"],
    chronological: ["The Colour of Magic", "The Light Fantastic", "Equal Rites", "Mort"],
    release: ["The Colour of Magic", "The Light Fantastic", "Equal Rites", "Mort"]
  },
  {
    id: "middle-earth",
    title: "Middle Earth",
    creator: "J.R.R. Tolkien",
    formats: ["Ebook", "Audiobook"],
    chronological: ["The Silmarillion", "The Hobbit", "The Lord of the Rings"],
    release: ["The Hobbit", "The Lord of the Rings", "The Silmarillion"]
  },
  {
    id: "star-wars",
    title: "Star Wars",
    creator: "Lucasfilm library",
    formats: ["Ebook", "Audiobook", "Comics"],
    chronological: ["The High Republic", "Darth Bane", "Thrawn", "Aftermath"],
    release: ["Heir to the Empire", "Dark Empire", "Darth Bane", "Aftermath"]
  },
  {
    id: "expanse",
    title: "The Expanse",
    creator: "James S.A. Corey",
    formats: ["Ebook", "Audiobook", "Comics"],
    chronological: ["Leviathan Wakes", "Caliban's War", "Abaddon's Gate", "Cibola Burn"],
    release: ["Leviathan Wakes", "Caliban's War", "Abaddon's Gate", "Cibola Burn"]
  }
];

let selectedId = titles[0].id;
let activeFilter = "all";
let activeView = "home";
let activeSection = "home";
let finishedRangeDays = 90;
let cardTapTimer = null;

const pageEyebrow = document.querySelector("#pageEyebrow");
const pageTitle = document.querySelector("#pageTitle");
const homeView = document.querySelector("#homeView");
const libraryView = document.querySelector("#libraryView");
const profileView = document.querySelector("#profileView");
const settingsView = document.querySelector("#settingsView");
const addTitleView = document.querySelector("#addTitleView");
const resumeRail = document.querySelector("#resumeRail");
const homeRails = document.querySelector("#homeRails");
const profileNowRail = document.querySelector("#profileNowRail");
const grid = document.querySelector("#titleGrid");
const libraryMediaTabs = document.querySelector(".mode-tabs");
const comicsTabs = document.querySelector("#comicsTabs");
const searchInput = document.querySelector("#searchInput");
const librarySearchOverlay = document.querySelector("#librarySearchOverlay");
const librarySearchInput = document.querySelector("#librarySearchInput");
const searchResultCount = document.querySelector("#searchResultCount");
const utilitiesOverlay = document.querySelector("#utilitiesOverlay");
const detailCover = document.querySelector("#detailCover");
const detailType = document.querySelector("#detailType");
const detailTitle = document.querySelector("#detailTitle");
const detailMeta = document.querySelector("#detailMeta");
const detailDescription = document.querySelector("#detailDescription");
const detailProgressText = document.querySelector("#detailProgressText");
const detailProgressBar = document.querySelector("#detailProgressBar");
const openButton = document.querySelector("#openButton");
const continueTitle = document.querySelector("#continueTitle");
const continueSubtitle = document.querySelector("#continueSubtitle");
const recentlyFinishedRange = document.querySelector("#recentlyFinishedRange");
const readerStage = document.querySelector("#readerStage");
const readerPages = document.querySelector("#readerPages");
const readerTitle = document.querySelector("#readerTitle");
const audioDock = document.querySelector("#audioDock");
const audioTitle = document.querySelector("#audioTitle");
const audioMeta = document.querySelector("#audioMeta");
const toast = document.querySelector("#toast");
const themeOptions = document.querySelectorAll(".theme-option");
const phonePreviewButton = document.querySelector("#phonePreviewButton");

function getStoredItem(key) {
  try {
    return window.localStorage?.getItem(key);
  } catch (error) {
    return null;
  }
}

function storeItem(key, value) {
  try {
    window.localStorage?.setItem(key, value);
  } catch (error) {
    // UI state should still work in privacy-restricted browser contexts.
  }
}

function setTheme(theme) {
  const nextTheme = ["light", "deepwater", "dark", "night", "bookstore", "vaporwave"].includes(theme) ? theme : "night";
  document.body.dataset.theme = nextTheme;
  storeItem("toby-theme", nextTheme);
  themeOptions.forEach((option) => {
    option.classList.toggle("active", option.dataset.theme === nextTheme);
  });
}

function setPhonePreview(enabled) {
  document.body.classList.toggle("phone-preview", enabled);
  phonePreviewButton.setAttribute("aria-pressed", String(enabled));
  storeItem("toby-phone-preview", enabled ? "true" : "false");
}

function visibleTitles() {
  const query = searchInput.value.trim().toLowerCase();
  return titles.filter((item) => {
    const matchesType = activeFilter === "all"
      || item.type === activeFilter
      || (activeFilter === "visual" && ["comic", "manga"].includes(item.type));
    const matchesFocusedSection = activeSection !== "comics"
      || !sectionFocusIds[activeFilter]
      || sectionFocusIds[activeFilter].includes(item.id);
    const haystack = `${item.title} ${item.creator} ${item.meta} ${item.type}`.toLowerCase();
    return matchesType && matchesFocusedSection && haystack.includes(query);
  });
}

function coverStyle(item) {
  const image = item.cover ? `--cover-image: url('${item.cover}');` : "--cover-image: none;";
  return `--cover-color: ${item.color}; ${image}`;
}

function titleCardTemplate(item, variant = "standard") {
  const coverClass = item.cover ? "real-cover" : "";
  if (variant === "resume") {
    return `
      <button class="title-card ${item.type}-card" type="button" data-id="${item.id}" data-action="open-title">
        <span class="cover ${item.type}-cover ${coverClass}" data-mark="${item.mark}" style="${coverStyle(item)}">
          <span>${item.title}</span>
        </span>
          <span class="resume-copy">
            <strong>${item.title}</strong>
          <small>${typeLabels[item.type]} · ${item.progress}%</small>
            <span class="mini-progress" aria-hidden="true"><span style="width: ${item.progress}%"></span></span>
          </span>
      </button>
    `;
  }

  return `
    <button class="title-card ${item.type}-card ${item.id === selectedId ? "active" : ""}" type="button" data-id="${item.id}">
      <span class="cover ${item.type}-cover ${coverClass}" data-mark="${item.mark}" style="${coverStyle(item)}">
        <span>${item.title}</span>
      </span>
      <strong>${item.title}</strong>
      <small>${typeLabels[item.type]} · ${item.progress}%</small>
      <span class="mini-progress" aria-hidden="true"><span style="width: ${item.progress}%"></span></span>
    </button>
  `;
}

function renderHome() {
  const resumeItems = [...titles]
    .filter((item) => item.progress > 0)
    .sort((a, b) => b.progress - a.progress)
    .slice(0, 5);

  resumeRail.innerHTML = resumeItems.map((item) => titleCardTemplate(item, "resume")).join("");

  const finishedItems = finishedWorks
    .filter((entry) => entry.finishedDaysAgo <= finishedRangeDays)
    .map((entry) => titles.find((item) => item.id === entry.id))
    .filter(Boolean);

  const rails = [
    { collectionRail: true, title: "Collections", subtitle: "Series, arcs, and mixed-format worlds" },
    { items: finishedItems, title: "Recently Finished", subtitle: `Finished in the last ${finishedRangeDays} days` },
    { type: "ebook", title: "Books", subtitle: "Ebooks ready for quiet reading" },
    { type: "audio", title: "Audiobooks", subtitle: "Narrated journeys in progress" },
    { type: "visual", title: "Comics & Manga", subtitle: "Issues, arcs, volumes, and chapters" }
  ];

  homeRails.innerHTML = rails.map((rail) => {
    if (rail.collectionRail) {
      return `
        <section class="rail-section" aria-label="${rail.title}">
          <div class="rail-heading">
            <div>
              <h2>${rail.title}</h2>
              <p>${rail.subtitle}</p>
            </div>
          </div>
          <div class="rail collection-rail">
            ${collections.map((collection) => collectionCardTemplate(collection)).join("")}
          </div>
        </section>
      `;
    }

    const items = rail.items || titles.filter((item) => {
      if (rail.type === "visual") return ["comic", "manga"].includes(item.type);
      return item.type === rail.type;
    });
    return `
      <section class="rail-section" aria-label="${rail.title}">
        <div class="rail-heading">
          <div>
            <h2>${rail.title}</h2>
            <p>${rail.subtitle}</p>
          </div>
        </div>
        <div class="rail">
          ${items.map((item) => titleCardTemplate(item)).join("")}
        </div>
      </section>
    `;
  }).join("");
}

function collectionCardTemplate(collection) {
  const order = collection.chronological;
  return `
    <article class="collection-card" data-collection="${collection.id}" data-order="chronological">
      <div class="collection-cover" aria-hidden="true">
        <span>${collection.title}</span>
      </div>
      <div class="collection-copy">
        <h3>${collection.title}</h3>
        <p>${collection.creator}</p>
        <div class="collection-formats">${collection.formats.map((format) => `<span>${format}</span>`).join("")}</div>
        <div class="collection-order">
          <button class="order-toggle active" data-order="chronological" type="button">Chronological</button>
          <button class="order-toggle" data-order="release" type="button">Release</button>
        </div>
        <ol>
          ${order.map((entry) => `<li>${entry}</li>`).join("")}
        </ol>
      </div>
    </article>
  `;
}

function updateCollectionOrder(card, orderType) {
  const collection = collections.find((item) => item.id === card.dataset.collection);
  if (!collection) return;
  card.dataset.order = orderType;
  card.querySelectorAll(".order-toggle").forEach((button) => {
    button.classList.toggle("active", button.dataset.order === orderType);
  });
  card.querySelector("ol").innerHTML = collection[orderType].map((entry) => `<li>${entry}</li>`).join("");
}

function renderProfile() {
  const nowReading = ["cartographer", "night-train", "witch-harbor", "blackout-city"]
    .map((id) => titles.find((item) => item.id === id))
    .filter(Boolean);

  profileNowRail.innerHTML = nowReading.map((item) => titleCardTemplate(item)).join("");
}

function renderGrid() {
  const items = visibleTitles();
  grid.innerHTML = items.map((item) => titleCardTemplate(item)).join("");
  searchResultCount.textContent = items.length === titles.length
    ? "Showing all titles"
    : `Showing ${items.length} of ${titles.length} titles`;

  if (!items.some((item) => item.id === selectedId) && items.length > 0) {
    selectedId = items[0].id;
    updateDetail();
    renderGrid();
    return;
  }

  if (items.length === 0) {
    grid.innerHTML = `<p class="empty-state">No matching titles yet.</p>`;
  }
}

function getSelected() {
  return titles.find((item) => item.id === selectedId) || titles[0];
}

function visualMetaTemplate(item) {
  if (item.type === "comic") {
    return `
      <span>${item.storyTitle ? `"${item.storyTitle}"${item.storyPart ? ` (${item.storyPart})` : ""}` : item.meta}</span>
      <span>${item.seriesTitle || item.title}${item.volume || item.issue ? ` (${[item.volume, item.issue].filter(Boolean).join(", ")})` : ""}</span>
      <span>${item.releaseDate || "Release date pending"}</span>
      <span>${item.publisher || item.creator}</span>
    `;
  }

  return `
    <span>${item.meta}</span>
    <span>${item.creator}</span>
  `;
}

function updateDetail() {
  const item = getSelected();
  const action = item.type === "audio" ? "Listening" : "Reading";
  const isAudio = item.type === "audio";
  const isVisual = ["comic", "manga"].includes(item.type);
  const audioTimes = item.remaining && item.total ? `${item.remaining} / ${item.total}` : item.meta;
  detailCover.style.setProperty("--cover-color", item.color);
  detailCover.style.setProperty("--cover-image", item.cover ? `url("${item.cover}")` : "none");
  detailCover.classList.toggle("real-cover", Boolean(item.cover));
  detailCover.dataset.mark = item.cover ? "" : item.mark;
  detailType.textContent = typeLabels[item.type];
  detailTitle.textContent = item.title;
  detailMeta.classList.toggle("meta-stack", isVisual);
  if (isVisual) {
    detailMeta.innerHTML = visualMetaTemplate(item);
  } else {
    detailMeta.textContent = isAudio ? `${item.creator} · ${audioTimes}` : `${item.creator} · ${item.meta}`;
  }
  detailDescription.textContent = item.description;
  detailProgressText.textContent = `${item.progress}%`;
  detailProgressBar.style.width = `${item.progress}%`;
  continueTitle.textContent = `Continue ${action}`;
  continueSubtitle.textContent = isAudio || isVisual ? "" : `Resume ${item.title}`;
  openButton.textContent = isAudio || isVisual ? "Resume" : "Open";
}

function openSelected() {
  const item = getSelected();
  if (item.type === "audio") {
    openAudio(item);
    return;
  }
  openReader(item);
}

function setView(view) {
  const validViews = ["home", "library", "profile", "settings", "add-title"];
  activeView = validViews.includes(view) ? view : "home";
  const isHome = activeView === "home";
  const isLibrary = activeView === "library";
  const isProfile = activeView === "profile";
  const isSettings = activeView === "settings";
  const isAddTitle = activeView === "add-title";
  homeView.classList.toggle("hidden", !isHome);
  libraryView.classList.toggle("hidden", !isLibrary);
  profileView.classList.toggle("hidden", !isProfile);
  settingsView.classList.toggle("hidden", !isSettings);
  addTitleView.classList.toggle("hidden", !isAddTitle);
  document.body.classList.toggle("profile-active", isProfile);
  document.body.classList.toggle("library-active", isLibrary);
  document.body.classList.toggle("add-title-active", isAddTitle);
  document.body.classList.toggle("audio-section", activeSection === "audio");
  document.body.classList.toggle("visual-section", activeSection === "comics");
  document.body.classList.toggle("books-section", activeSection === "books");
  document.body.classList.toggle("library-section", activeSection === "library");
  const viewLabels = {
    home: ["Welcome Back", "Hilary"],
    library: ["All-in-one reading", "Library"],
    profile: ["Reader profile", "Hilary"],
    settings: ["Preferences", "Settings"],
    "add-title": ["Library", "Add title"]
  };
  pageEyebrow.textContent = viewLabels[activeView][0];
  pageTitle.textContent = viewLabels[activeView][1];
  updateBottomNav();
  document.body.classList.remove("audio-open", "reader-open");
  readerStage.classList.add("hidden");
  audioDock.classList.add("hidden");
}

function updateBottomNav() {
  document.querySelectorAll(".bottom-nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.section === activeSection);
  });
}

function setLibrarySection(section) {
  const sectionConfig = {
    comics: {
      filter: "comic",
      eyebrow: "",
      title: "Comics and Manga"
    },
    books: {
      filter: "ebook",
      eyebrow: "",
      title: "Books and eBooks"
    },
    library: {
      filter: "all",
      eyebrow: "",
      title: "Library"
    },
    audio: {
      filter: "audio",
      eyebrow: "",
      title: "Audio"
    }
  };
  const config = sectionConfig[section] || sectionConfig.library;
  activeSection = section;
  activeFilter = config.filter;
  document.body.classList.toggle("audio-section", section === "audio");
  document.body.classList.toggle("visual-section", section === "comics");
  document.body.classList.toggle("books-section", section === "books");
  document.body.classList.toggle("library-section", section === "library");
  searchInput.value = "";
  librarySearchInput.value = "";
  setView("library");
  pageEyebrow.textContent = config.eyebrow;
  pageTitle.textContent = config.title;
  updateLibraryControls(section, config.filter);
  renderGrid();
  updateDetail();
  updateBottomNav();
}

function updateLibraryControls(section, filter) {
  libraryMediaTabs.classList.toggle("hidden", section !== "library");
  comicsTabs.classList.toggle("hidden", section !== "comics");
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.filter === filter);
  });
  document.querySelectorAll(".section-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.filter === filter);
  });
}

function openLibrarySearch() {
  librarySearchInput.value = searchInput.value;
  librarySearchOverlay.classList.remove("hidden");
  librarySearchInput.focus();
  renderGrid();
}

function closeLibrarySearch() {
  librarySearchOverlay.classList.add("hidden");
}

function openUtilities() {
  utilitiesOverlay.classList.remove("hidden");
}

function closeUtilities() {
  utilitiesOverlay.classList.add("hidden");
}

function openReader(item) {
  document.body.classList.add("reader-open");
  document.body.classList.remove("audio-open");
  audioDock.classList.add("hidden");
  readerStage.classList.remove("hidden");
  readerTitle.textContent = `${item.title} · ${typeLabels[item.type]} reader`;
  readerPages.innerHTML = [1, 2].map((page) => `
    <div class="reader-page" data-page="Page ${page}" style="--cover-color: ${item.color}"></div>
  `).join("");
  showToast(`${typeLabels[item.type]} reader opened`);
}

function openAudio(item) {
  document.body.classList.add("audio-open");
  document.body.classList.remove("reader-open");
  readerStage.classList.add("hidden");
  audioDock.classList.remove("hidden");
  audioTitle.textContent = item.title;
  audioMeta.textContent = item.creator;
  showToast("Audiobook player opened");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".title-card");
  if (!card) return;
  window.clearTimeout(cardTapTimer);
  cardTapTimer = window.setTimeout(() => {
    selectedId = card.dataset.id;
    renderGrid();
    updateDetail();
  }, 180);
});

grid.addEventListener("dblclick", (event) => {
  const card = event.target.closest(".title-card");
  if (!card) return;
  window.clearTimeout(cardTapTimer);
  selectedId = card.dataset.id;
  renderGrid();
  updateDetail();
  openSelected();
});

homeView.addEventListener("click", (event) => {
  const orderButton = event.target.closest(".order-toggle");
  if (orderButton) {
    updateCollectionOrder(orderButton.closest(".collection-card"), orderButton.dataset.order);
    return;
  }

  const card = event.target.closest(".title-card");
  if (!card) return;
  selectedId = card.dataset.id;
  renderGrid();
  updateDetail();
  openSelected();
});

profileView.addEventListener("click", (event) => {
  const card = event.target.closest(".title-card");
  if (!card) return;
  selectedId = card.dataset.id;
  renderGrid();
  updateDetail();
  openSelected();
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    activeSection = "library";
    activeFilter = tab.dataset.filter;
    updateLibraryControls("library", activeFilter);
    renderGrid();
    updateDetail();
  });
});

document.querySelectorAll(".section-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    activeSection = "comics";
    activeFilter = tab.dataset.filter;
    pageTitle.textContent = "Comics and Manga";
    pageEyebrow.textContent = "";
    updateLibraryControls("comics", activeFilter);
    renderGrid();
    updateDetail();
    updateBottomNav();
  });
});

document.querySelectorAll(".bottom-nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    const section = item.dataset.section;
    if (section === "home") {
      activeSection = "home";
      setView("home");
      updateBottomNav();
      return;
    }
    setLibrarySection(section);
  });
});

document.querySelector(".profile-entry").addEventListener("click", () => {
  activeSection = "";
  setView("profile");
});

themeOptions.forEach((option) => {
  option.addEventListener("click", () => {
    setTheme(option.dataset.theme);
    showToast(`${option.textContent} theme applied`);
  });
});

phonePreviewButton.addEventListener("click", () => {
  const enabled = !document.body.classList.contains("phone-preview");
  setPhonePreview(enabled);
  closeUtilities();
  showToast(enabled ? "Phone preview on" : "Phone preview off");
});

searchInput.addEventListener("input", () => {
  renderGrid();
  updateDetail();
});

librarySearchInput.addEventListener("input", () => {
  searchInput.value = librarySearchInput.value;
  renderGrid();
  updateDetail();
});

document.querySelector("#openButton").addEventListener("click", openSelected);
document.querySelector("#closeReader").addEventListener("click", () => {
  document.body.classList.remove("reader-open");
  readerStage.classList.add("hidden");
});
document.querySelector("#closeAudio").addEventListener("click", () => {
  document.body.classList.remove("audio-open");
  audioDock.classList.add("hidden");
});
document.querySelector("#queueButton").addEventListener("click", () => showToast("Queued next title in this series"));
document.querySelector("#utilitiesButton").addEventListener("click", openUtilities);
document.querySelector("#utilitiesBack").addEventListener("click", closeUtilities);
document.querySelector("#utilitiesExit").addEventListener("click", closeUtilities);
document.querySelector("#utilityAddTitle").addEventListener("click", () => {
  closeUtilities();
  setView("add-title");
});
document.querySelector("#utilitySearchLibrary").addEventListener("click", () => {
  closeUtilities();
  openLibrarySearch();
});
document.querySelector("#utilityEditMetadata").addEventListener("click", () => {
  closeUtilities();
  showToast("Metadata editor coming next");
});
document.querySelector("#utilitySync").addEventListener("click", () => {
  closeUtilities();
  showToast("Library sync complete");
});
recentlyFinishedRange.addEventListener("change", () => {
  finishedRangeDays = Number(recentlyFinishedRange.value);
  renderHome();
  showToast(`Recently Finished set to ${finishedRangeDays} days`);
});
document.querySelector("#utilitySettings").addEventListener("click", () => {
  closeUtilities();
  activeSection = "";
  setView("settings");
});
document.querySelector("#closeSearchBack").addEventListener("click", closeLibrarySearch);
document.querySelector("#closeSearchExit").addEventListener("click", closeLibrarySearch);
document.querySelector("#backToLibrary").addEventListener("click", () => setView("library"));
document.querySelector("#exitAddTitle").addEventListener("click", () => setView("library"));
document.querySelector("#cancelAddTitle").addEventListener("click", () => setView("library"));
document.querySelector("#saveTitleButton").addEventListener("click", () => {
  showToast("Draft title saved");
  setView("library");
});
document.querySelector("#sortButton").addEventListener("click", () => showToast("Sort options: recent, progress, creator, series, release date"));
document.querySelector("#playButton").addEventListener("click", (event) => {
  event.currentTarget.textContent = event.currentTarget.textContent === "▶" ? "Ⅱ" : "▶";
});
document.querySelector("#speedButton").addEventListener("click", (event) => {
  const speeds = ["1x", "1.25x", "1.5x", "2x"];
  const next = (speeds.indexOf(event.currentTarget.textContent) + 1) % speeds.length;
  event.currentTarget.textContent = speeds[next];
});

const storedTheme = getStoredItem("toby-theme");
setTheme(storedTheme || "dark");
setPhonePreview(getStoredItem("toby-phone-preview") === "true");
renderHome();
renderProfile();
renderGrid();
updateDetail();
setView("home");
