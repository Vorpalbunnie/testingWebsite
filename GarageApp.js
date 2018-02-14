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
  console.log("stateChange(pepsi)");
  setTimeout(garageScreen, 100);
}

function pepsi(){
  console.log("PEPSI MAN!!!!");
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
  hideLoading();

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



function logout(){
  userInfoTab.style.display = "none";
  loginTab.style.display = "block";
  garageTab.style.display = "none";
  loginViewButton.innerHTML = "Login";
  advancedTab.style.display = "none";

  advancedViewButton.disabled = true;
  garageViewButton.disabled = true;
  loginViewButton.disabled = true;

  loginButton.disabled = false;
  createAccountButton.disabled = false;
  confirmAccountButton.disabled = true;
  newAccountSection.hidden = true;
  cancelButton.disabled = true;
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



/////////////////////GARAGE MODEL BULLSHIT ////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////////////////////GARAGE MODEL BULLSHIT ////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////////////////////GARAGE MODEL BULLSHIT ////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////////////////////GARAGE MODEL BULLSHIT ////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////////////////////GARAGE MODEL BULLSHIT ////////////////////////////////
//////////////////////////////////////////////////////////////////////////



var myPicture = document.getElementById('myPicture')
var garageDisplay

var addBCgif = "./resources/pictures/gifs/BrightClosing.gif"
var addDOgif = "./resources/pictures/gifs/DarkOpening.gif"
var addDCgif = "./resources/pictures/gifs/DarkClosing.gif"
var addBOgif = "./resources/pictures/gifs/BrightOpening.gif"

var addBCpic = "./resources/pictures/DoorCloseLight.png"
var addDOpic = "./resources/pictures/DoorOpenDark.png"
var addDCpic = "./resources/pictures/DoorCloseDark.png"
var addBOpic = "./resources/pictures/DoorOpenLight.png"

var BCpic = new Image(src="./resources/pictures/DoorCloseLight.png");
var BOpic = new Image(src="./resources/pictures/DoorOpenLight.png");
var BOgif = new Image(src="./resources/pictures/gifs/BrightOpening.gif");

var states = [
  [addBCgif, addBCpic],
  [addDOgif, addDOpic],
  [addDCgif, addDCpic],
  [addBOgif, addBOpic],
];



var onOff = "./resources/pictures/gifs/onOff.gif"
var offOn = "./resources/pictures/gifs/offOn.gif"

var on = "./resources/pictures/OnSwitch.jpg"
var off = "./resources/pictures/OffSwitch.jpg"


//update this after garage model or vise versa :)
var lightSwitchModel = {
  light: true,
  switching: false,
}

function lightAffectGarage(){
  //This changes the garageLightSettings!
  //Called when lightSwitch is touched
  console.log("Light -> Garage")
  switch (lightSwitchModel.light){
    case false:
    GarageModel.setHandler("light", true);
    lightSwitchModel.light = true;
    animateLightPic(offOn, on);
    // setTimeout(function(){garagePicHandGaraler;}, 1500);
    break;
    case true:
    //update both pictures!
    GarageModel.setHandler("light", false);
    lightSwitchModel.light = false;
    animateLightPic(onOff, off);
    // setTimeout(function(){garagePicHandler;}, 1500);
    break;
  }
}
function garageAffectLight(){
  console.log("Garage -> Light");
  //This changes the garageLightSettings!
  //Called when light is different from garageLight!
  switch (GarageModel.getHandler('light')){
    case true:
    lightSwitchModel.light = true;
    swapLightPic(on);
    break;
    case false:
    lightSwitchModel.light = false;
    swapLightPic(off);
    break;
  }
}

//This handles based on the caller, AKA where the light update is coming from!
function lightChangeHandler(caller){
  console.log("handler");
  switch (caller){
    case "garage":
    console.log("caller: garage");
    if(lightSwitchModel.light != GarageModel.getHandler('light')){
      console.log("horseshit!");
      garageAffectLight();
    }
    break;
    case "buttonClick":
    console.log("caller: button");
    //if button calls it, need to update Garage one too!
    lightAffectGarage();
    break;
  }
}
function animateLightPic(gif,newPic){
  console.log("animating Light!")
  document.getElementById('switchPic').style.display = "none";
  document.getElementById('switchAnim').style.display = "block";
  document.getElementById('switchAnim').src = gif;
  document.getElementById('switchAnim').style.display = "block";
  setTimeout(function(){swapLightPic(newPic); garagePicHandler();}, 1000);
}
function swapLightPic(picture){
  document.getElementById('switchAnim').style.display = "none";
  document.getElementById('switchPic').src = picture;
  //document.getElementById('switchPic').src = this.currentPic;
  document.getElementById('switchPic').style.display = "block";
  console.log("newLightPic");
  hideLoading();

  if(!GarageModel.getHandler('opening')){
    if(GarageModel.getHandler('light') && GarageModel.getHandler('autoOffEnabled')){
      console.log("Light On AND Auto Off Enabled!");
      startTimer('offTimeDuration');
    }
  }

}
function updateGarageLight(callback){
  console.log("update Light");
  switch(GarageModel.getHandler('light')){
    case true:
    setTimeout(updatePictures,100);
    GarageModel.setHandler("light", false);
    break;

    case false:
    setTimeout(updatePictures,100);
    GarageModel.setHandler("light", true);
    break;
  }
}
function updateDoor(){
  console.log("Updating door");
  GarageModel.setHandler("light", true);

  switch(GarageModel.getHandler('open')){
    case true:
    console.log("Closing Door")
    GarageModel.setHandler("open", false);
    document.getElementById("garageControlButton").innerHTML = "OPEN";
    animateGarage(addBCgif,addBCpic);
    lightChangeHandler("garage");
    break;
    case false:
    console.log("Opening Door")
    GarageModel.setHandler("open", true);
    document.getElementById("garageControlButton").innerHTML = "CLOSE";
    animateGarage(addBOgif,addBOpic);
    lightChangeHandler("garage");
    break;
  }
}

function animateGarage(gif,newPic){
  console.log("Animating Garage");
  console.log(gif);
  console.log(newPic);
  document.getElementById('myPicture').style.display = "none";
  document.getElementById('myAnimation').style.display = "block";
  document.getElementById('myAnimation').src = gif;

  console.log("lets wait!");
  setTimeout(function(){swapGaragePic(newPic);}, 1750);
  console.log("doneWaiting!");
}

function garagePicHandler(){
  console.log("GaragePicHandler!");
  switch(GarageModel.getHandler('open')){
    case true:
    console.log("door open");
    //why do i have these if statements?
    if(GarageModel.getHandler('light')){
      swapGaragePic(addBOpic);
    } else {
      swapGaragePic(addDOpic);
    }
    break;
    case false:
    console.log("door close");
    if(GarageModel.getHandler('light')){
      swapGaragePic(addBCpic);
    } else {
      swapGaragePic(addDCpic);
    }
    break;
  }

}
function swapGaragePic(picture){
  document.getElementById('myAnimation').style.display = "none";
  document.getElementById('myPicture').src = picture;
  document.getElementById('myPicture').style.display = "block";
  console.log("newGaragePic");
  hideLoading();

  if(GarageModel.getHandler('open') && GarageModel.getHandler('autoCloseEnabled')){
    console.log("Door Open and Auto Close Enabled!");
    startTimer('closeTimeDuration');
  }
}


//this doesnt work when passed from functions. The time is set to 0....
//but not when i print it manually....T-T
function startTimer(object){
  //this works!
  var timeValue = GarageModel.getHandler(object);
  console.log(timeValue);
  setTimeout(function(){shutOff(object);}, timeValue);
}


function shutOff(object){
  console.log("SHUT OFF");
  console.log(object);
  switch (object){
    case "offTimeDuration":
    console.log("switch statement offTime");
    if(GarageModel.getHandler('light')){
      console.log("SHUT OFF TRUE");
      lightChangeHandler('buttonClick');
    }
    break;

    case "closeTimeDuration":
    console.log("switch statement closeTime");
    loading(updateDoor);
    break;
  }
}

// function picSwapper(){
//   document.getElementById('myAnimation').style.display = "none";
//   document.getElementById('myPicture').src = this.currentPic;
//   //document.getElementById('myPicture').src = this.currentPic;
//   document.getElementById('myPicture').style.display = "block";
//   console.log("Swapped!");
//   document.getElementById('garageControlButton').disabled = false;
//   hideLoading();
// }



function loading(nextFunction){
  document.getElementById('garageControlButton').disabled = true;
  console.log("loadingFunc");
  document.getElementById("loadingIcon").style.display = 'block';
  GarageModel.setHandler("opening", true);
  nextFunction();
  console.log("loading done");
}

function hideLoading(){
  GarageModel.setHandler("opening", false);
  document.getElementById('garageControlButton').disabled = false;
  console.log("hideLoading");
  document.getElementById("loadingIcon").style.display = 'none';
}





/////////////////////ADVANCED TAB BOOLSHIT ////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////////////////////ADVANCED TAB BOOLSHIT ////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////////////////////ADVANCED TAB BOOLSHIT ////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////////////////////ADVANCED TAB BOOLSHIT ////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////////////////////ADVANCED TAB BOOLSHIT ////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//VARIABLES
var autoClose
var closeTime
var autoOff
var offTime
var brightness



//FUNctions!
// function boolChecker(button,interest){
//   console.log(GarageModel[interest]);
//   if(GarageModel[interest]){
//     GarageModel[interest] = false;
//     document.getElementById(button).innerHTML = "ENABLE" + button;
//   } else {
//     GarageModel[interest] = true;
//     document.getElementById(button).innerHTML = "DISABLE " + button;
//   }
// }

function boolChecker(button,interest){
  console.log(GarageModel.getHandler(interest));
  switch(GarageModel.getHandler(interest)){
    case true:
    GarageModel.setHandler(interest, false);
    document.getElementById(button).innerHTML = "ENABLE" + button;
    break;
    case false:
    GarageModel.setHandler(interest, true);
    document.getElementById(button).innerHTML = "DISABLE " + button;
    break;
  }
}

function rangeValues(dataSource, interest){
  console.log(dataSource.value);
  var newValue = dataSource.value;
  console.log(newValue);

  GarageModel.setHandler(interest,newValue);

  //GarageModel[interest] = newValue;
  console.log(GarageModel[dataSource]);
  console.log("range set!");
  document.getElementById("brightThing").innerHTML = GarageModel.getHandler('brightness');
}









document.addEventListener("DOMContentLoaded", function(event) {

  document.getElementById("loadingIcon").display = 'none';
  document.getElementById("loadingIcon").style.display = 'none';
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
  //document.getElementById("loginButton").addEventListener("click", garageScreen)
  document.getElementById("loginButton").addEventListener("click",  function(){loading(login);})
  document.getElementById("logoutButton").addEventListener("click", logout)



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
  myPicture = document.getElementById("myPicture")
  garageDisplay = document.getElementById("garageDisplay")
  //Listeners
  document.getElementById("switchPic").addEventListener("click", function(){ loading( function(){lightChangeHandler("buttonClick")})})
  document.getElementById("garageControlButton").addEventListener("click", function(){loading(updateDoor);})
  document.getElementById("myAnimation").style.display = "none";


  //ADVANCED SCREEN

  //variables
  autoClose = document.getElementById("autoClose")
  closeTime = document.getElementById("closeTimeout")
  autoOff = document.getElementById("autoOff")
  offTime = document.getElementById("offTimeout")
  brightness = document.getElementById("mySlider")

  //listeners
  document.getElementById("autoClose").addEventListener("click", function(){boolChecker("autoClose","autoCloseEnabled");})
  document.getElementById("autoOff").addEventListener("click", function(){boolChecker("autoOff","autoOffEnabled");})

  document.getElementById("closeTimeout").addEventListener("change", function(){rangeValues(closeTime, 'closeTimeDuration');})
  document.getElementById("offTimeout").addEventListener("change", function(){rangeValues(offTime, 'offTimeDuration');})
  document.getElementById("mySlider").addEventListener("change", function(){rangeValues(brightness, 'brightness');})




  // // Getting the initial state
  console.log("Getting Initial State")


  newAccountSection.style.visibility = "hidden";

  document.getElementById("switchAnim").style.display = 'none';


  //newAccountSection.display = none;
})
