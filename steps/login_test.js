const { checkLoginSuccess } = require("../pages/home_page");

Feature('login'); 

const {I, login_page} = inject()  // global para tds cenarios 

// executar algo antes ou depois  da suite inteira com before suite  assim como  o aftersuite
BeforeSuite(() => {
    console.log('Finoti')  

});

Before(() =>{

    console.log('Finotti')



});

Scenario('Login with success', ({home_page}) => {   

    login_page.dologin('teste@teste.com', '123456')
    //pause()  -> debugar 
    home_page.checkLoginSuccess()
    
    


});

Scenario('Login with error', () => {

    login_page.dologin('xteste@teste.com', '123456')
    login_page.checkLoginError()

    

});