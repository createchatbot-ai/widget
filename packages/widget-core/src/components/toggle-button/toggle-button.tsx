import { Component, Prop, h } from '@stencil/core';
import { Chatbot } from '../../models/chatbot';

@Component({
  tag: 'toggle-button',
  styleUrl: 'toggle-button.css',
  shadow: true,
})
export class ToggleButton {
  @Prop() chatbot: Chatbot;

  render() {
    return (
      <div
        class='toggle'
        style={{
          background: this.chatbot.bgColor
        }}
      >
        <chat-bubble fill={this.chatbot.textColor} />
      </div>
    );
  }
}
