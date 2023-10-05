
function ClickedButt() {
document.getElementById("ShipHome").className = "AltShipHome";
}

function DigSwitch() {
document.getElementById("conditionbut").innerHTML = "Condition: Digital";
}
function NewSwitch() {
document.getElementById("conditionbut").innerHTML = "Condition: New";
}
function ShowNew() {
var x = document.getElementById("newbuttons");
if (x.style.display === "none") {
 x.style.display = "block";} else {x.style.display = "none";
 }
}

function HideMe() {
 var x = document.getElementById("newbuttons");
 x.style.display = "none";
 
}
function SwitchImg1() {
document.getElementById("MarioImg").src = document.getElementById("Img_1").src;
document.getElementById("MarioImg").classList = "mariowonder";
 }
function SwitchImg2() {
document.getElementById("MarioImg").src = document.getElementById("Img_2").src;
document.getElementById("MarioImg").classList = "fullimg";
}
function SwitchImg3() {
document.getElementById("MarioImg").src = document.getElementById("Img_3").src;
document.getElementById("MarioImg").classList = "fullimg";
}
function SwitchImg4() {
document.getElementById("MarioImg").src = document.getElementById("Img_4").src;
document.getElementById("MarioImg").classList = "fullimg";
}
function SwitchImg5() {
document.getElementById("MarioImg").src = document.getElementById("Img_5").src;
document.getElementById("MarioImg").classList = "fullimg";
}
function SwitchImg6() {
document.getElementById("MarioImg").src = document.getElementById("Img_6").src;
document.getElementById("MarioImg").classList = "fullimg";
}
function SwitchImg7() {
document.getElementById("MarioImg").src = document.getElementById("Img_7").src;
document.getElementById("MarioImg").classList = "fullimg";
}
