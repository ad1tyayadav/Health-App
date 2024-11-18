// types.ts

export type RootStackParamList = {
  Home: undefined;
  Registration: undefined;
  PreTest: undefined;
  Test: undefined;
  PostTest: { distanceWalked: string };
  Result: { distance: string };
  Share: undefined;
};
