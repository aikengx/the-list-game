function encryptString(str, baseRotor) {
  let rotor = [...baseRotor];
  encryptedString = rotor[alphabet.indexOf(str[0])];
  for (var i = 1; i < str.length; i++) {
    //$('#' + str[i]).toggleClass('key-on'); 
    rotate(rotor);
    encryptedString += rotor[alphabet.indexOf(str[i])]; 
  }
  console.log(encryptedString);
  return encryptedString;
};


function decryptString(str, baseRotor) {
  let rotor = [...baseRotor] 
  decryptedString = alphabet[rotor.indexOf(str[0])];
  for (var i = 1; i <= (str.length - 1); i++) {
    rotate(rotor);
    decryptedString += alphabet[rotor.indexOf(str[i])];
  }
  console.log(decryptedString);
};


function rotate(rotor) {
    click = rotor.pop();
    rotor.unshift(click);
    return rotor;
};


function rotorGenerator(arr) {
    let ctr = arr.length, temp, index;
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arr[ctr];
      arr[ctr] = arr[index];
      arr[index] = temp;
    }
    return arr;
};


function randomSelector(arr) {
  var randomPick = Math.floor(Math.random() * ((arr.length - 1) + 1))
  return arr[randomPick];
};


function targetBuilder() {
  playerScore.init = true;
  let target = "";
  let targetArrays = [ranks, names, surnames];
  for (var i = 0; i < targetArrays.length; i++) {
    if (i == 0) {
      let targetDetails = randomSelector(targetArrays[i]);
      target += targetDetails.rank;
      targetLevel = targetDetails.level;
    } else {
      target += randomSelector(targetArrays[i]);
    }
  }
  stringToMorse(target);
  //encryptString(target.toLowerCase(), rotorI);
  morsePlay(morseBuilder(encryptString(target.toLowerCase(), rotorI)));
  /*
  let reversedObjective  = lightBoard(objective.toLowerCase());
  console.log(reversedObjective[arr.length]);
  $('#' + reversedObjective[0]).toggleClass('key-on'); 
  */
  console.log([target, targetLevel]);
  //$('#score').text(points[targetLevel]);
  objective = target.toLowerCase();
  return [target, targetLevel];
};
  

function stringToMorse(str) {
  strInMorse = "";
  for (var i = 0; i < str.length; i++) {
    strInMorse += morse[str[i].toLowerCase()].code + " ";
  }
  console.log(strInMorse);
  //morseStr = strInMorse;
};


function morseBuilder(str) {
  morse_files = [];
  for (var i = 0; i < str.length; i++) {
    morse_files.push(morse[str[i].toLowerCase()].sound);
  }
  console.log(morse_files);
  return morse_files;
};


function play_audio(arr) {
  //console.log(`objective => ${objective}`);
  //console.log(`=> ${target}`)
  //debugger
  //$('body').removeClass('key-on');
  //debugger
  soundEffect('typewriter.mp3');
  /*
  let printing = new Howl({
  src: [audio_url + 'typewriter.mp3']
  });
  printing.play()
  */
  //
  sound = new Howl({
    src: [audio_url+arr[0]],
    volume: 0.5,
    onplay: function() {
      //console.log(morseStr);
      console.log(objective[objective.length - arr.length]);
      //console.log(arr.length);
      //let reversedObjective  = lightBoard(objective.toLowerCase());
      //console.log(reversedObjective[arr.length]);
      
      //$('#' + reversedObjective[arr.length]).toggleClass('key-on');
      $('#' + arr[0].substring(0, 1)).toggleClass('key-on');
      morseStr += morse[arr[0].substring(0, 1)].code + " "; 
      $('#morse-code-letter').text(morseStr);
      $('#' + objective[objective.length - arr.length]).toggleClass('key-on');
    },
    onend: function() {
      //let reversedObjective  = lightBoard(objective.toLowerCase());
      //console.log(reversedObjective[arr.length]);
      //!console.log(objective[arr.length - 1])
      //$('#' + reversedObjective[arr.length]).toggleClass('key-on');
      //$('#' + objective[0].toLowerCase()).toggleClass('key-on');
      $('#' + arr[0].substring(0, 1)).toggleClass('key-on');
      $('#' + objective[objective.length - arr.length]).toggleClass('key-on');
      arr.shift();
      //reversedObjective.pop();
      if (arr.length > 0) {
        play_audio(arr);
        console.log(`=> ${arr[0]}`);
        //$('#' + arr[0].substring(0, 1)).toggleClass('key-on');
        //arr.shift(); 
      }
    }
  });
  sound.play();
  //morseStr = "";
}


function morsePlay(arr) {
  //console.log(`=> ${target}`);
  let playlist = [...arr]
  //console.log(`objective => ${objective}`); 
  play_audio(playlist)
};

/*
function typeWriter() {
  let typing = new Howl({
    src: [audio_url + 'typewriter-key.mp3']
    });
    typing.play()
};
*/

function soundEffect(sound) {
  let soundfx = new Howl({
    src: [audio_url + sound]
    });
    soundfx.play()
};


function killOrder() {
  //console.log(targetLevel);
  if (targetLevel === "") {
    soundEffect('buzzer.mp3');
    alert("YOU MUST ACQUIRE A TARGET FIRST!");
  } else {
    console.log(objective);
    console.log(points[targetLevel]);
    var targetName = $('#killorder').val();
    $('#killorder').val("");
    //i$('#killorder').trigger("reset");
    console.log(`targetName => ${targetName}`);
    //alert(targetName);
    if (targetName == objective) {
      console.log(`points => ${points[targetLevel]}`);
      playerScore.value += points[targetLevel];
      //evalScore(playerScore.value);
      $('#score').text(playerScore.value);
      soundEffect('sniperreload.mp3');
      //alert(`YOU WON ${points[targetLevel]} POINTS!`);
      resetBoard();
    } else if (targetName == "") {
      //alert(`YOU LOST 1 POINT!`);
      playerScore.value--;
      //evalScore(playerScore.value);
      $('#score').text(playerScore.value);
      soundEffect('bulbbreak.mp3');
      resetBoard(); 
    } else {
      //alert(`YOU LOST ${points[targetLevel]} POINTS!`);
      playerScore.value -= points[targetLevel];
      //evalScore(playerScore.value);
      $('#score').text(playerScore.value);
      soundEffect('buzzer.mp3');
      resetBoard(); 
    }
  evalScore(playerScore.value);
  }
  //console.log(missionPoints);
};


function resetBoard() {
  objective = "";
  morseStr = "";
  targetLevel = "";
  playerScore.init = false;
  $('#morse-code-letter').text("");
};


function evalScore(score) {
  if (score <= minScore) {
    $('.scoreboard').css('color', 'orangered');
    toggleModalLose();
  } else if (score >= maxScore) {
    $('.scoreboard').css('color', 'yellowgreen');
    toggleModalWin();
  } else {
    switch(score) {
      case 0:
      case 1:
      case 2:
      case 3: 
        $('.scoreboard').css('color', 'orangered');
        break;
      case 4:
      case 5:
      case 6: 
        $('.scoreboard').css('color', 'yellow');
        break; 
      case 7:
      case 8:
      case 9: 
      case 10: 
        $('.scoreboard').css('color', 'yellowgreen');
        break;
    }
  }
}


function toggleModalLose() {
  document.querySelector('.bg-modal-lose').style.display = "flex";
}

function toggleModalWin() {
  document.querySelector('.bg-modal-win').style.display = "flex";
}