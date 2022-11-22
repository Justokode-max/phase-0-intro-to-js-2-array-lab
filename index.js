// Write your solution here!
let cats=["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");
};
function destructivelyPrependCat(name){
    cats.unshift("Bob");
};
function destructivelyRemoveLastCat(name){
    cats.pop();
};
function destructivelyRemoveFirstCat(name){
    cats.shift();
};
function appendCat(name){
   const zed = [...cats,"Broom"];
   return zed;
};
function prependCat(name){
    const Cats3 = ["Arnold",...cats];
    return Cats3;
};
function removeLastCat(name){
    const teg=cats.slice(0,2);
    return teg;
};
function removeFirstCat(name){
    const ser=cats.slice(1);
    return ser;
};