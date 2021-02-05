//sound
function triggerSound(key) {
  switch (key) {
    case 'q':
    case 'Q':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "w":
    case "W":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "e":
    case "E":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "r":
    case "R":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "a":
    case "A":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "s":
    case "S":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "d":
    case "D":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "0":
      var note1 = new Audio('sounds/note1.wav');
      note1.play();
      break;
    case "1":
      var note2 = new Audio('sounds/note2.wav');
      note2.play();
      break;
    case "2":
      var note3 = new Audio('sounds/note3.wav');
      note3.play();
      break;
    case "3":
      var note4 = new Audio('sounds/note4.wav');
      note4.play();
      break;
    case "4":
      var note5 = new Audio('sounds/note5.wav');
      note5.play();
      break;
    case "5":
      var note6 = new Audio('sounds/note6.wav');
      note6.play();
      break;
    case "6":
      var note7 = new Audio('sounds/note7.wav');
      note7.play();
      break;
    default:
      console.log("按错啦");
  }
}

//animation
function triggerAnimation(key) {
  var activeButton = document.querySelector(".k" + key);
  if (activeButton != null) {
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}

//click
var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    triggerSound(this.innerHTML);
    triggerAnimation(this.innerHTML);
  });
}

//keypress
document.addEventListener("keydown", function(event) {
  triggerSound(event.key);
  triggerAnimation(event.key)
});

//彩蛋1
document.querySelector(".egg1").addEventListener("click", function() {
  var list = ['5', '2', '0', '1', '3', '1', '4'];
  var count = 0;
  var timer = setInterval(function() {
    if (count < list.length) {
      triggerSound(list[count]);
      triggerAnimation(list[count]);
      count++;
    } else {
      clearInterval(timer);
    }
  }, 520);
});

//彩蛋2
document.querySelector(".egg2").addEventListener("click", function() {
  var list = ['w', 'q', 'q'];
  var count = 0;
  var timer = setInterval(function() {
    if (count < list.length) {
      triggerSound(list[count]);
      triggerAnimation(list[count]);
      count++;
    } else {
      clearInterval(timer);
    }
  }, 520);
});

//BGM
var bgm = new Audio("sounds/bgm.mp3");
document.querySelector(".bgm").addEventListener("click", function() {
  if (bgm.paused) bgm.play();
  else bgm.pause();
});
