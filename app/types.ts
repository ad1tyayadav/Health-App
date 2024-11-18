export type RootStackParamList = {
  Home: undefined;
  Registration: undefined;
  PreTest: undefined;
  Test: undefined;
  PostTest: { distanceWalked: number }; // Distance as a number
  Result: { distance: number }; // Accept distance as a number
  Share: undefined;
};
