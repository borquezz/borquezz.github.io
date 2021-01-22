function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("borquezmusic").src = "imgs/borquezmusic.png"
    document.getElementById("borquezmusic").className = "borquezmusicsmall"
    document.getElementById("intro").style.display = "none"
  } else {
    document.getElementById("borquezmusic").src = "imgs/me.png"
    document.getElementById("borquezmusic").className = "borquezmusicbig rounded-circle"
    document.getElementById("intro").style.display = "inline"
  }
}
function heightFunction(){
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById('firstcontainer').className = "container smallmargin"
  } else {
    document.getElementById('firstcontainer').className = "container bigmargin"
  }
}
function capitalizeWords(string){
  words=string.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i]=words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }
  var str = words.join(" ");
  return str;
}
var albums=[
  "noalbum",
  "zeros", "the-slow-rush", "the-new-abnormal",
  "future-nostalgia", "yhlqmdlg", "ungodly-hour",
  "djesse", "nectar", "after-hours",
  "circles", "folklore", "childish-gambino",
  "song-machine", "orca", "tengo-que-calmarme",
  "sawayama", "limbo", "man-on-the-moon",
  "el-ultimo-tour-del-mundo","roisin-machine"
];
var artist=[
  "noartist",
  "declan mckenna", "tame impala", "the strokes",
  "dua lipa", "bad bunny", "chloe x halle",
  "jacob Collier", "joji", "the weeknd",
  "mac miller", "taylor swift", "childish gambino",
  "gorillaz", "gus dapperton", "pol granch",
  "rina sawayama", "aminé", "kid cudi",
  "bad bunny","róisín murphy"
];
var songs = [
  "01the-key-to-life-on-earth","01be-an-astronaut","01rapture",
  "02posthumous-forgiveness","02borderline","02lost-in-yesterday",
  "03ode-to-the-mets","03selfless","03at-the-door",
  "04levitating","04pretty-please","04break-my-heart",
  "0525-8","05a-tu-merced","05solia",
  "06do-it","06ungodly-hour","06forgive-me",
  "07time-alone-with-you", "07sleeping-on-my-dreams", "07all-i-need",
  "08run", "08sanctuary", "08afterthought",
  "09after-hours", "09blinding-lights", "09in-your-eyes",
  "10good-news","10everybody","10blue-world",
  "11exile","11betty","11the-last-great-american-dynasty",
  "1212-38","1219-10","1242-26",
  "13momentary-bliss","13desole","13mls",
  "14first-aid","14post-humorous","14medicine",
  "15martes-13","15arrancame-la-piel","15millonario",
  "16fuck-this-world","16chosen-family","16tokyo-love-hotel",
  "17pressure-in-my-palms","17riri","17woodlawn",
  "18tequila-shots","18sad-people","18the-void",
  "19dakiti","19antes-que-se-acabe","19booker-t",
  "20murphys-law","20something-more","20simulation",
];
// var albumnoline = albums[19].replace(/-/g," ");
// console.log(capitalizeWords(albumnoline));

function changeModal(element){
  var modaltitle = document.getElementById('modal-title');
  var modalcover = document.getElementById('modal-cover');
  var song1 = document.getElementById('song1');
  var song2 = document.getElementById('song2');
  var song3 = document.getElementById('song3');
  var audio1 = document.getElementById('audio1');
  var audio2 = document.getElementById('audio2');
  var audio3 = document.getElementById('audio3');
  var src = element.src;
  albumname = src.match(/(?<=imgs\/)(.*?)(?=\.)/gi);
  console.log(albumname[0]);
  var k=1;
  for (var i = 0; i < albums.length; i++) {
    if (albums[i]==albumname[0]) {
      modaltitle.innerHTML = i + ".&nbsp" + capitalizeWords(albumname[0].replace(/-/g," ") + "&nbsp-&nbsp" + artist[i]);
      modalcover.src = src;
      for (var j = 0; j < songs.length; j++) {
        if (songs[j].startsWith("0"+i) && i<10) {
          var audio = songs[j].slice(2);
          var song = audio.replace(/-/g," ");
          switch (k) {
            case 1:
            audio1.src = "audio/"+albumname[0]+"/"+audio+".mp3";
            song1.innerHTML = song;
            break;
            case 2:
            audio2.src = "audio/"+albumname[0]+"/"+audio+".mp3";
            song2.innerHTML = song;
            break;
            case 3:
            audio3.src = "audio/"+albumname[0]+"/"+audio+".mp3";
            song3.innerHTML = song;
            break;
            default: k=1;
          } k++;
        } else if (songs[j].startsWith(i) && i>=10) {
          var audio = songs[j].slice(2);
          var song = audio.replace(/-/g," ");
          switch (k) {
            case 1:
            audio1.src = "audio/"+albumname[0]+"/"+audio+".mp3";
            song1.innerHTML = song;
            break;
            case 2:
            audio2.src = "audio/"+albumname[0]+"/"+audio+".mp3";
            song2.innerHTML = song;
            break;
            case 3:
            audio3.src = "audio/"+albumname[0]+"/"+audio+".mp3";
            song3.innerHTML = song;
            break;
            default: k=1;
          } k++;
        }
      }
      if (albums[i]=="childish-gambino") {modaltitle.innerHTML= i + ".&nbsp" + "3.15.20" + "&nbsp-&nbsp" + artist[i]}
      if (albums[i]=="djesse") {modaltitle.innerHTML= i + ".&nbsp" + "Djesse Vol. 3" + "&nbsp-&nbsp" + artist[i]}
      if (albums[i]=="roisin-machine") {modaltitle.innerHTML= i + ".&nbsp" + "Róisín Machine" + "&nbsp-&nbsp" + artist[i]}
    }
  }
}


// // When the user clicks on the button, open the modal
// function openModal() {
//   var modal = document.getElementById("myModal");
//
//   // Get the button that opens the modal
//   var img = document.getElementById("roisin-machine");
//
//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];
//
//   modal.style.display = "block";
// }
//
// // When the user clicks on <span> (x), close the modal
// function closeModal() {
//   var modal = document.getElementById("myModal");
//
//   // Get the button that opens the modal
//   var img = document.getElementById("roisin-machine");
//
//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];
//
//   modal.style.display = "none";
// }
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   var modal = document.getElementById("myModal");
//
//   // Get the button that opens the modal
//   var img = document.getElementById("roisin-machine");
//
//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];
//
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
