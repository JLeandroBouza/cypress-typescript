export class loginPage {

    inputUsername: string;
    inputPassword: string;
    btnLogin: string;

    
    constructor() {
        this.inputUsername = '#user-name';
        this.inputPassword = '#password';
        this.btnLogin = '#login-button';
    }


  login(usuario: string, password: string) {
    cy.get(this.inputUsername).type(usuario);
    cy.get(this.inputPassword).type(password);
    cy.get(this.btnLogin).click();
  }

  loginStandard() {
    cy.fixture('data').then((data) => {
      this.login(data.usuario_standard, data.password_standard);
    });
  }
}

export const loginpage = new loginPage()