import { AnswerCreateNestedManyWithoutTestsInput } from "./AnswerCreateNestedManyWithoutTestsInput";
import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type TestCreateInput = {
  answers?: AnswerCreateNestedManyWithoutTestsInput;
  lesson?: LessonWhereUniqueInput | null;
  questions?: InputJsonValue;
};
