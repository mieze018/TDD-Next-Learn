describe('メッセージの作成', () => {
  it('メッセージをリストに表示する', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="messageText"]')
      .type('新しいメッセージ');

    cy.get('[data-testid="sendButton"]')
      .click();

    cy.get('[data-testid="messageText"]')
      .should('have.value', '');

    cy.contains('新しいメッセージ');
  });
});
