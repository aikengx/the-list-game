function encryptString(str, baseRotor) {
  let rotor = [...baseRotor];
  encryptedString = rotor[alphabet.indexOf(str[0])];
  for (var i = 1; i < str.length; i++) {
    rotate(rotor);
    encryptedString += rotor[alphabet.indexOf(str[i])]; 
  }
  //console.log(encryptedString); //See encrypted string!
  return encryptedString;
};


function decryptString(str, baseRotor) {
  let rotor = [...baseRotor] 
  decryptedString = alphabet[rotor.indexOf(str[0])];
  for (var i = 1; i <= (str.length - 1); i++) {
    rotate(rotor);
    decryptedString += alphabet[rotor.indexOf(str[i])];
  }
  //console.log(decryptedString); //Show decrypted string!
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
  morsePlay(morseBuilder(encryptString(target.toLowerCase(), rotorI)));
  //console.log([target, targetLevel]); //See target and target rank level!
  objective = target.toLowerCase();
  return [target, targetLevel];
};
  

function stringToMorse(str) {
  strInMorse = "";
  for (var i = 0; i < str.length; i++) {
    strInMorse += morse[str[i].toLowerCase()].code + " ";
  }
  //console.log(strInMorse); //See morse code string!
};


function morseBuilder(str) {
  morse_files = [];
  for (var i = 0; i < str.length; i++) {
    morse_files.push(morse[str[i].toLowerCase()].sound);
  }
  //console.log(morse_files); //See morse audio file playlist!
  return morse_files;
};


function play_audio(arr) {
  soundEffect('typewriter.mp3');
  sound = new Howl({
    src: [audio_url+arr[0]],
    volume: 0.5,
    onplay: function() {
      //console.log(objective[objective.length - arr.length]); //See the clear text letter iteration!
      $('#' + arr[0].substring(0, 1)).toggleClass('key-on');
      morseStr += morse[arr[0].substring(0, 1)].code + " "; 
      $('#morse-code-letter').text(morseStr);
      $('#' + objective[objective.length - arr.length]).toggleClass('key-on');
    },
    onend: function() {
      $('#' + arr[0].substring(0, 1)).toggleClass('key-on');
      $('#' + objective[objective.length - arr.length]).toggleClass('key-on');
      arr.shift();
      if (arr.length > 0) {
        play_audio(arr);
        //console.log(`=> ${arr[0]}`);  //See the morse audio file played!
      }
    }
  });
  sound.play();
};


function morsePlay(arr) {
  let playlist = [...arr]
  play_audio(playlist)
};


function soundEffect(sound) {
  let soundfx = new Howl({
    src: [audio_url + sound]
    });
    soundfx.play()
};


function killOrder() {
  if (targetLevel === "") {
    soundEffect('buzzer.mp3');
    alert("YOU MUST ACQUIRE A TARGET FIRST!");
  } else {
    //console.log(objective); //See the objective variable!
    //console.log(points[targetLevel]); //See the targetLevel variable!
    var targetName = $('#killorder').val();
    $('#killorder').val("");
    //console.log(`targetName => ${targetName}`); //See the targetName variable!
    if (targetName == objective || targetName == "win") {
      //console.log(`points => ${points[targetLevel]}`);  //See the target value in points!
      playerScore.value += points[targetLevel];
      $('#score').text(playerScore.value);
      soundEffect('sniperreload.mp3');
      resetBoard();
    } else if (targetName == "" || targetName == "pass") {
      playerScore.value--;
      $('#score').text(playerScore.value);
      soundEffect('bulbbreak.mp3');
      resetBoard(); 
    } else if (targetName == "winner") {
      soundEffect('sniperreload.mp3');
      evalScore(maxScore);
    } else if (targetName == "loser") {
      soundEffect('bulbbreak.mp3');
      evalScore(minScore);
    } else if (targetName != objective || targetName == "lose") {
      playerScore.value -= points[targetLevel];
      $('#score').text(playerScore.value);
      soundEffect('bulbbreak.mp3');
      resetBoard(); 
    } else {
      console.log("All conditions should have been met up to this point");
    }
  evalScore(playerScore.value);
  }
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
    soundEffect('evacuation.mp3')
    toggleModalLose();
  } else if (score >= maxScore) {
    $('.scoreboard').css('color', 'yellowgreen');
    soundEffect('ilovetosinga.mp3')
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
};


function morseChart() {
  if (document.getElementById("morse-chart").style.cssText == "visibility: hidden;") {
    document.getElementById("morse-chart").style.visibility="visible";
  } else {
    document.getElementById("morse-chart").style.visibility="hidden";
  }
};


function toggleModalLose() {
  document.querySelector('.bg-modal-lose').style.display = "flex";
};


function toggleModalWin() {
  document.querySelector('.bg-modal-win').style.display = "flex";
};