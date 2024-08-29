import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";
import { UserPracticeResponseCreateNestedManyWithoutPracticesInput } from "./UserPracticeResponseCreateNestedManyWithoutPracticesInput";

export type PracticeCreateInput = {
  deletedAt?: Date | null;
  lesson?: LessonWhereUniqueInput | null;
  textTask?: string | null;
  userPracticeResponses?: UserPracticeResponseCreateNestedManyWithoutPracticesInput;
};
