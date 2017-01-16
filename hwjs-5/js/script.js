var stopwatch = {
  tStart: new Date(),
  tCurnt: new Date(),
  tDfrns: new Date(),
  sTime: "",
  hour: "00",
  minute: "00",
  second: "00",
  miliseconds: "000",

  setTime: function (hh, mm, ss, ms) {
    var result = "";
    this.hour = digits(hh, 2);
    this.minute = digits(mm, 2);
    this.second = digits(ss, 2);
    this.miliseconds = digits(ms, 3);
    result = this.hour + ":" + this.minute + ":" + this.second + "." + this.miliseconds;
    return result;
  },

  startTimer: function (textNode, textNodeMilisec) {
    var targetTextNode        = document.getElementById(textNode);
    var targetTextNodeMilisec = document.getElementById(textNodeMilisec);
    this.tStart = new Date();
    this.tCurnt = this.tStart;
    this.sTime = digits(this.tCurnt.getHours(), 2) + ":" +
               digits(this.tCurnt.getMinutes(), 2) + ":" +
               digits(this.tCurnt.getSeconds(), 2);
    this.miliseconds = digits(this.tCurnt.getMilliseconds(), 3);
    // debugger;
    // console.log(this.sTime);
    targetTextNode.textContent = this.sTime;
    targetTextNodeMilisec.textContent = this.miliseconds;
  }

};

function digits (str, len) {
  return new Array(len + 1 - ("" + str).length).join("0") + str;
}

function startClick (){
  stopwatch.startTimer("watch", "miliseconds");
}
function pauseClick (){
  alert("Вывело что-то по Event = 'click'! (Это кнопка Pause)");
}
function resetClick (){
  alert("Вывело что-то по Event = 'click'! (Это кнопка Reset)");
}

var btnStart = document.getElementById("start");
var btnPause = document.getElementById("pause");
var btnReset = document.getElementById("reset");

btnStart.addEventListener('click', startClick);
btnPause.addEventListener('click', pauseClick);
btnReset.addEventListener('click', resetClick);

