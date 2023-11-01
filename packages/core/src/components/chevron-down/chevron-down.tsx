import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'cc-chevron-down',
  shadow: true,
})
export class ChevronDown {
  @Prop() stroke: string;

  render() {
    return (
      <svg style={{ width: '42px', marginTop: '8px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={this.stroke} class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }
}