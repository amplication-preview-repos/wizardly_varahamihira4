import { AnswerCreateNestedManyWithoutTestsInput } from "./AnswerCreateNestedManyWithoutTestsInput";
import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type TestCreateInput = {
  answers?: AnswerCreateNestedManyWithoutTestsInput;
  deletedAt?: Date | null;
  lesson?: LessonWhereUniqueInput | null;
  questions?: InputJsonValue;
};
