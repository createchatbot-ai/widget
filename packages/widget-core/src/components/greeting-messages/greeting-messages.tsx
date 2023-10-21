import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'greeting-messages',
  styleUrl: 'greeting-messages.css',
  shadow: true,
})
export class GreetingMessages {
  @Prop() messages: string[];

  render() {
    return (
      <div class='hints'>
        <div class='hints-container'>
          <div class='close'>
            <x-mark
              size='15px'
              fill='#2D3748'
            />
          </div>
          {this.messages.map(msg => (
            <div class='hint'>{msg}</div>
          ))}
        </div>
      </div>
    );
  }
}
