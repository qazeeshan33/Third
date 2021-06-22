
/// <reference types="cypress" />
  

it('Veedoc', function(){


    cy.visit('https://qa-aws.veemed.com/web/#/login')
    
    cy.get(':nth-child(1) > .vm-input').type('rahim@veemed.com')
    cy.get(':nth-child(2) > .vm-input').type('Test@12345')
    cy.get('.text-center > .btn-vm-auth').click()

    cy.get('.name').should('have.text', 'Hassan, Z')

    let name = 'Khatri, R'
    expect(name).to.be.equal('Khatri, R')


    assert.equal(4, 4, 'Passed')
    
    cy.get('.icon_vm_outpatient').click()

    cy.get('.btn-vm-icon').click()

    cy.contains('Local').click()

    cy.get('.mat-option-text').contains('Pacific Time').click()

    cy.contains('+1').click()




    })