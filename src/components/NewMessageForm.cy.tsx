import React from 'react'
import { NewMessageForm } from './NewMessageForm'

describe('<NewMessageForm />', () => {
  describe('messageと入力して送信ボタンをクリックすると', () => {
    const sendMessage = () => {
      cy.get('[data-testid="messageText"]').type('message')
      cy.get('[data-testid="sendButton"]').click()
    }
    it('テキストフィールドがクリアされる', () => {
      cy.mount(<NewMessageForm />)
      sendMessage()
      cy.get('[data-testid="messageText"]').should('have.value', '')
    })
    it('onSendが呼ばれる', () => {
      const onSend = cy.spy()
      cy.mount(<NewMessageForm onSend={onSend} />)
      sendMessage()
      expect(onSend).to.be.calledWith('message')
    })
  })
})
