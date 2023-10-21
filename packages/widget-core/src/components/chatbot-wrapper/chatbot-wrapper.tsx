import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'chatbot-wrapper',
  styleUrl: 'chatbot-wrapper.css',
  shadow: true,
})
export class ChatbotWrapper {
  @Prop() chatbotId: string;

  render() {
    return <div>Chatbot for {this.chatbotId} comes here!</div>
  }
}
