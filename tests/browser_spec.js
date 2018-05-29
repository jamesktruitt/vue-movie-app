describe('PHP Travels', () => {
  it('shows correct web content', () => {
    cy.visit('/app');
    cy.get('header img').should('have.attr', 'src', './images/phptravels-logo.png');
    cy.get('h2').should('have.text', 'Application Test Drive.');

    cy.get('body > header nav > ul > li').as('listItems');
    cy
      .get('@listItems')
      .eq(0)
      .find('a')
      .should('have.text', 'Demo');
    cy
      .get('@listItems')
      .eq(1)
      .find('a')
      .should('have.text', 'Order');
    cy
      .get('ul')
      .eq(1)
      .find('li')
      .eq(0)
      .should('have.text', 'Product');

    cy.get('nav > button').click();
  });
});