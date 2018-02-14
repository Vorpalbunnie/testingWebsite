var userInfo = {
  userName: "ADMIN",
  emailAddress: "null",
  password: "ADMIN",

  active: false,
  getHandler: function(desired){
    console.log("getHandler");
    switch(desired){
      case 'userName':
      return this.getuserName();
      break;
      case 'emailAddress':
      return this.getemailAddress();
      break;
      case 'password':
      return this.getpassword();
      break;
    }
  },
  getuserName: function(){
    return this.userName;
  },
  getemailAddress: function(){
    return this.emailAddress;
  },
  getpassword: function(){
    return this.password;
  },
  setHandler: function(desired, value){
    switch(desired){
      case 'userName':
      this.setuserName(value);
      break;
      case 'emailAddress':
      this.setemailAddress(value);
      break;
      case 'password':
      this.setpassword(value);
    }
  },

  setuserName: function(value){
    this.userName = value;
  },
  setemailAddress: function(value){
    this.emailAddress = value;
  },
  setpassword: function(value){
    this.password = value;
  },
}
