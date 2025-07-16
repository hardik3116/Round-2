class LoginPage {
  visit() {
    cy.visit('/login');
  }
  fillUsername(username) {
    cy.get('input[name="username"]').clear().type(username);
  }
  fillPassword(password) {
    cy.get('input[name="password"]').clear().type(password);
  }
  submit() {
    cy.get('button[type="submit"]').click();
  }
  getMessage() {
    return cy.get('#flash');
  }
  logout() {
    cy.get('a[href="/logout"]').click();
  }
}

export const loginPage = new LoginPage(); 