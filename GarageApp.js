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

function accountCreation(){
  document.getElementById("defaultFields").hidden = true;
  createAccountButton.disabled = true;
  confirmAccountButton.disabled = false;
  newAccountSection.hidden = false;

}
function accountConfirmation(){
  document.getElementById("defaultFields").hidden = false;

  createAccountButton.disabled = false;
  confirmAccountButton.disable = true;
  newAccountSection.hidden = true;

}





function passwordEntry(){
  console.log("passwordEdit");
  password.type = "password";
}
function passwordEntryStart(){
  password.type = "text";
  setTimeout(passwordEntry, 1750);
  console.log("start password");
}

function passwordValidation(){
    if(newPassword.value != document.getElementById("secondPassword").value){
      confirmAccountButton.disabled = true;
    } else {
      confirmAccountButton.disabled = false;
    }
}

function emailValidation(){
 /* no clue lol */
}



function login(){
  document.getElementById("GarageTab").click()
  document.script = "GarageModel.js";
  console.log("big pepsi");
}




// New Stuff!
var newUser
var newPassword
var newEmail
var validEmail

// Buttons!
var createAccountButton
var loginButton
var confirmAccountButton

// Textfields!
var username
var yourPassword

// Variables representing elements on the "Settings" screen
var autoOffSwitch
var autoOffSwitchLabel
var autoOffTimeSlider


var newAccountSection



//Let's get spicy



//Copy Pasted!!!
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("Document Loaded")
  //document.getElementById("Garage-tab").hidden = true;
  //document.getElementById("advanced-tab").hidden = true;



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
  newUser = document.getElementById("acccountCreate")

  username = document.getElementById("username")
  password = document.getElementById("yourPassword")

  createAccountButton = document.getElementById("createAccountButton")
  confirmAccountButton = document.getElementById("confirmAccountButton")
  loginButton = document.getElementById("loginButton")
  //
  // // Variables representing elements on the "Settings" screen
  // autoOffSwitch = document.getElementById("autoOffSwitch")
  // autoOffSwitchLabel = document.getElementById("autoOffSwitchLabel")
  // autoOffTimeSlider = document.getElementById("autoOffTimeSlider

  newAccount = document.getElementById("newAccount")
  newAccountSection = document.getElementById("newAccountSection")

  newUser = document.getElementById("chooseUsername")
  newPassword = document.getElementById("firstPassword")
  newEmail = document.getElementById("insertEmail")
  validEmail = document.getElementById("validEmail")

  // // Event handlers
  document.getElementById("confirmAccountButton").addEventListener("click", accountConfirmation)
  document.getElementById("createAccountButton").addEventListener("click", accountCreation)
  document.getElementById("loginButton").addEventListener("click", login)
  document.getElementById("yourPassword").addEventListener("blur", passwordEntry)
  document.getElementById("yourPassword").addEventListener("click", passwordEntryStart)


  document.getElementById("firstPassword").addEventListener("blur", passwordValidation)
  document.getElementById("secondPassword").addEventListener("blur", passwordValidation)
  document.getElementById("insertEmail").addEventListener("blur", emailValidation)
  document.getElementById("insertEmail").addEventListener("change", emailValidation)

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
  newAccountSection.hidden = true;

  //newAccountSection.display = none;



  // loading.hidden = true;
  // controls.hidden = true;
  //loadingPage(true)
  // light.getState(stateUpdate)
  // light.setStateChangeHandler(stateUpdate)
  // updateTargetColor()
})
