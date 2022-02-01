let mystring = "#"

for (let i = 0; i < 7; i++) {
  console.log(mystring)
  mystring += "#"
}

// solution:
// for (let line = "#"; line.length < 8; line += "#")
//   console.log(line);