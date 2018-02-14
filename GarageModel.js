

//Sizing windows?
//saving the actual variables!



//Lightswithc needs to get value from this
//mypicture needs to get value from this


var GarageModel = {
  openState: 0,
  open: true,
  light: true,
  currentPicSrc: "/resources/pictures/DoorOpenLight.png",
  //prevLight: false,

  opening: false,
  brightness: 5,
  autoCloseEnabled: false,
  closeTimeDuration: 0,
  offTimeDuration: 0,
  autoOffEnabled: false,
  stateChangeListener: true,

  getHandler: function(desired){
    console.log("getHandler");
    switch(desired){
      case 'offTimeDuration':
      return this.getoffTimeDuration();
      break;
      case 'closeTimeDuration':
      return this.getCloseTimeDuration();
      break;
      case 'brightness':
      return this.getBrightness();
      break;
      case 'light':
      return this.getLight();
      break;
      case 'open':
      return this.getOpen();
      break;
      case 'opening':
      return this.getOpening();
      break;
      case 'autoCloseEnabled':
      console.log("autoCloseEnabled");
      return this.getAutoCloseEnabled();
      break;
      case 'autoOffEnabled':
      return this.getAutoOffEnabled();
      break;
    }
  },
  getoffTimeDuration: function(){
    return this.offTimeDuration;
  },
  getCloseTimeDuration: function(){
    return this.closeTimeDuration;
  },
  getBrightness: function(){
    return this.brightness;
  },
  getOpen: function(){
    return this.open;
  },
  getLight: function(){
    return this.light;
  },
  getOpening: function(){
    return this.opening;
  },
  getAutoOffEnabled: function(){
    return this.autoOffEnabled;
  },
  getAutoCloseEnabled: function(){
    return this.autoCloseEnabled;
  },

  setHandler: function(desired, value){
    switch(desired){
      case 'offTimeDuration':
      this.setOffTimeDuration(value);
      break;
      case 'closeTimeDuration':
      this.setCloseTimeDuration(value);
      break;
      case 'brightness':
      this.setBrightness(value);
      case 'light':
      this.setLight(value);
      break;
      case 'open':
      this.setOpen(value);
      break;
      case 'opening':
      this.setOpening(value);
      break;
      case 'autoCloseEnabled':
      this.setAutoCloseEnabled(value);
      break;
      case 'autoOffEnabled':
      this.setAutoOffEnabled(value);
      break;
    }
  },

  setoffTimeDuration: function(value){
    this.offTimeDuration = value;
  },
  setCloseTimeDuration: function(value){
    this.closeTimeDuration = value;
  },
  setBrightness: function(value){
    this.brightness = value;
  },
  setOpen: function(value){
    this.open = value;
  },
  setLight: function(value){
    this.light = value;
  },
  setOpening: function(value){
    this.opening = value;
  },
  setAutoOffEnabled: function(value){
    this.autoOffEnabled = value;
  },
  setAutoCloseEnabled: function(value){
    this.autoCloseEnabled = value;
  },

}


// function lightSwitched(){
//   var source = myPicture.getAttribute('src');
//   var pic;
//   switch (source){
//     case addBCpic:
//     pic = addDCpic;
//     document.getElementById('myPicture').src = pic;
//     GarageModel.light = false;
//     break;
//
//     case addBOpic:
//     pic = addDOpic;
//     document.getElementById('myPicture').src = pic;
//     GarageModel.light = false;
//     break;
//
//     case addDCpic:
//     pic = addBCpic;
//     document.getElementById('myPicture').src = pic;
//     GarageModel.light = true;
//     break;
//
//     case addDOpic:
//     pic = addBOpic;
//     document.getElementById('myPicture').src = pic;
//     GarageModel.light = true;
//     break;
//   }
// }
//
//
// //////////////////////////////
// ////
//
// ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////
// function changePict(){
//   //element.getAttribute("src")
//   var pic;
//
//   console.log("function called!")
//   var source = myPicture.getAttribute('src');
//   document.getElementById('debugButton').disabled = true;
//
//   switch (source){
//
//     case addBCpic:
//     pic = addBOgif;
//     document.getElementById('myPicture').style.display = "none";
//     document.getElementById('myAnimation').style.display = "block";
//     document.getElementById('myAnimation').src = pic;
//     document.getElementById('myAnimation').style.display = "block";
//     currentPic = addBOpic;
//     setTimeout(picSwapper, 1500);
//     GarageModel.openState = 0;
//     break;
//
//     case addBOpic:
//     pic = addBCgif;
//     document.getElementById('myPicture').style.display = "none";
//     document.getElementById('myAnimation').style.display = "block";
//     document.getElementById('myAnimation').src = pic;
//     document.getElementById('myAnimation').style.display = "block";
//     currentPic = addBCpic;
//     setTimeout(picSwapper, 1500);
//     GarageModel.openState = 1;
//     break;
//
//     case addDCpic:
//     pic = addDOgif;
//     document.getElementById('myPicture').style.display = "none";
//     document.getElementById('myAnimation').style.display = "block";
//     document.getElementById('myAnimation').src = pic;
//     document.getElementById('myAnimation').style.display = "block";
//     currentPic = addDOpic;
//     setTimeout(picSwapper, 1500);
//     GarageModel.openState = 2;
//     break;
//
//     case addDOpic:
//     pic = addDCgif;
//     document.getElementById('myPicture').style.display = "none";
//     document.getElementById('myAnimation').style.display = "block";
//     document.getElementById('myAnimation').src = pic;
//     document.getElementById('myAnimation').style.display = "block";
//     currentPic = addDCpic;
//     setTimeout(picSwapper, 1500);
//     GarageModel.openState = 3;
//     break;
//   }
//
// }
//
// function picSwapper(){
//   document.getElementById('myAnimation').style.display = "none";
//   document.getElementById('myPicture').src = this.currentPic;
//   //document.getElementById('myPicture').src = this.currentPic;
//   document.getElementById('myPicture').style.display = "block";
//   console.log("Swapped!");
//   document.getElementById('debugButton').disabled = false;
// }
//
//
//
// //MOVE THE FUNCTIONS
//
//
//
//
//
//
// /*
// function stateTest(){
// //gif1,pic1,gif2,pic2,
// console.log(new GarageModel().getState());
// document.getElementById('myPicture').src = gif1;
//
// }
// */


document.addEventListener("DOMContentLoaded", function(event){
  // myPicture = document.getElementById("myPicture")
  // garageDisplay = document.getElementById("garageDisplay")
  // counter = 0;
  // //document.getElementById("debugButton").addEventListener("click", changePict)
  // //document.getElementById("switchPic").addEventListener("click", lightSwitched)
  //
  // document.getElementById("switchPic").addEventListener("click", updateLight)
  // document.getElementById("debugButton").addEventListener("click", updateDoor)
  // document.getElementById("myAnimation").style.display = "none";
  //
  //


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
