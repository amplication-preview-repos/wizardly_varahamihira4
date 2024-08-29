import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";

export type VideoUpdateInput = {
  lesson?: LessonWhereUniqueInput | null;
  url?: string | null;
};
