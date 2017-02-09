(function () {
'use strict';
})();

var btnStart = document.getElementById("btnStart");
var btnPause = document.getElementById("btnPause");
var btnReset = document.getElementById("btnReset");
var pageTime        = document.getElementById("watch");
var pageTimeMilisec = document.getElementById("miliseconds");

btnStart.addEventListener('click', startClick);
btnPause.addEventListener('click', pauseClick);
btnReset.addEventListener('click', resetClick);

var timerId;
var tStart;
var tDfrns = new Date();

var sTime;
var sMilisec;

resetTimerText();

function startTimer () {
}
function iterateTimer () {
  var tCurnt = new Date();
  tDfrns.setTime(tCurnt - tStart + (tCurnt.getTimezoneOffset()) * 60000);
  sTime = digits(tDfrns.getHours(), 2) + ":" + digits(tDfrns.getMinutes(), 2) + ":" + digits(tDfrns.getSeconds(), 2);
  sMilisec = digits(tDfrns.getMilliseconds(), 3);
  pageTime.textContent = sTime;
  pageTimeMilisec.textContent = sMilisec;
}

function pauseTimer () {
  if (btnPause.textContent === "Pause") {
    clearInterval(timerId);
    btnPause.textContent = "Continue";
  } else {
    btnPause.textContent = "Pause";
    var cumulatedMiliseconds = tDfrns.getTime()-tDfrns.getTimezoneOffset()*60000;
    tStart = new Date() - cumulatedMiliseconds;
    clearInterval(timerId);
    timerId = 0;
    timerId = setInterval( function () {
      iterateTimer();
    }, 1);
  }
}

function resetTimer () {
  clearInterval(timerId);
  timerId = 0;
  resetTimerText();
}

function resetTimerText () {
  pageTime.textContent = "00:00:00";
  pageTimeMilisec.textContent = "000";
}


function startClick () {
  tStart = new Date();
  timerId = setInterval( iterateTimer, 1);

  btnStart.setAttribute("disabled", "disabled");
  btnPause.removeAttribute("disabled");
  btnReset.removeAttribute("disabled");
}

function pauseClick () {
  pauseTimer();
}

function resetClick () {
  resetTimer();

  btnStart.removeAttribute("disabled");
  btnPause.setAttribute("disabled", "disabled");
  btnReset.setAttribute("disabled", "disabled");
  btnPause.textContent = "Pause";
}

function digits (str, len) {
  return new Array(len + 1 - ("" + str).length).join("0") + str;
}
