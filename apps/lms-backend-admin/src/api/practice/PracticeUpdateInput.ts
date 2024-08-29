import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";
import { UserPracticeResponseUpdateManyWithoutPracticesInput } from "./UserPracticeResponseUpdateManyWithoutPracticesInput";

export type PracticeUpdateInput = {
  deletedAt?: Date | null;
  lesson?: LessonWhereUniqueInput | null;
  textTask?: string | null;
  userPracticeResponses?: UserPracticeResponseUpdateManyWithoutPracticesInput;
};
