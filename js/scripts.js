$(document).ready(function() {
  $("#blanks").click(function() {

    var words = [];
    var finalOutput;

    var theSentence = $("input#sentenceEntry").val();
    var splitSentences = theSentence.split(" ");

    splitSentences.forEach(function(splitSentence){
      if (splitSentence.length >= 3) {
        words.push(splitSentence);
      };
    });

    var reversed = words.reverse();
    finalOutput = reversed.join(" ");



    $(".finalSentence").append("<p>"+finalOutput+"</p>");

    event.preventDefault();
  });
});
