import { loginpage } from '../pages/login';
import data  from '../fixtures/data.json';




describe('Pruebas Automatizadas de Login de Usuario: ', () => {

  beforeEach(() => {
    cy.visit('')
    cy.fixture('data').as('data');
  })


  it('Login Correcto de un usuario Standard', () => {
    loginpage.login(data.usuario_standard, data.password_standard);
    cy.url().should('include', '/inventory.html');
  })
})