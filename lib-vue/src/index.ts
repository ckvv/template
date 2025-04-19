import { ButtonCount, HelloWorld } from './components';
import { create } from './create';

export const install = create({ components: [ButtonCount, HelloWorld] });

export {
  create,
};
