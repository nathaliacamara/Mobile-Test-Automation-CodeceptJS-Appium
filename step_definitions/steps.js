const { I } = inject();

Given('I fill email', () => {
  I.fillField('~email', 'teste@teste.com');
});

Given('I fill password', () => {
  I.fillField('~senhal', '123456');
});

When('I tap on Entrar', () => {
  I.tap('~entrar');
});

Then('I see th Salvar button', () => {
  I.waitForElement('~salvar', 5)
  I.seeElement('~salvar')
});
