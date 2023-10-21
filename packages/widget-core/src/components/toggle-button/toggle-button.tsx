import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'toggle-button',
  styleUrl: 'toggle-button.css',
  shadow: true,
})
export class ToggleButton {
  @Prop() bgColor: string;
  @Prop() fgColor: string;

  @Prop({ mutable: true }) isOpen: boolean;

  render() {
    return (
      <div
        class='toggle'
        style={{
          background: this.bgColor
        }}
        onClick={() => this.isOpen = !this.isOpen}
      >{
        this.isOpen
          ? <chevron-down stroke={this.fgColor} />
          : <chat-bubble fill={this.fgColor} />
      }</div>
    );
  }
}
