

function wait(timeInSeconds) {
  var start = Date.now();
  var endTime = start + timeInSeconds*1000;
  while(Date.now()<endTime);
}




/////////////////////USER INFO BOOLSHIT ////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////////////////////USER INFO BOOLSHIT ////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////////////////////USER INFO BOOLSHIT ////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////////////////////USER INFO BOOLSHIT ////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////////////////////USER INFO BOOLSHIT ////////////////////////////////
//////////////////////////////////////////////////////////////////////////


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
  document.getElementById('theUser').innerHTML = userInfo.getHandler('userName');
  document.getElementById('theEmail').innerHTML = userInfo.getHandler('emailAddress');
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

  username.value = "";
  password.value = "";
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
//------------   LOGIN SCREEN ITEMS ---------------//
//------------   LOGIN SCREEN ITEMS ---------------//
//------------   LOGIN SCREEN ITEMS ---------------//

var loginControls
var inputFields

var newUser
var newPassword
var validPassword
var newEmail
var newAccount
var newAccountSection
var confirmAccountButton
var cancelButton
var validEmail

var username
var password
var createAccountButton
var loginButton

var isEmail = false;
var passwordsMatch = false;

function login(){
  if(username.value == userInfo.getHandler('userName')){
    if(password.value == userInfo.getHandler('password')){
      consoleWrapper("Login Success");
      userInfo.setHandler('userName', username.value);
      setTimeout(garageScreen, 100);
    }
  } else {
    consoleWrapper("login fail");
    alert("Invalid Info! Use ADMIN for both or create a new account");
    hideLoading();
  }
}

function passwordEntry(){
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

function passwordValidation(){
  if(newPassword.value == validPassword.value){
    passwordsMatch = true;
    console.log("setting password!");
  }
}

function emailValidation(){
  if(newEmail.value.indexOf("@") > -1){
    console.log("its an email!");
    userInfo.setHandler('emailAddress', newEmail.value);
    isEmail = true;
  } else {
    console.log("not an email!");
    isEmail = false;
  }
}

function accountConfirmation(){
  consoleWrapper("accountConfirmation");
  console.log("account confirmed buddy");
  console.log(passwordsMatch);
  var passCheck = true;
  var userCheck = true;
  var emailCheck = true;

  if(!passwordsMatch){
    passCheck = false;
    alert("Passwords don't match!");
  }
  if(newUser.value == "" ){
    userCheck = false;
    alert("Enter a username!");
  }
  if(!isEmail){
    emailCheck = false;
    alert("Please enter a valid email address");
  }
  if(passCheck && userCheck && emailCheck){
      consoleWrapper("PassConfirmCheck");
      userInfo.setHandler('password', newPassword.value);
      userInfo.setHandler('userName', newUser.value);

      password.value = newPassword.value;
      username.value = newUser.value;

      newPassword.value = "";
      newEmail.value = "";
      validPassword.value = "";
      newUser.value = "";


      newAccountSection.style.visibility = "hidden";
      loginButton.disabled = false;
      createAccountButton.disabled = false;
      confirmAccountButton.disabled = true;
      newAccountSection.hidden = true;
      cancelButton.disabled = true;
    }


}
function cancelUser(){
  consoleWrapper("cancelUser");
  newPassword.value = "";
  newEmail.value = "";
  validPassword.value = "";
  newUser.value = "";

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


////////////////////////////////////FUNCTIONS////////////////////////////////////
////////////////////////////////////FUNCTIONS////////////////////////////////////
////////////////////////////////////FUNCTIONS////////////////////////////////////
////////////////////////////////////FUNCTIONS////////////////////////////////////
////////////////////////////////////FUNCTIONS////////////////////////////////////

function lightAffectGarage(){
  //This changes the garageLightSettings!
  //Called when lightSwitch is touched
  cconsoleWrapper("Light -> Garage");
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
  consoleWrapper("Garage -> Light");
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
  consoleWrapper("Updating LightGarage");
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
  consoleWrapper("Updating Door");
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


////////////////////////////////////TIMING////////////////////////////////////
////////////////////////////////////TIMING////////////////////////////////////
////////////////////////////////////TIMING////////////////////////////////////
////////////////////////////////////TIMING////////////////////////////////////
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



function loading(nextFunction){
  document.getElementById('garageControlButton').disabled = true;
  console.log("loadingFunc");
  document.getElementById("loadingIcon").style.display = 'block';

  //LOADING IS DONE FOR AN ADDITION SECOND BEFORE EXECUTION
  setTimeout(function(){nextFunction();}, 1000);

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

function boolChecker(button,interest){
  consoleWrapper(GarageModel.getHandler(interest));
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
  consoleWrapper("Range Adjusted!")
  consoleWrapper(dataSource)
  console.log(dataSource.value);
  var newValue = dataSource.value;
  console.log(newValue);
  GarageModel.setHandler(interest,newValue);
  //GarageModel[interest] = newValue;
  console.log(GarageModel[dataSource]);
  console.log("range set!");
  document.getElementById("brightThing").innerHTML = GarageModel.getHandler('brightness');
}




/////////////////////////////////CUSTOM DEBUG MODE/////////////////////////////////
/////////////////////////////////CUSTOM DEBUG MODE/////////////////////////////////
/////////////////////////////////CUSTOM DEBUG MODE/////////////////////////////////
/////////////////////////////////CUSTOM DEBUG MODE/////////////////////////////////
/////////////////////////////////CUSTOM DEBUG MODE/////////////////////////////////
/////////////////////////////////CUSTOM DEBUG MODE/////////////////////////////////
function isKeyPressed(event) {
    var x = document.getElementById("something");
    if (event.shiftKey) {
        console.log("DEBUG MODE ENABLED");
        document.getElementById("debuggler").style.display = "block";
        document.getElementById("debuggler1").style.display = "block";
        document.getElementById("something").innerHTML = "HIDE";
    }
    else {
        console.log("The SHIFT key was NOT pressed!");
        document.getElementById("debuggler").style.display = "none";
        document.getElementById("debuggler1").style.display = "none";
        document.getElementById("something").innerHTML = "DEBUG";
    }
}


//ATTEMPT to emulate console on the screen (for debug mode)
function consoleWrapper(string){
  document.getElementById("debuggler1").innerHTML = "prev: " + document.getElementById("debuggler").innerHTML;
  document.getElementById("debuggler").innerHTML = string;
  console.log(string);
}





////////////////////////////////////ON LOADING////////////////////////////////////
////////////////////////////////////ON LOADING////////////////////////////////////
////////////////////////////////////ON LOADING////////////////////////////////////
////////////////////////////////////ON LOADING////////////////////////////////////
////////////////////////////////////ON LOADING////////////////////////////////////
document.addEventListener("DOMContentLoaded", function(event) {

////////////HIDE THINGS////////////
////////////HIDE THINGS////////////
////////////HIDE THINGS////////////
////////////HIDE THINGS////////////
  document.getElementById("loadingIcon").display = 'none';
  document.getElementById("loadingIcon").style.display = 'none';
  document.getElementById("garageTab").style.display = 'none';
  document.getElementById("userInfo").style.display = 'none';
  document.getElementById("advancedTab").style.display = 'none';
  console.log("Document Loaded")



///////NAV PANEL///////
///////NAV PANEL///////
///////NAV PANEL///////
///////NAV PANEL///////
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




///////////Login Screen///////////
///////////Login Screen///////////
///////////Login Screen///////////
///////////Login Screen///////////

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



//////////////New Account//////////////
//////////////New Account//////////////
//////////////New Account//////////////
//////////////New Account//////////////
//////////////New Account//////////////

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
  document.getElementById("yourEmail").addEventListener("change", emailValidation)
  document.getElementById("returnToLogin").addEventListener("click", cancelUser)


/////////////Garage Screen/////////////
/////////////Garage Screen/////////////
/////////////Garage Screen/////////////
/////////////Garage Screen/////////////
/////////////Garage Screen/////////////
  //Variables
  lightSwitch = document.getElementById("switchPic")
  myPicture = document.getElementById("myPicture")
  garageDisplay = document.getElementById("garageDisplay")
  //Listeners
  document.getElementById("switchPic").addEventListener("click", function(){ loading( function(){lightChangeHandler("buttonClick")})})
  document.getElementById("garageControlButton").addEventListener("click", function(){loading(updateDoor);})
  document.getElementById("myAnimation").style.display = "none";


////////////////ADVANCED////////////////
////////////////ADVANCED////////////////
////////////////ADVANCED////////////////
////////////////ADVANCED////////////////
////////////////ADVANCED////////////////

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




///HIDING THINFS BEFORE LAUNCHING///
  newAccountSection.style.visibility = "hidden";
  document.getElementById("switchAnim").style.display = 'none';
  document.getElementById("debuggler").style.display = 'none';
  document.getElementById("debuggler1").style.display = 'none';


///NIIIIIIICE BUDDY///
  document.getElementById("something").addEventListener("click", isKeyPressed);

  //newAccountSection.display = none;
})
