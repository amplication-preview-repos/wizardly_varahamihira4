import { Lesson } from "../lesson/Lesson";
import { UserPracticeResponse } from "../userPracticeResponse/UserPracticeResponse";

export type Practice = {
  createdAt: Date;
  deletedAt: Date | null;
  id: string;
  lesson?: Lesson | null;
  textTask: string | null;
  updatedAt: Date;
  userPracticeResponses?: Array<UserPracticeResponse>;
};
