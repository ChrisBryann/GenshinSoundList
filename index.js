var genshinChar = "";
var audioName = "";
var textShadow = "";
var textColor = "";
var genshinAudio = false;

$('button').mouseover(function (event){
  genshinChar = charFinder(this.classList[0], 'images/hover', 'png');
  textShadow = $(this).css('text-shadow');
  textColor = $(this).css('color');
  $(this).css('background-image', 'url(' + genshinChar + ')').css('background-size', 'cover').css('text-shadow', 'none').css('color', 'rgba(0,0,0,0)');
});
$('button').mouseout(function(){
  $(this).css('background-image', '').css('background-size', '').css('text-shadow', textShadow).css('color', textColor);
});
$('button').click(function (){
  if (genshinAudio != false){
    genshinAudio.pause();
    genshinAudio.currentTime = 0;
  }
  audioName = charFinder(this.classList[0], 'sounds/sound', 'mp3');
  genshinAudio = new Audio(audioName);
  genshinAudio.play();
})

function charFinder(character, code, fileType){
  switch (character) {
    case 'klee':
      return code + '-klee.' + fileType;
      break;

    case 'jean':
      return code + '-jean.' + fileType;
      break;

    case 'diluc':
      return code + '-diluc.' + fileType;
      break;

    case 'venti':
      return code + '-venti.' + fileType;
      break;

    case 'eula':
      return code + '-eula.' + fileType;
      break;

    case 'mona':
      return code + '-mona.' + fileType;
      break;

    case 'albedo':
      return code + '-albedo.' + fileType;
      break;

    case 'childe':
      return code + '-childe.' + fileType;
      break;

    case 'keqing':
      return code + '-keqing.' + fileType;
      break;

    case 'qiqi':
      return code + '-qiqi.' + fileType;
      break;

    case 'zhongli':
      return code + '-zhongli.' + fileType;
      break;

    case 'xiao':
      return code + '-xiao.' + fileType;
      break;

    default:
      return;
  }
}
