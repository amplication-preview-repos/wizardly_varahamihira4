import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";

export type VideoCreateInput = {
  lesson?: LessonWhereUniqueInput | null;
  url?: string | null;
};
