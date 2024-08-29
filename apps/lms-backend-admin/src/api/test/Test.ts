import { Answer } from "../answer/Answer";
import { Lesson } from "../lesson/Lesson";
import { JsonValue } from "type-fest";

export type Test = {
  answers?: Array<Answer>;
  createdAt: Date;
  id: string;
  lesson?: Lesson | null;
  questions: JsonValue;
  updatedAt: Date;
};
