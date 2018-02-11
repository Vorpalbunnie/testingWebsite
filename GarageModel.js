var garageModel = {
    // state variables for simulated lamp
    open: false,
    lit: false,
    brightness: 0,
    autoOffEnabled: true,
    autoOffTime: 30,
    stateChangeHandler: null,

    // getState: Get the initial state and eventually pass it to the "callback" function
    getState: function(callback) {
      var state = { "r":this.r,
                    "g":this.g,
                    "b":this.b,
                    "powered":this.powered,
                    "autoOffEnabled":this.autoOffEnabled,
                    "autoOffTime":this.autoOffTime};
      console.log("getState")

      setTimeout(function () {callback(state)},  1000);
    },

    // ****** Simple setter functions *******
    setPowered: function(power) {
      this.powered = power;
      if(this.powered && this.autoOffEnabled) {
        var autoOff = this;
        setTimeout(function() {  autoOff.autoOff() }, 1000)
      }
      this.stateChange();
    },
    autoOff: function() {
      this.powered = false
      this.stateChange()
    },
    setAutoOffEnabled: function(enabled) {
      this.autoOffEnabled = enabled
      this.stateChange()
    },
    setAutoOffTime: function(time) {
      this.autoOffTime = time
      this.stateChange()
    },
    setStateChangeHandler: function(handler) {
      this.stateChangeHandler = handler;
      this.stateChange();
    },
    stateChange: function() {
      var state = { "r":this.r,
                    "g":this.g,
                    "b":this.b,
                    "powered":this.powered,
                    "autoOffEnabled":this.autoOffEnabled,
                    "autoOffTime":this.autoOffTime};

      setTimeout(function(){setStateChangeHandler()},  1000);
      }
    }
