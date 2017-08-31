var i = 0;

for (var i = 0; i <= 25; i++) {

if (i <= 1){
  console.log ("I am " + i + " strange loop.")
 }
else {
  console.log (`I am ${i} strange loop.`)
 }
}
function whileLoop(){
return Math.random () <= 10
}
while (whileLoop()){
console.log ("Done")
}

function doWhileLoop(){
return Math.random () <= 10
}
do {
console.log ("Done")
}
while (doWhileLoop()){
}
