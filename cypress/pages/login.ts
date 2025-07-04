export class loginPage {

    inputUsername: string;
    inputPassword: string;
    btnLogin: string;
    messageError: string;
    
    constructor() {
        this.inputUsername = '#user-name';
        this.inputPassword = '#password';
        this.btnLogin = '#login-button';
        this.messageError = 'h3[data-test="error"]';
    }


  login(usuario: string, password: string) {
    cy.get(this.inputUsername).type(usuario);
    cy.get(this.inputPassword).type(password);
    cy.get(this.btnLogin).click();
  }


  verifyErrorMessage(expectedMessage: string) {
    cy.get(this.messageError).should('have.text', expectedMessage);
  }
}

export const loginpage = new loginPage()