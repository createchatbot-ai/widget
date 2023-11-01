import { Component, Prop, h } from '@stencil/core';
import state from '../../store';

@Component({
  tag: 'cc-hints',
  styleUrl: 'hints.css',
  shadow: true,
})
export class Hints {
  @Prop() messages: string[];

  render() {
    return (
      <div
        class='hints'
        style={{
          visibility: state.showHints ? 'visible' : 'hidden'
        }}
      >
        <div class='hints-container'>
          <div class='close'>
            <cc-x-mark
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
