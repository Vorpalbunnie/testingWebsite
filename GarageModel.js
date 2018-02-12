/*
var GarageModel = {
  open: true,
  light: true,
  opening: false,


  brightness: 5,


  autoCloseEnabled: false,
  autoOffEnabled: false,

  getState: function(callback){
    var state = { "open":this.open,
    "light":this.light,
    "opening":this.opening,
    "brightness":this.brightness,
    "autoClose":this.autoCloseEnabled,
    "autoOff":this.autoOffEnabled};
    console.log("getState")

    setTimeout(function () {callback(state)},  500);
  },
  toggleOpen: function(opening) {
    this.open = opening;
    if(this.open && this.autoCloseEnabled) {
      var autoClose = this;
      setTimeout(function() {  autoClose.autoClose() }, 1000)
    }
    this.stateChange();
  },
  toggleLight: function(power) {
    this.light = power;
    if(this.light && this.autoOffEnabled) {
      var autoOff = this;
      setTimeout(function() {  autoOff.autoOff() }, 1000)
    }
    this.stateChange();
  },
  autoClose: function() {
    this.open = false
    this.stateChange()
  },
  autoOff: function() {
    this.light = false
    this.stateChange()
  },
  setAutoCloseEnabled: function(enabled) {
    this.autoOffEnabled = enabled
    this.stateChange()
  },
  setPicture: function(state) {
    //gif1,pic1,gif2,pic2...
    var pic;
    switch (new GarageModel().getState()){
      case 0:
      pic = "gif1";
      break;
      case 1:
      pic = "pic1";
      break;
      case 2:
      pic = "gif2";
      break;
      case 3:
      pic = "pic2";
      break;
      case 4:
      pic = "gif3";
      break;
      case 5:
      pic = "pic3";
      break;
      case  6:
      pic = "gif4";
      case  7:
      pic = "pic4";
      break;
    }
    document.getElementById('myPicture').src = pic;
  },
  setStateChangeHandler: function(handler) {
    this.stateChangeHandler = handler;
    this.stateChange();
  },
  stateChange: function() {
    var state = { "open":this.open,
    "light":this.light,
    "powered":this.powered,
    "brightness":this.brightness,
    "autoOffEnabled":this.autoOffEnabled,
    "autoCloseEnabled":this.autoCloseEnabled};
    setTimeout(function(){{setStateChangeHandler()}},  1000);
  }


}


*/


double(currentBrightness);

function int double(input){

  return input*2;
}



var myPicture
var garageDisplay

// var counter
//
function changePict(){
  console.log("success");



  var pic;

  switch (counter%4){
    case 0:
    pic = gif1;
    document.getElementById('myPicture').src = pic;
    counter ++;
    break;

    case 1:
    pic = gif2;
    document.getElementById('myPicture').src = pic;
    counter ++;
    break;
    case 2:
    pic = gif3;
    document.getElementById('myPicture').src = pic;
    counter ++;
    break;
    case 3:
    pic = gif4;
    document.getElementById('myPicture').src = pic;
    counter ++;
    break;
    // case 4:
    // pic = gif3;
    // break;
    // case 5:
    // pic = pic3;
    // break;
    // case  6:
    // pic = gif4;
    // case  7:
    // pic = pic4;
    // break;

}
}


/*
  function stateTest(){
    //gif1,pic1,gif2,pic2,
    console.log(new GarageModel().getState());
    document.getElementById('myPicture').src = gif1;

  }

*/

function pictureTest(){
    console.log("we trying");



    setTimeout(1200,changePict());
}

var counter;

document.addEventListener("DOMContentLoaded", function(event){
    myPicture = document.getElementById("myPicture")
    garageDisplay = document.getElementById("garageDisplay")
    counter = 0;
    document.getElementById("debugButton").addEventListener("click", pictureTest)

    gif1 = "./resources/pictures/gifs/BrightClosing.gif"
    gif2 = "./resources/pictures/gifs/DarkOpening.gif"
    gif3 = "./resources/pictures/gifs/DarkClosing.gif"
    gif4 = "./resources/pictures/gifs/BrightOpening.gif"

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
