import { JsonValue } from "type-fest";
import { Test } from "../test/Test";
import { User } from "../user/User";

export type Answer = {
  createdAt: Date;
  id: string;
  isCorrect: boolean | null;
  orderNumber: number | null;
  response: JsonValue;
  test?: Test | null;
  translation: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
