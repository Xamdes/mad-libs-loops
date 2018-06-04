//Sets the text using what to define what you are changing using the value given.
function setText(what,value)
{
  $(what).text(value);
}

function submitForm(formID)
{
  $(formID).submit(function(event)
  {
    //var begin = ["input#","."];
    var inputs = ["person1","person2","animal","exclamation","verb","noun"];
    inputs.forEach(function(input) {
      var value = $("input#"+input).val();
      setText("."+input,value);
    });
    // var person1Input = $("input#person1").val();
    // var person2Input = $("input#person2").val();
    // var animalInput = $("input#animal").val();
    // var exclamationInput = $("input#exclamation").val();
    // var verbInput = $("input#verb").val();
    // var nounInput = $("input#noun").val();

    // setText(".person1",person1Input);
    // setText(".person2",person2Input);
    // setText(".animal",animalInput);
    // setText(".exclamation",exclamationInput);
    // setText(".verb",verbInput);
    // setText(".noun",nounInput);
    showStory("#story");
    event.preventDefault();
  });
}

function showStory(showID)
{
  $(showID).show();
}

$(function()
{
  submitForm("#formOne");
});
