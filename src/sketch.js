var button;
var seed;
var input;
var word;
var poem = "";
function setup() {
  noCanvas();
  createFileInput(start);
}

function start(input) {
  var currentWord = 0;
  seed = select('#seed');
  submit = select('#submit')
  submit.mousePressed(function(){
    currentWord = 0 ;
    poem = "";
    if (input != undefined) {
      keys = split(seed.value(), "");
      words = splitTokens(input.data, [" ", ",", "."]);
      for (var i = 0; i < keys.length; i++) {
         key = keys[i];
        for (var j = currentWord; j < words.length; j++) {
          word = words[j]
          if (word[i] == key) {
            console.log(word);
            poem = poem + " " + word;
            currentWord = j + 1;
            break;
          }
        }
      }
      createP(poem);
    }
  })
}

// function draw() {
//
// }
