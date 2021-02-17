import { selector } from 'recoil';
import { user } from './atoms';

import users from '../../mockData/users';

export const getUser = selector({
  key: 'getUser',
  get: () => users.find((user) => user.email === 'mamv.2137@gmail.com'),
});

export const getCurrentUser = selector({
  key: 'getCurrentUser',
  get: ({ get }) => get(user),
});
