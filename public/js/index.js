const thoughts = [
  "I feel so unwanted sometimes.",
  "I just wanna feel okay again.",
  "WHY IS DREAM SO SILENT I FEEL TENSE",
  "I can feel myself losing interest in everything.",
  "I feel amazing",
  "I feel you",
  "I feel cute today",
  "I feel like a clown in this fandom wallahi😭",
  "I don’t feel bad how I’m treating nobody, y’all been playing in my face long enough",
  "I feel very good. I know I'm 30, but I don't feel like I'm 30.",
  "i feel soo blessed even though im soo ENCOKKK kegencet kedorong😭😭",
  "I want to feel you inside me",
  "idk if it’s just me but i feel like we’re just collectively sitting in a waiting room",
  "Whoa! I feel good, I knew that I would, now I feel good, I knew that I would, now. So good, so good, I got you, Whoa! I feel nice, like sugar and spice…!!!!",
  "i feel like i have been in labour for 30 hours when is this damn baby coming",
  "I feel like I’ve experienced too much death for someone who’s only 25",
  "I feel so attached to you🥺",
  "anyone also feels we are all identical somehow?",
  "I just wanna meet someone who makes me feel the way football does.",
  "why do i always feel like imma be alone forever, i just can't imagine a person who actually will care abt me and love me for basically no reason 😭",
  "All these dates I’ve been going on 😭 I feel like flava flav 😂😂😂",
  "anyone else feel we have no identity? Or am I overthinking",
  "I feel like I am I the matrix",
  "i feel like this is some sortof identity factory",
  "I feel like I might sink and drown and die 🖤",
  "no caption i just feel fucking adorable today :)",
  "I feel more adult than at any point in the last decade.",
  "I feel like I'm really dreaming",
  "“I'm addicted to the way I feel when I think of you.”",
  "ifeel like smoking even tho id ont smoke",
  "I feel the need; the need, for speed.",
  "I feel so single",
  "I feel like going to the bar tonight 🥺🥺",
  "I feel so excited rn omg",
  "sometimes i feel like a polaroidpicture trapped inside spaceand time",
  "i feel so pretty",
  "“I feel like a kid again.” Javon Kinlaw",
  "I’m a lazy, sad manchild and I feel like I’ve thrown my life away.",
  "I feel like I suck at running combat...any advice?",
  "How i feel after i have 7stared phoenix squadron",
  "I feel like you’re taking this a lot more seriously than I am",
  "I feel for my female homies though",
  "I feel like God doesn't care about me",
  "i can feel my soul finally returning back to my body",
  "I finally showered and shaved and I feel so great!",
  "“oh god i want to feel again.”",
  "I feel like I'm going full schizo",
  "So I feel I am agender",
  "im trying to make my sims NOT look like imvu characters anymore and i feel so free lol",
  "i feel like i can’t do this",
  "i feel so warm and cozy, i had to share :)",
  "I’m so sad. Just went out with my friends sober and I was so socially retarded I feel worse than I did before meeting them. Any relaters? I miss so much who I used to be.",
  "I feel like I'm living on borrowed time",
  "I feel loved again and I don’t know what to make of it",
  "I feel like I post my car a lot, but I just love this car.",
  "i feel best when i wear pink 💖",
  "I feel like nudism should start in public beaches",
  "i feel like people are going to send me death threats",
  "I feel hideous",
  "I feel like such a badass what a lucky run 😁😁",
  "I feel jealous of YouTubers, especially IITian ones",
  "When I exhale deeply I feel tension, anxiety and stress in my body",
  "I feel like there's nothing anyone can do to help me end this pain",
  "Daddy 🥺 I feel shy in my pretty little dress, it doesn’t cover me much 🥺🌸💗",
  "should i feel guilty for not opening up to my friends?",
  "I feel like I could be so happy if I were just left to my own devices in a tiny little studio.",
  "I feel like everything is stuck",
  "I feel really dumb… ",
  "IN THE BAY AREA … I FEEL SO AT HOME ❌⭕️",
  "it feel counterintuitive but since coming out as nonbinary I feel more comfortable dressing femininely.",
  "I feel like my kinks make me a bad person.",
  "Today I feel very bored",
  "I feel so lucky to have such close bicep inserts",
  "I feel so antisocial, is this normal?",
  "I feel like I’ve been here before",
  "I feel like I'm unable to distinguish between discipline and motivation",
  "I feel like Reddit is silencing people that make memes about Queen Elizabeth's death",
  "I feel a great disturbance in the Force (via @starwars_general)",
  "I feel like I’ve hit a wall in terms of my skill level. What should I be improving on?",
  "I feel SO GO000O0OOO00o0oOD",
  "guys, i feel like i want to kill myself, help?",
  "why do i feel more confortable talking about my problems to strangers rather than close people?",
  "i feel meh",
  "hi everyone. How are you? I am fine, i just feel that we need to live life slower...",
  "Her eyes were closed and I was feeling my look! Can I live?!?!",
  "Sometimes I feel like nobody 🥺😭💔...I'm not liking the progress of my life😭💔",
  "sometimes i feel like i understand myself more than ever and other times it’s like i don’t even who i am",
];

const usernames = [
  "nightmare aspen",
  "𝓁𝒾𝓅𝓈𝒶𝒶",
  "Droid",
  "rocky",
  "#1 milf enthusiast",
  "✿ ᥲᥴᥲ ✿",
  "eta",
  "$.ÌßååÐ",
  "nana",
  "tofu",
  "Ven NIJIFes D2",
  "Wakanda",
  "April O Neil Hamato",
  "adam • hs au",
  "I'm ED",
  "WRITE A RAP",
  "Revardin",
  "Pamela",
  "Cami",
  "cha9yu",
  "ali",
  "nic",
  "avee",
  "ele ✹☽",
  "qasimin",
  "sevdaliza",
  "𝕎𝔸ℍ𝕀𝕋𝕆",
  "𝐉!𝐌𝐌𝐘",
  "Mutua B",
  "Fine Wine",
  "George T. Dianoh",
  "Lena",
  "𝐙𝐄𝐑𝐎 𝐆𝐑𝐀𝐕𝐈𝐓𝐘",
  "KESH",
  "Paul Ouma",
  "Viral",
  "Kimuzi",
];

function generateThoughts() {
  document.getElementById("show").style.display = "flex";

  var thoughtsNumber = Math.floor(Math.random() * thoughts.length);
  document.getElementById("show-thoughts").innerHTML = thoughts[thoughtsNumber];

  var usernameNumber = Math.floor(Math.random() * usernames.length);
  document.getElementById("show-usernames").innerHTML =
    usernames[usernameNumber];

  var imageNumber = Math.floor(Math.random() * 65);
  document.getElementById(
    "show-image"
  ).src = `assets/peoplepics/${imageNumber}.jpg`;
}
