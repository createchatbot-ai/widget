import { Component, Prop, h } from '@stencil/core';
import { Chatbot } from '../../models/chatbot';

@Component({
  tag: 'toggle-button',
  styleUrl: 'toggle-button.css',
  shadow: true,
})
export class ToggleButton {
  @Prop() chatbot: Chatbot;

  @Prop({ mutable: true }) isOpen: boolean;

  render() {
    return (
      <div
        class='toggle'
        style={{
          background: this.chatbot.bgColor
        }}
        onClick={() => this.isOpen = !this.isOpen}
      >{
        this.isOpen
          ? <chevron-down stroke={this.chatbot.textColor} />
          : <chat-bubble fill={this.chatbot.textColor} />
      }</div>
    );
  }
}
