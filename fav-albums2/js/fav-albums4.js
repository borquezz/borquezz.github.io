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
