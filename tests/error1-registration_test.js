Feature('tests');

Scenario('error1 registration test', ({ I }) => {
    I.amOnPage('https://www.reg.ru/user/authorize');
    I.click('register');
    I.fillField('email', 'chiuciuc_mariana11@mail.ru');
    I.fillField('phone', '+37369189019');
    I.click('submit');
    I.waitForText("Пользователь с таким email уже зарегистрирован.");
});