import { AnswerUpdateManyWithoutTestsInput } from "./AnswerUpdateManyWithoutTestsInput";
import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type TestUpdateInput = {
  answers?: AnswerUpdateManyWithoutTestsInput;
  deletedAt?: Date | null;
  lesson?: LessonWhereUniqueInput | null;
  questions?: InputJsonValue;
};
