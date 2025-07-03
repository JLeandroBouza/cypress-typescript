import { loginpage } from '../pages/login';
import data  from '../fixtures/data.json';

interface LoginDataStandard {
  usuario_standard: string;
  password_standard: string;
}

interface LoginDatalocked {
  usuario_locked: string;
  password_locked: string;
}

const loginDataStandard = data[0] as LoginDataStandard;
const loginDatalocked = data[1] as LoginDatalocked;


describe('Pruebas Automatizadas de Login de Usuario: ', () => {

  beforeEach(() => {
    cy.visit('')
  });


  it('Login Correcto de un usuario Standard', () => {
    loginpage.login(loginDataStandard.usuario_standard, loginDataStandard.password_standard);
    cy.url().should('include', '/inventory.html');
  })

  it('Login Correcto de un usuario bloqueado', () => {
    loginpage.login(loginDatalocked.usuario_locked, loginDatalocked.password_locked);
    cy.url().should('include', '/inventory.html');
  })
})