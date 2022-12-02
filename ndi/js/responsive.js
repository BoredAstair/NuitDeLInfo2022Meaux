function resize(){
    var box = document.querySelector("box");
var boxRatio = 16/9;
var windowRatio = window.innerWidth/window.innerHeight;
if(boxRatio > windowRatio){
// Blue box width should be equal to window.innerWidth
var width = window.innerWidth;
box.style.width = (width) + "px";
box.style.height = (width/boxRatio) + "px"
} else {
// Blue box height should be equal to window.innerHeight
var height = window.innerHeight;
box.style.height = (height) + "px";
box.style.width = (height*boxRatio) + "px"
}
}