function wait(timeInSeconds) {
  var start = Date.now();
  var endTime = start + timeInSeconds*1000;
  while(Date.now()<endTime);
}



function autoOffUpdate() {
  if(autoOffSwitch.checked) {
    autoOffTimeSlider.disabled = false;
  } else {
    autoOffTimeSlider.disabled = true;
  }
  // Send to light
  light.setAutoOffEnabled(autoOffSwitch.checked)
}

function onOffUpdate() {
  light.setPowered(onOffSwitch.checked)
}

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

function loadingPage(value) {
  loading.hidden = !value;
  controls.hidden = value;
  // document.getElementById("loading").hidden = !value;
  // document.getElementById("allControls").hidden = value;
}





var currentColor
var targetColor
var redSlider
var redLabel
var greenSlider
var greenLabel
var blueSlider
var blueLabel
var onOffSwitch
var onOffSwitchLabel
var loading
var controls

// Variables representing elements on the "Settings" screen
var autoOffSwitch
var autoOffSwitchLabel
var autoOffTimeSlider


//Copy Pasted!!!
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("Document Loaded")
  document.getElementById("Garage-tab").hidden = true;
  document.getElementById("advanced-tab").hidden = true;

  // currentColor = document.getElementById("currentColor")
  // targetColor = document.getElementById("targetColor")
  // redSlider = document.getElementById("redSlider")
  // redLabel = document.getElementById("redLabel")
  // greenSlider = document.getElementById("greenSlider")
  // greenLabel = document.getElementById("greenLabel")
  // blueSlider = document.getElementById("blueSlider")
  // blueLabel = document.getElementById("blueLabel")
  // onOffSwitch = document.getElementById("onOffSwitch")
  // onOffSwitchLabel = document.getElementById("onOffSwitchLabel")
   loading = document.getElementById("loading")
   controls = document.getElementById("allControls")
  //
  // // Variables representing elements on the "Settings" screen
  // autoOffSwitch = document.getElementById("autoOffSwitch")
  // autoOffSwitchLabel = document.getElementById("autoOffSwitchLabel")
  // autoOffTimeSlider = document.getElementById("autoOffTimeSlider
  //
  // // Event handlers
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
  // loading.hidden = true;
  // controls.hidden = true;
  //loadingPage(true)
  // light.getState(stateUpdate)
  // light.setStateChangeHandler(stateUpdate)
  // updateTargetColor()
})
