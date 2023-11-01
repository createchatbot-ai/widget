import { createStore } from '@stencil/store';
import { disableHints } from './services/hints/disable-hints';
import { getShowHints } from './services/hints/get-show-hints';
import { getIsOpen } from './services/is-open/get-is-open';
import { setIsOpen } from './services/is-open/set-is-open';

const { state, onChange } = createStore({
  isOpen: getIsOpen(),
  showHints: getShowHints(),
});

onChange('isOpen', value => {
  setIsOpen(value);

  if (value) {
    disableHints();
  }
});

export default state;
