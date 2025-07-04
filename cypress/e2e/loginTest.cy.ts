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

interface LoginProblems {
  usuario_problem: string;
  password_problem: string;
}

interface LoginPerformance {
  usuario_performance_glitch: string;
  password_performance_glitch: string;
}

interface LoginError {
  usuario_error: string;
  password_error: string;
}

interface LoginErrorVisual {
  usuario_visual: string;
  password_visual: string;
}

const loginDataStandard = data[0] as LoginDataStandard;
const loginDatalocked = data[1] as LoginDatalocked;
const LoginDataProblems = data[2] as LoginProblems;
const LoginDataPerformance = data[3] as LoginPerformance;
const LoginDataError = data[4] as LoginError;
const LoginDataErrorVisual = data[5] as LoginErrorVisual;


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
    loginpage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.')
  })

  it('Login Correcto de un usuario con Problemas', () => {
    loginpage.login(LoginDataProblems.usuario_problem, LoginDataProblems.password_problem);
    cy.url().should('include', '/inventory.html');
  })

   it('Login Correcto de un usuario Performance', () => {
    loginpage.login(LoginDataPerformance.usuario_performance_glitch, LoginDataPerformance.password_performance_glitch);
    cy.url().should('include', '/inventory.html');
  })

  it('Login Correcto de un usuario con Errores', () => {
    loginpage.login(LoginDataError.usuario_error,LoginDataError.password_error);
  })

  it('Login Correcto de un usuario con Errores Visuales', () => {
    loginpage.login(LoginDataErrorVisual.usuario_visual,LoginDataErrorVisual.password_visual);
  })

  
})