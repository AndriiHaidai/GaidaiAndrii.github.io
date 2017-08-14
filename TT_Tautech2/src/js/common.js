/*jslint node: true */
/* jshint browser: true */
'use strict';

// Variables:
const canvas = document.getElementById('c1');
const ctx = canvas.getContext('2d');
var ctxWdth;
var ctxHght;

var ctxPdngBegX; // Отступ области отрисовки внутри Canvas слева
var ctxPdngEndX; // Отступ области отрисовки внутри Canvas справа
var ctxPdngBegY; // Отступ области отрисовки внутри Canvas сверху
var ctxPdngEndY; // Отступ области отрисовки внутри Canvas снизу

var xx; // начальная координата отрисовки графика внутри Canvas
var yy; // начальная координата отрисовки графика внутри Canvas
var XX; // конечная координата отрисовки графика внутри Canvas
var YY; // конечная координата отрисовки графика внутри Canvas

var pointsSrc = {x:[], y:[]}; // pointsSrc = [];
var pointsWork = {xVal:[], xLbl:[], yVal:[], yLbl:[]};
var point = 1;
// var nextTime = new Date().getTime() + 500;
// var pace = 200;
// var speed = 2;
var tgtX = 0;
var tgtY = 0;
var x = 0;
var y = 0;

var grd; // Градиент для отрисовки линии графика:

var start = null;

function initCanvas(){
  ctxWdth = 1100;
  ctxHght = 700;

  // canvas = document.getElementById('c1');
  canvas.width = ctxWdth;
  canvas.height = ctxHght;
  // ctx = canvas.getContext('2d');
  
  ctxPdngBegX = 100;  // Отступ области отрисовки внутри Canvas слева
  ctxPdngEndX = 100;  // Отступ области отрисовки внутри Canvas справа
  ctxPdngBegY = 50;   // Отступ области отрисовки внутри Canvas сверху
  ctxPdngEndY = 150;  // Отступ области отрисовки внутри Canvas снизу

  xx = ctxPdngBegX;                         // начальная координата отрисовки графика внутри Canvas
  yy = ctxPdngBegY;                         // начальная координата отрисовки графика внутри Canvas
  XX = ctxWdth - ctxPdngBegX - ctxPdngEndX; // конечная координата отрисовки графика внутри Canvas
  YY = ctxHght - ctxPdngBegY - ctxPdngEndY; // конечная координата отрисовки графика внутри Canvas

  ctx.setTransform(1,0,0,1,0,0); // Обнуляем трансформации.
  ctx.clearRect(0, 0, ctxWdth, ctxHght);
  ctx.translate(0, ctxHght);
  ctx.scale(1, -1);
  ctx.translate(ctxPdngBegX, ctxPdngEndY);

  grd = ctx.createLinearGradient(0, 0, XX, YY);
  grd.addColorStop(0, '#959959');
  grd.addColorStop(1, '#0296E9');
}

function readAPI(url, cb){
  var xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if ( this.readyState == 4 && this.status == 200 ) {
      cb(this);
    }
  };
  // xhr.open("GET", url, true);
  xhr.open("GET", url, true);
  xhr.send();
}

function getStringDate(_date) {
  var sDate = 
    String(_date.getUTCFullYear()) + '-' + 
    (new Array(3-String(_date.getUTCMonth()+1).length)).join('0') + String(_date.getUTCMonth()+1) + '-' + 
    (new Array(3-String(_date.getUTCDate()).length)).join('0') + String(_date.getUTCDate());
  
  return sDate;
}

function getAPIDataPoints(_qtyPoints) {
  // apiURL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5&date=2017-08-01';
  // apiURL = 'http://api.fixer.io/2000-01-17?base=USD';
  var ar = {x:[], y:[]};
  var x, y;
  var resp;
  var apiURL;
  var date;
  var sDate;

  date = new Date();
  sDate = getStringDate(date);
  apiURL = 'http://api.fixer.io/' + sDate + '?base=USD';

  readAPI(apiURL, function(xhr){
    resp = JSON.parse(xhr.responseText);
    console.log('resp: ', resp);
  });

  for (var i = 0; i <= _qtyPoints; i++) {
    x = (i * (XX/_qtyPoints));
    date.setUTCDate(date.getUTCDate()-1);
    // x = getStringDate(date);
    y = accuracy(20 + 3*Math.sin(i) + 5*Math.random(), 4);
    ar.x.push(x);
    ar.y.push(y);
  }
  return ar;
}

function getRandomDataPoints(_qtyPoints, _hgt) {
  var ar = {x:[], y:[]};
  var hgtBeg = 50*Math.random(); // 30
  var hgtEnd = _hgt ? _hgt : (70-hgtBeg)/_qtyPoints*Math.random(); //500
  var x;
  var y;

  for (var i = 0; i <= _qtyPoints; i++) {
    x = i * (XX/_qtyPoints);
    // y = Math.round( (20+hgtBeg + 3*Math.sin(i) + hgtEnd*i + 5*Math.random())*10000 )/10000;
    y = accuracy(20+hgtBeg + 3*Math.sin(i) + hgtEnd*i + 5*Math.random(), 4);
    ar.x.push(x);
    ar.y.push(y);
  }
  return ar;
}


var grid = {};
var gridScaled = {
  Beg: 0,
  End: 0,
  stepY: 0,
  xVal: [],
  xLbl: [],
  yVal: [],
  yLbl: []
};
function countScaledGrid(ptsa, _accuracy) {
  var accu = _accuracy ? _accuracy : 4;
  var i;
  var ValMid;
  var ValMidOrd = 0;   // Порядок значений

  // Верхняя Масштабированная линия сетки:
  // var ValMax = Math.ceil(Math.max.apply(null, yPoints));
  var ValMax = Math.ceil(Math.max.apply(null, ptsa.y));
  var ValMaxOrd = 0;
  var ValMaxTmp = ValMax;
  while ( ValMaxTmp > 9) {
    ValMaxOrd++;
    ValMaxTmp = Math.ceil(ValMaxTmp/10);
  }
  ValMaxTmp *= Math.pow(10,ValMaxOrd);
  grid.End = ValMaxTmp;

  
  // Нижняя Масштабированная линия сетки:
  var ValMin = Math.floor(Math.min.apply(null, ptsa.y));
  var ValMinOrd = 0;
  var ValMinTmp = ValMin;
  while ( ValMinTmp > 9) {
    ValMinOrd++;
    ValMinTmp = Math.floor(ValMinTmp/10);
  }
  ValMinTmp *= Math.pow(10, ValMinOrd);
  grid.Beg = ValMinTmp; // Math.floor(ValMinTmp/Math.pow(10,ValMaxOrd))*Math.pow(10,ValMaxOrd);
  
  // Размах данных:
  var ValDifOrd; // Порядок Амплитуды значений.
  var ValDif = ValMaxTmp - ValMinTmp;            // Величина Амплитуды значений.
  var ValDifTmp = ValDif;
  ValDifOrd = 0;
  while ( ValDifTmp > 9 ) {
    ValDifOrd++;
    ValDifTmp = Math.floor(ValDifTmp/10);
  }
  grid.amplitude = ValDifTmp * Math.pow(10, ValDifOrd);

  // Шаг сетки по оси Y:
  if ( grid.amplitude <= 1.2*Math.pow(10, ValMaxOrd) ) {
    grid.Beg = ValMinTmp;
    grid.End = ValMaxTmp;
  }

  grid.stepY = Math.pow(10, ValDifOrd);
  if ( grid.amplitude/Math.pow(10, ValDifOrd) < 3 ) {
    grid.stepY /=5;
  } else if ( grid.amplitude/Math.pow(10, ValDifOrd) < 5 ) {
    grid.stepY /=2;
  }
  grid.Beg += grid.stepY * accuracy((ValMin-ValMinTmp)/grid.stepY, 0);
  grid.End -= grid.stepY * accuracy((ValMaxTmp-ValMax)/grid.stepY, 0);

  // Смещение Сетки снизу нижней границы, если она не нулевая.
  grid.shift = (grid.Beg === 0) ? 0 : ((grid.Beg / Math.pow(10, ValMinOrd))-1)*Math.pow(10, ValMinOrd) + 7*Math.pow(10, ValMinOrd-1); 

  grid.scale = YY / (grid.End - grid.shift);

  gridScaled.Beg = accuracy((grid.Beg - grid.shift)*grid.scale, accu); // Math.floor((grid.Beg - grid.shift)*grid.scale *accu)/accu;
  gridScaled.End = accuracy((grid.End - grid.shift)*grid.scale, accu); // Math.floor((grid.End - grid.shift)*grid.scale *accu)/accu;
  gridScaled.stepY = accuracy(grid.stepY * grid.scale, accu); // Math.floor(grid.stepY * grid.scale *accu)/accu;
  for (var y = grid.Beg; y <= grid.End; y += grid.stepY) {
    gridScaled.yVal.push( accuracy((y-grid.shift)*grid.scale, accu) ); // Math.floor((y-grid.shift)*grid.scale *accu)/accu);
    gridScaled.yLbl.push('' + y);
  }
  
  for (i = 0; i < 10; i++) {
    gridScaled.xVal.push(i/9*XX);
    gridScaled.xLbl.push( '' + ptsa.x[findClosestPoint(gridScaled.xVal[i], ptsa.x)] );
  }
  
  return gridScaled;

}

function accuracy(x, acc, method) { 
  var met = method ? method : 'floor';

  if (met === 'floor') {
    return Math.floor(x*Math.pow(10, acc))/Math.pow(10, acc);
  } else if (met === 'ceil') {
    return Math.ceil(x*Math.pow(10, acc))/Math.pow(10, acc);
  }
}

function countScaledChart(ptsa, _accuracy) {
  var accu = _accuracy ? _accuracy : 4;
  var ar = {
    xVal: [],
    xLbl: [],
    yVal: [],
    yLbl: []
  };

  ar.xVal = ptsa.x.map( x => accuracy(x, accu) );
  ar.xLbl = ptsa.x.map( x => String( accuracy(x, accu) ) );
  ar.yVal = ptsa.y.map( y => accuracy( (y-grid.shift)*grid.scale, accu ) );
  ar.yLbl = ptsa.y.map( y => String( accuracy(y, accu) ) );

  return ar;
}

function drawGrid(_grid){
  var i;
  // Фон под отрисовку: 2 строки:
  // ctx.fillStyle = '#18223B';
  // ctx.fillRect(0,0, XX,YY);
  
  ctx.strokeStyle = "#424A5E";
  ctx.font = 'normal normal 100 14px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#fff';

  // линия сетки Y=0:
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(XX, 0);
  ctx.stroke();
  ctx.closePath();

  // Расчитанные линии сетки:
  var xShift = -0.5*ctxPdngBegX;
  var xWidth = 0.8*ctxPdngBegX;
  for (i = 0; i <= _grid.yVal.length - 1; i++) {
    ctx.beginPath();
    ctx.moveTo(0, _grid.yVal[i]);
    ctx.lineTo(XX, _grid.yVal[i]);
    ctx.stroke();
    ctx.closePath();

    ctx.scale(1, -1); // >>> Подписи оси Y:
    ctx.fillText(_grid.yLbl[i], xShift, -_grid.yVal[i], xWidth);
    ctx.scale(1, -1); // <<< Подписи оси Y.
  }
  
  var x, text; // >>> Подписи оси X:
  xWidth = (1/_grid.xVal.length)*XX;
  ctx.font = 'normal normal 100 10px Arial';
  ctx.scale(1, -1);
    for (i = 0; i < _grid.xVal.length; i++) {
      ctx.fillText(_grid.xLbl[i], _grid.xVal[i], 30, xWidth);
    }
  ctx.scale(1, -1); // <<< Подписи оси X.
}

function drawCurve(ctx, ptsa, _tension, isClosed, numOfSegments, showPoints, _strokeStile) {
  ctx.strokeStyle = _strokeStile;
  
  showPoints  = showPoints ? showPoints : false;

  ctx.beginPath();
  drawLines(ctx, getCurvePoints(ptsa, _tension, isClosed, numOfSegments));

  ctx.stroke();
  if (showPoints) {
    ctx.beginPath();
    for(var i = 0; i < ptsa.xVal.length - 1; i++) {
      ctx.fillRect(ptsa.xVal[i] - 1, ptsa.yVal[i] - 1, 4, 4);
    }
    ctx.closePath();
  }

} // Зависимости: (drawLines, getCurvePoints)

function getCurvePoints(pts, _tension, isClosed, numOfSegments) {

    // use input value if provided, or use a default value   
    var __tension = (typeof _tension != 'undefined') ? _tension : 0.5;
    isClosed = isClosed ? isClosed : false;
    numOfSegments = numOfSegments ? numOfSegments : 16;

    var _pts = {x:[], y:[]}, res = {x:[], y:[]};    // clone array
    var x, y;                      // our x,y coords
    var t1x, t2x, t1y, t2y;        // tension vectors
    var c1, c2, c3, c4;            // cardinal points
    var st, t, i;                  // steps based on num. of segments

    // clone array so we don't change the original
    _pts.x = pts.xVal.slice(0);
    _pts.y = pts.yVal.slice(0);

    // The algorithm require a previous and next point to the actual point array.
    // Check if we will draw closed or open curve.
    // If closed, copy end points to beginning and first points to end
    // If open, duplicate first points to befinning, end points to end
    if (isClosed) {
        _pts.x.unshift(pts.xVal[pts.xVal.length - 1]);
        _pts.y.unshift(pts.yVal[pts.yVal.length - 1]);
        _pts.x.unshift(pts.xVal[pts.xVal.length - 1]);
        _pts.y.unshift(pts.yVal[pts.yVal.length - 1]);
        _pts.x.push(pts.xVal[0]);
        _pts.y.push(pts.yVal[0]);
    }
    else {
        _pts.x.unshift(pts.xVal[0]);   //copy 1. point and insert at beginning
        _pts.y.unshift(pts.yVal[0]);
        _pts.x.push(pts.xVal[pts.xVal.length - 1]); //copy last point and append
        _pts.y.push(pts.yVal[pts.yVal.length - 1]);
    }

    // ok, lets start..

    // 1. loop goes through point array
    // 2. loop goes through each segment between the 2 pts + 1e point before and after
    for (i=1; i < (_pts.x.length - 2); i++) {
        for (t=0; t <= numOfSegments; t++) {

            // calc tension vectors
            t1x = (_pts.x[i+1] - _pts.x[i-1]) * __tension;
            t2x = (_pts.x[i+2] - _pts.x[i]) * __tension;

            t1y = (_pts.y[i+1] - _pts.y[i-1]) * __tension;
            t2y = (_pts.y[i+2] - _pts.y[i]) * __tension;

            // calc step
            st = t / numOfSegments;

            // calc cardinals
            c1 =   2 * Math.pow(st, 3)  - 3 * Math.pow(st, 2) + 1; 
            c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2); 
            c3 =       Math.pow(st, 3)  - 2 * Math.pow(st, 2) + st; 
            c4 =       Math.pow(st, 3)  -     Math.pow(st, 2);

            // calc x and y cords with common control vectors
            x = c1 * _pts.x[i]     + c2 * _pts.x[i+1] + c3 * t1x + c4 * t2x;
            y = c1 * _pts.y[i]     + c2 * _pts.y[i+1] + c3 * t1y + c4 * t2y;

            //store points in array
            res.x.push(x);
            res.y.push(y);

        }
    }

    return res;
}

function drawLines(ctx, pts) {
    ctx.moveTo(pts.x[0], pts.y[0]);
    for ( var i=1; i<pts.x.length-1; i++) {
      ctx.lineTo(pts.x[i], pts.y[i]);
    }
}

// Найти ближайшую правую точку x:
// Формат массива: [x0,y0, x1,y1, ... xN,yN]
function findClosestPoint(x, arPoints, _left, _right) {
  var points = arPoints.length > 0 ? arPoints : pointsWork.xVal;
  var left = _left ? _left : 0;
  // var right = _right ? _right : qtyPoints*2;
  var right = _right ? _right : points.length-1;
  var middle;
  var k;

  while (left <= right) {
    middle = Math.ceil((left+right)/2);
    // middle = Math.ceil(middle/2)*2; // Делаем число четным "вправо".
    if ( points[middle] === x ) {
      break; // Остановиться с результатом x.
    } else if ( points[middle] > x ) {
      right = middle - 1;
    } else if ( points[middle] < x ) {
      left = middle + 1;
    }
  }

  if ( Math.abs(x - points[0]) < Math.abs(x - points[1]) ) {
    k = 0; // Костыль для отрисовки нулевой точки.
  } else {
    k = Math.max(left, middle); // Отрисовка ближайшей правой точки.
  }
  
  return k;
}

function drawVertical(ptsa, _x) {
  const y1 = -40;       // Отступ первой выноски вниз от области рисования графика.
  const widthVert = 3; // Толщина вертикальной линии с выносками.
  var x = _x;
  var y2; // Высота второй выноски - на графике.
  var k = findClosestPoint(x, ptsa.xVal);
  
  x = ptsa.xVal[k];
  y2 = ptsa.yVal[k];
  var calloutText1 = ptsa.xLbl[k];
  var calloutText2 = ptsa.yLbl[k];

  ctx.fillStyle = '#4A90E2';
  ctx.fillRect(x - widthVert/2, y1, widthVert, YY-y1);
  drawCallout(x, y1, widthVert, calloutText1, '', '12px Arial', '#4A90E2', '#18223B', 20,8,4, false);
  drawCallout(x, y2, widthVert, calloutText2, '', '12px Arial', '#3CC182', '#3CC182', 20,8,4, true);
}

function drawCallout(x, y, rBullet, text1, text2, font, strokeStyle, fillStyle, R_, r_, r2_, toTop_) {
  ctx.strokeStyle = strokeStyle;
  ctx.fillStyle = fillStyle;
  ctx.lineWidth = '1';
  ctx.font = font; // Первым должен идти размер шрифта!

  var toTop = toTop_ ? -1 : 1; // Направление выноски вверх/вниз;
  var R = R_ ? R_ : 16;
  var r = r_ ? r_ : R/2;
  var r2 = r2_ ? r2_ : r/2;

  var fz = parseInt(font); // font size
  var lh = 1.4;            // line height
  // Callout box Width and Height:
  var H = r + r2 + fz + ( text2 ? fz*lh : 0 );
  var W = r*2 + Math.max(ctx.measureText(text1).width, ctx.measureText(text2).width);
      W = Math.max(W, H*2, 80);

  var w = W/2 - R - r;
  var h = H - r - r2;
  
  var xc, yc; // x.control - Координаты контрольной точки для дуги;
  var xe, ye; // x.end     - Координаты "последней" точки;


  ctx.beginPath();

  xe = x;
  ye = y;
  ctx.moveTo(xe, ye);

  xc = xe;
  yc = ye - R*toTop;
  xe = xc + R;
  ye = yc;
  ctx.arcTo(xc, yc, xe, ye, R, true);

  xe = xe + w;
  ye = ye;
  ctx.lineTo(xe, ye);

  xc = xe + r;
  yc = ye;
  xe = xc;
  ye = yc - r*toTop;
  ctx.arcTo(xc, yc, xe, ye, r, true);

  xe = xe;
  ye = ye - h*toTop;
  ctx.lineTo(xe, ye);

  xc = xe;
  yc = ye - r2*toTop;
  xe = xc - r2;
  ye = yc;
  ctx.arcTo(xc, yc, xe, ye, r2, true);

  xe = xe - W + r2*2;
  ye = ye;
  ctx.lineTo(xe, ye);

  xc = xe - r2;
  yc = ye;
  xe = xc;
  ye = yc + r2*toTop;
  ctx.arcTo(xc, yc, xe, ye, r2, true);

  xe = xe;
  ye = ye + h*toTop;
  ctx.lineTo(xe, ye);

  xc = xe;
  yc = ye + r*toTop;
  xe = xc + r;
  ye = yc;
  ctx.arcTo(xc, yc, xe, ye, r, true);

  xe = xe + w;
  ye = ye;
  ctx.lineTo(xe, ye);

  xc = xe + R;
  yc = ye;
  xe = xc;
  ye = yc + R*toTop;
  ctx.arcTo(xc, yc, xe, ye, R, true);

  ctx.stroke();
  ctx.fill();

  // Оси перевернуты, чтобы рисовать графики правильно, поэтому текст нужно отзеркалить:
  ctx.scale(1, -1);
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ctx.fillStyle = "#fff";
  ctx.fillText(text1, x, -y + (R + r + fz/2 )*toTop, W);
  if (text2) {ctx.fillText(text2, x, -y + (R + r + fz/2 + fz*lh )*toTop, W);}
  ctx.scale(1, -1);


  // Соединительный кружок на конце выноски;
  ctx.beginPath();
  ctx.moveTo(x + rBullet, y - rBullet*0.5);
  ctx.arc(x, y - rBullet*0.5, rBullet, 0, 2*Math.PI);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.lineWidth = '1';
  ctx.stroke();
}


var tension = 0.5;
initCanvas();

// Make some points:
// Формат массива: [x0,y0, x1,y1, ... xN,yN]
var qtyPoints = 90;
// pointsSrc = getRandomDataPoints(qtyPoints);
pointsSrc = getAPIDataPoints(qtyPoints);

gridScaled = countScaledGrid(pointsSrc);
pointsWork = countScaledChart(pointsSrc);


drawGrid(gridScaled);
drawCurve(ctx, pointsWork, tension, false, false, false, grd);
drawVertical(pointsWork, 0);

canvas.addEventListener('mousemove', function (e) {
  var mouseX = e.clientX - canvas.getBoundingClientRect().left - ctxPdngBegX;
  var mouseY = e.clientY - canvas.getBoundingClientRect().top  - ctxPdngBegY;
  if ( 0 < mouseX && mouseX < XX && 0 < mouseY && mouseY < YY ) {

    initCanvas();
    drawGrid(gridScaled);
    drawCurve(ctx, pointsWork, tension, false, false, false, grd);
    drawVertical(pointsWork, mouseX);
  }
});


