
import { atom } from 'recoil';

export const totalState = atom<number>({
  key: 'totalState',
  default: 123456,
});

export const upcomingState = atom<number>({
  key: 'upcomingState',
  default: 50,
});

export const ongoingState = atom<number>({
  key: 'ongoingState',
  default: 100,
});

export const completedState = atom<number>({
  key: 'completedState',
  default: 50,
});

export const receivedAmountState = atom<number>({
  key: 'amountState',
  default: 0,
});

