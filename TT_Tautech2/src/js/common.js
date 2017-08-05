/*jslint node: true */
/* jshint browser: true */
'use strict';

// requestAnim shim layer by Paul Irish
// window.requestAnimFrame = (function () {
//     return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function ( /* function */ callback, /* DOMElement */ element) {
//         window.setTimeout(callback, 1000 / 6);
//     };
// })();

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

var grd;

var points = [];
var xPoints = [];
var yPoints = [];
var point = 1;
// var nextTime = new Date().getTime() + 500;
// var pace = 200;
// var speed = 2;
var tgtX = 0;
var tgtY = 0;
var x = 0;
var y = 0;


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

  xx = ctxPdngBegX;           // начальная координата отрисовки графика внутри Canvas
  yy = ctxPdngBegY;           // начальная координата отрисовки графика внутри Canvas
  XX = ctxWdth - ctxPdngBegX - ctxPdngEndX; // конечная координата отрисовки графика внутри Canvas
  YY = ctxHght - ctxPdngBegY - ctxPdngEndY; // конечная координата отрисовки графика внутри Canvas

  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0, 0, ctxWdth, ctxHght);
  ctx.translate(0, ctxHght);
  ctx.scale(1, -1);
  ctx.translate(ctxPdngBegX, ctxPdngEndY);
}

function getDataPoints(_qtyPoints, _hgt) {
  var ar = [];
  var hgtBeg = 50*Math.random(); // 30
  var hgtEnd = _hgt ? _hgt : (100-hgtBeg)/_qtyPoints*Math.random(); //500

  for (var i = 0; i <= _qtyPoints; i++) {
    xPoints.push(i * (XX/_qtyPoints));
    yPoints.push(20+hgtBeg + 3*Math.sin(i) + hgtEnd*i + 5*Math.random() );
    ar.push(xPoints[i]);
    ar.push(yPoints[i]);
  }
  return ar;
}

var grid = {};
function countGrid() {
  var ValMid;
  var ValMidOrd = 0;   // Порядок значений

  // Верхняя Масштабированная линия сетки:
  var ValMax = Math.ceil(Math.max.apply(null, yPoints));
  var ValMaxOrd = 0;
  var ValMaxTmp = ValMax;
  while ( ValMaxTmp > 9) {
    ValMaxOrd++;
    ValMaxTmp = Math.floor(ValMaxTmp/10);
  }
  grid.End = ++ValMaxTmp * Math.pow(10,ValMaxOrd);

  
  // Нижняя Масштабированная линия сетки:
  var ValMin = Math.floor(Math.min.apply(null, yPoints));
  var ValMinOrd = 0;
  var ValMinTmp = ValMin;
  while ( ValMinTmp > 9) {
    ValMinOrd++;
    ValMinTmp = Math.floor(ValMinTmp/10);
  }
  ValMinTmp *= Math.pow(10, ValMinOrd);
  grid.Beg = Math.floor(ValMinTmp/Math.pow(10,ValMaxOrd))*Math.pow(10,ValMaxOrd);
  
  // Размах данных:
  var ValDifOrd = Math.pow(10, ValMinOrd); // Порядок Амплитуды значений.
  ValMaxTmp = Math.ceil(ValMax/ValDifOrd)*ValDifOrd;
  ValMinTmp = Math.floor(ValMin/ValDifOrd)*ValDifOrd;
  console.log('ValMinTmp, ValMaxTmp: ', ValMinTmp, ValMaxTmp);
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
  grid.stepY = Math.pow(10, ValMinOrd);
  if ( grid.amplitude/Math.pow(10, ValDifOrd) < 4 ) {
    grid.stepY /=2;
  }

  // Смещение Сетки снизу нижней границы, если она не нулевая.
  grid.shift = (grid.Beg === 0) ? 0 : ((grid.Beg / Math.pow(10, ValMinOrd))-1)*Math.pow(10, ValMinOrd) + 7*Math.pow(10, ValMinOrd-1); 

  grid.scale = YY / (grid.End - grid.shift);

  console.log('grid settings: ', grid);
}

function drawGrid(_grid){
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
  for (var y = _grid.Beg; y <= _grid.End; y += _grid.stepY) {
    ctx.beginPath();
    ctx.moveTo(0, (y-grid.shift)*grid.scale);
    ctx.lineTo(XX, (y-grid.shift)*grid.scale);
    ctx.stroke();
    ctx.closePath();

    ctx.scale(1, -1); // >>> Подписи оси Y:
    ctx.fillText(y, -0.5*ctxPdngBegX, -(y-grid.shift)*grid.scale, 0.8*ctxPdngBegX);
    ctx.scale(1, -1); // <<< Подписи оси Y.
  }
  
  var x, text; // >>> Подписи оси X:
  ctx.font = 'normal normal 100 10px Arial';
  ctx.scale(1, -1);
    for (var i = 0; i < 10; i++) {
      x = i/9*XX;
      text = points[findClosestPoint(x, points)];
      ctx.fillText(text, x, 30, 0.1*XX);
    }
  ctx.scale(1, -1); // <<< Подписи оси X.
}

var tension = 0.5;
function drawCurve(ctx, ptsa, tension, isClosed, numOfSegments, showPoints) {
  grd = ctx.createLinearGradient(0, 0, XX, YY);
  grd.addColorStop(0, '#959959');
  grd.addColorStop(1, '#0296E9');
  ctx.strokeStyle = grd;
  
  showPoints  = showPoints ? showPoints : false;

  ctx.beginPath();
  drawLines(ctx, getCurvePoints(ptsa, tension, isClosed, numOfSegments));

  ctx.stroke();
  if (showPoints) {
    ctx.beginPath();
    for(var i = 0; i < ptsa.length - 1; i += 2) {
      ctx.fillRect(ptsa[i] - 2, ptsa[i+1] - 2, 4, 4);
    }
    ctx.closePath();
  }
}

function getCurvePoints(pts, tension, isClosed, numOfSegments) {

    // use input value if provided, or use a default value   
    tension = (typeof tension != 'undefined') ? tension : 0.5;
    isClosed = isClosed ? isClosed : false;
    numOfSegments = numOfSegments ? numOfSegments : 16;

    var _pts = [], res = [],    // clone array
        x, y,           // our x,y coords
        t1x, t2x, t1y, t2y, // tension vectors
        c1, c2, c3, c4,     // cardinal points
        st, t, i;       // steps based on num. of segments

    // clone array so we don't change the original
    //
    _pts = pts.slice(0);

    // The algorithm require a previous and next point to the actual point array.
    // Check if we will draw closed or open curve.
    // If closed, copy end points to beginning and first points to end
    // If open, duplicate first points to befinning, end points to end
    if (isClosed) {
        _pts.unshift(pts[pts.length - 1]);
        _pts.unshift(pts[pts.length - 2]);
        _pts.unshift(pts[pts.length - 1]);
        _pts.unshift(pts[pts.length - 2]);
        _pts.push(pts[0]);
        _pts.push(pts[1]);
    }
    else {
        _pts.unshift(pts[1]);   //copy 1. point and insert at beginning
        _pts.unshift(pts[0]);
        _pts.push(pts[pts.length - 2]); //copy last point and append
        _pts.push(pts[pts.length - 1]);
    }

    // ok, lets start..

    // 1. loop goes through point array
    // 2. loop goes through each segment between the 2 pts + 1e point before and after
    for (i=2; i < (_pts.length - 4); i+=2) {
        for (t=0; t <= numOfSegments; t++) {

            // calc tension vectors
            t1x = (_pts[i+2] - _pts[i-2]) * tension;
            t2x = (_pts[i+4] - _pts[i]) * tension;

            t1y = (_pts[i+3] - _pts[i-1]) * tension;
            t2y = (_pts[i+5] - _pts[i+1]) * tension;

            // calc step
            st = t / numOfSegments;

            // calc cardinals
            c1 =   2 * Math.pow(st, 3)  - 3 * Math.pow(st, 2) + 1; 
            c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2); 
            c3 =       Math.pow(st, 3)  - 2 * Math.pow(st, 2) + st; 
            c4 =       Math.pow(st, 3)  -     Math.pow(st, 2);

            // calc x and y cords with common control vectors
            x = c1 * _pts[i]    + c2 * _pts[i+2] + c3 * t1x + c4 * t2x;
            y = c1 * _pts[i+1]  + c2 * _pts[i+3] + c3 * t1y + c4 * t2y;

            //store points in array
            res.push(x);
            res.push(y);

        }
    }

    return res;
}

function drawLines(ctx, pts) {
    ctx.moveTo(pts[0], (pts[1]-grid.shift)*grid.scale);
    for(var i=2; i<pts.length-1; i+=2) ctx.lineTo(pts[i], (pts[i+1]-grid.shift)*grid.scale);
}

// Найти ближайшую правую точку x:
// Формат массива: [x0,y0, x1,y1, ... xN,yN]
function findClosestPoint(x, arPoints, _left, _right) {
  var points = arPoints.length > 0 ? arPoints : points;
  var left = _left ? _left : 0;
  // var right = _right ? _right : qtyPoints*2;
  var right = _right ? _right : arPoints.length-2;
  var middle;
  var k;

  while (left <= right) {
    middle = Math.ceil((left+right)/2);
    middle = Math.ceil(middle/2)*2; // Делаем число четным "вправо".
    if ( points[middle] === x ) {
      break; // Остановиться с результатом x.
    } else if ( points[middle] > x ) {
      right = middle - 2;
    } else if ( points[middle] < x ) {
      left = middle + 2;
    }
  }

  if ( Math.abs(x - points[0]) < Math.abs(x - points[2]) ) {
    k = 0; // Костыль для отрисовки нулевой точки.
  } else {
    k = Math.max(left, middle); // Отрисовка ближайшей правой точки.
  }
  
  return k;
}

function drawVertical(x_) {
  const y1 = -40;       // Отступ первой выноски вниз от области рисования графика.
  const widthVert = 3; // Толщина вертикальной линии с выносками.
  var x = x_;
  var y2; // Высота второй выноски - на графике.
  var k = findClosestPoint(x, points);
  
  x = points[k];
  y2 = points[k+1];
  var calloutText1 = x;
  var calloutText2 = y2;

  ctx.fillStyle = '#4A90E2';
  ctx.fillRect(x - widthVert/2, y1, widthVert, YY-y1);
  drawCallout(x, y1, widthVert, calloutText1, '', '12px Arial', '#4A90E2', '#18223B', 20,8,4, false);
  drawCallout(x, (y2-grid.shift)*grid.scale, widthVert, calloutText2, '', '12px Arial', '#3CC182', '#3CC182', 20,8,4, true);
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


initCanvas();

// Make some points:
// Формат массива: [x0,y0, x1,y1, ... xN,yN]
var qtyPoints = 90;
points = getDataPoints(qtyPoints).slice(0);

countGrid();
drawGrid(grid);
drawCurve(ctx, points, tension, false, false, false);
drawVertical(0);

canvas.addEventListener('mousemove', function (e) {
  var mouseX = e.clientX - canvas.getBoundingClientRect().left - ctxPdngBegX;
  var mouseY = e.clientY - canvas.getBoundingClientRect().top  - ctxPdngBegY;
  if ( 0 < mouseX && mouseX < XX && 0 < mouseY && mouseY < YY ) {

    initCanvas();
    drawGrid(grid);
    drawCurve(ctx, points, tension, false, false, false);
    drawVertical(mouseX);
  }
});


