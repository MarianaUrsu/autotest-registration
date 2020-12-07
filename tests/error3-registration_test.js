Feature('tests');

Scenario('error3 registration test', ({ I }) => {
    I.amOnPage('https://www.reg.ru/user/authorize');
    I.click('register');
    I.fillField('email', 'test@regru@mail.ru');
    I.fillField('phone', '+37369169969');
    I.click('submit');
    I.waitForText("Некорректный e-mail");
});