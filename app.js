const accessPlans = {
  free: { label: "免费版：Unit 1-20", maxUnit: 19 },
  paid: { label: "付费版：Unit 1-30", maxUnit: 29 }
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

applyAdvancedPassages();
expandToThirtyUnits();

function applyAdvancedPassages() {
  const passageMap = {
    "I Wake Up": ["I wake up early in the morning.", "The bright sun shines through my window.", "I stretch my arms and smile.", "I make my bed before breakfast.", "Today I want to learn something new.", "A good morning helps me feel ready."],
    "My Red Cup": ["My red cup is on the wooden desk.", "I use it when I drink warm water.", "The cup is small, but it is useful.", "I keep it clean every day.", "When I finish drinking, I put it back.", "Taking care of small things is important."],
    "I Like Milk": ["I like milk because it tastes fresh.", "I drink a glass after breakfast.", "Milk gives me energy for class.", "Sometimes I share milk with my sister.", "We say thank you to Mom.", "Healthy food helps us grow strong."],
    "The Big Bus": ["A big yellow bus stops near my home.", "Many students get on the bus.", "The driver smiles and says hello.", "We sit down and talk quietly.", "The bus takes us to school safely.", "I like watching the streets go by."],
    "At School": ["I go to school with my backpack.", "My friend Sam sits next to me.", "We read a story in English class.", "The teacher asks us to listen carefully.", "I raise my hand and answer a question.", "Learning with friends makes school fun."],
    "We Can Run": ["We can run across the green field.", "The sun is warm on our faces.", "My friends cheer when I run fast.", "I slow down and take a deep breath.", "Running makes my heart beat quickly.", "Exercise helps our bodies stay healthy."],
    "A Little Cat": ["A little cat sits on my lap.", "Its soft fur feels warm and smooth.", "The cat looks at me with bright eyes.", "I speak gently, so it feels safe.", "Soon it closes its eyes and rests.", "Being kind to animals is a good habit."],
    "Good Night": ["At night, I put my book away.", "I brush my teeth and wash my face.", "Mom turns on a small yellow lamp.", "I say good night to my family.", "The moon shines outside my window.", "I sleep and dream about tomorrow."],
    "Go to the Park": ["We go to the park after lunch.", "The path is clean and full of flowers.", "Children ride bikes near the trees.", "I hear birds singing in the sun.", "We walk slowly and enjoy the air.", "The park is a cheerful place to visit."],
    "The Big Tree": ["A big tree stands in the park.", "Its leaves make a cool green roof.", "We sit under the tree and rest.", "I see ants moving on the ground.", "My friend draws the tree in her notebook.", "Nature gives us many things to notice."],
    "A Little Bird": ["A little bird hops near the grass.", "It looks for food with quick eyes.", "We stand still and watch quietly.", "The bird opens its wings and flies.", "It lands on a branch above us.", "Small animals can make a day special."],
    "The Red Kite": ["We see a red kite in the sky.", "The wind lifts it higher and higher.", "I hold the string with both hands.", "My brother runs and laughs behind me.", "The kite dances like a bright bird.", "It is exciting to play outside together."],
    "Run and Run": ["We run on the grass after school.", "The field is wide and soft.", "I try to keep my steps steady.", "My friends run beside me and laugh.", "When we feel tired, we drink water.", "Playing outside makes us happy and strong."],
    "Snack Time": ["It is snack time under the tree.", "We share crackers, fruit, and water.", "I choose an apple from my lunch box.", "My friend gives me a small cookie.", "We clean our hands before we eat.", "Sharing snacks makes our picnic friendly."],
    "Dad Waves": ["Dad waves at us from the gate.", "He calls, \"Come here, it is time.\"", "We pick up our bags quickly.", "I tell Dad about the red kite.", "He listens carefully and smiles.", "Family time after play feels warm."],
    "Go Home": ["We go home when the sky turns orange.", "The park becomes quiet behind us.", "I feel tired, but I am happy.", "Mom asks what I liked best.", "I say the kite was my favorite.", "A good day gives us sweet memories."],
    "My Bag": ["I have a red school bag.", "It sits on my bed every morning.", "The bag has two strong straps.", "I check it before I leave home.", "A clean bag helps me find things.", "Being organized makes school easier."],
    "A Little Book": ["I put a little book in my bag.", "The book has funny animal pictures.", "I read it when I finish my work.", "Sometimes I share it with a friend.", "Books can take us to new places.", "Reading a little every day is helpful."],
    "A Blue Cup": ["I put a blue cup in my bag.", "The cup is light and easy to carry.", "I use it when I drink water.", "My teacher says water helps us think.", "I close the lid very tightly.", "Then my books stay dry and clean."],
    "A Toy": ["I put a small toy in my bag.", "The toy can roll across the floor.", "I only play with it after class.", "My friend asks to try it too.", "We take turns and follow the rules.", "A good toy can teach us to share."],
    "My Hat": ["I put my hat in my bag.", "The hat keeps the sun off my face.", "It is useful on hot days.", "I fold it carefully, so it fits.", "At the playground, I wear it again.", "Small habits help us take care of ourselves."],
    "A Full Bag": ["My bag is full before school.", "It has a book, a cup, and a toy.", "It also has my hat inside.", "The bag feels heavy on my back.", "I take out things I do not need.", "A lighter bag is better for my body."],
    "Mom Helps": ["Mom helps me zip the red bag.", "She checks that my homework is inside.", "I thank her before I leave.", "She reminds me to be kind at school.", "I wave and walk to the door.", "Her words help me start the day well."],
    "Go to School": ["I take my red bag to school.", "The morning street is busy and bright.", "I walk carefully beside Mom.", "At the school gate, I see my friends.", "We say hello and go inside together.", "I am ready for a new school day."]
  };

  const translationMap = {
    "I Wake Up": "我早上很早醒来。明亮的太阳照进窗户。我伸展手臂并微笑。我在早餐前整理床铺。今天我想学习新东西。美好的早晨让我准备好开始一天。",
    "My Red Cup": "我的红杯子在木桌上。我喝温水时会用它。杯子很小，但很有用。我每天保持它干净。喝完以后，我把它放回去。照顾小物品很重要。",
    "I Like Milk": "我喜欢牛奶，因为它味道新鲜。我早餐后喝一杯牛奶。牛奶给我上课的能量。有时我和妹妹分享牛奶。我们对妈妈说谢谢。健康的食物帮助我们强壮成长。",
    "The Big Bus": "一辆黄色的大巴士停在我家附近。许多学生上了车。司机微笑着打招呼。我们坐下并轻声交谈。巴士安全地带我们去学校。我喜欢看街道从窗外经过。",
    "At School": "我背着书包去学校。我的朋友 Sam 坐在我旁边。我们在英语课上读故事。老师让我们认真听。我举手回答问题。和朋友一起学习让学校生活很有趣。",
    "We Can Run": "我们可以跑过绿色的操场。阳光温暖地照在脸上。我跑得快时朋友们为我加油。我慢下来并深呼吸。跑步让我的心跳加快。运动帮助我们的身体保持健康。",
    "A Little Cat": "一只小猫坐在我的腿上。它柔软的毛温暖又顺滑。小猫用明亮的眼睛看着我。我轻轻说话，让它感到安全。不久它闭上眼睛休息。善待动物是好习惯。",
    "Good Night": "晚上，我把书收好。我刷牙洗脸。妈妈打开一盏黄色小灯。我对家人说晚安。月亮在窗外发光。我睡着了，梦见明天。"
  };

  units.forEach((unit) => {
    unit.levels.forEach((level) => {
      level.lines = passageMap[level.title] || level.lines;
      level.translation = translationMap[level.title] || `${level.translation} 这篇短文加入了更多细节，帮助孩子练习理解完整语境。`;
      level.translationLines = splitTranslation(level.translation, level.lines.length);
      level.focus = `${level.focus} · reading, meaning, phonics`;
    });
  });
}

function expandToThirtyUnits() {
  const topics = [
    ["Family Weekend", "family", "weekend", "plan", "家庭周末"],
    ["My Clean Room", "room", "clean", "shelf", "整理房间"],
    ["A Rainy Day", "rain", "umbrella", "street", "雨天出行"],
    ["The Class Garden", "garden", "plant", "water", "班级花园"],
    ["Library Time", "library", "borrow", "quiet", "图书馆时间"],
    ["A School Show", "show", "stage", "practice", "学校表演"],
    ["The Little Robot", "robot", "button", "move", "小机器人"],
    ["Market Morning", "market", "fruit", "choose", "早市购物"],
    ["A Trip to the Zoo", "zoo", "animal", "guide", "动物园之旅"],
    ["Helping Grandpa", "grandpa", "garden", "carry", "帮助爷爷"],
    ["My New Neighbor", "neighbor", "welcome", "share", "新邻居"],
    ["The Lost Pencil", "pencil", "lost", "find", "丢失的铅笔"],
    ["A Bike Ride", "bike", "helmet", "safe", "骑车出行"],
    ["Cooking with Mom", "cook", "mix", "smell", "和妈妈做饭"],
    ["The Science Corner", "science", "magnet", "test", "科学角"],
    ["A Kind Team", "team", "kind", "help", "友善团队"],
    ["Music Class", "music", "rhythm", "song", "音乐课"],
    ["Sports Day", "race", "finish", "cheer", "运动会"],
    ["The Blue Planet", "planet", "ocean", "protect", "蓝色星球"],
    ["A Letter to Amy", "letter", "write", "answer", "给 Amy 的信"],
    ["The Snowy Hill", "snow", "hill", "slide", "雪山小坡"],
    ["A Clever Dog", "dog", "clever", "follow", "聪明的小狗"],
    ["Museum Visit", "museum", "history", "ticket", "参观博物馆"],
    ["The Busy Airport", "airport", "ticket", "plane", "忙碌机场"],
    ["A Camping Night", "camp", "tent", "fire", "露营夜晚"],
    ["City Helpers", "city", "helper", "safe", "城市帮手"],
    ["My Future Dream", "dream", "future", "goal", "未来梦想"]
  ];

  topics.forEach((topic, index) => {
    units.push(createGeneratedUnit(index + 4, topic));
  });
}

function createGeneratedUnit(number, [title, wordOne, wordTwo, wordThree, chineseTopic]) {
  const themePairs = [
    ["#ffd166", "#fff1bf"],
    ["#8bdc9a", "#dff8ce"],
    ["#95c8ff", "#e8f3ff"],
    ["#ff9ab7", "#ffe3ee"]
  ];
  const theme = themePairs[number % themePairs.length];
  const levelTitles = ["A New Start", "Look Around", "Work Together", "A Small Problem", "Smart Ideas", "Kind Choices", "Tell the Story", "A Happy Ending"];

  return {
    unit: `Unit ${number}`,
    title,
    source: "原创小学英语三四年级风格文本，可用于本项目商业 MVP。",
    theme,
    levels: levelTitles.map((levelTitle, levelIndex) => {
      const lines = buildGeneratedLines(title, wordOne, wordTwo, wordThree, levelIndex);
      return lesson(`${title}: ${levelTitle}`, lines, buildGeneratedTranslation(chineseTopic, levelIndex), `${wordOne}, ${wordTwo}, ${wordThree} · reading, meaning, phonics`, [
        word(wordOne, "/ˈwɝːd/", topicWordCn(wordOne), "主题词"),
        word(wordTwo, "/ˈtɑːpɪk/", topicWordCn(wordTwo), "阅读关键词"),
        word(wordThree, "/ˈæktɪv/", topicWordCn(wordThree), "动作或品质词")
      ]);
    })
  };
}

function buildGeneratedLines(title, wordOne, wordTwo, wordThree, levelIndex) {
  const dayParts = ["morning", "class", "break time", "afternoon", "Friday", "weekend", "holiday", "evening"];
  return [
    `In ${title}, we learn about ${wordOne}.`,
    `The ${wordTwo} is important in this story.`,
    `I look carefully and try to understand more.`,
    `My friend and I ${wordThree} in a helpful way.`,
    `We talk about the problem during ${dayParts[levelIndex]}.`,
    `At the end, I can tell the story clearly.`
  ];
}

function buildGeneratedTranslation(chineseTopic, levelIndex) {
  const timeWords = ["早晨", "课堂上", "课间", "下午", "星期五", "周末", "假期", "晚上"];
  return `在“${chineseTopic}”这个主题中，我们学习一个重要内容。故事里的关键词很有用。我认真观察，并努力理解更多。我和朋友用有帮助的方式一起行动。我们在${timeWords[levelIndex]}讨论这个问题。最后，我可以清楚地讲出这个故事。`;
}

function topicWordCn(wordText) {
  const dictionary = {
    family: "家庭",
    weekend: "周末",
    plan: "计划",
    room: "房间",
    clean: "清洁",
    shelf: "架子",
    rain: "雨",
    umbrella: "雨伞",
    street: "街道",
    garden: "花园",
    plant: "植物",
    water: "水",
    library: "图书馆",
    borrow: "借",
    quiet: "安静的",
    show: "表演",
    stage: "舞台",
    practice: "练习",
    robot: "机器人",
    button: "按钮",
    move: "移动",
    market: "市场",
    fruit: "水果",
    choose: "选择",
    zoo: "动物园",
    animal: "动物",
    guide: "向导",
    grandpa: "爷爷",
    carry: "搬",
    neighbor: "邻居",
    welcome: "欢迎",
    share: "分享",
    pencil: "铅笔",
    lost: "丢失的",
    find: "找到",
    bike: "自行车",
    helmet: "头盔",
    safe: "安全的",
    cook: "烹饪",
    mix: "混合",
    smell: "气味",
    science: "科学",
    magnet: "磁铁",
    test: "测试",
    team: "团队",
    kind: "友善的",
    help: "帮助",
    music: "音乐",
    rhythm: "节奏",
    song: "歌曲",
    race: "比赛",
    finish: "完成",
    cheer: "欢呼",
    planet: "星球",
    ocean: "海洋",
    protect: "保护",
    letter: "信",
    write: "写",
    answer: "回答",
    snow: "雪",
    hill: "小山",
    slide: "滑行",
    dog: "狗",
    clever: "聪明的",
    follow: "跟随",
    museum: "博物馆",
    history: "历史",
    ticket: "票",
    airport: "机场",
    plane: "飞机",
    camp: "露营",
    tent: "帐篷",
    fire: "火",
    city: "城市",
    helper: "帮手",
    dream: "梦想",
    future: "未来",
    goal: "目标"
  };

  return dictionary[wordText] || wordText;
}

function splitTranslation(translation, targetLength) {
  const parts = translation.split(/(?<=。)/).map((part) => part.trim()).filter(Boolean);
  if (parts.length >= targetLength) {
    return parts.slice(0, targetLength);
  }

  return Array.from({ length: targetLength }, (_, index) => parts[index] || translation);
}

const unitPicker = document.querySelector("#unitPicker");
let storyTabs = [];
const levelTitle = document.querySelector("#levelTitle");
const bestStars = document.querySelector("#bestStars");
const pageArt = document.querySelector("#pageArt");
const pageCount = document.querySelector("#pageCount");
const storyTitle = document.querySelector("#storyTitle");
const sentenceList = document.querySelector("#sentenceList");
const translationText = document.querySelector("#translationText");
const focusText = document.querySelector("#focusText");
const vocabularyList = document.querySelector("#vocabularyList");
const quizQuestion = document.querySelector("#quizQuestion");
const quizOptions = document.querySelector("#quizOptions");
const quizResult = document.querySelector("#quizResult");
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
let soundContext = null;
let currentWordRanges = [];

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
  renderSentenceWords(level);
  if (translationText) {
    translationText.textContent = level.translation;
  }
  focusText.textContent = level.focus;
  sourceText.textContent = unit.source;
  pageCount.textContent = `${unit.title} · ${activePageIndex + 1} / ${unit.levels.length}`;
  pageArt.style.setProperty("--art-a", unit.theme[0]);
  pageArt.style.setProperty("--art-b", unit.theme[1]);
  renderLessonArt(level);

  renderVocabulary(level.vocabulary);
  renderQuiz(level);
  renderUnitTabs();
  renderAccess();

  prevPage.disabled = activePageIndex === 0;
  nextPage.disabled = activePageIndex === unit.levels.length - 1 || activePageIndex + 1 > unlockedLevel;
  speakPage.disabled = !isPlayable;
  recordButton.disabled = !isPlayable;
  paywallNotice.hidden = isPlayable;
  paywallNotice.textContent = "Unit 1-20 默认免费开放。请输入 30 元付费激活码解锁 Unit 21-30。";
  resetScoreCard();
  clearReadingHighlight();
}

function renderLessonArt(level) {
  const scene = getLessonScene(level.title);
  pageArt.setAttribute("aria-label", scene.label);
  pageArt.innerHTML = `
    <div class="scene-sky">${scene.sky}</div>
    <div class="scene-main">${scene.main}</div>
    <div class="scene-props">${scene.props}</div>
    <p class="scene-caption">${scene.label}</p>
  `;
}

function getLessonScene(title) {
  const scenes = {
    "I Wake Up": { sky: "☀️", main: "🛏️", props: "👧", label: "孩子醒来，看见太阳" },
    "My Red Cup": { sky: "✨", main: "🔴☕", props: "🪵", label: "红杯子放在桌子上" },
    "I Like Milk": { sky: "🥛", main: "😊", props: "💧", label: "孩子喜欢喝牛奶" },
    "The Big Bus": { sky: "☀️", main: "🚌", props: "💨", label: "一辆大巴士开走了" },
    "At School": { sky: "🏫", main: "👧👦", props: "🪑", label: "孩子们在学校坐在一起" },
    "We Can Run": { sky: "☀️", main: "🏃‍♀️🏃", props: "🌿", label: "孩子们在阳光下跑步" },
    "A Little Cat": { sky: "💛", main: "🐱", props: "🧒", label: "小猫坐在孩子腿上" },
    "Good Night": { sky: "🌙", main: "🛏️", props: "⭐", label: "孩子在床上说晚安" },
    "Go to the Park": { sky: "☀️", main: "🌳", props: "👧👦", label: "孩子们去阳光下的公园" },
    "The Big Tree": { sky: "🌤️", main: "🌳", props: "🧒🪑", label: "孩子坐在大树旁" },
    "A Little Bird": { sky: "☁️", main: "🐦", props: "🌿", label: "小鸟在草地上跳" },
    "The Red Kite": { sky: "🪁", main: "🔴", props: "⬆️", label: "红风筝飞上天空" },
    "Run and Run": { sky: "☀️", main: "🏃🏃‍♀️", props: "🌱🌱", label: "孩子们在草地上跑啊跑" },
    "Snack Time": { sky: "✨", main: "🍪", props: "😊😊", label: "孩子们开心吃点心" },
    "Dad Waves": { sky: "👋", main: "👨", props: "👧👦", label: "爸爸挥手叫孩子过来" },
    "Go Home": { sky: "🏠", main: "😊😊", props: "🌳", label: "孩子们开心回家" },
    "My Bag": { sky: "✨", main: "🎒", props: "🛏️", label: "红书包放在床上" },
    "A Little Book": { sky: "📖", main: "🎒", props: "✋", label: "把一本小书放进书包" },
    "A Blue Cup": { sky: "🔵", main: "🥤", props: "🎒", label: "把蓝杯子放进书包" },
    "A Toy": { sky: "🧸", main: "🎒", props: "🛞", label: "把会滚的玩具放进书包" },
    "My Hat": { sky: "🧢", main: "🎒", props: "😊", label: "把帽子放进书包" },
    "A Full Bag": { sky: "💪", main: "🎒", props: "📚🥤🧸", label: "书包装满了，不轻了" },
    "Mom Helps": { sky: "💗", main: "👩‍👧", props: "🎒", label: "妈妈帮孩子拉上书包" },
    "Go to School": { sky: "🏫", main: "🎒", props: "🚶‍♀️", label: "孩子背着红书包去学校" }
  };

  return scenes[title] || { sky: "✨", main: "📘", props: "😊", label: "当前课文场景" };
}

function renderSentenceWords(level) {
  const lines = level.lines;
  const translationLines = level.translationLines || splitTranslation(level.translation, lines.length);
  currentWordRanges = [];
  let wordIndex = 0;
  let charOffset = 0;

  sentenceList.innerHTML = lines
    .map((line, lineIndex) => {
      const html = line.replace(/[A-Za-z']+|[^A-Za-z']+/g, (part) => {
        const start = charOffset;
        charOffset += part.length;

        if (!/[A-Za-z']+/.test(part)) {
          return part;
        }

        currentWordRanges.push({
          start,
          end: charOffset,
          index: wordIndex,
          lineIndex
        });

        return `<span class="read-word" data-word-index="${wordIndex++}">${part}</span>`;
      });

      if (lineIndex < lines.length - 1) {
        charOffset += 1;
      }

      return `
        <div class="sentence-pair">
          <p class="sentence">${html}</p>
          <p class="sentence-translation" data-line-index="${lineIndex}">${translationLines[lineIndex] || ""}</p>
        </div>
      `;
    })
    .join("");
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

function renderQuiz(level) {
  const questions = buildQuizQuestions(level);
  quizQuestion.textContent = "完成配音后，做 4 道小题检查理解、词汇和音标。";
  quizResult.textContent = "";
  quizOptions.innerHTML = questions
    .map(
      (question, index) => `
        <article class="quiz-card" data-question-index="${index}">
          <h3>${index + 1}. ${question.prompt}</h3>
          <div class="quiz-choice-row">
            ${question.options
              .map(
                (option) =>
                  `<button class="quiz-option" type="button" data-correct="${option === question.answer}" aria-label="选择 ${option}">${option}</button>`
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function buildQuizQuestions(level) {
  const vocab = level.vocabulary;
  const firstLine = level.lines[0];
  const lastLine = level.lines[level.lines.length - 1];
  return [
    {
      prompt: `“${vocab[0].cn}” 对应哪个英文单词？`,
      answer: vocab[0].text,
      options: buildQuizOptions(vocab[0].text)
    },
    {
      prompt: `哪个音标属于 ${vocab[1].text}？`,
      answer: vocab[1].ipa,
      options: shuffleOptions([vocab[1].ipa, vocab[0].ipa, vocab[2].ipa])
    },
    {
      prompt: "短文第一句说了什么？",
      answer: firstLine,
      options: shuffleOptions([firstLine, level.lines[1], lastLine])
    },
    {
      prompt: "短文最后想表达什么？",
      answer: lastLine,
      options: shuffleOptions([lastLine, level.lines[2], level.lines[3]])
    }
  ];
}

function buildQuizOptions(answer) {
  const words = units
    .flatMap((unit) => unit.levels)
    .flatMap((level) => level.vocabulary)
    .map((item) => item.text)
    .filter((word) => word !== answer);
  const uniqueWords = [...new Set(words)];
  const options = [answer, ...uniqueWords.slice(activePageIndex, activePageIndex + 6).slice(0, 2)];
  return shuffleOptions(options);
}

function shuffleOptions(options) {
  return [...options].sort(() => Math.random() - 0.5);
}

function renderUnitTabs() {
  unitPicker.innerHTML = units
    .map((unit, index) => `<button class="story-tab" type="button" data-story="${index}">${unit.unit}</button>`)
    .join("");
  storyTabs = unitPicker.querySelectorAll(".story-tab");

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
  clearReadingHighlight();
}

function speakCurrentPage() {
  unlockSound();
  if (!("speechSynthesis" in window)) {
    recordHint.textContent = "这个浏览器暂不支持朗读功能，可以直接录音跟读。";
    return;
  }

  stopSpeech();
  const utterance = new SpeechSynthesisUtterance(getCurrentText());
  utterance.lang = "en-US";
  utterance.rate = 0.72;
  utterance.pitch = 1.08;
  utterance.addEventListener("boundary", (event) => {
    if (event.name === "word" || typeof event.charIndex === "number") {
      highlightWordAt(event.charIndex);
    }
  });
  utterance.addEventListener("end", clearReadingHighlight);
  utterance.addEventListener("error", clearReadingHighlight);
  window.speechSynthesis.speak(utterance);
}

function highlightWordAt(charIndex) {
  const range = currentWordRanges.find((item) => charIndex >= item.start && charIndex < item.end);
  if (!range) {
    return;
  }

  document.querySelectorAll(".read-word").forEach((word) => {
    word.classList.toggle("is-speaking", Number(word.dataset.wordIndex) === range.index);
  });
  document.querySelectorAll(".sentence-translation").forEach((translation) => {
    translation.classList.toggle("is-speaking", Number(translation.dataset.lineIndex) === range.lineIndex);
  });
}

function clearReadingHighlight() {
  document.querySelectorAll(".read-word.is-speaking").forEach((word) => {
    word.classList.remove("is-speaking");
  });
  document.querySelectorAll(".sentence-translation.is-speaking").forEach((translation) => {
    translation.classList.remove("is-speaking");
  });
}

async function startRecording() {
  unlockSound();
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
  playFeedbackSound(stars === 3 ? "success" : "sad");
}

function unlockSound() {
  const SoundAudioContext = window.AudioContext || window.webkitAudioContext;
  if (!SoundAudioContext) {
    return null;
  }

  if (!soundContext) {
    soundContext = new SoundAudioContext();
  }

  if (soundContext.state === "suspended") {
    soundContext.resume();
  }

  return soundContext;
}

function playFeedbackSound(type) {
  const context = unlockSound();
  if (!context) {
    return;
  }

  const notes =
    type === "success"
      ? [
          { frequency: 523.25, start: 0, duration: 0.14 },
          { frequency: 659.25, start: 0.14, duration: 0.14 },
          { frequency: 783.99, start: 0.28, duration: 0.18 },
          { frequency: 1046.5, start: 0.46, duration: 0.26 }
        ]
      : [
          { frequency: 440, start: 0, duration: 0.2 },
          { frequency: 349.23, start: 0.2, duration: 0.24 },
          { frequency: 261.63, start: 0.44, duration: 0.34 }
        ];

  notes.forEach((note) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = type === "success" ? "triangle" : "sawtooth";
    oscillator.frequency.setValueAtTime(note.frequency, context.currentTime + note.start);
    gain.gain.setValueAtTime(0.0001, context.currentTime + note.start);
    gain.gain.exponentialRampToValueAtTime(type === "success" ? 0.28 : 0.16, context.currentTime + note.start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + note.start + note.duration);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(context.currentTime + note.start);
    oscillator.stop(context.currentTime + note.start + note.duration);
  });
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

function answerQuiz(button) {
  unlockSound();
  const card = button.closest(".quiz-card");
  const isCorrect = button.dataset.correct === "true";

  card.querySelectorAll(".quiz-option").forEach((option) => {
    option.disabled = true;
    option.classList.toggle("is-correct", option.dataset.correct === "true");
  });
  button.classList.toggle("is-wrong", !isCorrect);
  quizResult.textContent = isCorrect ? "答对啦！继续完成下一题。" : "再想一想，绿色选项是正确答案。";
  playFeedbackSound(isCorrect ? "success" : "sad");
}

unitPicker.addEventListener("click", (event) => {
  const tab = event.target.closest(".story-tab");
  if (!tab) {
    return;
  }

  setActiveStory(Number(tab.dataset.story));
});

document.addEventListener("pointerdown", unlockSound, { once: true });

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
  unlockSound();
  audioPlayback.hidden = false;
  audioPlayback.play();
});

quizOptions.addEventListener("click", (event) => {
  const button = event.target.closest(".quiz-option");
  if (!button) {
    return;
  }

  answerQuiz(button);
});

window.addEventListener("beforeunload", () => {
  stopSpeech();
  if (latestAudioUrl) {
    URL.revokeObjectURL(latestAudioUrl);
  }
});

renderPage();
