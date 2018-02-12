function wait(timeInSeconds) {
  var start = Date.now();
  var endTime = start + timeInSeconds*1000;
  while(Date.now()<endTime);
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








//   LOGIN SCREEN ITEMS //
var loginControls
var inputFields


var newPassword
var validPassword
var newEmail
var newAccount
var newAccountSection
var confirmAccountButton
var cancelButton

var username
var password
var createAccountButton
var loginButton

function passwordEntry(){
  console.log("passwordEdit");
  password.type = "password";
}
function passwordEntryStart(){
  password.type = "text";
  setTimeout(passwordEntry, 1750);
  console.log("start password");
}

function accountCreation(){
  console.log("New Account")
  newAccountSection.hidden = false;

  //document.getElementById("defaultFields").hidden = true;
  //document.getElementById("newUserButton").disabled = true;
  loginButton.disabled = true;
  createAccountButton.disabled = true;
  confirmAccountButton.disabled = false;
  cancelButton.disabled = false;
}
function accountConfirmation(){
  console.log("account confirmed buddy")
  //document.getElementById("defaultFields").hidden = false;
  loginButton.disabled = false;
  createAccountButton.disabled = false;
  confirmAccountButton.disabled = true;
  newAccountSection.hidden = true;
  cancelButton.disabled = true;
}
function cancelUser(){
  loginButton.disabled = false;
  createAccountButton.disabled = false;
  confirmAccountButton.disabled = true;
  newAccountSection.hidden = true;
  cancelButton.disabled = true;
}


document.addEventListener("DOMContentLoaded", function(event) {
  console.log("Document Loaded")
  //Login Screen
    //Variables
    loginControls = document.getElementById("login-Controls")
    inputFields = document.getElementById("login-Fields")

    username = document.getElementById("username")
    password = document.getElementById("yourPassword")

    createAccountButton = document.getElementById("newUserButton")
    loginButton = document.getElementById("loginButton")


    //Listeners
    document.getElementById("newUserButton").addEventListener("click", accountCreation)
    document.getElementById("yourPassword").addEventListener("blur", passwordEntry)
    document.getElementById("yourPassword").addEventListener("click", passwordEntryStart)

  //New Account
    //Variables
    newUser = document.getElementById("chooseUsername")
    newPassword = document.getElementById("firstPassword")
    validPassword = document.getElementById("secondPassword")
    newEmail = document.getElementById("yourEmail")
    newAccount = document.getElementById("newAccount")
    newAccountSection = document.getElementById("newAccountSection")

    confirmAccountButton = document.getElementById("createAccountButton")
    cancelButton = document.getElementById("returnToLogin")

    //Listeners
    document.getElementById("createAccountButton").addEventListener("click", accountConfirmation)
    document.getElementById("firstPassword").addEventListener("blur", passwordValidation)
    document.getElementById("secondPassword").addEventListener("blur", passwordValidation)
    document.getElementById("yourEmail").addEventListener("blur", emailValidation)
    document.getElementById("yourEmail").addEventListener("change", emailValidation)
    document.getElementById("returnToLogin").addEventListener("change", cancelUser)








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
