import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'chatbot-wrapper',
  styleUrl: 'chatbot-wrapper.css',
  shadow: true,
})
export class ChatbotWrapper {
  @Prop() id: string;

  render() {
    return <div>Chatbot for {this.id} comes here!</div>
  }
}
