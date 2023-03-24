describe('メッセージの作成', () => {
  const message = 'message';
  it('メッセージをリストに表示する', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="messageText"]')
      .type(message);

    cy.get('[data-testid="sendButton"]')
      .click();

    cy.get('[data-testid="messageText"]')
      .should('have.value', '');

    cy.contains(message);
  });
});
