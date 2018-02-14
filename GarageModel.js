

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

  currentState: function(){
    var stateMaybe = {
    openState: this.openState,
    open: this.open,
    light: this.light,
    opening: this.opening,
    brightness: this.brightness,
    autoCloseEnabled: this.autoCloseEnabled,
    closeTimeDuration: this.closeTimeDuration,
    offTimeDuration: this.offTimeDuration,
    autoOffEnabled: this.autoOffEnabled,
  }
    return stateMaybe;
  }
}


document.addEventListener("DOMContentLoaded", function(event){

  console.log("uhhhhh")


})
