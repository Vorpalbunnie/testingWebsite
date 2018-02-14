

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
  closeTime: 0,
  offTime: 0,
  autoOffEnabled: false,
  stateChangeListener: true,

  stateChange: function(callback) {
      var callingObject = this;
      console.log("stateChange");
      if(callingObject.stateChangeListener) {
        var state = { openState:this.openState,
                      open:this.open,
                      light:this.light,
                      opening:this.opening,
                      brightness:this.brightness,
                      autoOffEnabled:this.autoOffEnabled,
                      autoCloseEnabled:this.autoCloseEnabled};
                      //calls whatever function was "passed" to it!
        setTimeout(callback(), 100);
        console.log("afterCallback");
      }
    }

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
