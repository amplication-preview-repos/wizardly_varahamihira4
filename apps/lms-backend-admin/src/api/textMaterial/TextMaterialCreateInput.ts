import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";

export type TextMaterialCreateInput = {
  content?: string | null;
  deletedAt?: Date | null;
  lesson?: LessonWhereUniqueInput | null;
};
