function setText(what,text)
{
  $(what).text(text);
}

function submitForm(formID)
{
  $(formID).submit(function(event)
  {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput = $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    setText(".person1",person1Input);
    setText(".person2",person2Input);
    setText(".animal",animalInput);
    setText(".exclamation",exclamationInput);
    setText(".verb",verbInput);
    setText(".noun",nounInput);
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
