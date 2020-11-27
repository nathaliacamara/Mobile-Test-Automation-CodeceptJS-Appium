const { I } = inject();

module.exports = {

  button:{

    save:'~salvar',
   
  },

 // metodo  que valida sucesso do login
  checkLoginSuccess(){

    // check 
    I.waitForElement(this.button.save, 5)
    I.seeElement(this.button.save)

  }


}
