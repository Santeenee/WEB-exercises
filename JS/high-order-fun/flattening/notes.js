function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);

//* exercise 2 CALLBAK AS PARAMETER
let labels = [];

repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});

console.log(labels);

//* exercise 3 CLOSURES(?)
function greaterThan(n) {
  return m => m > n;
}

let greaterThan10 = greaterThan(10);
//n = 10 lives in the var/func greaterThan10
console.log(greaterThan10(11)); // = greaterThan(10)(11)
// → true

//* exercise 4 ...ARGS
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

//* exercise 5 FILTER()
function isVocal(letter) {
  return "aeiou".indexOf(letter) >= 0;
}
msgArray = Array.from("tuttifrutti");
codedMsgArray = msgArray.filter(s => isVocal(s));

console.log(codedMsgArray);
// → [ 't', 't', 't', 'f', 'r', 't', 't' ]

console.log(msgArray);
// → [ 't', 'u', 't', 't', 'i', 'f', 'r', 'u', 't', 't', 'i' ]

//*exercise 6 MAP()
rects = [
  { width: 10, heigth: 5 }, { width: 7, heigth: 3 }
];

//r is a value of the array rects (in this case an object)
rectsWidth = rects.map(r => r.width); // = rects.map((r) => {return r.width});
console.log(rectsWidth);
// [ 10, 7 ]

rectsArea = rects.map(r => {
  r.area = r.width * r.heigth; //pay attention, rects obj has been modified!
  return r;
});

rects[0].width = 1000;
console.log(rectsArea); // this is the same as rects 
console.log(rects);
//[ { width: 10, heigth: 5, area: 50 },
// { width: 7, heigth: 3, area: 21 } ]

//* exercise 7 better MAP()
rectsClone = rects.map(r => {
  return {
    width: r.width,
    heigth: r.heigth,
    area: r.width * r.heigth
  }
});

rects[0].width = 8000; //this doesn't modify rectsClone
console.log(rectsClone);

//* exercise 8 findIndex() come filter ma ritorna il primo valore trovato
rects = [
  { width: 10, heigth: 5 },
  { width: 7, heigth: 3 }
];

console.log(
  rects[

  rects.findIndex((rect) =>
    rect.heigth < 5
  )
  ]
);

//->{ width: 7, heigth: 3 }

//* exercise 9 COMPOSABILITY

const SCRIPTS = [{
  name: "Coptic",
  ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
  direction: "ltr",
  year: -200,
  living: false,
  link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
},
{
  name: "idkman",
  ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
  direction: "ltr",
  year: -100,
  living: false,
  link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
},
{
  name: "Unknown",
  ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
  direction: "ltr",
  year: 42,
  living: true,
  link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
}];

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(
  average(SCRIPTS.filter(s => s.living).map(s => s.year))
));
// → 42 🤔🌠

console.log(Math.round(
  average(SCRIPTS.filter(s => !s.living).map(s => s.year))
));
// → -150

//* concat() = merges two or more arrays together