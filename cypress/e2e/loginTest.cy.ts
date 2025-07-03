import { loginpage } from '../pages/login';
import data  from '../fixtures/data.json';

interface LoginData {
  usuario_standard: string;
  password_standard: string;

}

const loginData = data[0] as LoginData;


describe('Pruebas Automatizadas de Login de Usuario: ', () => {

  beforeEach(() => {
    cy.visit('')
  });


  it('Login Correcto de un usuario Standard', () => {
    loginpage.login(loginData.usuario_standard, loginData.password_standard);
    cy.url().should('include', '/inventory.html');
  })

  it('Login Correcto de un usuario bloqueado', () => {
    loginpage.login(loginData.usuario_locked, loginData.password_locked);
    cy.url().should('include', '/inventory.html');
  })
})