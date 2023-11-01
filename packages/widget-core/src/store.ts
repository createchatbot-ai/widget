import { createStore } from '@stencil/store';
import { disableHints } from './services/hints/disable-hints';
import { getShowHints } from './services/hints/get-show-hints';

const { state, onChange } = createStore({
  isOpen: false,
  showHints: getShowHints(),
});

onChange('isOpen', value => {
  if (value) {
    disableHints();
  }
});

export default state;
