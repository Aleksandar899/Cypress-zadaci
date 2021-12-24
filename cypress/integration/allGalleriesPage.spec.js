import {header} from '../page_objects/header';


describe('all galleries page test', () => {
    // before('login via backend',()=>{
    //     cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', {
    //         email: 'aleksandarloncar89@gmail.com',
    //         password: 'Sladoled1!'
    //     }).its('body').then((response)=> {
    //         cy.log(JSON.stringify(response));
    //         window.localStorage.setItem('token', response.access_token);

    //     });
    before('login via backend',()=>{
        cy.loginViaBackend();
    });

    it('assert login',() =>{
        cy.visit('/');
        header.loginBtn.should('not.exist');
        
    })

});