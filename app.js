const accessPlans = {
  free: { label: "免费版：Unit 1", maxUnit: 0 },
  paid: { label: "付费版：全部单元", maxUnit: 2 }
};

const activationCodes = {
  "RAZC-30-ALL": "paid",
  "KIDS-VOICE-30": "paid",
  "TEACHER-FULL-2026": "paid"
};

const units = [
  {
    unit: "Unit 1",
    title: "My Little Day",
    source: "原创 Level C 风格文本，可用于本项目商业 MVP。",
    theme: ["#ffcf70", "#fff2bc"],
    art: "radial-gradient(circle at 50% 28%, #ffd166 0 12%, transparent 13%), radial-gradient(circle at 42% 52%, #4f8cff 0 13%, transparent 14%), radial-gradient(circle at 58% 52%, #ff7aa8 0 13%, transparent 14%), radial-gradient(ellipse at 50% 74%, #58c27d 0 34%, transparent 35%)",
    levels: [
      lesson("I Wake Up", ["I wake up.", "I see the sun."], "我醒来了。我看见太阳。", "wake, see, sun", [
        word("wake", "/weɪk/", "醒来", "a_e 发长 /eɪ/"),
        word("see", "/siː/", "看见", "高频词"),
        word("sun", "/sʌn/", "太阳", "短元音 /ʌ/")
      ]),
      lesson("My Red Cup", ["I see my red cup.", "It is on the desk."], "我看见我的红杯子。它在桌子上。", "red, cup, desk", [
        word("red", "/red/", "红色的", "短元音 /e/"),
        word("cup", "/kʌp/", "杯子", "CVC 词"),
        word("desk", "/desk/", "桌子", "结尾 /sk/")
      ]),
      lesson("I Like Milk", ["I like milk.", "I drink it up."], "我喜欢牛奶。我把它喝完。", "like, milk, drink", [
        word("like", "/laɪk/", "喜欢", "i_e 发 /aɪ/"),
        word("milk", "/mɪlk/", "牛奶", "短元音 /ɪ/"),
        word("drink", "/drɪŋk/", "喝", "dr 辅音连缀")
      ]),
      lesson("The Big Bus", ["I see a big bus.", "The bus can go."], "我看见一辆大巴士。巴士会开走。", "big, bus, go", [
        word("big", "/bɪɡ/", "大的", "短元音 /ɪ/"),
        word("bus", "/bʌs/", "巴士", "短元音 /ʌ/"),
        word("go", "/ɡoʊ/", "走，去", "高频词")
      ]),
      lesson("At School", ["I go to school.", "I sit with Sam."], "我去学校。我和 Sam 坐在一起。", "school, sit, with", [
        word("school", "/skuːl/", "学校", "oo 发 /uː/"),
        word("sit", "/sɪt/", "坐", "CVC 词"),
        word("with", "/wɪð/", "和，在一起", "th 浊音 /ð/")
      ]),
      lesson("We Can Run", ["We can run.", "We run in the sun."], "我们会跑。我们在阳光下跑。", "we, can, run", [
        word("we", "/wiː/", "我们", "高频词"),
        word("can", "/kæn/", "能够", "短元音 /æ/"),
        word("run", "/rʌn/", "跑", "短元音 /ʌ/")
      ]),
      lesson("A Little Cat", ["I see a little cat.", "The cat is on my lap."], "我看见一只小猫。小猫在我的腿上。", "little, cat, lap", [
        word("little", "/ˈlɪtəl/", "小的", "常见形容词"),
        word("cat", "/kæt/", "猫", "短元音 /æ/"),
        word("lap", "/læp/", "大腿", "CVC 词")
      ]),
      lesson("Good Night", ["I am in bed.", "I say good night."], "我在床上。我说晚安。", "bed, say, night", [
        word("bed", "/bed/", "床", "短元音 /e/"),
        word("say", "/seɪ/", "说", "ay 发 /eɪ/"),
        word("night", "/naɪt/", "夜晚", "igh 发 /aɪ/")
      ])
    ]
  },
  {
    unit: "Unit 2",
    title: "Fun at the Park",
    source: "原创 Level C 风格文本，可用于本项目商业 MVP。",
    theme: ["#8bdc9a", "#dff8ce"],
    art: "radial-gradient(circle at 50% 28%, #ffd166 0 12%, transparent 13%), linear-gradient(90deg, transparent 0 38%, #7f5a3a 39% 45%, transparent 46%), radial-gradient(circle at 42% 42%, #41a65a 0 20%, transparent 21%), radial-gradient(circle at 58% 42%, #41a65a 0 20%, transparent 21%)",
    levels: [
      lesson("Go to the Park", ["We go to the park.", "We go in the sun."], "我们去公园。我们在阳光下走。", "park, sun, go", [
        word("park", "/pɑːrk/", "公园", "ar 发 /ɑːr/"),
        word("sun", "/sʌn/", "太阳", "短元音 /ʌ/"),
        word("go", "/ɡoʊ/", "去", "高频词")
      ]),
      lesson("The Big Tree", ["We see a big tree.", "We sit by the tree."], "我们看见一棵大树。我们坐在树旁。", "tree, big, by", [
        word("tree", "/triː/", "树", "ee 发 /iː/"),
        word("big", "/bɪɡ/", "大的", "短元音 /ɪ/"),
        word("by", "/baɪ/", "在旁边", "y 发 /aɪ/")
      ]),
      lesson("A Little Bird", ["We see a little bird.", "The bird can hop."], "我们看见一只小鸟。小鸟会跳。", "bird, little, hop", [
        word("bird", "/bɝːd/", "鸟", "ir 发卷舌元音"),
        word("little", "/ˈlɪtəl/", "小的", "高频描述词"),
        word("hop", "/hɑːp/", "跳", "CVC 词")
      ]),
      lesson("The Red Kite", ["We see a red kite.", "The kite can go up."], "我们看见一个红风筝。风筝会飞上去。", "kite, red, up", [
        word("kite", "/kaɪt/", "风筝", "i_e 发 /aɪ/"),
        word("red", "/red/", "红色的", "短元音 /e/"),
        word("up", "/ʌp/", "向上", "高频词")
      ]),
      lesson("Run and Run", ["We run on the grass.", "We run and run."], "我们在草地上跑。我们跑啊跑。", "run, grass, and", [
        word("run", "/rʌn/", "跑", "短元音 /ʌ/"),
        word("grass", "/ɡræs/", "草地", "gr 连读"),
        word("and", "/ænd/", "和", "高频词")
      ]),
      lesson("Snack Time", ["We get a snack.", "We like the snack."], "我们拿到一个点心。我们喜欢这个点心。", "get, snack, like", [
        word("get", "/ɡet/", "得到", "短元音 /e/"),
        word("snack", "/snæk/", "点心", "sn 连读"),
        word("like", "/laɪk/", "喜欢", "i_e 发 /aɪ/")
      ]),
      lesson("Dad Waves", ["We see Dad wave.", "Dad says, \"Come here!\""], "我们看见爸爸挥手。爸爸说：“到这里来！”", "wave, says, here", [
        word("wave", "/weɪv/", "挥手", "a_e 发 /eɪ/"),
        word("says", "/sez/", "说", "不规则读音"),
        word("here", "/hɪr/", "这里", "常见地点词")
      ]),
      lesson("Go Home", ["We go home happy.", "We like the park."], "我们开心地回家。我们喜欢公园。", "home, happy, park", [
        word("home", "/hoʊm/", "家", "o_e 发 /oʊ/"),
        word("happy", "/ˈhæpi/", "开心的", "短元音 /æ/"),
        word("park", "/pɑːrk/", "公园", "ar 发 /ɑːr/")
      ])
    ]
  },
  {
    unit: "Unit 3",
    title: "My Red Bag",
    source: "原创 Level C 风格文本，可用于本项目商业 MVP。",
    theme: ["#ff9ab7", "#ffe3ee"],
    art: "linear-gradient(180deg, transparent 0 28%, #c7365f 29% 36%, transparent 37%), radial-gradient(ellipse at 50% 62%, #ef4e79 0 32%, transparent 33%), radial-gradient(circle at 38% 58%, #ffffff 0 5%, transparent 6%), radial-gradient(circle at 62% 58%, #ffffff 0 5%, transparent 6%)",
    levels: [
      lesson("My Bag", ["I have a red bag.", "The bag is on my bed."], "我有一个红书包。书包在我的床上。", "have, bag, bed", [
        word("have", "/hæv/", "有", "高频词"),
        word("bag", "/bæɡ/", "包", "短元音 /æ/"),
        word("bed", "/bed/", "床", "短元音 /e/")
      ]),
      lesson("A Little Book", ["I put in a book.", "The book is little."], "我放进一本书。这本书很小。", "put, book, little", [
        word("put", "/pʊt/", "放", "短元音 /ʊ/"),
        word("book", "/bʊk/", "书", "oo 发 /ʊ/"),
        word("little", "/ˈlɪtəl/", "小的", "常见形容词")
      ]),
      lesson("A Blue Cup", ["I put in a cup.", "The cup is blue."], "我放进一个杯子。杯子是蓝色的。", "cup, blue, put", [
        word("cup", "/kʌp/", "杯子", "CVC 词"),
        word("blue", "/bluː/", "蓝色的", "ue 发 /uː/"),
        word("put", "/pʊt/", "放", "高频动作词")
      ]),
      lesson("A Toy", ["I put in a toy.", "The toy can roll."], "我放进一个玩具。玩具会滚动。", "toy, can, roll", [
        word("toy", "/tɔɪ/", "玩具", "oy 发 /ɔɪ/"),
        word("can", "/kæn/", "能够", "高频词"),
        word("roll", "/roʊl/", "滚动", "o 发 /oʊ/")
      ]),
      lesson("My Hat", ["I put in my hat.", "The hat is big."], "我放进我的帽子。帽子很大。", "hat, big, my", [
        word("hat", "/hæt/", "帽子", "短元音 /æ/"),
        word("big", "/bɪɡ/", "大的", "短元音 /ɪ/"),
        word("my", "/maɪ/", "我的", "高频词")
      ]),
      lesson("A Full Bag", ["My bag is full.", "It is not light."], "我的书包满了。它不轻。", "full, not, light", [
        word("full", "/fʊl/", "满的", "短元音 /ʊ/"),
        word("not", "/nɑːt/", "不", "高频词"),
        word("light", "/laɪt/", "轻的", "igh 发 /aɪ/")
      ]),
      lesson("Mom Helps", ["Mom can help me.", "We zip the bag."], "妈妈可以帮我。我们拉上书包拉链。", "help, zip, me", [
        word("help", "/help/", "帮助", "短元音 /e/"),
        word("zip", "/zɪp/", "拉上拉链", "CVC 词"),
        word("me", "/miː/", "我", "高频词")
      ]),
      lesson("Go to School", ["I take my red bag.", "I go to school."], "我拿着我的红书包。我去学校。", "take, red, school", [
        word("take", "/teɪk/", "拿", "a_e 发 /eɪ/"),
        word("red", "/red/", "红色的", "短元音 /e/"),
        word("school", "/skuːl/", "学校", "oo 发 /uː/")
      ])
    ]
  }
];

function lesson(title, lines, translation, focus, vocabulary) {
  return { title, lines, translation, focus, vocabulary };
}

function word(text, ipa, cn, note) {
  return { text, ipa, cn, note };
}

const storyTabs = document.querySelectorAll(".story-tab");
const levelTitle = document.querySelector("#levelTitle");
const bestStars = document.querySelector("#bestStars");
const pageArt = document.querySelector("#pageArt");
const pageCount = document.querySelector("#pageCount");
const storyTitle = document.querySelector("#storyTitle");
const sentenceOne = document.querySelector("#sentenceOne");
const sentenceTwo = document.querySelector("#sentenceTwo");
const translationText = document.querySelector("#translationText");
const focusText = document.querySelector("#focusText");
const vocabularyList = document.querySelector("#vocabularyList");
const sourceText = document.querySelector("#sourceText");
const accessBadge = document.querySelector("#accessBadge");
const activationCode = document.querySelector("#activationCode");
const activateButton = document.querySelector("#activateButton");
const activationMessage = document.querySelector("#activationMessage");
const paywallNotice = document.querySelector("#paywallNotice");
const prevPage = document.querySelector("#prevPage");
const nextPage = document.querySelector("#nextPage");
const speakPage = document.querySelector("#speakPage");
const recordButton = document.querySelector("#recordButton");
const playRecording = document.querySelector("#playRecording");
const downloadRecording = document.querySelector("#downloadRecording");
const audioPlayback = document.querySelector("#audioPlayback");
const recordHint = document.querySelector("#recordHint");
const scoreCard = document.querySelector("#scoreCard");
const scoreStars = document.querySelector("#scoreStars");
const scoreText = document.querySelector("#scoreText");
const scoreDetails = document.querySelector("#scoreDetails");

let activeStoryIndex = 0;
let activePageIndex = 0;
let mediaRecorder = null;
let audioChunks = [];
let latestAudioUrl = "";
let currentRecording = null;
let recorderStartedAt = 0;
let audioContext = null;
let analyser = null;
let volumeFrame = 0;
let volumeSamples = [];
let recognition = null;
let transcript = "";

const storageKey = "level-c-voice-progress-v2";
const accessKey = "level-c-voice-access-v1";
const defaultProgress = {
  unlockedLevels: [0, 0, 0],
  stars: units.map((unit) => Array(unit.levels.length).fill(0))
};

let accessPlan = loadAccessPlan();
let progress = loadProgress();

function loadAccessPlan() {
  const saved = localStorage.getItem(accessKey);
  if (saved === "trial" || saved === "full") {
    localStorage.setItem(accessKey, "paid");
    return "paid";
  }
  return accessPlans[saved] ? saved : "free";
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved?.unlockedLevels && saved?.stars) {
      return normalizeProgress(saved);
    }
  } catch (error) {
    localStorage.removeItem(storageKey);
  }

  return structuredClone(defaultProgress);
}

function normalizeProgress(saved) {
  return {
    unlockedLevels: units.map((unit, index) => Math.min(saved.unlockedLevels[index] ?? 0, unit.levels.length - 1)),
    stars: units.map((unit, unitIndex) =>
      unit.levels.map((level, levelIndex) => saved.stars?.[unitIndex]?.[levelIndex] ?? 0)
    )
  };
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function saveAccessPlan(plan) {
  accessPlan = plan;
  localStorage.setItem(accessKey, plan);
}

function makeStars(count) {
  return "★".repeat(count) + "☆".repeat(3 - count);
}

function canUseUnit(index) {
  return index <= accessPlans[accessPlan].maxUnit;
}

function isCurrentLevelPlayable() {
  return canUseUnit(activeStoryIndex);
}

function renderPage() {
  const unit = units[activeStoryIndex];
  const level = unit.levels[activePageIndex];
  const unlockedLevel = progress.unlockedLevels[activeStoryIndex];
  const isLockedByLevel = activePageIndex > unlockedLevel;
  const isPlayable = isCurrentLevelPlayable() && !isLockedByLevel;
  const stars = progress.stars[activeStoryIndex][activePageIndex] || 0;

  levelTitle.textContent = `${unit.unit} - Level ${activePageIndex + 1}`;
  bestStars.textContent = makeStars(stars);
  storyTitle.textContent = level.title;
  sentenceOne.textContent = level.lines[0];
  sentenceTwo.textContent = level.lines[1];
  translationText.textContent = level.translation;
  focusText.textContent = level.focus;
  sourceText.textContent = unit.source;
  pageCount.textContent = `${unit.title} · ${activePageIndex + 1} / ${unit.levels.length}`;
  pageArt.style.setProperty("--art-a", unit.theme[0]);
  pageArt.style.setProperty("--art-b", unit.theme[1]);
  pageArt.style.setProperty("--art-main", unit.art);

  renderVocabulary(level.vocabulary);
  renderUnitTabs();
  renderAccess();

  prevPage.disabled = activePageIndex === 0;
  nextPage.disabled = activePageIndex === unit.levels.length - 1 || activePageIndex + 1 > unlockedLevel;
  speakPage.disabled = !isPlayable;
  recordButton.disabled = !isPlayable;
  paywallNotice.hidden = isPlayable;
  paywallNotice.textContent = "Unit 1 默认免费开放。请输入 30 元付费激活码解锁后续单元。";
  resetScoreCard();
}

function renderVocabulary(vocabulary) {
  vocabularyList.innerHTML = vocabulary
    .map(
      (item) => `
        <article class="vocab-card">
          <strong>${item.text}</strong>
          <span>${item.ipa}</span>
          <p>${item.cn}</p>
          <small>${item.note}</small>
        </article>
      `
    )
    .join("");
}

function renderUnitTabs() {
  storyTabs.forEach((tab) => {
    const index = Number(tab.dataset.story);
    const unlocked = canUseUnit(index);
    const completed = progress.stars[index]?.every((stars) => stars === 3);
    tab.disabled = !unlocked;
    tab.classList.toggle("is-active", index === activeStoryIndex);
    tab.classList.toggle("is-locked", !unlocked);
    tab.textContent = `${units[index].unit}${completed ? " ✓" : ""}`;
  });
}

function renderAccess() {
  accessBadge.textContent = accessPlans[accessPlan].label;
}

function setActiveStory(index) {
  if (!canUseUnit(index)) {
    return;
  }

  activeStoryIndex = index;
  activePageIndex = Math.min(progress.unlockedLevels[index], units[index].levels.length - 1);
  stopSpeech();
  clearRecording();
  renderPage();
}

function getCurrentText() {
  return units[activeStoryIndex].levels[activePageIndex].lines.join(" ");
}

function getCurrentWordCount() {
  return getCurrentText().match(/[A-Za-z']+/g)?.length || 1;
}

function stopSpeech() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function speakCurrentPage() {
  if (!("speechSynthesis" in window)) {
    recordHint.textContent = "这个浏览器暂不支持朗读功能，可以直接录音跟读。";
    return;
  }

  stopSpeech();
  const utterance = new SpeechSynthesisUtterance(getCurrentText());
  utterance.lang = "en-US";
  utterance.rate = 0.72;
  utterance.pitch = 1.08;
  window.speechSynthesis.speak(utterance);
}

async function startRecording() {
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    recordHint.textContent = "这个浏览器不支持录音，请换用新版 Chrome 或 Edge。";
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioChunks = [];
    volumeSamples = [];
    transcript = "";
    recorderStartedAt = Date.now();
    currentRecording = null;
    resetScoreCard();
    startVolumeMeter(stream);
    startSpeechRecognition();
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) {
        audioChunks.push(event.data);
      }
    });

    mediaRecorder.addEventListener("stop", () => {
      stream.getTracks().forEach((track) => track.stop());
      stopVolumeMeter();
      stopSpeechRecognition();
      saveRecording();
      scoreCurrentRecording();
    });

    mediaRecorder.start();
    recordButton.textContent = "停止录音";
    recordButton.classList.add("is-recording");
    recordHint.textContent = "正在录音：请读出当前 Level 的英文句子。停止后会自动出结果。";
  } catch (error) {
    recordHint.textContent = "没有拿到麦克风权限，请允许浏览器使用麦克风。";
  }
}

function stopRecording() {
  if (mediaRecorder?.state === "recording") {
    mediaRecorder.stop();
  }
  recordButton.textContent = "开始录音";
  recordButton.classList.remove("is-recording");
}

function saveRecording() {
  if (latestAudioUrl) {
    URL.revokeObjectURL(latestAudioUrl);
  }

  const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
  currentRecording = {
    blob: audioBlob,
    duration: Math.max(0, (Date.now() - recorderStartedAt) / 1000),
    averageVolume: getAverageVolume(),
    transcript
  };
  latestAudioUrl = URL.createObjectURL(audioBlob);
  audioPlayback.src = latestAudioUrl;
  playRecording.disabled = false;
  downloadRecording.href = latestAudioUrl;
  downloadRecording.classList.remove("is-disabled");
  recordHint.textContent = "录音完成，系统已自动评分。";
}

function clearRecording() {
  if (latestAudioUrl) {
    URL.revokeObjectURL(latestAudioUrl);
  }

  latestAudioUrl = "";
  currentRecording = null;
  audioChunks = [];
  audioPlayback.hidden = true;
  audioPlayback.removeAttribute("src");
  playRecording.disabled = true;
  downloadRecording.href = "#";
  downloadRecording.classList.add("is-disabled");
}

function resetScoreCard() {
  scoreCard.hidden = true;
  scoreCard.classList.remove("is-pass", "is-retry");
  scoreStars.textContent = "☆☆☆";
  scoreText.textContent = "录音后自动评分。";
  scoreDetails.textContent = "";
}

function startVolumeMeter(stream) {
  audioContext = new AudioContext();
  analyser = audioContext.createAnalyser();
  analyser.fftSize = 1024;
  const source = audioContext.createMediaStreamSource(stream);
  source.connect(analyser);

  const data = new Uint8Array(analyser.fftSize);
  const sampleVolume = () => {
    if (!analyser) {
      return;
    }

    analyser.getByteTimeDomainData(data);
    let sum = 0;
    data.forEach((value) => {
      const centered = value - 128;
      sum += centered * centered;
    });
    volumeSamples.push(Math.sqrt(sum / data.length) / 128);
    volumeFrame = requestAnimationFrame(sampleVolume);
  };

  sampleVolume();
}

function stopVolumeMeter() {
  cancelAnimationFrame(volumeFrame);
  analyser = null;
  audioContext?.close();
  audioContext = null;
}

function getAverageVolume() {
  if (!volumeSamples.length) {
    return 0;
  }

  return volumeSamples.reduce((sum, value) => sum + value, 0) / volumeSamples.length;
}

function startSpeechRecognition() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    return;
  }

  recognition = new Recognition();
  recognition.lang = "en-US";
  recognition.interimResults = true;
  recognition.continuous = true;
  recognition.addEventListener("result", (event) => {
    transcript = Array.from(event.results)
      .map((result) => result[0]?.transcript || "")
      .join(" ");
  });
  recognition.start();
}

function stopSpeechRecognition() {
  if (recognition) {
    recognition.stop();
    recognition = null;
  }
}

function scoreCurrentRecording() {
  const stars = scoreRecording();
  const oldStars = progress.stars[activeStoryIndex][activePageIndex] || 0;
  progress.stars[activeStoryIndex][activePageIndex] = Math.max(oldStars, stars);

  if (stars === 3) {
    unlockNextLevel();
  }

  saveProgress();
  renderPage();
  scoreCard.hidden = false;
  scoreStars.textContent = makeStars(stars);
  scoreCard.classList.toggle("is-pass", stars === 3);
  scoreCard.classList.toggle("is-retry", stars < 3);
  scoreText.textContent =
    stars === 3
      ? "太棒了，3 星通过！下一关已经解锁。"
      : "还差一点点。声音清楚、读完整，再录一次争取 3 星！";
  scoreDetails.textContent = buildScoreDetails(stars);
  playResultSound(stars);
}

function scoreRecording() {
  if (!currentRecording) {
    return 0;
  }

  const wordCount = getCurrentWordCount();
  const idealSeconds = wordCount / 1.35;
  const minSeconds = Math.max(1.8, idealSeconds * 0.55);
  const maxSeconds = Math.max(5.5, idealSeconds * 2.6);
  let stars = 0;

  if (currentRecording.duration >= minSeconds) {
    stars += 1;
  }
  if (currentRecording.duration <= maxSeconds) {
    stars += 1;
  }
  if (currentRecording.averageVolume >= 0.016) {
    stars += 1;
  }

  const similarity = getTranscriptSimilarity();
  if (similarity !== null && similarity < 0.45) {
    stars = Math.max(0, stars - 1);
  }

  return Math.min(3, stars);
}

function getTranscriptSimilarity() {
  if (!currentRecording?.transcript) {
    return null;
  }

  const targetWords = normalizeWords(getCurrentText());
  const spokenWords = new Set(normalizeWords(currentRecording.transcript));
  if (!targetWords.length || !spokenWords.size) {
    return null;
  }

  const matched = targetWords.filter((target) => spokenWords.has(target)).length;
  return matched / targetWords.length;
}

function normalizeWords(text) {
  return text.toLowerCase().match(/[a-z']+/g) || [];
}

function buildScoreDetails(stars) {
  const similarity = getTranscriptSimilarity();
  const parts = [
    `时长 ${currentRecording.duration.toFixed(1)} 秒`,
    `声音清晰度 ${(currentRecording.averageVolume * 100).toFixed(1)}`
  ];

  if (similarity === null) {
    parts.push("当前浏览器为基础评分");
  } else {
    parts.push(`朗读匹配度 ${Math.round(similarity * 100)}%`);
  }

  parts.push(stars === 3 ? "达到三星通关标准" : "建议再听一遍后重录");
  return parts.join(" · ");
}

function playResultSound(stars) {
  const SoundAudioContext = window.AudioContext || window.webkitAudioContext;
  if (!SoundAudioContext) {
    return;
  }

  const context = new SoundAudioContext();
  const notes =
    stars === 3
      ? [
          { frequency: 523.25, start: 0, duration: 0.12 },
          { frequency: 659.25, start: 0.12, duration: 0.12 },
          { frequency: 783.99, start: 0.24, duration: 0.22 }
        ]
      : [
          { frequency: 392, start: 0, duration: 0.16 },
          { frequency: 329.63, start: 0.16, duration: 0.18 },
          { frequency: 261.63, start: 0.34, duration: 0.24 }
        ];

  notes.forEach((note) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = stars === 3 ? "triangle" : "sine";
    oscillator.frequency.setValueAtTime(note.frequency, context.currentTime + note.start);
    gain.gain.setValueAtTime(0.0001, context.currentTime + note.start);
    gain.gain.exponentialRampToValueAtTime(0.18, context.currentTime + note.start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + note.start + note.duration);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(context.currentTime + note.start);
    oscillator.stop(context.currentTime + note.start + note.duration);
  });

  const totalDuration = Math.max(...notes.map((note) => note.start + note.duration));
  window.setTimeout(() => context.close(), (totalDuration + 0.1) * 1000);
}

function unlockNextLevel() {
  const unit = units[activeStoryIndex];
  if (activePageIndex < unit.levels.length - 1) {
    progress.unlockedLevels[activeStoryIndex] = Math.max(
      progress.unlockedLevels[activeStoryIndex],
      activePageIndex + 1
    );
  }
}

function activateAccess() {
  const code = activationCode.value.trim().toUpperCase();
  const plan = activationCodes[code];

  if (!plan) {
    activationMessage.textContent = "激活码无效。付款后请确认输入的是完整激活码。";
    activationMessage.className = "activation-message is-error";
    return;
  }

  saveAccessPlan(plan);
  activationMessage.textContent = `激活成功：${accessPlans[plan].label}`;
  activationMessage.className = "activation-message is-success";
  renderPage();
}

storyTabs.forEach((tab) => {
  tab.addEventListener("click", () => setActiveStory(Number(tab.dataset.story)));
});

prevPage.addEventListener("click", () => {
  activePageIndex = Math.max(0, activePageIndex - 1);
  stopSpeech();
  clearRecording();
  renderPage();
});

nextPage.addEventListener("click", () => {
  const lastPage = units[activeStoryIndex].levels.length - 1;
  activePageIndex = Math.min(lastPage, activePageIndex + 1);
  stopSpeech();
  clearRecording();
  renderPage();
});

speakPage.addEventListener("click", speakCurrentPage);
activateButton.addEventListener("click", activateAccess);
activationCode.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    activateAccess();
  }
});

recordButton.addEventListener("click", () => {
  if (mediaRecorder?.state === "recording") {
    stopRecording();
  } else {
    startRecording();
  }
});

playRecording.addEventListener("click", () => {
  audioPlayback.hidden = false;
  audioPlayback.play();
});

window.addEventListener("beforeunload", () => {
  stopSpeech();
  if (latestAudioUrl) {
    URL.revokeObjectURL(latestAudioUrl);
  }
});

renderPage();
