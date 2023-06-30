function fullScreen() {
    var div = document.getElementById("divframejitsi");
    var jitsi = document.getElementById("framejitsi");
    var botaoFS = document.getElementById("fullscreenButton");
    var botaoSS = document.getElementById("smallscreenButton");

    div.style.width = "90vw";
    div.style.height = "99vh";
    jitsi.style.width = "90vw";
    jitsi.style.height = "99vh";
    botaoFS.style.visibility = "collapse";
    botaoFS.style.zIndex = "50";
    botaoSS.style.visibility = "visible";
    botaoSS.style.zIndex = "100";
  }

function smallScreen() {
  var div = document.getElementById("divframejitsi");
  var jitsi = document.getElementById("framejitsi");
  var botaoFS = document.getElementById("fullscreenButton");
  var botaoSS = document.getElementById("smallscreenButton");

  div.style.width = "25vw";
  div.style.height = "35vh";
  jitsi.style.width = "25vw";
  jitsi.style.height = "35vh";
  div.style.justifyContent = "flex-end";
  div.style.alignItems = "flex-end";
  botaoFS.style.visibility = "visible";
  botaoFS.style.zIndex = "100";
  botaoSS.style.visibility = "collapse";
  botaoSS.style.zIndex = "50";
}