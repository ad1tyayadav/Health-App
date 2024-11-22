export type RootStackParamList = {
  Home: undefined;
  Registration: undefined;
  PreTest: undefined;
  Test: undefined;
  PostTest: { distanceWalked: number }; // Example: expected param for PostTestScreen
  Result: { distance: number; timeElapsed: number }; // Expected params for ResultScreen
  Share: { distance: number; timeElapsed: number };
};
