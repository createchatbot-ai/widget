import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'cc-toggle',
  styleUrl: 'toggle.css',
  shadow: true,
})
export class Toggle {
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
          ? <cc-chevron-down stroke={this.fgColor} />
          : <cc-chat-bubble fill={this.fgColor} />
      }</div>
    );
  }
}
