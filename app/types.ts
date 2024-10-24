// types.ts
export type RootStackParamList = {
    Home: undefined;
    Registration: undefined;
    PreTest: undefined;
    Test: undefined;
    PostTest: undefined; // Make sure this is included
    Result: { distance: string }; // Accept distance as a parameter
    Share: undefined;
  };
  