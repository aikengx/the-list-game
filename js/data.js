const audio_url = './sounds/';


const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];


const morse = {
  a: {
    code: "._",
    sound: "a.mp3"
  },
  b: {
    code: "_...",
    sound: "b.mp3"
  },
  c: {
    code: "_._.",
    sound: "c.mp3"
  },
  d: {
    code: "_..",
    sound: "d.mp3"
  },
  e: {
    code: ".",
    sound: "e.mp3"
  },
  f: {
    code: ".._.",
    sound: "f.mp3"
  },
  g: {
    code: "__.",
    sound: "g.mp3"
  },
  h: {
    code: "....",
    sound: "h.mp3"
  },
  i: {
    code: "..",
    sound: "i.mp3"
  },
  j: {
    code: ".___",
    sound: "j.mp3"
  },
  k: {
    code: "_._",
    sound: "k.mp3"
  },
  l: {
    code: "._..",
    sound: "l.mp3"
  },
  m: {
    code: "__",
    sound: "m.mp3"
  },
  n: {
    code: "_.",
    sound: "n.mp3"
  },
  o: {
    code: "___",
    sound: "o.mp3"
  },
  p: {
    code: ".__.",
    sound: "p.mp3"
  },
  q: {
    code: "__._",
    sound: "q.mp3"
  },
  r: {
    code: "._.",
    sound: "r.mp3"
  },
  s: {
    code: "...",
    sound: "s.mp3"
  },
  t: {
    code: "_",
    sound: "t.mp3"
  },
  u: {
    code: ".._",
    sound: "u.mp3"
  },
  v: {
    code: "..._",
    sound: "v.mp3"
  },
  w: {
    code: ".__",
    sound: "w.mp3"
  },
  x: {
    code: "_.._",
    sound: "x.mp3"
  },
  y: {
    code: "_.__",
    sound: "y.mp3"
  },
  z: {
    code: "__..",
    sound: "z.mp3"
  },
  0: {
    code: "_____",
    sound: "0.mp3"
  },
  1: {
    code: ".____",
    sound: "1.mp3"
  },
  2: {
    code: "..___",
    sound: "2.mp3"
  },
  3: {
    code: "...__",
    sound: "3.mp3"
  },
  4: {
    code: "...._",
    sound: "4.mp3"
  },
  5: {
    code: ".....",
    sound: "5.mp3"
  },
  6: {
    code: "_....",
    sound: "6.mp3"
  },
  7: {
    code: "__...",
    sound: "7.mp3"
  },
  8: {
    code: "___..",
    sound: "8.mp3"
  },
  9: {
    code: "____.",
    sound: "9.mp3"
  }
};

 
const rotorI = [
  "s", 
  "d", 
  "e", 
  "r", 
  "w", 
  "v", 
  "k", 
  "p", 
  "h", 
  "f", 
  "b", 
  "q", 
  "u", 
  "y", 
  "l", 
  "g", 
  "t", 
  "c", 
  "x", 
  "i", 
  "j", 
  "z", 
  "o", 
  "a", 
  "n", 
  "m"
];


const names = [
  "Albert",
  "Dieter", 
  "Ernst", 
  "Friedrich", 
  "Gerhard", 
  "Gunter", 
  "Hans", 
  "Heinrich", 
  "Heinz", 
  "Helmut", 
  "Herbert", 
  "Hermann", 
  "Horst",
  "Joseph", 
  "Jurgen", 
  "Karl", 
  "Klaus", 
  "Kurt", 
  "Max",
  "Manfred", 
  "Otto", 
  "Paul", 
  "Peter", 
  "Walter", 
  "Werner", 
  "Wilhelm", 
  "Wolfgang"
];


const surnames = [
  "Albrecht", 
  "Bauer", 
  "Baumann", 
  "Beck", 
  "Becker", 
  "Berger", 
  "Bergmann", 
  "Brandt", 
  "Braun", 
  "Busch", 
  "Bohm", 
  "Dietrich", 
  "Engel", 
  "Fischer", 
  "Frank", 
  "Friedrich", 
  "Fuchs", 
  "Goudier", 
  "Graf", 
  "Gross", 
  "Gunther", 
  "Haas", 
  "Hahn", 
  "Hartmann", 
  "Heinrich", 
  "Herrmann", 
  "Hoffmann", 
  "Horn", 
  "Huber", 
  "Jung", 
  "Jaeger", 
  "Kaiser", 
  "Keller", 
  "Klein", 
  "Koch", 
  "Kraus", 
  "Kramer", 
  "Kruger", 
  "Kuhn", 
  "Koehler", 
  "Koenig", 
  "Lang", 
  "Lange", 
  "Lehmann", 
  "Lorenz", 
  "Ludwig", 
  "Martin", 
  "Mayer", 
  "Meier", 
  "Muller", 
  "Neumann", 
  "Otto", 
  "Peters", 
  "Pfeiffer", 
  "Pohl",
  "Radl", 
  "Richter", 
  "Roth", 
  "Sauer", 
  "Schmidt", 
  "Schneider", 
  "Scholz", 
  "Schreiber", 
  "Schroeder", 
  "Schubert", 
  "Schulze", 
  "Schumacher", 
  "Schuster", 
  "Schwarz", 
  "Schafer", 
  "Seidel", 
  "Simon", 
  "Sommer", 
  "Stein",
  "Steiner", 
  "Thomas", 
  "Vogel", 
  "Vogt", 
  "Wagner", 
  "Walter", 
  "Weber", 
  "Weiss", 
  "Werner", 
  "Winkler", 
  "Winter", 
  "Wolf", 
  "Ziegler", 
  "Zimmermann"
];


const ranks = [
  {
    rank: "Schutze",
    level: "enlisted"
  },
  {
    rank: "Oberschutze",
    level: "enlisted"
  },
  {
    rank: "Oberschutze",
    level: "enlisted"
  },
  {
    rank: "Sturmmann",
    level: "enlisted"
  },
  {
    rank: "Rottenfuhrer",
    level: "enlisted"
  },
  {
    rank: "Unterscharfuhrer",
    level: "nco"
  },
  {
    rank: "Scharfuhrer",
    level: "nco"
  },
  {
    rank: "Oberscharfuhrer",
    level: "nco"
  },
  {
    rank: "Hauptscharfuhrer",
    level: "nco"
  },
  {
    rank: "Stabsscharfuhrer",
    level: "nco" 
  },
  {
    rank: "Sturmscharfuhrer",
    level: "nco"
  },
  {
    rank: "Untersturmfuhrer",
    level: "officer"
  },
  {
    rank: "Obersturmfuhrer",
    level: "officer"
  },
  {
    rank: "Hauptsturmfuhrer",
    level: "officer"
  },
  {
    rank: "Sturmbannfuhrer",
    level: "officer"
  },
  {
    rank: "Obersturmbannfuhrer",
    level: "officer"
  },
  {
    rank: "Standartenfuhrer",
    level: "officer"
  },
  {
    rank: "Oberfuhrer",
    level: "officer"
  },
  {
    rank: "Brigadefuhrer",
    level: "general"
  },
  {
    rank: "Gruppenfuhrer",
    level: "general"
  },
  {
    rank: "Obergruppenfuhrer",
    level: "general"
  },
  {
    rank: "Oberstgruppenfuhrer",
    level: "general"
  }
];


const points = {
  enlisted: 1,
  nco: 2,
  officer: 3,
  general: 4
};


var objective = "";

var morseStr = "";

var playerScore = {
  value: 1,
  init: false
};

var minScore = 0;

var maxScore = 10;

var targetLevel = "";

var modal = document.getElementById('bg-modal');