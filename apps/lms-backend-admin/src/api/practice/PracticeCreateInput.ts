import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";
import { UserPracticeResponseCreateNestedManyWithoutPracticesInput } from "./UserPracticeResponseCreateNestedManyWithoutPracticesInput";

export type PracticeCreateInput = {
  lesson?: LessonWhereUniqueInput | null;
  textTask?: string | null;
  userPracticeResponses?: UserPracticeResponseCreateNestedManyWithoutPracticesInput;
};
