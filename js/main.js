$(document).ready(function() {

    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome){
        $('#iframeAudio').remove();
    } else {
        $('#playAudio').remove();
    }


    $('#score').text(playerScore.value);


    $('.missionbutton').click(function() {
        console.log(morseStr);
        console.log(targetLevel);
        console.log(objective);
        if (playerScore.value <= 0 || playerScore.value > 10 || playerScore.init == true) {
            soundEffect('buzzer.mp3');
            alert("YOU MUST SOLVE OR PASS ON THE GIVEN INTEL BEFORE PROCEEDING!");
        }  else {
            soundEffect('radiotune.mp3');
            targetBuilder();
        }
    });


    $('.killbutton').click(function() {
        killOrder();
    });


    document.querySelector('.close-lose').addEventListener("click", function() {
        document.querySelector('.bg-modal-lose').style.display = "none";
        location.reload(true);
    });
 
    document.querySelector('.close-win').addEventListener("click", function() {
        document.querySelector('.bg-modal-win').style.display = "none";
        location.reload(true);
    });


});