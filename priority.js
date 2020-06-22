var submit = document.getElementById("submit");

submit.onclick = function(){
    var start = document.getElementById("age").value;
    var age = document.getElementById("age").value;
    var movement_loss = document.getElementById("movement_loss").value;
    var speech_loss = document.getElementById("speech_loss").value;
    var shortness_of_breath = document.getElementById("shortness_of_breath").value;
    var chest_pain = document.getElementById("chest_pain").value;
    var tiredness = document.getElementById("tiredness").value;
    var headache = document.getElementById("headache").value;
    var diarrhea = document.getElementById("diarrhea").value;
    var throat = document.getElementById("throat").value;
    var conjunctivitis = document.getElementById("conjunctivitis").value;
    var rash = document.getElementById("rash").value;
    var discolouration = document.getElementById("discolouration").value;
    var asthma = document.getElementById("asthma").value;
    var heart = document.getElementById("heart").value;
    var immunocompromise = document.getElementById("immunocompromise").value;
    var obesity = document.getElementById("obesity").value;
    var diabetes = document.getElementById("diabetes").value;
    var kidney = document.getElementById("kidney").value;
    var liver = document.getElementById("liver").value;

    var priority = 0;

    if(age >= 65)
    {
        priority+=5;
    }

    if(movement_loss)
    {
        priority+=10;
    }

    if(speech_loss)
    {
        priority+=10;
    }

    if(shortness_of_breath)
    {
        priority+=10;
    }

    if(chest_pain)
    {
        priority+=10;
    }

    if(tiredness)
    {
        priority+=2;
    }

    if(headache)
    {
        priority+=2;
    }

    if(diarrhea)
    {
        priority+=2;
    }

    if(throat)
    {
        priority+=2;
    }

    if(conjunctivitis)
    {
        priority+=2;
    }

    if(rash)
    {
        priority+=2;
    }

    if(discolouration)
    {
        priority+=2;
    }

    if(asthma)
    {
        priority+=5;
    }

    if(heart)
    {
        priority+=5;
    }

    if(immunocompromise)
    {
        priority+=5;
    }

    if(obesity)
    {
        priority+=5;
    }

    if(diabetes)
    {
        priority+=5;
    }

    if(kidney)
    {
        priority+=5;
    }

    if(liver)
    {
        priority+=5;
    }
    console.log(priority)
}