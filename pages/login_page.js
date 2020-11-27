const { I } = inject();

module.exports = {

  fields:{

    email:'~email',
    password: '~senha'
  },

  buttons:{
    enter: '~entrar'

  },

  messages:{

    login_error: '~loginFail'



  },
// metodo login 
dologin(email,password){
  I.fillField(this.fields.email, email);
    
  I.fillField(this.fillField.password, password);
  
  I.tap(this.buttons.enter);

},
// metodo que valida login com erro 
checkLoginError(){

  // check 
  I.waitForElement(this.messages.login_error, 5)
  I.seeElement(this.messages.login_error)

}

}
