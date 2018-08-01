<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="css/main.css">
  <title>Harry Potter</title>
  <style>
body {
    background-color: black;
    text-align: center;
    color: white;
    font-family: Courier, Courier New;
    font-size: 30px;
}
</style>
 </head>
<body>
  <div class="container">
  <h1>Harry Potter Mad Libs</h1>
  
  <!--This is a comment in HTML-->
  <!--This game introduces students to arrays, sentence structure and some JS math functions. Students will customize it to their own stories. Coming up with the arrays will encourage students to expand their word choice and create lots of different characters.-->
  
  <script> 
  //This is a comment in JavaScript
  //Declare arrays of characters, nouns, adjectives for the sentence.
var randomCharacters = ["Harry", "Ginny", "Ron", "Neville", "Hagrid", "Dumbledore", "Malfoy", "Hermione"]; 
var randomFeelings = ["happy", "nervous", "scared", "curious", "angry", "upset", "sick", "calm"]
var randomVerbs = ["ran", "journeyed", "jumped", "drove", "flew", "wandered", "walked", "escaped", "safe"]; 
var randomAdjectives = ["magical", "stormy", "snowy", "ominous", "beautiful", "dirty", "mysterious"]; 
var randomNouns = ["castle", "kingdom", "dungeon", "chamber", "house", "village", "school", "forest"]
var randomAdjectives2 = ["giant", "tiny", "creepy", "cute", "scary", "ferocious"]
var randomNouns2 = ["monster", "creature", "troll", "werewolf", "dementor"]
// Pick a random character from the randomCharacters array: 
//Math.random() picks a random number between 0 and 1, 0 inclusive
//Math.floor() rounds that number down to the nearest integer
var randomCharacter = randomCharacters[Math.floor(Math.random() * randomCharacters.length)]; 
var randomCharacter2 = randomCharacters[Math.floor(Math.random() * (randomCharacters.length-1))]; 
//Pick a random feeling from the randomFeelings array:
var randomFeeling = randomFeelings[Math.floor(Math.random() * randomFeelings.length)];
// Pick a random verb from the randomVerbs array: 
var randomVerb = randomVerbs[Math.floor(Math.random() * randomVerbs.length)]; 
// Pick a random adjective from the randomAdjectives array:  
var randomAdjective = randomAdjectives[Math.floor(Math.random() *  randomAdjectives.length)];
//Pick a random noun from the randomNouns array:
var randomNoun = randomNouns[Math.floor(Math.random() * randomNouns.length)];
//Pick a second random adjective from the randomAdjectives2 array:
var randomAdjective2 = randomAdjectives2[Math.floor(Math.random() * randomAdjectives2.length)];
//Pick a second random noun from the randomNouns2 array:
var randomNoun2 = randomNouns2[Math.floor(Math.random() * randomNouns2.length)];
// Join all the random strings into a sentence: 
var randomSentence = randomCharacter + " and " + randomCharacter2 + " were feeling very " + randomFeeling + " so they " + randomVerb + " to the " + randomAdjective + " " + randomNoun + ". It was here that they found a " + randomAdjective2 + " " + randomNoun2 + "."
//Print sentence to document
document.write(randomSentence); 
</script>

  </div>
</body>
</html>
