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
      setTimeout(function(){setStateChangeHandler()},  1000);
      }


}


var myPicture
var garageDisplay

function stateUpdate(newState) {
  console.log("New State")
  console.dir(newState);

  loadingPage(true)

  // Adjust state elements that may be changed on light / come from light
  autoOffSwitch.checked = newState.autoOffEnabled;

  // Note "change" function
  autoOffTimeSlider.value = newState.autoOffTime;
  autoOffTimeLabel.innerText = autoOffTimeSlider.value + "s"
  onOffSwitch.checked = newState.powered;
  currentColor.style.background = rgb(newState.r, newState.g, newState.b)
}

var gif1 = './resources/pictures/gifs/BrightClosing.gif';

var pic1 = './resources/pictures/DoorCloseLight.png';

var gif2 = './resources/pictures/gifs/DarkOpening.gif';

var pic2 = './resources/pictures/DoorOpenDark.png';

var gif3 = './resources/pictures/gifs/DarkClosing.gif';

var pic3 = './resources/pictures/DoorCloseDark.png';

var gif4 = './resources/pictures/gifs/BrightOpening.gif';

var pic4 = './resources/pictures/DoorOpenLight.png';




function stateTest(){
  //gif1,pic1,gif2,pic2,
  document.getElementById('myPicture').src=gif1;

}





function pictureTest(){
  console.log("we trying");
  document.getElementById('myPicture').src='./resources/pictures/gifs/BrightClosing.gif';
}


document.addEventListener("DOMContentLoaded", function(event) {
  console.log("Document Loaded")
  //document.getElementById("Garage-tab").hidden = true;
  //document.getElementById("advanced-tab").hidden = true;


  myPicture = document.getElementById("myPicture");
  garageDisplay = document.getElementById("garageDisplay");
  document.getElementById("debugButton").addEventListener("click", pictureTest)
  document.getElementById("debugButton").addEventListener("click", stateTest)
  document.getElementById("debugButton").addEventListener("click", stateUpdate)

  // document.getElementById("setColorButton").addEventListener("click", setColorClicked)
  // document.getElementById("redSlider").addEventListener("change", redSliderChange)
  // document.getElementById("greenSlider").addEventListener("change", greenSliderChange)
  // document.getElementById("blueSlider").addEventListener("change", blueSliderChange)
  // autoOffTimeSlider.addEventListener("change", autoOffSliderChange)
  // autoOffSwitch.addEventListener("click", autoOffUpdate)
  // onOffSwitch.addEventListener("click", onOffUpdate)
  //
  // // Getting the initial state
  console.log("Getting Initial State")

})
