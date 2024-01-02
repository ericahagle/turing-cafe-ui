// Iteration 3
// Now that the functionality is there for adding a reservation, write some tests:

// Be sure to intercept and stub any userflows that rely on data from the API

// Write tests covering what should be displayed on the page when the user first visits.
// Write a test that checks that when data is put into the form, the value is reflected in that form input.
// Write a test to check the user flow of adding a new reservation to the page.

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

  it('should display reservation cards correctly on page load', () => {
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

  it.skip('should add reservation cards when entered through the form', () => {

  });
});