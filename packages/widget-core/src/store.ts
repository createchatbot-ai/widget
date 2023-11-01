import { createStore } from '@stencil/store';

const { state, onChange } = createStore({
  isOpen: false,
});

onChange('isOpen', value => {
  // TODO: Deactivate hints
});

export default state;
