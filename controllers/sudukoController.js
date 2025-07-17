
/*

const tokenId = process.env.CLIENT_ID
const tokenSecret = process.env.CLIENT_SECRET

// usps get shipping price

exports.post_usps = asyncHandler(async (req, res) => {


  fetch("https://api.usps.com/oauth2/v3/token", {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

    body: JSON.stringify({
      client_id: tokenId,
      client_secret: tokenSecret,
      grant_type: "client_credentials",
    }),


  })

    .then((response) => response.json())
    .then((data) => {

      fetchInfo(data.access_token)

    })

    .catch(function (err) {
      console.log("Unable to fetch -", err);
    });



  // get shipping rate
  const fetchInfo = async (token) => {

    let tokenBearer = `Bearer ${token}`

    fetch("https://api.usps.com/prices/v3/base-rates/search", {
      method: 'POST',
      body: JSON.stringify({
        originZIPCode: req.body.originZIPCode,
        destinationZIPCode: req.body.destinationZIPCode,
        weight: req.body.weight,
        length: req.body.length,
        width: req.body.width,
        height: req.body.height,
        mailClass: req.body.mailClass,
        processingCategory: req.body.processingCategory,
        rateIndicator: req.body.rateIndicator,
        destinationEntryFacilityType: req.body.destinationEntryFacilityType,
        priceType: req.body.priceType

      }),
      headers: {
        Authorization: tokenBearer,
        'Content-type': 'application/json; charset=UTF-8',
      },

    })



      .then((response) => response.json())
      .then((data) => {
        res.json(data)

      })


      .catch((err) => {
        console.log(err.message);

      });

  }

});*/

class SudokuSolver {

  validate(puzzleString) {
let valid = /^[0-9|.]*$/

    if (!puzzleString) {
      let result = 'missing'
      return result
    }

    if (valid.test(puzzleString) == false) {
      let result = "Invalid characters"
       return result
    }

  if (puzzleString.length != 81) {
    let result = "not 81"
    return result
  
  }
  }
  

  checkRowPlacement(puzzleString, row, column, value) {
let rww = { a: [1,2,3,4,5,6,7,8,9],
b: [10,11,12,13,14,15,16,17,18],
c: [19,20,21,22,23,24,25,26,27],
d: [28,29,30,31,32,33,34,35,36],
e: [37,38,39,40,41,42,43,44,45],
f: [46,47,48,49,50,51,52,53,54],
g: [55,56,57,58,59,60,61,62,63],
h: [64,65,66,67,68,69,70,71,72],
i: [73,74,75,76,77,78,79,80,81]}

  
let rowcheck = ""

for (let i = 0; i < 9; i++) {
 
  if (puzzleString[(rww[row][i])-1] == value) {
   
    rowcheck = "true"
    return rowcheck
    break
  }
  
}
  }

  checkColPlacement(puzzleString, row, column, value) {
let col = { 1: [1,10,19,28,37,46,55,64,73],
2: [2,11,20,29,38,47,56,65,74],
3: [3,12,21,30,39,48,57,66,75],
4: [4,13,22,31,40,49,58,67,76],
5: [5,14,23,32,41,50,59,68,77],
6: [6,15,24,33,42,51,60,69,78],
7: [7,16,25,34,43,52,61,70,79],
8: [8,17,26,35,44,53,62,71,80],
9: [9,18,27,36,45,54,63,72,81]}


let colcheck = ""

for (let i = 0; i < 9; i++) {
 
 if (puzzleString[col[column][i] - 1] == value) {
   
    colcheck = "true"
    return colcheck
    break
  }
 
}
  }

  checkRegionPlacement(puzzleString, row, column, value) {
let box = {1: [1,2,3,10,11,12,19,20,21],
2: [4,5,6,13,14,15,22,23,24],
3: [7,8,9,16,17,18,25,26,27],
4: [28,29,30,37,38,39,46,47,48],
5: [31,32,33,40,41,42,49,50,51],
6: [34,35,36,43,44,45,52,53,54],
7: [55,56,57,64,65,66,73,74,75],
8: [58,59,60,67,68,69,76,77,78],
9: [61,62,63,70,71,72,79,80,81]}


    
let sect = ""

if (/[a-c]/.test(row) == true && /[1-3]/.test(column) == true) {
 sect = 1
}
if (/[a-c]/.test(row) == true && /[4-6]/.test(column) == true) {
 sect = 2
}
if (/[a-c]/.test(row) == true && /[7-9]/.test(column) == true) {
 sect = 3
}
if (/[d-f]/.test(row) == true && /[1-3]/.test(column) == true) {
 sect = 4
}
if (/[d-f]/.test(row) == true && /[4-6]/.test(column) == true) {
 sect = 5
}
if (/[d-f]/.test(row) == true && /[7-9]/.test(column) == true) {
 sect = 6
}
if (/[g-i]/.test(row) == true && /[1-3]/.test(column) == true) {
 sect = 7
}
if (/[g-i]/.test(row) == true && /[4-6]/.test(column) == true) {
 sect = 8
}
if (/[g-i]/.test(row) == true && /[7-9]/.test(column) == true) {
 sect = 9
}


let boxcheck = ""

for (let i = 0; i < 9; i++) {
 
  if (puzzleString[box[sect][i] - 1] == value) {
   
    boxcheck = "true"
    return boxcheck
    break
  }
 
}

  }



  
  solve(puzzleString) {
let finalSolution = ""

/*check invalid*/


function invalid(puzzleString) {
  
function checkColValid(puzzleString, row, column, value) {
let col = { 1: [1,10,19,28,37,46,55,64,73],
2: [2,11,20,29,38,47,56,65,74],
3: [3,12,21,30,39,48,57,66,75],
4: [4,13,22,31,40,49,58,67,76],
5: [5,14,23,32,41,50,59,68,77],
6: [6,15,24,33,42,51,60,69,78],
7: [7,16,25,34,43,52,61,70,79],
8: [8,17,26,35,44,53,62,71,80],
9: [9,18,27,36,45,54,63,72,81]}

let counter = 0
for (let i = 0; i < 9; i++) {
 
  if (puzzleString[col[column][i] - 1] == value) {
   
   counter = counter + 1
   
  }
  if (counter > 1){
      return 'invalid'
    }
}
}

function checkRowValid(puzzleString, row, column, value) {
  let rww = { a: [1,2,3,4,5,6,7,8,9],
b: [10,11,12,13,14,15,16,17,18],
c: [19,20,21,22,23,24,25,26,27],
d: [28,29,30,31,32,33,34,35,36],
e: [37,38,39,40,41,42,43,44,45],
f: [46,47,48,49,50,51,52,53,54],
g: [55,56,57,58,59,60,61,62,63],
h: [64,65,66,67,68,69,70,71,72],
i: [73,74,75,76,77,78,79,80,81]}
 

let counter = 0
for (let i = 0; i < 9; i++) {

  if (puzzleString[(rww[row][i])-1] == value) {
   
   counter = counter + 1
    
  }
    if (counter > 1){
      return 'invalid'
    }
}
}
/*section*/
function checkRegionValid(puzzleString, row, column, value) {
  let box = {1: [1,2,3,10,11,12,19,20,21],
2: [4,5,6,13,14,15,22,23,24],
3: [7,8,9,16,17,18,25,26,27],
4: [28,29,30,37,38,39,46,47,48],
5: [31,32,33,40,41,42,49,50,51],
6: [34,35,36,43,44,45,52,53,54],
7: [55,56,57,64,65,66,73,74,75],
8: [58,59,60,67,68,69,76,77,78],
9: [61,62,63,70,71,72,79,80,81]}
  
let sect = ""

if (/[a-c]/.test(row) == true && /[1-3]/.test(column) == true) {
 sect = 1
}
if (/[a-c]/.test(row) == true && /[4-6]/.test(column) == true) {
 sect = 2
}
if (/[a-c]/.test(row) == true && /[7-9]/.test(column) == true) {
 sect = 3
}
if (/[d-f]/.test(row) == true && /[1-3]/.test(column) == true) {
 sect = 4
}
if (/[d-f]/.test(row) == true && /[4-6]/.test(column) == true) {
 sect = 5
}
if (/[d-f]/.test(row) == true && /[7-9]/.test(column) == true) {
 sect = 6
}
if (/[g-i]/.test(row) == true && /[1-3]/.test(column) == true) {
 sect = 7
}
if (/[g-i]/.test(row) == true && /[4-6]/.test(column) == true) {
 sect = 8
}
if (/[g-i]/.test(row) == true && /[7-9]/.test(column) == true) {
 sect = 9
}


let counter = 0

for (let i = 0; i < 9; i++) {
 
  if (puzzleString[box[sect][i] - 1] == value) {
   
    counter = counter + 1
    
  }
    if (counter > 1) {
      return 'invalid'
    }
    } 
}



 
  for (let j = 0; j <= 80; j++) {

if (puzzleString[j] != ".") {
  
 let invalidRegion = checkRegionValid(puzzleString, coordinate[j][0], coordinate[j][1], puzzleString[j])
let invalidColumn = checkColValid(puzzleString, coordinate[j][0], coordinate[j][1], puzzleString[j])
let invalidRow = checkRowValid(puzzleString, coordinate[j][0], coordinate[j][1], puzzleString[j])
  if (invalidRegion == 'invalid' || invalidColumn == 'invalid' || invalidRow == 'invalid'){
    return 'invalid'
  
  }
   
}
  
  } 
  
  
}



    
 /*placement functions*/   

 function checkRowPlacement2(puzzleString, row, column, value) {
let rww = { a: [1,2,3,4,5,6,7,8,9],
b: [10,11,12,13,14,15,16,17,18],
c: [19,20,21,22,23,24,25,26,27],
d: [28,29,30,31,32,33,34,35,36],
e: [37,38,39,40,41,42,43,44,45],
f: [46,47,48,49,50,51,52,53,54],
g: [55,56,57,58,59,60,61,62,63],
h: [64,65,66,67,68,69,70,71,72],
i: [73,74,75,76,77,78,79,80,81]}

  
let rowcheck = ""

for (let i = 0; i < 9; i++) {
 
  if (puzzleString[(rww[row][i])-1] == value) {
   
    rowcheck = "true"
    return rowcheck
    break
  }
  
}
  }

 function checkColPlacement2(puzzleString, row, column, value) {
let col = { 1: [1,10,19,28,37,46,55,64,73],
2: [2,11,20,29,38,47,56,65,74],
3: [3,12,21,30,39,48,57,66,75],
4: [4,13,22,31,40,49,58,67,76],
5: [5,14,23,32,41,50,59,68,77],
6: [6,15,24,33,42,51,60,69,78],
7: [7,16,25,34,43,52,61,70,79],
8: [8,17,26,35,44,53,62,71,80],
9: [9,18,27,36,45,54,63,72,81]}


let colcheck = ""

for (let i = 0; i < 9; i++) {
 
 if (puzzleString[col[column][i] - 1] == value) {
   
    colcheck = "true"
    return colcheck
    break
  }
 
}
  }

  function checkRegionPlacement2(puzzleString, row, column, value) {
let box = {1: [1,2,3,10,11,12,19,20,21],
2: [4,5,6,13,14,15,22,23,24],
3: [7,8,9,16,17,18,25,26,27],
4: [28,29,30,37,38,39,46,47,48],
5: [31,32,33,40,41,42,49,50,51],
6: [34,35,36,43,44,45,52,53,54],
7: [55,56,57,64,65,66,73,74,75],
8: [58,59,60,67,68,69,76,77,78],
9: [61,62,63,70,71,72,79,80,81]}


    
let sect = ""

if (/[a-c]/.test(row) == true && /[1-3]/.test(column) == true) {
 sect = 1
}
if (/[a-c]/.test(row) == true && /[4-6]/.test(column) == true) {
 sect = 2
}
if (/[a-c]/.test(row) == true && /[7-9]/.test(column) == true) {
 sect = 3
}
if (/[d-f]/.test(row) == true && /[1-3]/.test(column) == true) {
 sect = 4
}
if (/[d-f]/.test(row) == true && /[4-6]/.test(column) == true) {
 sect = 5
}
if (/[d-f]/.test(row) == true && /[7-9]/.test(column) == true) {
 sect = 6
}
if (/[g-i]/.test(row) == true && /[1-3]/.test(column) == true) {
 sect = 7
}
if (/[g-i]/.test(row) == true && /[4-6]/.test(column) == true) {
 sect = 8
}
if (/[g-i]/.test(row) == true && /[7-9]/.test(column) == true) {
 sect = 9
}


let boxcheck = ""

for (let i = 0; i < 9; i++) {
 
  if (puzzleString[box[sect][i] - 1] == value) {
   
    boxcheck = "true"
    return boxcheck
    break
  }
 
}

  }
/*solver*/

let coordinate = ['a1','a2','a3','a4','a5','a6','a7','a8','a9','b1','b2','b3','b4','b5','b6','b7','b8','b9','c1','c2','c3','c4','c5','c6','c7','c8','c9','d1','d2','d3','d4','d5','d6','d7','d8','d9','e1','e2','e3','e4','e5','e6','e7','e8','e9','f1','f2','f3','f4','f5','f6','f7','f8','f9','g1','g2','g3','g4','g5','g6','g7','g8','g9','h1','h2','h3','h4','h5','h6','h7','h8','h9','i1','i2','i3','i4','i5','i6','i7','i8','i9'] 

/*pencilfunction*/
function pencilArr(puzzleString) {

let pencil = []
for (let j = 0; j <= 80; j++) {
pencil.push([])
if (puzzleString[j] != ".") {
  pencil[j].push("solved")
  pencil[j].push(puzzleString[j])
}
 else {
for (let i = 1; i <= 9; i++) {
  
let pencilRegion = checkRegionPlacement2(puzzleString, coordinate[j][0], coordinate[j][1], i)
let pencilColumn = checkColPlacement2(puzzleString, coordinate[j][0], coordinate[j][1], i)
let pencilRow = checkRowPlacement2(puzzleString, coordinate[j][0], coordinate[j][1], i)


if (pencilRegion != 'true' && pencilColumn != 'true' && pencilRow != 'true') {
  pencil[j].push(i)
  
}
}
}
 
}
  return pencil
}

/*find naked singles*/
function solveNaked(arr, puzzleString) {

let solvedNaked = ''
let newArr = []
for (let j = 0; j <= 80; j++) {
 
 /*maybe check since added to the solved array*/
  let checkSolved = arr[j].indexOf('solved')
   if (arr[j].length ==1 && checkSolved == -1) {
  
    
    let split = puzzleString.split('')
    
    
   
    const insert = (arr, index, newItem) => [
  
  ...arr.slice(0, index),
  // inserted item
  newItem,
  
  ...arr.slice(index + 1)
]
newArr = insert(split, j, arr[j][0])
     
   
    puzzleString = newArr.join("")
   
   }
  
     
 } 
 
  return puzzleString
}


/*find hidden singles*/

/*check hidden single column*/
function checkColPencil(puzzleString, row, column, value){
let flatten = []
let col = { 1: [1,10,19,28,37,46,55,64,73],
2: [2,11,20,29,38,47,56,65,74],
3: [3,12,21,30,39,48,57,66,75],
4: [4,13,22,31,40,49,58,67,76],
5: [5,14,23,32,41,50,59,68,77],
6: [6,15,24,33,42,51,60,69,78],
7: [7,16,25,34,43,52,61,70,79],
8: [8,17,26,35,44,53,62,71,80],
9: [9,18,27,36,45,54,63,72,81]}

let colcheck = ""
let checkarray = []

for (let i = 0; i < 9; i++) {
 
     
   for (let j = 0; j < value.length; j++) {   
    checkarray.push(puzzleString[col[column][i] - 1].filter(function(x) {return x == value[j]}))
  flatten = checkarray.flat()
   }
   
   
    
  }
 
let uniqueCol = flatten.filter(i => flatten.filter(j => i === j).length === 1)
return uniqueCol[0]
}

/*rowpencil*/

function checkRowPencil(puzzleString, row, column, value){
  let flatten = []
  let rww = { a: [1,2,3,4,5,6,7,8,9],
b: [10,11,12,13,14,15,16,17,18],
c: [19,20,21,22,23,24,25,26,27],
d: [28,29,30,31,32,33,34,35,36],
e: [37,38,39,40,41,42,43,44,45],
f: [46,47,48,49,50,51,52,53,54],
g: [55,56,57,58,59,60,61,62,63],
h: [64,65,66,67,68,69,70,71,72],
i: [73,74,75,76,77,78,79,80,81]}
 

let checkarray = []

for (let i = 0; i < 9; i++) {
 
     
   for (let j = 0; j < value.length; j++) {   
    checkarray.push(puzzleString[(rww[row][i])-1].filter(function(x) {return x == value[j]}))
  flatten = checkarray.flat()
   }
   
   
    
  }
 
let uniqueRow = flatten.filter(i => flatten.filter(j => i === j).length === 1)
return uniqueRow[0]
}

/*region pencil*/

function checkRegionPencil(puzzleString, row, column, value){
  let flatten = []
 let box = {1: [1,2,3,10,11,12,19,20,21],
2: [4,5,6,13,14,15,22,23,24],
3: [7,8,9,16,17,18,25,26,27],
4: [28,29,30,37,38,39,46,47,48],
5: [31,32,33,40,41,42,49,50,51],
6: [34,35,36,43,44,45,52,53,54],
7: [55,56,57,64,65,66,73,74,75],
8: [58,59,60,67,68,69,76,77,78],
9: [61,62,63,70,71,72,79,80,81]}
 
 let sect = ""

if (/[a-c]/.test(row) == true && /[1-3]/.test(column) == true) {
 sect = 1
}
if (/[a-c]/.test(row) == true && /[4-6]/.test(column) == true) {
 sect = 2
}
if (/[a-c]/.test(row) == true && /[7-9]/.test(column) == true) {
 sect = 3
}
if (/[d-f]/.test(row) == true && /[1-3]/.test(column) == true) {
 sect = 4
}
if (/[d-f]/.test(row) == true && /[4-6]/.test(column) == true) {
 sect = 5
}
if (/[d-f]/.test(row) == true && /[7-9]/.test(column) == true) {
 sect = 6
}
if (/[g-i]/.test(row) == true && /[1-3]/.test(column) == true) {
 sect = 7
}
if (/[g-i]/.test(row) == true && /[4-6]/.test(column) == true) {
 sect = 8
}
if (/[g-i]/.test(row) == true && /[7-9]/.test(column) == true) {
 sect = 9
}


 

let checkarray = []

for (let i = 0; i < 9; i++) {
    
     
   for (let j = 0; j < value.length; j++) {   
    checkarray.push(puzzleString[box[sect][i] - 1].filter(function(x) {return x == value[j]}))
  flatten = checkarray.flat()
   }
   
   
    
  }
 
let uniqueRegion = flatten.filter(i => flatten.filter(j => i === j).length === 1)
return uniqueRegion[0]
}

/*hidden solver*/

function hiddenSolve(arr, puzzleString) {
let hiddenarr = []
let pencil = []
for (let j = 0; j <= 80; j++) {


  
  let hiddenRegion = checkRegionPencil(arr, coordinate[j][0], coordinate[j][1], puzzleString[j])
let hiddenColumn = checkColPencil(arr, coordinate[j][0], coordinate[j][1], puzzleString[j])
let hiddenRow = checkRowPencil(arr, coordinate[j][0], coordinate[j][1], puzzleString[j])

let checkSolved = arr[j].indexOf('solved')
if (hiddenRegion == hiddenColumn && hiddenColumn == hiddenRow && hiddenRegion != undefined & hiddenColumn != undefined && hiddenRow != undefined && checkSolved == -1 && arr[j].length != 1){
 hiddenarr.push(coordinate[j])
  hiddenarr.push(hiddenRow)
  
  
 let split = puzzleString.split('')
    
     
     let solvedhidden = split.splice(j, 1, hiddenRow)
   
     puzzleString = split.join("")
  
}
 
}
 return puzzleString
}

/*recursivly solve the string*/
 let hiddenSolution = ''
 function pencilSolution(puzzleString) {

let newArr = pencilArr(puzzleString)
let nakedSolution = solveNaked(newArr, puzzleString)  
let hiddenSolution = hiddenSolve(newArr, nakedSolution) 


if (hiddenSolution == puzzleString) {
  
 finalSolution = hiddenSolution
 return hiddenSolution
}
   
   
  pencilSolution(hiddenSolution)
 
  return finalSolution
}

/*run solving function check invalid*/
let pencilFinal = pencilSolution(puzzleString)
let invalidFunction = invalid(puzzleString)

if (invalidFunction == 'invalid'){
  return 'invalid'
}
    
return pencilFinal
    
  }
}

//module.exports = SudokuSolver;
export default SudokuSolver