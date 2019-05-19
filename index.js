function shout (greeting) {
  return greeting.toUpperCase();
}
function whisper (greeting) {
  return greeting.toLowerCase();
}
function logShout () {
  console.log("HELLO");
}
function logWhispher (greeting) {
  console.log(greeting.toLowerCase());
}
function sayHiToGrandma (greeting) {
  if(greeting === "hello") {
    return "I can't hear you!"
  } else if (greeting === "I love you, Grandma.") {
    return "I love you, too."
  } else {
    return "YES INDEED!"
  }
}
