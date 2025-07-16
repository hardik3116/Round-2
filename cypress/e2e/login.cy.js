import { loginPage } from '../support/pageObjects';

describe('Login Functionality', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('Successful login with valid credentials', () => {
    loginPage.fillUsername('tomsmith');
    loginPage.fillPassword('SuperSecretPassword!');
    loginPage.submit();
    loginPage.getMessage().should('contain', 'You logged into a secure area!');
  });

  it('Failed login with invalid username', () => {
    loginPage.fillUsername('invalidUser');
    loginPage.fillPassword('SuperSecretPassword!');
    loginPage.submit();
    loginPage.getMessage().should('contain', 'Your username is invalid!');
  });

  it('Failed login with invalid password', () => {
    loginPage.fillUsername('tomsmith');
    loginPage.fillPassword('invalidPassword');
    loginPage.submit();
    loginPage.getMessage().should('contain', 'Your password is invalid!');
  });

  it('Logout after successful login', () => {
    loginPage.fillUsername('tomsmith');
    loginPage.fillPassword('SuperSecretPassword!');
    loginPage.submit();
    loginPage.logout();
    loginPage.getMessage().should('be.visible').and('contain', 'You logged out of the secure area!');
  });
}); 