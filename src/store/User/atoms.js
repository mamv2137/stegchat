import { atom } from 'recoil';

import { getUser } from './selectors';

export const user = atom({
  key: 'user',
  default: getUser,
});
