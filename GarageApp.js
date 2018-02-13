



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


// NAV BAR
var loginTab
var garageTab
var advancedTab
var userInfoTab

var loginViewButton
var garageViewButton
var advancedViewButton

function loginScreen(){
  //When changing back, display current username and email?
  //with a logout button!
  userInfoTab.style.display = "block";
  garageViewButton.disabled = false;
  loginViewButton.disabled = true;
  advancedViewButton.disabled = false;
  garageTab.style.display = "none";
  userInfoTab.style.display = "block";
  advancedTab.style.display = "none";
  //loginTab.style.display = "block";
}
function garageScreen(){
  userInfoTab.style.display = "none";
  loginTab.style.display = "none";
  garageTab.style.display = "block";
  loginViewButton.innerHTML = "User Info";
  advancedTab.style.display = "none";
  advancedViewButton.disabled = false;
  garageViewButton.disabled = true;
  loginViewButton.disabled = false;

  //enables the navBar buttons
  //set all other screens to be display none
  //change login to say logout
}
function advancedScreen(){
  userInfoTab.style.display = "none";
  loginTab.style.display = "none";
  garageTab.style.display = "none";
  loginViewButton.innerHTML = "User Info";
  advancedTab.style.display = "block";
  advancedViewButton.disabled = true;
  garageViewButton.disabled = false;
  loginViewButton.disabled = false;
}





//------------   LOGIN SCREEN ITEMS ---------------//
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
  newAccountSection.style.visibility = "visible";
  loginButton.disabled = true;
  createAccountButton.disabled = true;
  confirmAccountButton.disabled = false;
  cancelButton.disabled = false;
}
function accountConfirmation(){
  console.log("account confirmed buddy")
  newAccountSection.style.visibility = "hidden";
  loginButton.disabled = false;
  createAccountButton.disabled = false;
  confirmAccountButton.disabled = true;
  newAccountSection.hidden = true;
  cancelButton.disabled = true;
}
function cancelUser(){
  newAccountSection.style.visibility = "hidden";
  loginButton.disabled = false;
  createAccountButton.disabled = false;
  confirmAccountButton.disabled = true;
  newAccountSection.hidden = true;
  cancelButton.disabled = true;
}




var lightSwitch
var lit = true
var currentLight


function lightSwitchFunc(){
  var pic;
  switch (lit){
    case true:
    document.getElementById('switchPic').style.display = "none";
    document.getElementById('switchAnim').style.display = "block";
    document.getElementById('switchAnim').src = "./resources/pictures/gifs/onOff.gif";
    document.getElementById('switchAnim').style.display = "block";
    lit = false;
    currentLight = "./resources/pictures/OffSwitch.jpg";
    setTimeout(animateLight, 1500);
    break;

    case false:
    pic = addBCgif;
    document.getElementById('switchPic').style.display = "none";
    document.getElementById('switchAnim').style.display = "block";
    document.getElementById('switchAnim').src = "./resources/pictures/gifs/offOn.gif";
    document.getElementById('switchAnim').style.display = "block";
    lit = true;
    currentLight =  "./resources/pictures/OnSwitch.jpg";
    setTimeout(animateLight, 1500);
    break;

}
}
function animateLight(){
    document.getElementById('switchAnim').style.display = "none";
    document.getElementById('switchPic').src = this.currentLight;
    //document.getElementById('switchPic').src = this.currentPic;
    document.getElementById('switchPic').style.display = "block";
    console.log("Swapped!");
}






document.addEventListener("DOMContentLoaded", function(event) {

  document.getElementById("garageTab").style.display = 'none';
  document.getElementById("userInfo").style.display = 'none';
  document.getElementById("advancedTab").style.display = 'none';


  console.log("Document Loaded")



  //NavPanel
    //Variables
    loginTab = document.getElementById("loginTab")
    garageTab = document.getElementById("garageTab")
    userInfoTab = document.getElementById("userInfo")
    advancedTab = document.getElementById("advancedTab")
    loginViewButton = document.getElementById("loginViewButton")
    garageViewButton = document.getElementById("garageViewButton")
    advancedViewButton = document.getElementById("advancedViewButton")


    //Listeners
    document.getElementById("loginViewButton").addEventListener("click", loginScreen)
    document.getElementById("garageViewButton").addEventListener("click", garageScreen)
    document.getElementById("advancedViewButton").addEventListener("click", advancedScreen)

    garageViewButton.disabled = true;
    loginViewButton.disabled = true;
    advancedViewButton.disabled = true;




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
    document.getElementById("loginButton").addEventListener("click", garageScreen)

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
    document.getElementById("returnToLogin").addEventListener("click", cancelUser)



//Garage Screen
  //Variables
  lightSwitch = document.getElementById("switchPic")

  //Listeners
  document.getElementById("switchPic").addEventListener("click", lightSwitchFunc)

  // // Getting the initial state
console.log("Getting Initial State")


newAccountSection.style.visibility = "hidden"

document.getElementById("switchAnim").style.display = 'none';


  //newAccountSection.display = none;
})
