escribe('Testes do E-commerce', () => {
 it('deve abrir a página inicial', () => {
 cy.visit('http://localhost:3000');
 cy.contains('Lista de Produtos').should('be.visible');
 });
 it('deve mostrar produtos na tela', () => {
 cy.visit('http://localhost:3000');
 cy.get('#products-list li')
 .should('have.length.greaterThan', 0);
 });
 it('deve mostrar o botão Adicionar ao Carrinho', () => {
 cy.visit('http://localhost:3000');
 cy.contains('Adicionar ao Carrinho')
 .should('be.visible');
 });
 it('deve adicionar um produto ao carrinho', () => {
 cy.visit('http://localhost:3000');
 cy.get('#products-list li')
 .first()
 .find('button')
 .click();
 cy.get('#cart-count')
 .should('have.text', '1');
 });
});c