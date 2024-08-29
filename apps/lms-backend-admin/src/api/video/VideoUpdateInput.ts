import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";

export type VideoUpdateInput = {
  deletedAt?: Date | null;
  lesson?: LessonWhereUniqueInput | null;
  url?: string | null;
};
