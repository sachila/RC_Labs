// constants
export const TEST = "TEST";

// interfaces
// these should map directly to db schema

// action types

export type Test = {
  type: typeof TEST;
  test: string;
};

export type LabActions = Test;
