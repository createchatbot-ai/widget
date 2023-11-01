import { Component, Prop, h } from '@stencil/core';
import state from '../../store';

@Component({
  tag: 'cc-toggle',
  styleUrl: 'toggle.css',
  shadow: true,
})
export class Toggle {
  @Prop() bgColor: string;
  @Prop() fgColor: string;

  render() {
    return (
      <div
        class='toggle'
        style={{
          background: this.bgColor
        }}
        onClick={() => state.isOpen = !state.isOpen}
      >{
        state.isOpen
          ? <cc-chevron-down stroke={this.fgColor} />
          : <cc-chat-bubble fill={this.fgColor} />
      }</div>
    );
  }
}
