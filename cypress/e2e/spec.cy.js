describe('Turing Cafe Reservations', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      fixture: '/mock-data.json'
    }).as('showAllReservations');
    cy.visit('/');
  });

  it('should render page title correctly on page load', () => {
    cy.get('h1').contains('Turing Cafe Reservations');
  });

  it('should display existing reservation cards correctly on page load', () => {
    cy.wait('@showAllReservations');
    cy.get('.resy-container')
      .children()
      .first()
      .within(() => {
        cy.contains('h3', 'Christie')
        cy.contains('p', '12/29')
        cy.contains('p', '7:00')
        cy.contains('p', 'Number of guests: 12')
        cy.contains('button', 'Cancel');
      });
    cy.get('.resy-container')
      .children()
      .last()
      .within(() => {
        cy.contains('h3', 'Will')
        cy.contains('p', '5/15')
        cy.contains('p', '6:30')
        cy.contains('p', 'Number of guests: 2')
        cy.contains('button', 'Cancel');
      });
  });

  it('should display blank form correctly on page load', () => {
    cy.wait('@showAllReservations');
    cy.get('input[name="name"]')
      .invoke('val')
      .should('deep.equal', '');

    cy.get('input[name="date"]')
      .invoke('val')
      .should('deep.equal', '');

    cy.get('input[name="time"]')
      .invoke('val')
      .should('deep.equal', '');

    cy.get('input[name="number"]')
      .invoke('val')
      .should('deep.equal', '');

    cy.get('.make-resy-button')
      .contains('Make Reservation');
  });

  it('should add reservation cards when entered through the form', () => {
    cy.wait('@showAllReservations');

    cy.get('input[name="name"]')
      .type('Erica')
      .invoke('val')
      .should('deep.equal', 'Erica');

    cy.get('input[name="date"]')
      .type('1/3')
      .invoke('val')
      .should('deep.equal', '1/3');

    cy.get('input[name="time"]')
      .type('12:00 pm')
      .invoke('val')
      .should('deep.equal', '12:00 pm');

    cy.get('input[name="number"]')
      .type('2')
      .invoke('val')
      .should('deep.equal', '2');

    cy.get('.make-resy-button').click();
    cy.get('input[name="name"]')
      .invoke('val')
      .should('deep.equal', '');

    cy.get('input[name="date"]')
      .invoke('val')
      .should('deep.equal', '');

    cy.get('input[name="time"]')
      .invoke('val')
      .should('deep.equal', '');

    cy.get('input[name="number"]')
      .invoke('val')
      .should('deep.equal', '');

    cy.get('.resy-container')
      .children()
      .last()
      .within(() => {
        cy.contains('h3', 'Erica')
        cy.contains('p', '1/3')
        cy.contains('p', '12:00 pm')
        cy.contains('p', 'Number of guests: 2')
        cy.contains('button', 'Cancel');
      });
  });
});