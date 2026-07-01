/* ============================================================================
   28 LETTERS FOR RADHIKA — script.js
   ------------------------------------------------------------------------
   HOW THIS FILE IS ORGANISED
   1. EDITABLE CONTENT   — everything you'll actually want to change lives
                            in the "CONFIG" block right below. Photos, songs,
                            letters, timeline, reasons, dreams — all here.
   2. APP LOGIC          — the engine that runs the site. You shouldn't need
                            to touch this unless you're adding features.
   See README.md for a plain-English guide to editing each section.
   ============================================================================ */

/* ============================================================================
   1. CONFIG — EDIT ME
   ============================================================================ */

const CONFIG = {
  // Password for the login screen.
  password: "Radhika2907",

  // The big day. Month is 0-indexed in JS Dates, so 6 = July.
  birthday: new Date(2026, 6, 29, 0, 0, 0),

  // How many letters lead up to the birthday.
  totalDays: 28,
};

/**
 * LETTERS
 * One entry per day, Day 28 down to Day 1, plus a special "birthday" entry.
 * Each unlocks automatically the correct number of days before CONFIG.birthday.
 * Replace `photo` with a real file path once you drop images into
 * assets/images/ (e.g. "assets/images/day-14.jpg"). If the file is missing,
 * a soft placeholder is shown automatically — nothing breaks.
 * Replace `voice` and `song` with real file paths in assets/music/ the same way.
 */
const LETTERS = {
  28: {
    title: "Where It All Began",
    body:
      "Meri Radhika,\n\nDay 28. It all started so simply — a random Telegram group, two strangers, " +
      "no idea what was coming. I don't think either of us realised that day that we'd end up here, " +
      "counting down to your birthday two years later. But looking back, I can point to that exact " +
      "moment and say: that's where my favourite story began.\n\nHumesha tumhara.",
    photo: "assets/images/day-28.jpg",
    voice: "assets/music/voice-day-28.mp3",
    song: "No song needed — your voice is my favourite sound",
    memory: "The Telegram group where two strangers accidentally found each other.",
    surprise: "If we'd never joined that group, I'd have missed out on the best thing in my life. 🤍",
  },
  27: {
    title: "Just Two Strangers Talking",
    body:
      "Radhika,\n\nI keep thinking about how normal that first conversation felt — like it was nothing " +
      "special. Just two people talking. I had no clue I was talking to the person I'd fall for. " +
      "Funny how the biggest things in life sneak in quietly like that.\n\nMissing you today, like every day.",
    photo: "assets/images/day-27.jpg",
    voice: "assets/music/voice-day-27.mp3",
    song: "No song needed — just us",
    memory: "The first message that started it all.",
    surprise: "Somewhere in my chats, that first conversation is still saved. I go back and read it sometimes. 💌",
  },
  26: {
    title: "The Distance Between Us",
    body:
      "Meri jaan,\n\nDistance is the hardest part of loving you — the time zones, the waiting, the " +
      "not-being-able-to-just-show-up. But every single day I choose this anyway, because you're worth " +
      "every bit of the wait. Distance tested us, and we're still here.\n\nAlways choosing you.",
    photo: "assets/images/day-26.jpg",
    voice: "assets/music/voice-day-26.mp3",
    song: "No song needed — just the sound of your voice on call",
    memory: "Every late-night call that made the distance feel smaller.",
    surprise: "One day there'll be no distance left to talk about. Just us. 🏡",
  },
  25: {
    title: "The Little Things",
    body:
      "Radhika,\n\nIt's never the big moments that get me the most — it's the little things. The way you " +
      "text me the second something exciting happens. The way you remember things I mentioned once, weeks " +
      "ago. Those tiny details are how I know this is real.\n\nLoving you in all the small ways too.",
    photo: "assets/images/day-25.jpg",
    voice: "assets/music/voice-day-25.mp3",
    song: "No song needed — this letter is the song",
    memory: "All the little things you do without even realising.",
    surprise: "Reply to this letter with your favourite 'little thing' about us — I want to know. 💭",
  },
  24: {
    title: "Your Laugh",
    body:
      "Meri Radhika,\n\nIf I could bottle one sound and keep it forever, it would be your laugh. Even " +
      "through a phone speaker, it's the best part of my day, every single time. I hope one day I get to " +
      "hear it in person a lot more often.\n\nCounting down, always.",
    photo: "assets/images/day-24.jpg",
    voice: "assets/music/voice-day-24.mp3",
    song: "No song needed — your laugh is enough",
    memory: "That one call where you couldn't stop laughing and neither could I.",
    surprise: "Send me a voice note laughing right now. I mean it. 😂",
  },
  23: {
    title: "Waiting For Your Text",
    body:
      "Radhika,\n\nI'll never admit this out loud, but I check my phone way too often just hoping it's " +
      "you. Even after two years, that little notification still makes my whole day better. Some things " +
      "never get old.\n\nStill checking my phone for you.",
    photo: "assets/images/day-23.jpg",
    voice: "assets/music/voice-day-23.mp3",
    song: "No song needed",
    memory: "Every 'good morning' text that started my day right.",
    surprise: "Every notification from you is still my favourite one. 📱",
  },
  22: {
    title: "You, My Comfort",
    body:
      "Meri jaan,\n\nNo matter how bad a day gets, talking to you fixes it. You've become my comfort " +
      "place — the person I want to tell everything to first. That's not something I take lightly.\n\n" +
      "Thank you for being my calm.",
    photo: "assets/images/day-22.jpg",
    voice: "assets/music/voice-day-22.mp3",
    song: "No song needed",
    memory: "The rough day you turned into a good one, just by picking up the call.",
    surprise: "You are, and will always be, my safe place. 🤍",
  },
  21: {
    title: "18 April 2024",
    body:
      "Radhika,\n\nThe day we made it official. 18 April 2024 — a date I will never forget. That's the " +
      "day two people who only knew each other through a screen decided to try this for real, distance " +
      "and all. Best decision I ever made.\n\nHappy almost-anniversary, in advance, always.",
    photo: "assets/images/day-21.jpg",
    voice: "assets/music/voice-day-21.mp3",
    song: "No song needed — just that date",
    memory: "18 April 2024 — the day it became 'us'.",
    surprise: "Two years and counting. Here's to every year after this one too. 💍",
  },
  20: {
    title: "The Promises We Made",
    body:
      "Meri Radhika,\n\nOn the day we got together, I promised to always try — even when it's hard, even " +
      "across all this distance. I meant every word then, and I mean it even more now.\n\nStill trying, " +
      "still choosing you, every day.",
    photo: "assets/images/day-20.jpg",
    voice: "assets/music/voice-day-20.mp3",
    song: "No song needed",
    memory: "Every promise we've kept since 18 April 2024.",
    surprise: "I'm keeping every promise I made you. This website is proof. 😌",
  },
  19: {
    title: "Worth Every Bit of Hard",
    body:
      "Radhika,\n\nLong distance is hard — I won't pretend it isn't. But you make the hard parts worth " +
      "it. Every missed hug, every 'I wish you were here', it all makes sense the second I hear your " +
      "voice again.\n\nWorth it, every single time.",
    photo: "assets/images/day-19.jpg",
    voice: "assets/music/voice-day-19.mp3",
    song: "No song needed",
    memory: "Every hard day that got easier the moment we talked.",
    surprise: "Distance is temporary. What we're building isn't. 🤍",
  },
  18: {
    title: "If You Were Here",
    body:
      "Meri jaan,\n\nSome nights I imagine the most ordinary things — sitting next to you, sharing food " +
      "off the same plate, just existing in the same room. It's the small, boring, everyday things I " +
      "want most with you.\n\nDreaming of ordinary days with you.",
    photo: "assets/images/day-18.jpg",
    voice: "assets/music/voice-day-18.mp3",
    song: "No song needed",
    memory: "Every 'I wish you were here' text I've ever sent you.",
    surprise: "One day, ordinary days with you won't be a dream anymore. 🌸",
  },
  17: {
    title: "Your Voice, My Calm",
    body:
      "Radhika,\n\nThere's a very specific kind of calm that only your voice gives me. Doesn't matter how " +
      "chaotic my day has been — the second I hear you, everything slows down.\n\nYou are my favourite " +
      "sound.",
    photo: "assets/images/day-17.jpg",
    voice: "assets/music/voice-day-17.mp3",
    song: "No song needed — your voice already is one",
    memory: "The calls that ran way past when they should've ended.",
    surprise: "Send me a voice note today. I'll listen to it more than once. 🎧",
  },
  16: {
    title: "How Strong You Are",
    body:
      "Meri Radhika,\n\nI don't say this enough, but I admire how strong you are — carrying a long " +
      "distance relationship, still showing up for me every single day, without ever making it feel like " +
      "a burden.\n\nYou are stronger than you know.",
    photo: "assets/images/day-16.jpg",
    voice: "assets/music/voice-day-16.mp3",
    song: "No song needed",
    memory: "Every hard day you handled with more grace than I could.",
    surprise: "You make this look easier than it is. I see you. 💪",
  },
  15: {
    title: "Halfway There",
    body:
      "Radhika,\n\nHalfway through these letters now. Halfway to your birthday. I keep thinking about how " +
      "far we've come since that random Telegram group — and how far we still get to go together.\n\n" +
      "Halfway there, and still falling more in love with you.",
    photo: "assets/images/day-15.jpg",
    voice: "assets/music/voice-day-15.mp3",
    song: "No song needed",
    memory: "Every day of this countdown so far.",
    surprise: "14 letters down, 14 to go. Still not tired of writing to you. ✍️",
  },
  14: {
    title: "17 April 2026",
    body:
      "Meri jaan,\n\n17 April 2026 — the day distance finally lost. After two years of screens and calls, " +
      "I finally got to see you, really see you, stand right in front of me. You already said it best: " +
      "milna hi sabse favourite hai. Mine too. Always will be.\n\nStill smiling thinking about it.",
    photo: "assets/images/day-14.jpg",
    voice: "assets/music/voice-day-14.mp3",
    song: "No song needed — that day was music enough",
    memory: "17 April 2026 — the day we finally met, in person, for real.",
    surprise: "That day is on repeat in my head. I'd relive it every single day if I could. ✨",
  },
  13: {
    title: "That First Hug",
    body:
      "Radhika,\n\nI don't think words will ever fully explain what it felt like to finally hug you after " +
      "two years of only imagining it. It felt like every long call, every missed hug, every 'I wish you " +
      "were here' finally made sense.\n\nBest hug of my life, no contest.",
    photo: "assets/images/day-13.jpg",
    voice: "assets/music/voice-day-13.mp3",
    song: "No song needed",
    memory: "The exact moment we finally hugged, 17 April 2026.",
    surprise: "I'm already counting down to the next hug. 🫂",
  },
  12: {
    title: "What That Day Taught Me",
    body:
      "Meri Radhika,\n\nMeeting you in person taught me that everything I felt through a screen was real " +
      "— every bit of it. You're even better in person, somehow, and I didn't think that was possible.\n\n" +
      "Still learning how lucky I am.",
    photo: "assets/images/day-12.jpg",
    voice: "assets/music/voice-day-12.mp3",
    song: "No song needed",
    memory: "Realising in person that it was all real, all along.",
    surprise: "You exceeded every expectation I had. And I had a lot. 🤍",
  },
  11: {
    title: "More Days Like That One",
    body:
      "Radhika,\n\nAfter 17 April, one thing became very clear to me — I want a hundred more days exactly " +
      "like that one. No screens, no distance, just us, in the same place, making memories the slow, " +
      "ordinary, wonderful way.\n\nHere's to more days like that.",
    photo: "assets/images/day-11.jpg",
    voice: "assets/music/voice-day-11.mp3",
    song: "No song needed",
    memory: "Wanting one more day together before we'd even said goodbye.",
    surprise: "I'm already planning how to make the next 'in person' day happen. 🗓️",
  },
  10: {
    title: "Amritsar Is Calling",
    body:
      "Meri jaan,\n\nOur first trip together — Amritsar, the Golden Temple. I think about it more than I " +
      "should. Standing there with you, seeing that place together for the first time. It's going to be " +
      "everything.\n\nAlready packing in my head.",
    photo: "assets/images/day-10.jpg",
    voice: "assets/music/voice-day-10.mp3",
    song: "No song needed",
    memory: "Deciding Amritsar would be our first trip together.",
    surprise: "Golden Temple, you, me — that trip is going to be unforgettable. 🕌",
  },
  9: {
    title: "A Home, Someday",
    body:
      "Radhika,\n\nI think about our home more than I probably should for someone who doesn't even have " +
      "one yet with you. Nothing extravagant — just somewhere that's ours, where the distance finally " +
      "ends for good.\n\nBuilding it with you, brick by brick, someday.",
    photo: "assets/images/day-9.jpg",
    voice: "assets/music/voice-day-9.mp3",
    song: "No song needed",
    memory: "Every conversation about 'our future home' that made me smile.",
    surprise: "Whatever that home looks like, the only thing I need in it is you. 🏡",
  },
  8: {
    title: "Two Kids, One Chaos, All Love",
    body:
      "Meri Radhika,\n\nWe've talked about it before — our home, and someday, two kids running around in " +
      "it. I don't know what they'll look like or what they'll be like, but I already know I want to " +
      "build that chaos with you.\n\nAlready excited for a future that doesn't exist yet.",
    photo: "assets/images/day-8.jpg",
    voice: "assets/music/voice-day-8.mp3",
    song: "No song needed",
    memory: "The future we've quietly already started planning together.",
    surprise: "Two kids, one home, one you. That's the whole plan. 👶🏡",
  },
  7: {
    title: "One Week Left",
    body:
      "Radhika,\n\nOne week until your birthday. I can feel myself getting more excited with every letter " +
      "I write. All these little placeholders are about to become one very real celebration, for you.\n\n" +
      "Seven days, meri jaan. Just seven.",
    photo: "assets/images/day-7.jpg",
    voice: "assets/music/voice-day-7.mp3",
    song: "No song needed",
    memory: "Every day of this countdown, getting me closer to celebrating you.",
    surprise: "One week. I've been planning this for longer than you know. 🎈",
  },
  6: {
    title: "Thank You For Waiting",
    body:
      "Meri jaan,\n\nThank you for every day you waited through this distance without complaint, for " +
      "every call you picked up even when you were tired, for choosing this — choosing us — again and " +
      "again.\n\nI see all of it. I appreciate all of it.",
    photo: "assets/images/day-6.jpg",
    voice: "assets/music/voice-day-6.mp3",
    song: "No song needed",
    memory: "Every single day you chose 'us' without me even having to ask.",
    surprise: "You've never once made me feel like the distance was a burden. Thank you. 🤍",
  },
  5: {
    title: "Everything I Love About You",
    body:
      "Radhika,\n\nYour patience. Your honesty. The way you try, even when it's hard. The way you laugh, " +
      "the way you care, the way you make an ordinary Tuesday feel special just by texting me first. " +
      "There's a lot to love — I'm only scratching the surface here.\n\nLoving all of you, always.",
    photo: "assets/images/day-5.jpg",
    voice: "assets/music/voice-day-5.mp3",
    song: "No song needed",
    memory: "Every quality about you I quietly fell for, one by one.",
    surprise: "Check the '100 Reasons' page — this is just the beginning of the list. ❤️",
  },
  4: {
    title: "Five Letters Left",
    body:
      "Meri Radhika,\n\nOnly a handful of days left now. I keep re-reading these letters as I write them, " +
      "and honestly, none of them feel like enough. But I hope you feel, in every single one, how much " +
      "you're loved.\n\nAlmost there.",
    photo: "assets/images/day-4.jpg",
    voice: "assets/music/voice-day-4.mp3",
    song: "No song needed",
    memory: "This whole countdown — every letter written just for you.",
    surprise: "28 letters, and I'd happily write 28 more. 📝",
  },
  3: {
    title: "So Close Now",
    body:
      "Radhika,\n\nThree days. I can practically feel the excitement building on my end — I hope you can " +
      "feel it from all the way over there too. This has been two years and a hundred small moments in " +
      "the making.\n\nSo close, meri jaan.",
    photo: "assets/images/day-3.jpg",
    voice: "assets/music/voice-day-3.mp3",
    song: "No song needed",
    memory: "Every single moment that led us here, to this countdown.",
    surprise: "Three days left. I hope you're as excited as I am. 🎉",
  },
  2: {
    title: "Almost Your Day",
    body:
      "Meri jaan,\n\nTwo days left. I've been thinking about how to say everything I feel, and I don't " +
      "think I ever will find the exact right words — but I'll keep trying, letter by letter, until the " +
      "day itself.\n\nAlmost there. Almost your day.",
    photo: "assets/images/day-2.jpg",
    voice: "assets/music/voice-day-2.mp3",
    song: "No song needed",
    memory: "The anticipation of your birthday, building letter by letter.",
    surprise: "Tomorrow's letter is the last one before the big day. 🎁",
  },
  1: {
    title: "The Night Before",
    body:
      "Radhika,\n\nThe night before your birthday. Tomorrow, this whole website changes — the countdown " +
      "ends and the celebration begins. I've been looking forward to this for longer than these 28 days. " +
      "Sleep well, meri jaan — tomorrow is all yours.\n\nSee you on the other side of midnight.",
    photo: "assets/images/day-1.jpg",
    voice: "assets/music/voice-day-1.mp3",
    song: "No song needed",
    memory: "Every one of these 28 days, leading up to tomorrow.",
    surprise: "Tomorrow, open this website again. Everything changes. 🌙",
  },
};

const BIRTHDAY_LETTER = {
  title: "For The Day Itself",
  body:
    "Meri sabse pyari Radhika,\n\nHappy Birthday, meri jaan. ❤️\n\nToday, the countdown finally ends — " +
    "and everything I've been building toward for 28 days finally gets to be said properly: I am so " +
    "unbelievably lucky to love you.\n\nFrom a random Telegram group, to 18 April 2024 when we made it " +
    "official, to 17 April 2026 when I finally got to hug you after two long years — every part of this " +
    "story is my favourite thing I've ever been part of. You told me once that meeting you is your " +
    "favourite thing too, and honestly, mine as well. Nothing has ever come close.\n\nI know distance " +
    "has been the hardest part of loving you, but you've never once let it shake us. You've shown up, " +
    "you've waited, you've trusted this — trusted me — and I don't take that lightly for a single day.\n\n" +
    "So today, on your birthday, here's everything I'm wishing for you: endless laughter that reaches " +
    "your eyes, every dream you're chasing coming true faster than you expect, health, peace, and a " +
    "heart that always feels as loved as you make me feel. May this year bring you closer to everything " +
    "you deserve — and closer to me too.\n\nI can't wait for Amritsar, for the Golden Temple, for our " +
    "first trip together. I can't wait for the home we keep imagining, and yes — for the two kids we've " +
    "already started planning for, long before either of us is ready to admit how much we've thought " +
    "about it. I can't wait for every 'someday' we've talked about to become 'today'.\n\nHappy birthday, " +
    "my love. Here's to another year of us, and to every year after this one.\n\nForever and always " +
    "yours.",
  photo: "assets/images/birthday.jpg",
  voice: "assets/music/voice-birthday.mp3",
  song: "No song needed — you are the celebration",
  memory: "17 April 2026 — the day two years of distance finally disappeared, even if just for a while.",
  surprise: "Happy birthday. The real surprise is waiting for you — this website was just me counting down to it. 🎁",
};

/**
 * GALLERY
 * Just list file paths. Drop your photos into assets/images/ with these
 * exact names (or edit the names below to match your files) and they'll
 * appear automatically. Missing files show a soft placeholder tile.
 */
const GALLERY = [
  { src: "assets/images/gallery-1.jpg", caption: "My favourite kind of beautiful" },
  { src: "assets/images/gallery-2.jpg", caption: "That Sunday smile I love" },
  { src: "assets/images/gallery-3.jpg", caption: "Just you, being you" },
  { src: "assets/images/gallery-4.jpg", caption: "The look I could stare at for hours" },
  { src: "assets/images/gallery-5.jpg", caption: "One of my favourite pictures of you" },
  { src: "assets/images/gallery-6.jpg", caption: "A moment I'm glad got captured" },
  { src: "assets/images/gallery-7.jpg", caption: "Effortlessly pretty, as always" },
  { src: "assets/images/gallery-8.jpg", caption: "That evening you looked stunning" },
  { src: "assets/images/gallery-9.jpg", caption: "Us, even through a blurry photo" },
];

/**
 * MUSIC PLAYLIST
 * Drop mp3 files into assets/music/ and list them here.
 */
const PLAYLIST = [
  { title: "Our Song", src: "assets/music/track-1.mp3" },
];

/**
 * TIMELINE
 */
const TIMELINE = [
  { label: "First Chat", title: "A Telegram Group, of All Places", text: "Two strangers in a random Telegram group, no idea that this would turn into the best thing in either of our lives." },
  { label: "Us, Officially", title: "18 April 2024", text: "The day we decided to make it real — distance, time, everything, and we still said yes to each other." },
  { label: "First Meet", title: "17 April 2026", text: "After two years of screens and calls, we finally stood in front of each other for the first time. Worth every single day of waiting." },
  { label: "Favourite Memory", title: "Meeting You, In Person", text: "Out of everything, meeting you in person is still the favourite memory — no contest." },
  { label: "Future Plans", title: "Amritsar, A Home, A Family", text: "Our first trip together to the Golden Temple in Amritsar, a home of our own someday, and two kids to fill it with chaos and love." },
  { label: "Birthday", title: "29 July 2026", text: "The day this whole website was built for." },
];

/**
 * 100 REASONS
 * Add or edit freely — the counter adjusts automatically to however many
 * entries are in this array (aim for 100).
 */
const REASONS = [
  "I love you because you make my world brighter.",
  "I love you because your smile is my favorite sight.",
  "I love you because you make me feel complete.",
  "I love you because you understand me without words.",
  "I love you because you bring peace to my heart.",
  "I love you because you're my safe place.",
  "I love you because you believe in me.",
  "I love you because your happiness means everything to me.",
  "I love you because you're beautifully kind.",
  "I love you because you make ordinary moments special.",
  "I love you because you're my best friend.",
  "I love you because your laugh is contagious.",
  "I love you because you're always on my mind.",
  "I love you because you inspire me to be better.",
  "I love you because you're genuine.",
  "I love you because your heart is pure.",
  "I love you because you're always there for me.",
  "I love you because you make me smile effortlessly.",
  "I love you because you accept me as I am.",
  "I love you because you're one of a kind.",
  "I love you because your voice comforts me.",
  "I love you because you're incredibly caring.",
  "I love you because you never stop amazing me.",
  "I love you because you make life exciting.",
  "I love you because you're my favorite person.",
  "I love you because every day with you feels special.",
  "I love you because you're beautifully imperfect.",
  "I love you because your hugs feel like home.",
  "I love you because you always encourage me.",
  "I love you because you make my heart race.",
  "I love you because you're thoughtful.",
  "I love you because your eyes tell beautiful stories.",
  "I love you because you're my biggest blessing.",
  "I love you because you make me laugh.",
  "I love you because you're incredibly strong.",
  "I love you because you care about little things.",
  "I love you because you're patient with me.",
  "I love you because you're always honest.",
  "I love you because you make every memory unforgettable.",
  "I love you because you're my comfort person.",
  "I love you because you make bad days better.",
  "I love you because you're wonderfully unique.",
  "I love you because you're full of love.",
  "I love you because you never give up.",
  "I love you because you're my dream come true.",
  "I love you because your kindness inspires me.",
  "I love you because you're beautiful inside and out.",
  "I love you because you respect me.",
  "I love you because you're my favorite hello.",
  "I love you because you're my hardest goodbye.",
  "I love you because you make me feel loved.",
  "I love you because you trust me.",
  "I love you because you make me feel important.",
  "I love you because you make me believe in love.",
  "I love you because you're always worth waiting for.",
  "I love you because your happiness is my happiness.",
  "I love you because you complete my soul.",
  "I love you because you're always beautiful to me.",
  "I love you because you're my forever choice.",
  "I love you because you bring out the best in me.",
  "I love you because you make me feel lucky.",
  "I love you because you're my greatest adventure.",
  "I love you because you're wonderfully supportive.",
  "I love you because every conversation with you matters.",
  "I love you because you're unforgettable.",
  "I love you because you make my heart feel at home.",
  "I love you because you always surprise me.",
  "I love you because you're my peace.",
  "I love you because you're my favorite chapter.",
  "I love you because you're everything I prayed for.",
  "I love you because you're incredibly lovable.",
  "I love you because your love feels magical.",
  "I love you because you make every day meaningful.",
  "I love you because you never stop caring.",
  "I love you because you're always worth fighting for.",
  "I love you because you're my sunshine.",
  "I love you because you make my heart smile.",
  "I love you because you're my happy place.",
  "I love you because you understand my silence.",
  "I love you because you're my sweetest habit.",
  "I love you because you're my biggest motivation.",
  "I love you because you make me feel alive.",
  "I love you because you're incredibly precious.",
  "I love you because you're my favorite blessing.",
  "I love you because you're always in my heart.",
  "I love you because you make love feel easy.",
  "I love you because you make every dream sweeter.",
  "I love you because you inspire my future.",
  "I love you because you're the reason I smile.",
  "I love you because you make every heartbeat meaningful.",
  "I love you because you're my forever favorite.",
  "I love you because you're worth every moment.",
  "I love you because you're simply amazing.",
  "I love you because you're my once-in-a-lifetime person.",
  "I love you because you're my greatest happiness.",
  "I love you because loving you feels natural.",
  "I love you because you're my forever and always.",
  "I love you because every day I choose you again.",
  "I love you because you're Radhika.",
  "I love you because no 100 reasons could ever explain how much I truly love you. ❤️",
];

/**
 * FUTURE DREAMS
 */
const DREAMS = [
  { icon: "✈️", title: "Travel", text: "Our first trip together — Amritsar, and finally seeing the Golden Temple side by side." },
  { icon: "💍", title: "Marriage", text: "Every letter, every call, every 'someday' has been building toward forever with you." },
  { icon: "🏡", title: "Dream Home", text: "A home that's just ours — the place where the distance finally, permanently ends." },
  { icon: "👶", title: "Kids", text: "Two kids, one loud and happy home, and you as their favourite person, just like you're mine." },
];

/**
 * NAZAR NA LAGE — BLESSINGS
 * Shown randomly when "Protect My Smile" is tapped, and one is picked
 * automatically each day for the "Today's Blessing" line. Add or edit freely.
 */
const BLESSINGS = [
  "Stay Happy Always",
  "May Every Dream Come True",
  "You Are Protected",
  "Smile Forever",
  "Nothing Can Harm Your Beautiful Heart",
  "Keep Shining",
  "Stay Safe Always",
  "Happiness Is Coming",
  "Your Light Can Never Be Dimmed",
  "Good Things Are Finding Their Way To You",
  "You Are Loved More Than You Know",
  "Peace Will Always Find You",
  "May Your Heart Stay Light",
  "You Are Someone's Whole World",
  "Every Storm In Your Life Will Pass",
  "Your Kindness Will Always Come Back To You",
  "You Are Exactly Where You're Meant To Be",
  "May Only Good Things Reach You",
  "You Are Stronger Than Any Bad Day",
  "Your Smile Is Protected Today",
  "May Worry Never Stay Long In Your Mind",
  "You Deserve Every Good Thing Coming Your Way",
  "Your Prayers Are Being Answered, Slowly But Surely",
  "You Are Safe. You Are Loved. You Are Enough",
  "May Your Days Be Softer From Here On",
  "Nothing Negative Can Touch This Heart",
  "You Are Someone's Favourite Person",
  "May Your Path Be Lit With Small Miracles",
  "Your Happiness Is Watched Over, Always",
  "You Are Wrapped In Love, Even From Far Away",
];

/* ============================================================================
   2. APP LOGIC — the engine. Safe to leave alone.
   ============================================================================ */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ---------------------------------------------------------------------------
   AMBIENT BACKGROUND: stars + floating hearts + soft particles on a canvas
   --------------------------------------------------------------------------- */
(function ambientBackground() {
  const canvas = $("#bg-canvas");
  const ctx = canvas.getContext("2d");
  let w, h, stars = [], hearts = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  function makeStars(count) {
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.4 + 0.3,
      tw: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.015 + 0.005,
    }));
  }
  function makeHearts(count) {
    hearts = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: h + Math.random() * h,
      size: Math.random() * 10 + 6,
      speed: Math.random() * 0.35 + 0.15,
      drift: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.25 + 0.08,
    }));
  }
  makeStars(140);
  makeHearts(14);

  function drawHeart(x, y, size, opacity) {
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.fillStyle = "#e8b4b8";
    ctx.translate(x, y);
    ctx.beginPath();
    const s = size / 16;
    ctx.moveTo(0, 4 * s);
    ctx.bezierCurveTo(-8 * s, -4 * s, -16 * s, 6 * s, 0, 16 * s);
    ctx.bezierCurveTo(16 * s, 6 * s, 8 * s, -4 * s, 0, 4 * s);
    ctx.fill();
    ctx.restore();
  }

  function frame() {
    ctx.clearRect(0, 0, w, h);
    // stars
    for (const s of stars) {
      s.tw += s.speed;
      const alpha = 0.35 + Math.sin(s.tw) * 0.35;
      ctx.beginPath();
      ctx.fillStyle = `rgba(245,239,230,${Math.max(0, alpha)})`;
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    // floating hearts
    for (const hh of hearts) {
      hh.y -= hh.speed;
      hh.x += hh.drift;
      if (hh.y < -20) { hh.y = h + 20; hh.x = Math.random() * w; }
      drawHeart(hh.x, hh.y, hh.size, hh.opacity);
    }
    requestAnimationFrame(frame);
  }
  frame();
})();

/* ---------------------------------------------------------------------------
   CUSTOM CURSOR
   --------------------------------------------------------------------------- */
(function customCursor() {
  const dot = $("#cursorDot"), glow = $("#cursorGlow");
  if (!dot || !glow) return;
  let mx = 0, my = 0, gx = 0, gy = 0;
  window.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + "px"; dot.style.top = my + "px";
  });
  (function loop() {
    gx += (mx - gx) * 0.16; gy += (my - gy) * 0.16;
    glow.style.left = gx + "px"; glow.style.top = gy + "px";
    requestAnimationFrame(loop);
  })();
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("a,button,.day-card.unlocked,.gallery-item,input")) {
      glow.classList.add("hovering");
    }
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest("a,button,.day-card.unlocked,.gallery-item,input")) {
      glow.classList.remove("hovering");
    }
  });
})();

/* ---------------------------------------------------------------------------
   LOGIN SCREEN
   --------------------------------------------------------------------------- */
(function login() {
  const screen = $("#loginScreen");
  const form = $("#loginForm");
  const input = $("#passwordInput");
  const hint = $("#loginHint");
  const toggle = $("#togglePassword");
  const particlesWrap = $("#loginParticles");

  // decorative floating particles on the login screen
  for (let i = 0; i < 26; i++) {
    const s = document.createElement("span");
    s.style.left = Math.random() * 100 + "%";
    s.style.setProperty("--drift", (Math.random() * 60 - 30) + "px");
    s.style.animationDuration = 6 + Math.random() * 8 + "s";
    s.style.animationDelay = Math.random() * 6 + "s";
    particlesWrap.appendChild(s);
  }

  toggle.addEventListener("click", () => {
    const showing = input.type === "text";
    input.type = showing ? "password" : "text";
    toggle.textContent = showing ? "👁" : "🙈";
  });

  // already unlocked this session? skip straight past login.
  if (sessionStorage.getItem("radhika-unlocked") === "true") {
    screen.hidden = true;
    startLoading();
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value === CONFIG.password) {
      sessionStorage.setItem("radhika-unlocked", "true");
      hint.textContent = "";
      screen.classList.add("fade-out");
      setTimeout(() => { screen.hidden = true; startLoading(); }, 700);
    } else {
      hint.textContent = "That's not quite it — try again 💕";
      screen.classList.remove("shake"); void screen.offsetWidth; screen.classList.add("shake");
      input.value = "";
    }
  });
})();

/* ---------------------------------------------------------------------------
   LOADING SCREEN
   --------------------------------------------------------------------------- */
function startLoading() {
  const screen = $("#loadingScreen");
  const fill = $("#loadingFill");
  screen.hidden = false;
  let pct = 0;
  const timer = setInterval(() => {
    pct += Math.random() * 18 + 6;
    if (pct >= 100) {
      pct = 100;
      fill.style.width = "100%";
      clearInterval(timer);
      setTimeout(() => {
        screen.classList.add("fade-out");
        setTimeout(() => { screen.hidden = true; boot(); }, 700);
      }, 350);
    } else {
      fill.style.width = pct + "%";
    }
  }, 220);
}

/* ---------------------------------------------------------------------------
   APP BOOT — runs once, after login + loading
   --------------------------------------------------------------------------- */
function boot() {
  const app = $("#app");
  app.hidden = false;

  initNav();
  initHeroTyping();
  initRevealOnScroll();
  initCountdown();
  initDaysGrid();
  initLetterModal();
  initGallery();
  initTimeline();
  initReasons();
  initDreams();
  initSecret();
  initNazarPage();
  initPunishPage();
  initUniversePage();
  initMusicPlayer();

  showView(location.hash.replace("#", "") || "home");
}

/* ---------------------------------------------------------------------------
   NAVIGATION / VIEW ROUTING
   --------------------------------------------------------------------------- */
function showView(name) {
  const valid = ["home", "days", "gallery", "timeline", "reasons", "dreams", "nazar", "punish", "universe", "secret"];
  if (!valid.includes(name)) name = "home";
  $$(".view").forEach((v) => (v.hidden = v.dataset.view !== name));
  $$(".nav-links a").forEach((a) => a.classList.toggle("active", a.dataset.view === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
  $$(".nav-links").forEach((n) => n.classList.remove("open"));

  // These two pages are experiences with a beginning — start fresh every visit.
  if (name === "punish" && typeof resetPunishFlow === "function") resetPunishFlow();
  if (name === "universe" && typeof resetUniverseFlow === "function") resetUniverseFlow();
}

function initNav() {
  // IMPORTANT: scope this to real navigation elements only. Every <section
  // data-view="..."> view container also carries a data-view attribute (used
  // by showView() to know which one to hide/show) — matching a bare
  // "[data-view]" selector here would attach a click listener to the whole
  // section too, and since clicks bubble, tapping ANY button inside a view
  // (e.g. "Punish Me", "Begin The Journey") would re-trigger showView() on
  // that same page and reset it back to its intro state.
  $$("nav [data-view], [data-view-link]").forEach((el) => {
    el.addEventListener("click", (e) => {
      const target = el.dataset.view || el.dataset.viewLink;
      if (!target) return;
      e.preventDefault();
      history.replaceState(null, "", "#" + target);
      showView(target);
    });
  });
  $("#navBurger").addEventListener("click", () => {
    $(".nav-links").classList.toggle("open");
  });
  window.addEventListener("hashchange", () => showView(location.hash.replace("#", "")));
}

/* ---------------------------------------------------------------------------
   HERO TYPING ANIMATION
   --------------------------------------------------------------------------- */
function initHeroTyping() {
  const target = $("#typeTarget");
  const phrases = ["For Radhika, with all of me.", "One letter a day, until your birthday."];
  let p = 0, i = 0, deleting = false;

  function tick() {
    const current = phrases[p];
    target.textContent = deleting ? current.slice(0, i--) : current.slice(0, i++);
    let delay = deleting ? 35 : 55;
    if (!deleting && i === current.length + 1) { delay = 1800; deleting = true; }
    if (deleting && i === 0) { deleting = false; p = (p + 1) % phrases.length; delay = 400; }
    setTimeout(tick, delay);
  }
  tick();
}

/* ---------------------------------------------------------------------------
   REVEAL ON SCROLL
   --------------------------------------------------------------------------- */
function initRevealOnScroll() {
  const items = $$(".reveal");
  const obs = new IntersectionObserver(
    (entries) => entries.forEach((en) => en.isIntersecting && en.target.classList.add("in")),
    { threshold: 0.2 }
  );
  items.forEach((el) => obs.observe(el));
}

/* ---------------------------------------------------------------------------
   COUNTDOWN + BIRTHDAY MODE
   --------------------------------------------------------------------------- */
function initCountdown() {
  function tick() {
    const now = new Date();
    const diff = CONFIG.birthday - now;

    if (diff <= 0) {
      enterBirthdayMode();
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    $("#cdDays").textContent = String(days).padStart(2, "0");
    $("#cdHours").textContent = String(hours).padStart(2, "0");
    $("#cdMins").textContent = String(mins).padStart(2, "0");
    $("#cdSecs").textContent = String(secs).padStart(2, "0");
    $("#countdownCaption").textContent = `${days} DAY${days === 1 ? "" : "S"} TO GO`;
  }
  tick();
  setInterval(tick, 1000);
}

let birthdayModeActive = false;
function enterBirthdayMode() {
  if (birthdayModeActive) return;
  birthdayModeActive = true;
  $("#countdown").style.display = "none";
  $("#countdownCaption").textContent = "TODAY IS THE DAY";
  const mode = $("#birthdayMode");
  mode.hidden = false;
  runConfetti();

  $("#finalLetterBtn").addEventListener("click", () => openLetter("birthday", BIRTHDAY_LETTER));
  $("#giftBtn").addEventListener("click", () => {
    alert("🎁 Happy Birthday, meri jaan. Your real gift is on its way to you — this button was just my way of making you smile first. 🤍");
  });
}

function runConfetti() {
  const canvas = $("#confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
  window.addEventListener("resize", resize);
  resize();

  const colors = ["#e8b4b8", "#d4af7a", "#f5efe6", "#8892b0"];
  const pieces = Array.from({ length: 160 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    size: Math.random() * 6 + 4,
    speed: Math.random() * 2 + 1.5,
    drift: (Math.random() - 0.5) * 2,
    rot: Math.random() * 360,
    rotSpeed: (Math.random() - 0.5) * 6,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach((p) => {
      p.y += p.speed; p.x += p.drift; p.rot += p.rotSpeed;
      if (p.y > canvas.height) { p.y = -10; p.x = Math.random() * canvas.width; }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.5);
      ctx.restore();
    });
    requestAnimationFrame(frame);
  }
  frame();

  // occasional firework bursts
  setInterval(() => spawnFirework(ctx, canvas), 1800);
}

function spawnFirework(ctx, canvas) {
  const cx = Math.random() * canvas.width * 0.7 + canvas.width * 0.15;
  const cy = Math.random() * canvas.height * 0.4 + canvas.height * 0.1;
  const particles = Array.from({ length: 36 }, (_, i) => {
    const angle = (i / 36) * Math.PI * 2;
    return { x: cx, y: cy, vx: Math.cos(angle) * (Math.random() * 3 + 2), vy: Math.sin(angle) * (Math.random() * 3 + 2), life: 1 };
  });
  const colors = ["#e8b4b8", "#d4af7a", "#f5efe6"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  let frames = 0;
  const id = setInterval(() => {
    frames++;
    particles.forEach((p) => { p.x += p.vx; p.y += p.vy; p.vy += 0.03; p.life -= 0.02; });
    ctx.save();
    particles.forEach((p) => {
      if (p.life <= 0) return;
      ctx.globalAlpha = Math.max(p.life, 0);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();
    if (frames > 45) clearInterval(id);
  }, 30);
}

/* ---------------------------------------------------------------------------
   DAILY UNLOCK SYSTEM
   --------------------------------------------------------------------------- */
function unlockDateFor(day) {
  // Day N unlocks exactly N days before the birthday.
  const d = new Date(CONFIG.birthday);
  d.setDate(d.getDate() - day);
  return d;
}
function isUnlocked(day) {
  const now = new Date();
  const unlockDate = unlockDateFor(day);
  return now >= unlockDate;
}

function initDaysGrid() {
  const grid = $("#daysGrid");
  const now = new Date();
  const frag = document.createDocumentFragment();

  for (let day = CONFIG.totalDays; day >= 1; day--) {
    const unlocked = isUnlocked(day);
    const unlockDate = unlockDateFor(day);
    const isToday = now.toDateString() === unlockDate.toDateString();

    const card = document.createElement("div");
    card.className = "day-card " + (unlocked ? "unlocked" : "locked") + (isToday ? " today" : "");
    card.dataset.day = day;

    if (unlocked) {
      card.innerHTML = `
        <span class="day-num">Day ${day}</span>
        <span class="day-label">${isToday ? "Opens today" : "Tap to open"}</span>`;
      card.addEventListener("click", () => openLetter(day, LETTERS[day]));
    } else {
      card.innerHTML = `
        <span class="lock-icon">🔒</span>
        <span class="day-num">Day ${day}</span>
        <span class="unlock-note">Unlocks ${formatUnlockNote(unlockDate)}</span>`;
    }
    frag.appendChild(card);
  }

  // Birthday card at the end of the row
  const bUnlocked = new Date() >= CONFIG.birthday;
  const bCard = document.createElement("div");
  bCard.className = "day-card birthday-card " + (bUnlocked ? "unlocked" : "locked");
  bCard.innerHTML = bUnlocked
    ? `<span class="day-num">🎂</span><span class="day-label">Happy Birthday</span>`
    : `<span class="lock-icon">🔒</span><span class="day-num">🎂</span><span class="unlock-note">Unlocks 29 July 2026</span>`;
  if (bUnlocked) bCard.addEventListener("click", () => openLetter("birthday", BIRTHDAY_LETTER));
  frag.appendChild(bCard);

  grid.appendChild(frag);
  drawConstellation();
  window.addEventListener("resize", debounce(drawConstellation, 200));
}

function formatUnlockNote(date) {
  const now = new Date();
  const diffDays = Math.round((date - now) / 86400000);
  if (diffDays <= 1) return "tomorrow";
  return `in ${diffDays} days`;
}

function debounce(fn, ms) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

/* faint constellation lines connecting the unlocked day cards, for the
   "night sky love story" motif */
function drawConstellation() {
  const svg = $("#constellationLines");
  const wrap = $(".constellation-wrap");
  if (!svg || !wrap) return;
  const rect = wrap.getBoundingClientRect();
  svg.setAttribute("width", rect.width);
  svg.setAttribute("height", rect.height);
  svg.innerHTML = "";

  const unlockedCards = $$(".day-card.unlocked", wrap);
  const points = unlockedCards.map((c) => {
    const r = c.getBoundingClientRect();
    return { x: r.left - rect.left + r.width / 2, y: r.top - rect.top + r.height / 2 };
  });

  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i], b = points[i + 1];
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", a.x); line.setAttribute("y1", a.y);
    line.setAttribute("x2", b.x); line.setAttribute("y2", b.y);
    line.setAttribute("stroke", "rgba(232,180,184,0.18)");
    line.setAttribute("stroke-width", "1");
    line.setAttribute("stroke-dasharray", "3,5");
    svg.appendChild(line);
  }
}

/* ---------------------------------------------------------------------------
   LETTER MODAL
   --------------------------------------------------------------------------- */
let currentVoiceAudio = null;

function initLetterModal() {
  $$("[data-close]").forEach((el) => el.addEventListener("click", closeAllModals));
}

function openLetter(day, letter) {
  $("#letterEyebrow").textContent = day === "birthday" ? "The Birthday Letter" : `Day ${day}`;
  $("#letterTitle").textContent = letter.title;
  $("#letterBody").textContent = letter.body;
  $("#songName").textContent = letter.song;
  $("#memoryText").textContent = letter.memory;

  const photoEl = $("#letterPhoto");
  photoEl.style.backgroundImage = "";
  photoEl.textContent = "Photo placeholder — add " + letter.photo;
  const img = new Image();
  img.onload = () => { photoEl.style.backgroundImage = `url('${letter.photo}')`; photoEl.textContent = ""; };
  img.src = letter.photo;

  const surpriseBtn = $("#surpriseBtn");
  const surpriseText = $("#surpriseText");
  surpriseText.hidden = true;
  surpriseBtn.hidden = false;
  const newSurpriseBtn = surpriseBtn.cloneNode(true);
  surpriseBtn.replaceWith(newSurpriseBtn);
  newSurpriseBtn.addEventListener("click", () => {
    surpriseText.textContent = letter.surprise;
    surpriseText.hidden = false;
    newSurpriseBtn.hidden = true;
  });

  const voiceBtn = $("#voiceNoteBtn");
  const newVoiceBtn = voiceBtn.cloneNode(true);
  voiceBtn.replaceWith(newVoiceBtn);
  newVoiceBtn.textContent = "🎙 Play Voice Note";
  newVoiceBtn.classList.remove("playing");
  newVoiceBtn.addEventListener("click", () => {
    if (currentVoiceAudio) { currentVoiceAudio.pause(); currentVoiceAudio = null; }
    const audio = new Audio(letter.voice);
    currentVoiceAudio = audio;
    audio.play().then(() => {
      newVoiceBtn.textContent = "⏸ Playing…";
      newVoiceBtn.classList.add("playing");
    }).catch(() => {
      newVoiceBtn.textContent = "🎙 Add a voice note file to enable this";
    });
    audio.addEventListener("ended", () => {
      newVoiceBtn.textContent = "🎙 Play Voice Note";
      newVoiceBtn.classList.remove("playing");
    });
  });

  $("#letterModal").hidden = false;
}

function closeAllModals() {
  $("#letterModal").hidden = true;
  $("#lightbox").hidden = true;
  if (currentVoiceAudio) { currentVoiceAudio.pause(); currentVoiceAudio = null; }
}

/* ---------------------------------------------------------------------------
   GALLERY + LIGHTBOX
   --------------------------------------------------------------------------- */
let lightboxIndex = 0;

function initGallery() {
  const grid = $("#galleryGrid");
  GALLERY.forEach((item, idx) => {
    const el = document.createElement("div");
    el.className = "gallery-item";
    el.innerHTML = `<div class="gi-fallback">🤍 add<br>${item.src.split("/").pop()}</div>
      <img alt="${item.caption}" hidden>
      <div class="gi-caption">${item.caption}</div>`;
    const img = $("img", el);
    const testImg = new Image();
    testImg.onload = () => { img.src = item.src; img.hidden = false; $(".gi-fallback", el).hidden = true; };
    testImg.src = item.src;
    el.addEventListener("click", () => openLightbox(idx));
    grid.appendChild(el);
  });

  $("#lbPrev").addEventListener("click", () => openLightbox((lightboxIndex - 1 + GALLERY.length) % GALLERY.length));
  $("#lbNext").addEventListener("click", () => openLightbox((lightboxIndex + 1) % GALLERY.length));
}

function openLightbox(idx) {
  lightboxIndex = idx;
  $("#lightboxImg").src = GALLERY[idx].src;
  $("#lightboxImg").alt = GALLERY[idx].caption;
  $("#lightbox").hidden = false;
}

/* ---------------------------------------------------------------------------
   TIMELINE
   --------------------------------------------------------------------------- */
function initTimeline() {
  const list = $("#timelineList");
  TIMELINE.forEach((t) => {
    const el = document.createElement("div");
    el.className = "timeline-item";
    el.innerHTML = `<p class="eyebrow">${t.label}</p><h3>${t.title}</h3><p>${t.text}</p>`;
    list.appendChild(el);
  });
}

/* ---------------------------------------------------------------------------
   100 REASONS
   --------------------------------------------------------------------------- */
function initReasons() {
  let i = 0;
  function render() {
    $("#reasonNumber").textContent = String(i + 1).padStart(2, "0");
    $("#reasonIndex").textContent = i + 1;
    $("#reasonText").textContent = REASONS[i];
  }
  render();
  $("#nextReasonBtn").addEventListener("click", () => {
    i = (i + 1) % REASONS.length;
    render();
  });
}

/* ---------------------------------------------------------------------------
   FUTURE DREAMS
   --------------------------------------------------------------------------- */
function initDreams() {
  const grid = $("#dreamsGrid");
  DREAMS.forEach((d) => {
    const el = document.createElement("div");
    el.className = "dream-card";
    el.innerHTML = `<span class="dream-icon">${d.icon}</span><h3>${d.title}</h3><p>${d.text}</p>`;
    grid.appendChild(el);
  });
}

/* ---------------------------------------------------------------------------
   SECRET EASTER EGG
   --------------------------------------------------------------------------- */
function initSecret() {
  let clicks = 0, resetTimer;
  $("#secretHeart").addEventListener("click", () => {
    clicks++;
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => (clicks = 0), 2500);
    if (clicks >= 5) {
      clicks = 0;
      history.replaceState(null, "", "#secret");
      showView("secret");
    }
  });
  $("#closeSecretBtn").addEventListener("click", () => {
    history.replaceState(null, "", "#home");
    showView("home");
  });
}

/* ---------------------------------------------------------------------------
   NAZAR NA LAGE — protection page
   --------------------------------------------------------------------------- */
function initNazarPage() {
  // "Today's Blessing" — same for everyone all day, changes automatically
  // at midnight because it's derived from the real calendar date.
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000
  );
  $("#nazarDailyText").textContent = "🧿 " + BLESSINGS[dayOfYear % BLESSINGS.length];

  // "Protect My Smile" button: pulse + floating hearts/sparkles + a random blessing.
  const btn = $("#protectSmileBtn");
  const blessingText = $("#nazarBlessingText");
  const stageCanvas = $("#nazarFxCanvas");

  btn.addEventListener("click", () => {
    btn.classList.remove("pulsing"); void btn.offsetWidth; btn.classList.add("pulsing");
    if (navigator.vibrate) navigator.vibrate([40, 30, 40]);

    let next = BLESSINGS[Math.floor(Math.random() * BLESSINGS.length)];
    // avoid repeating the exact same blessing twice in a row when possible
    if (BLESSINGS.length > 1 && next === blessingText.textContent.replace("✨ ", "")) {
      next = BLESSINGS[(BLESSINGS.indexOf(next) + 1) % BLESSINGS.length];
    }
    blessingText.classList.remove("show");
    void blessingText.offsetWidth;
    blessingText.textContent = "✨ " + next;
    blessingText.classList.add("show");

    burstNazarParticles(stageCanvas, btn);
  });

  // Evil eye icon: tap 7 times to reveal the hidden full-screen blessing.
  let eyeTaps = 0, eyeResetTimer;
  const eyeIcon = $("#nazarEyeIcon");
  const overlay = $("#nazarSecretOverlay");
  const overlayCanvas = $("#nazarSecretCanvas");
  let overlayFxStop = null;

  eyeIcon.addEventListener("click", () => {
    eyeTaps++;
    clearTimeout(eyeResetTimer);
    eyeResetTimer = setTimeout(() => (eyeTaps = 0), 3000);
    if (eyeTaps >= 7) {
      eyeTaps = 0;
      overlay.hidden = false;
      overlayFxStop = runNazarFloatingHearts(overlayCanvas);
    }
  });

  $("#closeNazarSecretBtn").addEventListener("click", () => {
    overlay.hidden = true;
    if (overlayFxStop) overlayFxStop();
  });
}

/* Short burst of floating hearts + sparkles + a soft blue pulse ring,
   centered on the button that was tapped. */
function burstNazarParticles(canvas, anchorEl) {
  if (!canvas) return;
  const parent = canvas.parentElement;
  const rect = parent.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  const ctx = canvas.getContext("2d");
  const anchorRect = anchorEl.getBoundingClientRect();
  const cx = anchorRect.left - rect.left + anchorRect.width / 2;
  const cy = anchorRect.top - rect.top;

  const hearts = Array.from({ length: 14 }, () => ({
    x: cx + (Math.random() - 0.5) * 60,
    y: cy,
    size: Math.random() * 8 + 6,
    speed: Math.random() * 1.4 + 0.8,
    drift: (Math.random() - 0.5) * 1.2,
    life: 1,
    color: Math.random() > 0.5 ? "#7fb2ff" : "#e8b4b8",
  }));
  const sparkles = Array.from({ length: 18 }, () => ({
    x: cx + (Math.random() - 0.5) * 100,
    y: cy + (Math.random() - 0.5) * 40,
    r: Math.random() * 2 + 1,
    life: 1,
    fade: Math.random() * 0.02 + 0.01,
  }));

  let frame = 0;
  function tick() {
    frame++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hearts.forEach((h) => {
      h.y -= h.speed; h.x += h.drift; h.life -= 0.012;
      if (h.life <= 0) return;
      ctx.save();
      ctx.globalAlpha = Math.max(h.life, 0);
      ctx.fillStyle = h.color;
      ctx.translate(h.x, h.y);
      const s = h.size / 16;
      ctx.beginPath();
      ctx.moveTo(0, 4 * s);
      ctx.bezierCurveTo(-8 * s, -4 * s, -16 * s, 6 * s, 0, 16 * s);
      ctx.bezierCurveTo(16 * s, 6 * s, 8 * s, -4 * s, 0, 4 * s);
      ctx.fill();
      ctx.restore();
    });

    sparkles.forEach((s) => {
      s.life -= s.fade;
      if (s.life <= 0) return;
      ctx.save();
      ctx.globalAlpha = Math.max(s.life, 0);
      ctx.fillStyle = "#f5efe6";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    if (frame < 90) requestAnimationFrame(tick);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  tick();
}

/* Gentle continuous floating hearts used behind the full-screen secret blessing.
   Returns a stop() function to clean it up when the overlay closes. */
function runNazarFloatingHearts(canvas) {
  if (!canvas) return () => {};
  function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
  resize();
  window.addEventListener("resize", resize);
  const ctx = canvas.getContext("2d");
  const hearts = Array.from({ length: 30 }, () => ({
    x: Math.random() * canvas.width,
    y: canvas.height + Math.random() * canvas.height,
    size: Math.random() * 14 + 8,
    speed: Math.random() * 0.6 + 0.3,
    drift: (Math.random() - 0.5) * 0.5,
    opacity: Math.random() * 0.5 + 0.2,
  }));
  let running = true;
  function frame() {
    if (!running) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((h) => {
      h.y -= h.speed; h.x += h.drift;
      if (h.y < -20) { h.y = canvas.height + 20; h.x = Math.random() * canvas.width; }
      ctx.save();
      ctx.globalAlpha = h.opacity;
      ctx.fillStyle = "#7fb2ff";
      ctx.translate(h.x, h.y);
      const s = h.size / 16;
      ctx.beginPath();
      ctx.moveTo(0, 4 * s);
      ctx.bezierCurveTo(-8 * s, -4 * s, -16 * s, 6 * s, 0, 16 * s);
      ctx.bezierCurveTo(16 * s, 6 * s, 8 * s, -4 * s, 0, 4 * s);
      ctx.fill();
      ctx.restore();
    });
    requestAnimationFrame(frame);
  }
  frame();
  return () => { running = false; window.removeEventListener("resize", resize); };
}

/* ---------------------------------------------------------------------------
   DON'T CLICK THIS — a playful, cinematic 5-screen mini experience
   --------------------------------------------------------------------------- */

// Small reusable typewriter: types an array of lines one at a time into a
// container, waiting `linePause` ms between lines (or a custom pause from
// `extraPauses[index]` for moments that need a longer, dramatic beat).
function punishTypeLines(container, lines, { charDelay = 26, linePause = 650, extraPauses = {}, onDone } = {}) {
  container.innerHTML = "";
  let i = 0;
  let cancelled = false;
  function nextLine() {
    if (cancelled) return;
    if (i >= lines.length) { if (onDone) onDone(); return; }
    const p = document.createElement("p");
    p.className = "punish-type-line";
    container.appendChild(p);
    const text = lines[i];
    let c = 0;
    const timer = setInterval(() => {
      if (cancelled) { clearInterval(timer); return; }
      c++;
      p.textContent = text.slice(0, c);
      if (c >= text.length) {
        clearInterval(timer);
        const pause = extraPauses[i] ?? linePause;
        const doneIdx = i;
        i++;
        setTimeout(nextLine, pause);
      }
    }, charDelay);
  }
  nextLine();
  return () => { cancelled = true; };
}

let punishCancelFns = [];
function punishClearTimers() {
  punishCancelFns.forEach((fn) => fn && fn());
  punishCancelFns = [];
}

function punishShowScreen(n) {
  for (let i = 1; i <= 5; i++) {
    const el = $(`#punishScreen${i}`);
    if (el) el.hidden = i !== n;
  }
}

function resetPunishFlow() {
  punishClearTimers();
  const dontBtn = $("#punishDontBtn");
  if (dontBtn) { dontBtn.style.position = ""; dontBtn.style.left = ""; dontBtn.style.top = ""; }
  $("#punishEscapeNote").hidden = true;
  $("#punishButtons").hidden = true;
  $("#punishRevealStack").innerHTML = "";
  $("#punishType2").innerHTML = "";
  $("#punishType3").innerHTML = "";
  $("#punishType4").innerHTML = "";
  $("#punishContinue2").hidden = true;
  $("#punishContinue3").hidden = true;
  punishShowScreen(1);

  // "After 2 seconds... After another second... Then..." staged reveal.
  const stack = $("#punishRevealStack");
  const t1 = setTimeout(() => {
    const p = document.createElement("p");
    p.className = "punish-reveal-line";
    p.textContent = "I told you not to open this.";
    stack.appendChild(p);
    requestAnimationFrame(() => p.classList.add("in"));
  }, 2000);

  const t2 = setTimeout(() => {
    const p = document.createElement("p");
    p.className = "punish-reveal-line";
    p.textContent = "But you still did...";
    stack.appendChild(p);
    requestAnimationFrame(() => p.classList.add("in"));
  }, 3000);

  const t3 = setTimeout(() => {
    const p = document.createElement("p");
    p.className = "punish-reveal-line punish-reveal-line--punishment";
    p.innerHTML = "So now...<br>you deserve a little punishment.";
    stack.appendChild(p);
    requestAnimationFrame(() => p.classList.add("in"));
  }, 4300);

  const t4 = setTimeout(() => {
    $("#punishButtons").hidden = false;
    requestAnimationFrame(() => $("#punishButtons").classList.add("in"));
  }, 5400);

  punishCancelFns.push(
    () => clearTimeout(t1), () => clearTimeout(t2), () => clearTimeout(t3), () => clearTimeout(t4)
  );
}

function initPunishPage() {
  const dontBtn = $("#punishDontBtn");
  const yesBtn = $("#punishYesBtn");
  const escapeNote = $("#punishEscapeNote");

  function dodge() {
    dontBtn.style.position = "fixed";
    const margin = 50;
    const w = dontBtn.offsetWidth || 160, h = dontBtn.offsetHeight || 48;
    const maxX = Math.max(window.innerWidth - w - margin, margin);
    const maxY = Math.max(window.innerHeight - h - margin, margin);
    const x = margin / 2 + Math.random() * maxX;
    const y = margin / 2 + Math.random() * maxY;
    dontBtn.style.left = x + "px";
    dontBtn.style.top = y + "px";
  }

  dontBtn.addEventListener("pointerenter", dodge);
  dontBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dodge();
    escapeNote.hidden = false;
    requestAnimationFrame(() => escapeNote.classList.add("in"));
  });

  yesBtn.addEventListener("click", () => {
    punishShowScreen(2);
    const smallNote = $("#punishSmallNote");
    smallNote.classList.remove("in");
    requestAnimationFrame(() => setTimeout(() => smallNote.classList.add("in"), 100));

    setTimeout(() => {
      const lines = [
        "Since this would be our first real moment together...",
        "I wouldn't waste a single second.",
        "I'd simply stand in front of you...",
        "look into your eyes...",
        "and smile because you're finally here.",
        "I'd gently tuck your hair behind your ear...",
        "hold your hand...",
        "and let the silence say everything words never could.",
        "I'd probably tease you just enough to make you blush...",
        "just enough to make you hide your face...",
        "and then I'd smile because seeing you blush would become my favourite view.",
        "No rush.",
        "No pressure.",
        "Just us.",
        "Exactly the way I've imagined it.",
      ];
      const cancel = punishTypeLines($("#punishType2"), lines, {
        linePause: 550,
        onDone: () => {
          const btn = $("#punishContinue2");
          btn.hidden = false;
          requestAnimationFrame(() => btn.classList.add("in"));
        },
      });
      punishCancelFns.push(cancel);
    }, 900);
  });

  $("#punishContinue2").addEventListener("click", () => {
    punishShowScreen(3);
    const lines = [
      "You know what your real punishment is?",
      "You'll have to deal with me stealing your attention every few minutes.",
      "You'll have to let me keep holding your hand.",
      "You'll have to accept random forehead kisses.",
      "You'll have to survive endless compliments.",
      "You'll have to hear me whisper how beautiful you are.",
      "You'll have to smile every time I look at you.",
      "And every time you blush...",
      "I'll probably fall for you all over again.",
    ];
    const cancel = punishTypeLines($("#punishType3"), lines, {
      linePause: 600,
      extraPauses: { 0: 1000 },
      onDone: () => {
        const btn = $("#punishContinue3");
        btn.hidden = false;
        requestAnimationFrame(() => btn.classList.add("in"));
      },
    });
    punishCancelFns.push(cancel);
  });

  $("#punishContinue3").addEventListener("click", () => {
    punishShowScreen(4);
    const lines = [
      "I don't want perfect moments.",
      "I want real ones.",
      "The kind where we laugh for no reason.",
      "Where we forget the world exists.",
      "Where every second feels too short.",
      "Where even silence feels beautiful.",
      "And when that day finally comes...",
      "I'll simply hold you close...",
      "look into your eyes...",
      "and silently thank life for bringing you to me.",
      "I choose you.",
      "Today.",
      "Tomorrow.",
      "Every day after that.",
      "❤️",
    ];
    const cancel = punishTypeLines($("#punishType4"), lines, {
      linePause: 650,
      extraPauses: { 9: 1300, 13: 900 },
      onDone: () => {
        const t = setTimeout(() => punishShowScreen(5), 2800);
        punishCancelFns.push(() => clearTimeout(t));
      },
    });
    punishCancelFns.push(cancel);
  });
}

/* Continuous soft red floating hearts behind the whole punish page.
   Cheap to leave running — it just no-ops while the section is hidden. */
(function punishAmbientHearts() {
  const canvas = document.getElementById("punishFxCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  function resize() {
    const section = document.getElementById("view-punish");
    canvas.width = section.offsetWidth || window.innerWidth;
    canvas.height = section.offsetHeight || window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  const hearts = Array.from({ length: 22 }, () => ({
    x: Math.random() * (canvas.width || window.innerWidth),
    y: Math.random() * (canvas.height || window.innerHeight) + 100,
    size: Math.random() * 12 + 7,
    speed: Math.random() * 0.4 + 0.15,
    drift: (Math.random() - 0.5) * 0.4,
    opacity: Math.random() * 0.3 + 0.12,
  }));

  function frame() {
    const section = document.getElementById("view-punish");
    if (section && !section.hidden) {
      if (canvas.width !== section.offsetWidth) resize();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hearts.forEach((h) => {
        h.y -= h.speed; h.x += h.drift;
        if (h.y < -20) { h.y = canvas.height + 20; h.x = Math.random() * canvas.width; }
        ctx.save();
        ctx.globalAlpha = h.opacity;
        ctx.fillStyle = "#e8555f";
        ctx.translate(h.x, h.y);
        const s = h.size / 16;
        ctx.beginPath();
        ctx.moveTo(0, 4 * s);
        ctx.bezierCurveTo(-8 * s, -4 * s, -16 * s, 6 * s, 0, 16 * s);
        ctx.bezierCurveTo(16 * s, 6 * s, 8 * s, -4 * s, 0, 4 * s);
        ctx.fill();
        ctx.restore();
      });
    }
    requestAnimationFrame(frame);
  }
  frame();
})();

/* ---------------------------------------------------------------------------
   IN EVERY UNIVERSE
   --------------------------------------------------------------------------- */
const UNIVERSE_QUOTES = [
  "In every universe, I'd still find my way to you.",
  "Some loves aren't new — they're just remembered from another life.",
  "If souls have favourites, mine has always picked yours.",
  "Every version of me falls for every version of you.",
  "Destiny had a thousand paths. All of them led here.",
  "Even parallel universes couldn't keep us apart.",
  "In another life, we probably already know each other's coffee order.",
  "Somewhere, in some universe, we never even had to say goodbye.",
  "Time may change, but this feeling never does.",
  "I'd choose this exact story, in every timeline, every time.",
  "Some souls are just meant to keep finding each other.",
  "In every universe, your smile is still my favourite constant.",
  "No multiverse theory explains why I fell for you this hard, this fast.",
  "If we're written in the stars, I hope it's in every constellation.",
  "Even in a universe of infinite choices, I'd still pick you first.",
  "Maybe every version of us ends the same way — together.",
  "I like to think somewhere we never had any distance at all.",
  "In one universe we're strangers. In this one, we're everything.",
  "However many lives I get, I hope you're in all of them.",
  "Some connections don't start here — they just continue here.",
  "If déjà vu is real, maybe it's just us, remembering each other.",
  "In every universe, I think I'd still write you a letter like this.",
  "Whatever the multiverse holds, my favourite one has you in it.",
  "Some people are just meant to keep colliding, life after life.",
  "I don't need a thousand universes — I just need the one with you in it.",
  "Maybe fate isn't one path, it's every path leading back to you.",
  "In another universe, maybe we met sooner. I'm glad this one still got us here.",
  "If I had to fall for you again in every lifetime, I would, without hesitation.",
  "Some stories rewrite themselves. Ours just keeps ending the same beautiful way.",
  "I like to imagine a universe where distance was never even invented.",
  "In every universe, I hope some version of me is still writing you letters.",
  "Maybe the stars just keep spelling out your name for me.",
  "Whatever shape this universe takes, I hope your hand is still in mine.",
  "Some people you don't meet by chance — you meet by design.",
  "In every universe, I think I'd still stop mid-sentence just to look at you.",
  "If our souls have met before, I hope they never stop meeting again.",
  "Maybe I've loved you in every life I haven't remembered yet.",
  "In every universe, my favourite plot twist is still you.",
  "Even infinite universes couldn't out-imagine how much I love you in this one.",
  "Some things are constant across every version of reality — you're one of them.",
  "I don't know about other universes, but in this one, I'm glad I found you.",
  "Maybe this is the universe where we finally get it right.",
  "In every timeline, I think I'd still choose the version where you say yes.",
  "If there's a multiverse, I hope every version of me is this lucky.",
  "Some love stories are written once. Ours feels like it's been written a hundred times.",
  "In every universe, I hope some version of us is dancing in a kitchen somewhere.",
  "Maybe every star in the sky is just another universe where we already made it.",
  "In every universe, I'd still stay up too late just to talk to you.",
  "If I get to choose one thing across every universe, I choose you. Every time.",
  "See you in every universe. ✨",
];

let universeCards = [
  { icon: "🐈", title: "If We Were Cats...", text: "If we were two little cats...\n\nI'd quietly follow you everywhere.\n\nPretend I wasn't looking...\n\nwhile secretly making sure you were always beside me.\n\nWe'd nap together in the afternoon sun...\n\nfight over the softest pillow...\n\nand every evening we'd curl up together as if the whole world disappeared." },
  { icon: "🕊", title: "If We Were Birds...", text: "I'd fly beside you every morning.\n\nNo matter how far the sky stretched...\n\nI'd always come back home to you." },
  { icon: "🌧", title: "If We Were Rain...", text: "I'd quietly fall beside you.\n\nTogether we'd turn ordinary days into beautiful memories." },
  { icon: "🌊", title: "If We Were Waves...", text: "I'd spend forever trying to reach you.\n\nEven if the ocean pulled us apart...\n\nI'd always return." },
  { icon: "🌙", title: "If We Were Stars...", text: "I'd shine just enough for you to find me.\n\nEven on the darkest nights." },
  { icon: "📖", title: "If We Were Books...", text: "I'd hope someone always kept us on the same shelf.\n\nBecause every chapter feels incomplete without you." },
  { icon: "🎧", title: "If We Were Songs...", text: "I'd become the melody.\n\nYou'd become the lyrics.\n\nTogether we'd become someone's favourite song." },
  { icon: "☕", title: "If We Were Coffee...", text: "You'd be the warmth.\n\nI'd be the sweetness.\n\nTogether we'd become someone's favourite morning." },
  { icon: "🌸", title: "If We Were Flowers...", text: "I'd always bloom wherever you were.\n\nBecause sunshine means nothing if you aren't there." },
  { icon: "🏡", title: "If We Were Neighbours...", text: "I'd invent silly excuses just to see you every day.\n\nEven if it was only for a few seconds." },
  { icon: "🎬", title: "If We Were In A Movie...", text: "I'd keep replaying our favourite scene...\n\nbecause I'd never want the ending." },
  { icon: "💌", title: "If We Were Letters...", text: "I'd always find my way into your hands...\n\nno matter how many miles separated us." },
  { icon: "✨", title: "If We Were Dreams...", text: "I'd visit you every single night...\n\njust to remind you how loved you are." },
  { icon: "🌍", title: "If We Were Living In Another Life...", text: "Maybe we'd already be sitting together,\nplanning little adventures,\ndecorating a cozy home,\nlaughing at inside jokes,\nand imagining all the beautiful memories still waiting for us." },
  { icon: "❤️", title: "If We Were Just Us...", text: "I wouldn't change a single thing.\n\nBecause out of every possible universe...\n\nthis one gave me you." },
];

let universeCardIndex = 0;
let universeCancelFns = [];
function universeClearTimers() {
  universeCancelFns.forEach((fn) => fn && fn());
  universeCancelFns = [];
}

function universeTypeLines(container, lines, { charDelay = 26, linePause = 700, extraPauses = {}, onDone } = {}) {
  container.innerHTML = "";
  let i = 0;
  let cancelled = false;
  function nextLine() {
    if (cancelled) return;
    if (i >= lines.length) { if (onDone) onDone(); return; }
    const p = document.createElement("p");
    p.className = "universe-type-line";
    container.appendChild(p);
    const text = lines[i];
    let c = 0;
    const timer = setInterval(() => {
      if (cancelled) { clearInterval(timer); return; }
      c++;
      p.textContent = text.slice(0, c);
      if (c >= text.length) {
        clearInterval(timer);
        const pause = extraPauses[i] ?? linePause;
        i++;
        setTimeout(nextLine, pause);
      }
    }, charDelay);
  }
  nextLine();
  return () => { cancelled = true; };
}

function universeRenderCard(idx) {
  const deck = $("#universeCardDeck");
  const card = universeCards[idx];
  deck.innerHTML = `
    <div class="universe-card glass">
      <span class="universe-card-icon">${card.icon}</span>
      <h3 class="universe-card-title">${card.title}</h3>
      <p class="universe-card-text">${card.text.replace(/\n/g, "<br>")}</p>
    </div>`;
  requestAnimationFrame(() => $(".universe-card", deck).classList.add("in"));
  $("#universeProgress").textContent = `${idx + 1} / ${universeCards.length}`;
}

function universeBeginEnding() {
  $("#universeCardsScreen").hidden = true;
  $("#universeEnding").hidden = false;
  const lines = [
    "Maybe...",
    "somewhere...",
    "in another universe...",
    "We're already watching sunsets together.",
    "Maybe...",
    "we're travelling somewhere beautiful.",
    "Maybe...",
    "we're still teasing each other.",
    "Maybe...",
    "we're still laughing at the same silly jokes.",
    "Maybe...",
    "I'm still looking at you...",
    "the exact same way.",
    "And maybe...",
    "you're still smiling at me...",
    "the way that changed everything.",
    "But until that universe finds us...",
    "I'll keep dreaming about ours.",
  ];
  const cancel = universeTypeLines($("#universeEndingType"), lines, {
    linePause: 850,
    extraPauses: { 2: 1400, 9: 1200, 16: 1400 },
    onDone: () => {
      const t = setTimeout(universeFinalReveal, 1600);
      universeCancelFns.push(() => clearTimeout(t));
    },
  });
  universeCancelFns.push(cancel);
}

function universeFinalReveal() {
  const wrap = $("#universeFinalReveal");
  wrap.hidden = false;
  requestAnimationFrame(() => wrap.classList.add("in"));
  const lines = [
    "In every universe...",
    "In every lifetime...",
    "No matter where life takes us...",
    "I'd still search for you.",
    "And if I found you again...",
    "I'd still choose you.",
  ];
  const cancel = universeTypeLines($("#universeFinalType"), lines, {
    linePause: 750,
    onDone: () => {
      const t = setTimeout(universeDrawConstellation, 1000);
      universeCancelFns.push(() => clearTimeout(t));
    },
  });
  universeCancelFns.push(cancel);
}

function universeDrawConstellation() {
  const svg = $("#universeConstellationSvg");
  // Star points that trace out "R ❤ M" across the viewBox (0 0 300 140).
  const points = [
    // R
    [20,20],[20,50],[20,80],[35,20],[45,30],[35,50],[45,65],[45,80],
    // heart (simplified V shape of stars)
    [110,35],[120,25],[130,35],[140,25],[150,35],[130,55],[120,45],[140,45],
    // M
    [210,80],[210,30],[225,55],[240,30],[240,80],
  ];
  svg.innerHTML = "";
  points.forEach((pt, i) => {
    const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", pt[0]); c.setAttribute("cy", pt[1]); c.setAttribute("r", 2.4);
    c.setAttribute("class", "universe-const-star");
    c.style.animationDelay = (i * 70) + "ms";
    svg.appendChild(c);
  });
  for (let i = 0; i < points.length - 1; i++) {
    const [x1, y1] = points[i], [x2, y2] = points[i + 1];
    if (Math.hypot(x2 - x1, y2 - y1) > 40) continue; // skip the big jumps between letters
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1); line.setAttribute("y1", y1);
    line.setAttribute("x2", x2); line.setAttribute("y2", y2);
    line.setAttribute("class", "universe-const-line");
    line.style.animationDelay = (i * 70 + 200) + "ms";
    svg.appendChild(line);
  }
  const t = setTimeout(() => {
    const cap = $("#universeConstellationCaption");
    cap.hidden = false;
    requestAnimationFrame(() => cap.classList.add("in"));
  }, points.length * 70 + 900);
  universeCancelFns.push(() => clearTimeout(t));
}

function resetUniverseFlow() {
  universeClearTimers();
  universeCardIndex = 0;
  $("#universeIntro").hidden = false;
  $("#universeCardsScreen").hidden = true;
  $("#universeEnding").hidden = true;
  $("#universeFinalReveal").hidden = true;
  $("#universeFinalReveal").classList.remove("in");
  $("#universeConstellationCaption").hidden = true;
  $("#universeConstellationCaption").classList.remove("in");
  $("#universeConstellationSvg").innerHTML = "";
  $("#universeIntroType").innerHTML = "";
  $("#universeEndingType").innerHTML = "";
  $("#universeFinalType").innerHTML = "";
  $("#universeBeginBtn").hidden = true;

  $("#universeRandomQuote").textContent =
    "✨ " + UNIVERSE_QUOTES[Math.floor(Math.random() * UNIVERSE_QUOTES.length)];

  const cancel = universeTypeLines($("#universeIntroType"), [
    "In another universe...",
    "Maybe we still found each other.",
    "Let's imagine them...",
  ], {
    linePause: 900,
    extraPauses: { 1: 1400 },
    onDone: () => {
      const btn = $("#universeBeginBtn");
      btn.hidden = false;
      requestAnimationFrame(() => btn.classList.add("in"));
    },
  });
  universeCancelFns.push(cancel);
}

function initUniversePage() {
  $("#universeBeginBtn").addEventListener("click", () => {
    $("#universeIntro").hidden = true;
    $("#universeCardsScreen").hidden = false;
    universeCardIndex = 0;
    universeRenderCard(0);
  });

  $("#universeNextCard").addEventListener("click", () => {
    if (universeCardIndex < universeCards.length - 1) {
      universeCardIndex++;
      universeRenderCard(universeCardIndex);
    } else {
      universeBeginEnding();
    }
  });
  $("#universePrevCard").addEventListener("click", () => {
    if (universeCardIndex > 0) {
      universeCardIndex--;
      universeRenderCard(universeCardIndex);
    }
  });

  // Basic swipe support on the card deck.
  const deck = $("#universeCardDeck");
  let touchStartX = null;
  deck.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  deck.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
      if (dx < 0) $("#universeNextCard").click();
      else $("#universePrevCard").click();
    }
    touchStartX = null;
  }, { passive: true });

  // Press-and-hold anywhere on the page for 10s: hidden wish + brighter stars.
  const view = $("#view-universe");
  const overlay = $("#universeSecretOverlay");
  const hint = $("#universeHoldHint");
  let holdTimer = null;

  function startHold(e) {
    if (e.target.closest("button, a")) return; // don't hijack real buttons/links
    hint.classList.add("holding");
    holdTimer = setTimeout(() => {
      view.classList.add("universe-bright");
      overlay.hidden = false;
      $("#universeSecretText").innerHTML =
        "I don't know how many universes exist...<br><br>" +
        "But if I had to find you in every single one...<br>" +
        "I'd start the journey all over again.<br><br>❤️";
      requestAnimationFrame(() => overlay.classList.add("in"));
      const t = setTimeout(() => {
        overlay.classList.remove("in");
        setTimeout(() => { overlay.hidden = true; view.classList.remove("universe-bright"); }, 900);
      }, 6000);
      universeCancelFns.push(() => clearTimeout(t));
    }, 10000);
  }
  function cancelHold() {
    hint.classList.remove("holding");
    clearTimeout(holdTimer);
  }
  view.addEventListener("pointerdown", startHold);
  view.addEventListener("pointerup", cancelHold);
  view.addEventListener("pointerleave", cancelHold);
  view.addEventListener("touchstart", startHold, { passive: true });
  view.addEventListener("touchend", cancelHold);
}

/* ---------------------------------------------------------------------------
   FLOATING MUSIC PLAYER
   --------------------------------------------------------------------------- */
function initMusicPlayer() {
  const audio = $("#audioPlayer");
  const player = $("#musicPlayer");
  const toggle = $("#musicToggle");
  const playIcon = $("#playIcon"), pauseIcon = $("#pauseIcon");
  const title = $("#musicTitle");
  const expand = $("#musicExpand");
  const volumeSlider = $("#volumeSlider");
  let trackIndex = 0;
  let muted = false;

  function loadTrack(idx, autoplay) {
    trackIndex = (idx + PLAYLIST.length) % PLAYLIST.length;
    const track = PLAYLIST[trackIndex];
    audio.src = track.src;
    title.textContent = track.title;
    audio.volume = parseFloat(volumeSlider.value);
    if (autoplay) {
      audio.play().then(() => {
        playIcon.hidden = true; pauseIcon.hidden = false; player.classList.add("playing");
      }).catch(() => {
        // Browser blocked autoplay — fall back to starting on the first tap anywhere.
        playIcon.hidden = false; pauseIcon.hidden = true; player.classList.remove("playing");
        const startOnFirstTap = () => {
          audio.play().then(() => {
            playIcon.hidden = true; pauseIcon.hidden = false; player.classList.add("playing");
          }).catch(() => {});
          document.removeEventListener("click", startOnFirstTap);
        };
        document.addEventListener("click", startOnFirstTap, { once: true });
      });
    }
  }
  // Plays nonstop on loop (see the <audio loop> attribute in index.html) starting
  // the moment the site opens — the password submit already counts as the
  // "user gesture" most browsers require before allowing audio to autoplay.
  loadTrack(0, true);

  toggle.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().then(() => {
        playIcon.hidden = true; pauseIcon.hidden = false; player.classList.add("playing");
      }).catch(() => {
        title.textContent = "Add mp3 files to assets/music/";
      });
    } else {
      audio.pause();
      playIcon.hidden = false; pauseIcon.hidden = true; player.classList.remove("playing");
    }
  });

  $("#prevTrack").addEventListener("click", () => loadTrack(trackIndex - 1, !audio.paused));
  $("#nextTrack").addEventListener("click", () => loadTrack(trackIndex + 1, !audio.paused));
  audio.addEventListener("ended", () => loadTrack(trackIndex + 1, true));

  $("#musicMore").addEventListener("click", () => expand.classList.toggle("open"));

  volumeSlider.addEventListener("input", () => { audio.volume = parseFloat(volumeSlider.value); });

  $("#muteToggle").addEventListener("click", (e) => {
    muted = !muted;
    audio.muted = muted;
    e.target.textContent = muted ? "🔇" : "🔊";
  });
}
