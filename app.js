let battlefield = createEmptyBattlefield();
let fourdeck = [0, 0, 0, 0];
let tripledeck = [0, 0, 0];
let doubledeck = [0, 0];
let singledeck = [0];

let firstFourdeck = shipGenerator(fourdeck);
let firstTripledeck = shipGenerator(tripledeck);
let secondTripledeck = shipGenerator(tripledeck);
let firstDoubledeck = shipGenerator(doubledeck);
let secondDoubledeck = shipGenerator(doubledeck);
let thirdDoubledeck = shipGenerator(doubledeck);
let firstSingledeck = shipGenerator(singledeck);
let secondSingledeck = shipGenerator(singledeck);
let thirdSingledeck = shipGenerator(singledeck);
let fourthSingledeck = shipGenerator(singledeck);


function getRandomInt(min, max) { min = Math.ceil(min); max = Math.floor(max); return Math.floor(Math.random() * (max - min + 1)) + min;}
function createEmptyBattlefield() {let x = 10, y = 10, battlefield = [10]; for (let i = 0; i < x; i++) { battlefield[i] = [10]; for(let j = 0; j < y; j++) {battlefield[i][j] = 0;};}; return battlefield;}


function shipGenerator(a){
let check = 0;
do{
    let direction = Math.round(Math.random()); //0- vertical, 1-horizontal
    let arr = a.slice();
    let X, Y;
    let q=0;
    do{
        X = getRandomInt(1, 8);
        Y = getRandomInt(1, 8);
     }
     while((arr.length + X)>9 || (arr.length + Y)>9);

    arr.forEach(i => {(direction !== 0) ? arr.splice(arr.indexOf(i), 1, [X++, Y]) : arr.splice(arr.indexOf(i), 1, [X, Y++]);});


arr.forEach(e => {
for(i = e[1]-1; i <= e[1]+1; i++){
    for( j = e[0] - 1; j <= e[0]+1; j++){
    if (battlefield[i][j] === 0){q++;}
}}});

if(q===a.length*9){arr.forEach(i=>{ battlefield[i[1]][i[0]] = 1;}); check = 1; console.log(arr); return arr;  }
}
while(check === 0);
}

    // if             (i[0] <= 0)                { checkX = i[0] ;       width = checkX  + 2;}
    // else if        (i[0]  > 9)                { checkX = i[0]  - 1;   width = checkX  + 2;}
    // else                                      { checkX = i[0]  - 1;   width = checkX + 3;}
  
    // if             (i[1] <= 0)                { checkY = i[1];       height = checkY + a.length + 1;}
    // else if        (i[1] + a.length > 9)      { checkY = i[1] - 1;   height = checkY + a.length + 1;}
    // else   
    // })
// if             (X <= 0)                { checkX = X;       width = checkX + 2;}
// else if        (X > 9)                 { checkX = X - 1;   width = checkX + 2;}
// else                                   { checkX = X - 1;   width = checkX + 3;}
  
// if             (Y <= 0)                { checkY = Y;       height = checkY + a.length + 1;}
// else if        (Y + a.length > 9)      { checkY = Y - 1;   height = checkY + a.length + 1;}
// else                                   { checkY = Y - 1;   height = checkY + a.length + 2;}

console.log(battlefield);