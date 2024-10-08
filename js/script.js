

var ImgBox = document.querySelector(".img-box");
var ImgWrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line");

var isDragging = false;

line.addEventListener('mousedown', function(e) {
    isDragging = true;
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});

ImgBox.addEventListener('mousemove', function(e) {
    if (!isDragging) return;

    var leftSpace = ImgBox.offsetLeft;
    var boxWidth = Math.min(Math.max(0, e.pageX - leftSpace), ImgBox.offsetWidth) + "px";
    ImgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
});

// Prevent dragging the line from causing text selection
line.addEventListener('dragstart', function(e) {
    e.preventDefault();
});
