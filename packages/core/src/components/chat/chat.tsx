import { Component, Prop, h } from '@stencil/core';
import state from '../../store';

@Component({
  tag: 'cc-chat',
  styleUrl: 'chat.css',
  shadow: true,
})
export class Chat {
  @Prop() chatbotId: string;

  render() {
    return (
      <div
        class='chat'
        style={{
          visibility: state.isOpen ? 'visible' : 'hidden'
        }}
      >
        <iframe
          class='chatFrame'
          src={`https://app.createchatbot.ai/chat/${this.chatbotId}`}
        />
      </div>
    );
  }
}
