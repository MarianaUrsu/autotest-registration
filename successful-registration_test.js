Feature('user_test');

Scenario('successful registration test', ({ I }) => {
        I.amOnPage('https://www.reg.ru/user/authorize');
        I.click('register');
        I.fillField('email', 'testreg9@list.ru');
        I.fillField('phone', '+79005553758');
        I.click('submit');
        I.waitUrlEquals('/https://www.reg.ru/user/account/#/?filter=domain');
 });