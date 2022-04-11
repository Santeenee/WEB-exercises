//Given two days' worth of tasks, use high order arrays functions to:

// 1. Collect tasks into a single
// array of objects

// 2. Convert the task
// durations to hours
// instead of minutes.

// 3. Filter out everything that
// took half an hour or less.

// 4. Sum it all up.

// 5. Multiply the result by a
// per-hour rate for billing of
// 25$

// 6. Output a formatted dollar
// amount.

const monday = [
  {
    'name': 'Write a sum program',
    'duration': 180
  },
  {
    'name': 'Have a break with Ben',
    'duration': 15
  }
];

const tuesday = [
  {
    'name': 'Keep coding that program',
    'duration': 240
  },
  {
    'name': 'Check aquarius temperature',
    'duration': 30
  },
  {
    'name': 'Debug that hard code',
    'duration': 240
  }
];

const tasks = [monday, tuesday]; //ehm...

//* 1.
let twodays = monday.concat(tuesday)
console.log(twodays)

//* 2 convert from hours to minutes
twodays.map(obj => { obj.duration /= 60 })

//* 3 
twodays = twodays.filter(f => f.duration > 0.5)
console.log(twodays)

//* 4
twodays = twodays.map(r => r.duration).reduce((prev, current) => prev + current)
console.log(twodays)

//* 5
//???
// 5. Multiply the result by a
// per-hour rate for billing of
// 25$

twodays *= 25
console.log(twodays)

//* 6
//?