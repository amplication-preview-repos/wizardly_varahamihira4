import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";
import { UserPracticeResponseUpdateManyWithoutPracticesInput } from "./UserPracticeResponseUpdateManyWithoutPracticesInput";

export type PracticeUpdateInput = {
  lesson?: LessonWhereUniqueInput | null;
  textTask?: string | null;
  userPracticeResponses?: UserPracticeResponseUpdateManyWithoutPracticesInput;
};
