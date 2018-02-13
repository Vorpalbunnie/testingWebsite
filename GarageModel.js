
//var GarageModel = {
//   open: true,
//   light: true,
//   opening: false,
//   brightness: 5,
//   autoCloseEnabled: false,
//   autoOffEnabled: false,
//
//   getState: function(callback){
//     var state = { "open":this.open,
//     "light":this.light,
//     "opening":this.opening,
//     "brightness":this.brightness,
//     "autoClose":this.autoCloseEnabled,
//     "autoOff":this.autoOffEnabled};
//     console.log("getState")
//
//     setTimeout(function () {callback(state)},  500);
//   },
//   toggleOpen: function(opening) {
//     this.open = opening;
//     if(this.open && this.autoCloseEnabled) {
//       var autoClose = this;
//       setTimeout(function() {  autoClose.autoClose() }, 1000)
//     }
//     this.stateChange();
//   },
//   toggleLight: function(power) {
//     this.light = power;
//     if(this.light && this.autoOffEnabled) {
//       var autoOff = this;
//       setTimeout(function() {  autoOff.autoOff() }, 1000)
//     }
//     this.stateChange();
//   },
//   autoClose: function() {
//     this.open = false
//     this.stateChange()
//   },
//   autoOff: function() {
//     this.light = false
//     this.stateChange()
//   },
//   setAutoCloseEnabled: function(enabled) {
//     this.autoOffEnabled = enabled
//     this.stateChange()
//   },
//   setPicture: function(state) {
//     //gif1,pic1,gif2,pic2...
//     var pic;
//     switch (new GarageModel().getState()){
//       case 0:
//       pic = "gif1";
//       break;
//       case 1:
//       pic = "pic1";
//       break;
//       case 2:
//       pic = "gif2";
//       break;
//       case 3:
//       pic = "pic2";
//       break;
//       case 4:
//       pic = "gif3";
//       break;
//       case 5:
//       pic = "pic3";
//       break;
//       case  6:
//       pic = "gif4";
//       case  7:
//       pic = "pic4";
//       break;
//     }
//     document.getElementById('myPicture').src = pic;
//   },
//   setStateChangeHandler: function(handler) {
//     this.stateChangeHandler = handler;
//     this.stateChange();
//   },
//   stateChange: function() {
//     var state = { "open":this.open,
//     "light":this.light,
//     "powered":this.powered,
//     "brightness":this.brightness,
//     "autoOffEnabled":this.autoOffEnabled,
//     "autoCloseEnabled":this.autoCloseEnabled};
//     setTimeout(function(){{setStateChangeHandler()}},  1000);
//   }
// }

var GarageModel = {
  open: true,
  light: true,
  opening: false,
  brightness: 5,
  autoCloseEnabled: false,
  autoOffEnabled: false,
}







var myPicture = document.getElementById('myPicture')
var garageDisplay
var doorState
var counter = 0

// var counter
//



// function changePict(){
//
//   var pic;
//   switch (counter){
//     case 0:
//     pic = BCgif;
//     console.log("animating");
//     document.getElementById('myPicture').style.display = "none";
//     document.getElementById('myAnimation').style.display = "block";
//     document.getElementById('myAnimation').src = pic;
//     document.getElementById('myAnimation').style.display = "block";
//
//     currentPic = BOpic;
//     console.log("before timeout");
//     setTimeout(picSwapper, 1000);
//     console.log("after timeout");
//
//     break;
//     case 1:
//     pic = DOgif;
//     document.getElementById('myPicture').src = pic;
//     setTimeout(document.getElementById('myPicture').src = DOpic, 1000)
//     break;
//     case 2:
//     pic = gif3;
//     document.getElementById('myPicture').src = pic;
//
//     break;
//     case 3:
//     pic = gif4;
//     document.getElementById('myPicture').src = pic;
//
//     break;
//     case 4:
//     pic = gif3;
//     break;
//     case 5:
//     pic = pic3;
//     break;
//     case  6:
//     pic = gif4;
//     case  7:
//     pic = pic4;
//     break;
//
// }
// }

var addBCgif = "./resources/pictures/gifs/BrightClosing.gif"
var addDOgif = "./resources/pictures/gifs/DarkOpening.gif"
var addDCgif = "./resources/pictures/gifs/DarkClosing.gif"
var addBOgif = "./resources/pictures/gifs/BrightOpening.gif"


var addBCpic = "./resources/pictures/DoorCloseLight.png"
var addDOpic = "./resources/pictures/DoorOpenDark.png"
var addDCpic = "./resources/pictures/DoorCloseDark.png"
var addBOpic = "./resources/pictures/DoorOpenLight.png"

//maybe make a gif-->pic swapper function

var BCpic = new Image(src="./resources/pictures/DoorCloseLight.png");
var BOpic = new Image(src="./resources/pictures/DoorOpenLight.png");
var BOgif = new Image(src="./resources/pictures/gifs/BrightOpening.gif");


var states = [
  [addBCgif, addBCpic],
  [addDOgif, addDOpic],
  [addDCgif, addDCpic],
  [addBOgif, addBOpic],
];

function lightSwitched(){
  
var source = myPicture.getAttribute('src');
var pic;

switch (source){
  case addBCpic:
  pic = addDCpic;
  document.getElementById('myPicture').src = pic;
  break;

  case addBOpic:
  pic = addDOpic;
  document.getElementById('myPicture').src = pic;
  break;

  case addDCpic:
  pic = addBCpic;
  document.getElementById('myPicture').src = pic;
  break;

  case addDOpic:
  pic = addBOpic;
  document.getElementById('myPicture').src = pic;
  break;
}




}


function changePict(){
//element.getAttribute("src")
  var pic;

  console.log("function called!")
  var source = myPicture.getAttribute('src');
  document.getElementById('debugButton').disabled = true;

  switch (source){

    case addBCpic:
    pic = addBOgif;
    document.getElementById('myPicture').style.display = "none";
    document.getElementById('myAnimation').style.display = "block";
    document.getElementById('myAnimation').src = pic;
    document.getElementById('myAnimation').style.display = "block";
    currentPic = addBOpic;
    setTimeout(picSwapper, 1500);

    break;

    case addBOpic:
    pic = addBCgif;
    document.getElementById('myPicture').style.display = "none";
    document.getElementById('myAnimation').style.display = "block";
    document.getElementById('myAnimation').src = pic;
    document.getElementById('myAnimation').style.display = "block";
    currentPic = addBCpic;
    setTimeout(picSwapper, 1500);
    break;

    case addDCpic:
    pic = addDOgif;
    document.getElementById('myPicture').style.display = "none";
    document.getElementById('myAnimation').style.display = "block";
    document.getElementById('myAnimation').src = pic;
    document.getElementById('myAnimation').style.display = "block";
    currentPic = addDOpic;
    setTimeout(picSwapper, 1500);
    break;

    case addDOpic:
    pic = addDCgif;
    document.getElementById('myPicture').style.display = "none";
    document.getElementById('myAnimation').style.display = "block";
    document.getElementById('myAnimation').src = pic;
    document.getElementById('myAnimation').style.display = "block";
    currentPic = addDCpic;
    setTimeout(picSwapper, 1500);
    break;
}

}

function picSwapper(){
  document.getElementById('myAnimation').style.display = "none";
  document.getElementById('myPicture').src = this.currentPic;
  //document.getElementById('myPicture').src = this.currentPic;
  document.getElementById('myPicture').style.display = "block";
  console.log("Swapped!");
  document.getElementById('debugButton').disabled = false;
}




/*
  function stateTest(){
    //gif1,pic1,gif2,pic2,
    console.log(new GarageModel().getState());
    document.getElementById('myPicture').src = gif1;

  }

*/


document.addEventListener("DOMContentLoaded", function(event){
    myPicture = document.getElementById("myPicture")
    garageDisplay = document.getElementById("garageDisplay")
    counter = 0;
    document.getElementById("debugButton").addEventListener("click", changePict)

    document.getElementById("myAnimation").style.display = "none";

    document.getElementById("switchPic").addEventListener("click", lightSwitched)


    // document.getElementById("setColorButton").addEventListener("click", setColorClicked)
    // document.getElementById("redSlider").addEventListener("change", redSliderChange)
    // document.getElementById("greenSlider").addEventListener("change", greenSliderChange)
    // document.getElementById("blueSlider").addEventListener("change", blueSliderChange)
    // autoOffTimeSlider.addEventListener("change", autoOffSliderChange)
    // autoOffSwitch.addEventListener("click", autoOffUpdate)
    // onOffSwitch.addEventListener("click", onOffUpdate)
    //
    // // Getting the initial state
    console.log("uhhhhh")


  })
