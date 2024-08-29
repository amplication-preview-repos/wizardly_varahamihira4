import { AnswerUpdateManyWithoutTestsInput } from "./AnswerUpdateManyWithoutTestsInput";
import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type TestUpdateInput = {
  answers?: AnswerUpdateManyWithoutTestsInput;
  lesson?: LessonWhereUniqueInput | null;
  questions?: InputJsonValue;
};
