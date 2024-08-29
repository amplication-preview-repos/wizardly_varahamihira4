import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";

export type VideoCreateInput = {
  deletedAt?: Date | null;
  lesson?: LessonWhereUniqueInput | null;
  url?: string | null;
};
